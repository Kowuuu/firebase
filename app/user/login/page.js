'use client'
import {useState} from "react";

export default function Login(){
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);

    const loginUser= async (e)=>{
        e.preventDefault()
        if(username===null ||password===null){
            alert("Niste uneli username ili password");
            return;
        }
        const response = await fetch('/api/auth_user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:username,
                password:password,
            })
        });
        if(response.status!==200){
            alert("Nesto nije u redu pokusajte ponovo")
        }

        const data = await response.json();
        localStorage.setItem("token",data.token);
    }
    return <>
    <form>
        <input onChange={(e)=>setUsername(e.currentTarget.value)}type="text" placeholder="Unesite vas username"/>
        <input onChange={(e)=>setPassword(e.currentTarget.value)} type="password" placeholder="Unesite vasu lozinku"/>
        <button onClick={loginUser}>Login</button>
    </form>
    </>
}