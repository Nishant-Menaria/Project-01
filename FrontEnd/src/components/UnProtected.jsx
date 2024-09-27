import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const UnProtected = () => {
  const { isLogedin}=useSelector((state)=>state.auth)
  const navigate=useNavigate();

  useEffect(()=>{
    if(isLogedin){
      return navigate('/')
    }
  },[isLogedin]);
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default UnProtected
