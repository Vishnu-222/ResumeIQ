import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'
import Loader from "../../../components/Loader/loader"
import Navbar from "../../../components/Navbar/Navbar";

const Protected = ({children}) => {
    const { loading,user } = useAuth()

    if(loading){
        return <Loader />
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
     return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Protected