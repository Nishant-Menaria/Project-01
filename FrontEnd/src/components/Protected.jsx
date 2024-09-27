import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Protected = (allowedRole) => {
    const {isLogedin,role}=useSelector((state)=>state.auth)

    const navigate=useNavigate();
    useEffect(()=>{
        if(!isLogedin){
            return navigate('/');
        }
    },[isLogedin]);

    useEffect(()=>{
        if(!allowedRole.inculdes(role)){
            return navigate('/');
        }
    })
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Protected
