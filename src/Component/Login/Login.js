import React from 'react'
import Component from '../../asset/logo/android-chrome-512x512.png'
import './Login.css'
import { signInWithPopup } from "firebase/auth";
import {auth ,provider } from '../../firebase';
// import { useStateValue } from '../Context/ContextApi';
// import { action_type } from '../Context/Reducer'



export default function Login() {
  // const [state, dispatch] = useStateValue();

   const signIn = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
          // dispatch({
          //   type: action_type.SET_USER,
          //   user: result.user
          console.log(result.user)
          alert(result.user.displayName)
        })
           
      .catch((error) => alert(error.message))
  };
    return (
    <div className='login'>
      <div className="login__logo">
        <img src={Component} alt="" />
        <div className="login__titleName">
        <h1 className='login__titleName--text'>Facebook {}</h1>
      </div>
      </div>
      <div className="login__button">
        <button className='login__button--login' onClick={signIn}>Login</button>
      </div>
    </div>
  )
}
