import React, { ReactNode } from 'react';
import './Logintop.css';
import { useForm } from 'react-hook-form';

function Login() {

    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    const onSubmit = (data: any) => {
         console.log(data)
    };

    return (
        <div className='form-body'>
        <div className='form-container'>
            <h1>LOGIN FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <label htmlFor='名前'>名前</label>
                <input id='name' type='text' {...register("name", { required: "名前は必ず入れてください"})} />
                <p>{errors.name?.message as ReactNode}</p>


                <label htmlFor='メールアドレス'>メールアドレス</label>
                <input id='mail' type='mail' {...register("mail", { required: "メールアドレスは必ず入れてください"})}  />
                <p>{errors.mail?.message as ReactNode}</p>



                <label htmlFor='パスワード'>パスワード</label>
                <input id='password' type='password' {...register("password", { required: "パスワードは必ず入れてください"})}  />
                <p>{errors.password?.message as ReactNode}</p>

                <button type='submit'>送信する</button>
            </form>
        </div>
        </div>
    )
}

export default Login