import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Protected = ({allowedRole}) => {
    const {isLogedin,role}=useSelector((state)=>state.auth)

    const userRoles=Array.isArray(allowedRole)?allowedRole:[];
    const navigate=useNavigate();
    useEffect(()=>{
        if(!userRoles.includes(role) || !isLogedin){
            return navigate('/');
        }
    },[isLogedin]);
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Protected
