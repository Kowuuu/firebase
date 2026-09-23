'use client'

import {auth} from "@/app/firebase";
import{createUserWithEmailAndPassword}from 'firebase/auth'
import {useContext, useState} from "react";
import {useAuth} from "../../context/authContext";


export default function Register(){
    const{user, loggedIn} = useAuth();
    if(loggedIn){
        window.location.href="/";
        return;
    }

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const register=async(e)=>{
        e.preventDefault()
        const res=await createUserWithEmailAndPassword(auth,'vanja.popovic97@gmail.com','fwef23d3f2')
    }

    return<>
        <form>
            <input onChange={e=>setEmail(e.currentTarget.value)} type="text" placeholder="Unesite vas email"/>
            <input onChange={e=>setPassword(e.currentTarget.value)} type="password" placeholder="Unesite vasu lozinku"/>
        <button onClick={e=>register(e)}>Register</button>
        </form>
    </>
}