import React from 'react'
import './Login.css'
import Logo from '././Logo/facebook-f-logo-white-background-21.jpg'
import { Button } from '@material-ui/core'
import actionTypes from './Reducer'
import {useStateValue} from "./StateProvider"
import {auth , provider} from './firebase'

const Login = (props) => {

    const [state,dispatch] =useStateValue();

    const SignIn=()=>{

        auth.signInWithPopup(provider).then((result)=>
        {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })

        })
        .catch((error)=>alert(error.message))

    }

    return (
        <div className="Login">
            <div className="Login_logo">
            <img src={Logo} alt="Facebook-Clone-Logo"/>    
            </div>
            <Button type="Submit" onClick={SignIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
