import {  createContext } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const UserTypeContext=createContext();

export const TypeContext=(children)=>{
    const selector=useSelector(store=>store.user);
    console.log(selector);
    const [user,setUser]= useState('user');
    if(selector?.user?.farmer||selector.farmer){
        setUser('farmer');
    }
    else{
        setUser('buyer');
    }

    return (
        <div>
        <UserTypeContext.Provider value={user}>
            {children}
        </UserTypeContext.Provider>

        </div>
    )
}