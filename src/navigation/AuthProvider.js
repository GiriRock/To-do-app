import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth"


export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) =>{
                    try{
                        await auth().signInWithEmailAndPassword(email,password)
                    }catch(error){
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    }
                }
            ,
            logout : async() =>{
                    try{
                        await auth().signOut()
                    }catch(e){
                        console.log(e)
                    }
            }}}>
                {children}
            </AuthContext.Provider>
    )
}