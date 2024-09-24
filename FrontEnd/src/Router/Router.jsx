import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Singup from '../components/Singup'
import Login from "../components/Login"
import Counter from '../components/Counter'

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Counter/>
    },
    {
        path:"/signup",
        element:<Singup/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"*",
        element: <Navigate to={Singup}/>
    }
])

export default Router
