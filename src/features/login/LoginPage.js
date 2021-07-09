import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from './useForm'
import {  updateUserInfo } from './loginSlice'
import TextField from './TextField'
import './LoginPage.css'
import validateLogin from './validateLogin'


const LoginPage = () => {
    const dispatch = useDispatch()
    const login = () => {
        
        dispatch(updateUserInfo(formData))
        console.log(formData)
    }

    const { formData, errors, handleInputChange, handleSubmit } = useForm({username : '', email: '', password: ''}, login, validateLogin)

    const  { username, email, password } = formData



    return ( 
        <div className="sign-in-bg">
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                    <TextField 
                        value={username} 
                        required
                        name='username'
                        onChange={handleInputChange}
                        error={errors.name}
                        placeholder={'please enter a user name'}
                    />
                    <TextField 
                        value={email} 
                        required
                        name='email'
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder={'please enter an email'}
                    />
                    <TextField 
                        value={password} 
                        required
                        name='password'
                        onChange={handleInputChange}
                        error={errors.password}
                        placeholder={'please enter a password'}
                    />
                    <button type="submit" className="submit-button">Submit</button>
                    </form>
            </div>
        </div>
     );


}
export default LoginPage

