'use client'
import {useState} from "react";
import {useAuth} from "../../context/authContext";
import {auth} from "@/app/firebase"
import app from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

export default function Login(){

    const{loggedIn}=useAuth();

    if(loggedIn){
        window.location.href="/";
    }

    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);

    const loginUser= async (e)=>{
        e.preventDefault()

        if(email===null ||password===null){
            alert("Niste uneli username ili password");
            return;
        }

        signInWithEmailAndPassword(auth, email, password);
        // const response = await fetch('/api/auth_user',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username:username,
        //         password:password,
        //     })
        // });
        // if(response.status!==200){
        //     alert("Nesto nije u redu pokusajte ponovo")
        // }
        //
        // const data = await response.json();
        // localStorage.setItem("token",data.token);
    }
    return <>
    <form>
        <input onChange={(e)=>setEmail(e.currentTarget.value)} type="email" placeholder="Unesite vas email"/>
        <input onChange={(e)=>setPassword(e.currentTarget.value)} type="password" placeholder="Unesite vasu lozinku"/>
        <button onClick={loginUser}>Login</button>
    </form>
    </>
}