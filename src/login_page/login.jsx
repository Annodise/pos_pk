import { useState , useEffect } from "react";
import './login.css'


function Login (){

    useEffect(()=>{
        console.log(`login useEffect is working`)
    },[])


    return(
        <>
            <h1>Welcome</h1>
        </>
    )
    
}


export default Login;

