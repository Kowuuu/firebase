'use client'

import {useState} from "react";

export default function Register() {
    const [title, setTitle]=useState('')
    const [number, setNumber]=useState('');
    const [description, setDescription]=useState('')

    const createProduct=()=>{
        fetch('/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                title:title,
                price:price,
                description:description,
            })
        })
    }

    return (
        <>
            <form >
                <input onChange={e=>setTitle(e.currentTarget.value)}type="text" placeholder="Ime proizvoda"/>
                <input onChange={e=>setPrice(e.currentTarget.value)}type="number" placeholder="Cena proizvoda"/>
                <input onChange={e=>setDescription(e.currentTarget.value)}type="text" placeholder="Opis proizvoda"/>
                <button onClick={createProduct} type="button">Dodaj proizvod</button>
            </form>
        </>
    )
}