'use client';

import React, {useEffect, useState} from "react";

const SearchBar = () => {
    //ukucamo nesto, ukljucimo tajmer, ako ukucamo umedjuvremenu300ms gasimo prethodni tajmes i palimo novi
    //ako tajmer istekne on poziva API

    const[searchTerm, setSearchTerm] = useState('');
    const[timer, setTimer] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const search = async (searchTerm) => {
        //kada ukucamo nesto 300ms search() poziva API
        //ako ukucamo nesto u roku od 300ms onda gasimo prethodni tajmer
        //i palimo novi od 300ms koji poziva api
        const response =await fetch("https://localhost:3000/api/search?pretraga="+searchTerm)
        const data=await response.json();
        setSearchResults(data.products);
    }
    useEffect(() => {
        if(timer){
            clearTimeout(timer)
        }
        const newTimer=setTimeout(()=>{},300);
        setTimer(newTimer);
        return()=>clearInterval(newTimer);
    },[searchTerm]);

    return <>
        <form>
            <input
                type="text"
                placeholder="Unesite pretragu"
                onChange={e => setSearchTerm(e.currentTarget.value)}
            />
        </form>
        <>
            {searchResults && searchResults.map(product => (  //ako rezultati postoje onda ih ispisuje
            <p key={product.id}>{product.title}</p>
            ))}
        </>
    </>
}
export default SearchBar;