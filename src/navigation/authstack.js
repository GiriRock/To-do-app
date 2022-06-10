import React from "react";
import Login from "../user/login";
import { GoogleSignin } from "@react-native-google-signin/google-signin";   

const AuthStack = ()=>{
    
    GoogleSignin.configure({
    webClientId: '505638088251-7jt99b2sico9usu6g45a011mggroliog.apps.googleusercontent.com',
    });
    return( 
        <Login/>
    )
}

export default AuthStack