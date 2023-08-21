import React, { ReactNode, useContext, useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import '../css/Logintop.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { LinearProgress } from '@mui/material';


function Login() {
    const { user,setUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading,setLoading] = useState(false);
    const { setIsLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    console.log("API ENDPOINT:", process.env.REACT_APP_API_ENDPOINT);


    const onSubmit = (data: any) => {
        setLoading(true);
        axios.post(`${apiUrl}/sake/login`, data)
        .then(response => {
            if(setUser) {
                setUser(response.data);
                setIsLoggedIn(true);
                localStorage.setItem('token', response.data.token); 
                navigate("/toppage");                
            }
            setLoading(false);
        })
        .catch(error => {
            if(error.response) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage(error.message);
            }
            setLoading(false);
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
                        {errors.username && errors.username.message && <p>{errors.username.message as string}</p>}                    
                        <label htmlFor='password'>パスワード</label>
                        <input id='password' type='password' {...register("password", { required: "パスワードは必ず入れてください"})}  />
                        {errors.password && errors.password.message && <p>{errors.password.message as string}</p>}
                        <button type='submit'>送信する</button>                    
                    </form>
                    {errorMessage && <p>{errorMessage}</p>}
                    {loading ? <LinearProgress style={{marginTop: '20px', marginBottom: '20px'}} /> : null}
                    <button type='button' onClick={() => navigate("/toppage")}>アカウントがない方はこちら</button>
                </div>
            </div>
        </div>
    )
}

export default Login