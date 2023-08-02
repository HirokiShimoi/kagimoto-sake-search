import React, { ReactNode, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import './Logintop.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Login() {
    const { user,setUser } = useContext(AuthContext);
    const { setIsLoggedIn,setUsername} = useContext(UserContext);
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    useEffect(() => {
        console.log(user); // userの値が変更されるたびにログに出力する
    }, [user]);

    const onSubmit = (data: any) => {
        axios.post('http://localhost:5000/sake/login', data)
        .then(response => {
            if(setUser) {
                setUser(response.data);
                console.log(user)
                setIsLoggedIn(true);
                localStorage.setItem('token', response.data.token); 
                navigate("/toppage");                
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
        <div className='form-body'>
            <div className='form-container'>
                <h1>酒やの鍵本スタッフ専用</h1>
                <h1>LOGIN FORM</h1>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <label htmlFor='name'>名前</label>
                    <input id='name' type='text' {...register("username", { required: "名前は必ず入れてください"})} />

                    <label htmlFor='password'>パスワード</label>
                    <input id='password' type='password' {...register("password", { required: "パスワードは必ず入れてください"})}  />
                    <button type='submit'>送信する</button>                    
                </form>
                <button type='submit' onClick={() => navigate("/toppage")}>アカウントがない方はこちら</button>
            </div>
        </div>
        </div>
    )
}

export default Login