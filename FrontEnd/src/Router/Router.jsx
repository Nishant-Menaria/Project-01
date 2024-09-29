import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Singup from '../components/Singup'
import Login from "../components/Login"
import Home from '../components/Home'
import UnProtected from '../components/UnProtected'
import Protected from '../components/Protected'
import Cart from '../components/Cart'
import Dashboard from "../components/Dashboard"
import Order from '../components/Order'
import MyOrder from '../components/MyOrder'
import Profile from '../components/Profile'
import OpenRoute from '../components/OpenRoute'
import GoogleAuth from '../components/GoogleAuth'
import MyOrders from '../components/MyOrder'
import AdminUser from '../components/AdminUser'
import AdminProduct from '../components/AdminProduct'
import AdminOrders from '../components/AdminOrders'

const Router = createBrowserRouter([
    {
        element:<OpenRoute/>,
        children:[
            {
                path : "/",
                element : <Home/>
            },
            {
                path:'/cart',
                element:<Cart/>    
            },
            {
                path:'/googleauth',
                element:<GoogleAuth/>
            }
        ]
    },
    {
        element:<UnProtected/>,
        children:[
            {
                path:"/signup",
                element:<Singup/>
            },
            {
                path:"/login",
                element: <Login/>
            }
        ]
    },
    {
        element:<Protected allowedRole={["Admin"]}/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/adminUser',
                element:<AdminUser/>
            },{
                path:"/adminProduct",
                element:<AdminProduct/>
            },{
                path:"adminOrder",
                element:<AdminOrders/>
            },{
                path:"profile",
                element:<Profile/>
            }
        ]
    },
    {
        element:<Protected allowedRole={["User"]}/>,
        children:[
            {
                path:'/order',
                element:<Order/>
            },{
                path :'/myorder',
                element :<MyOrders/>
            }
        ]
    },
    {
        element:<Protected allowedRole={["User","Admin"]}/>,
        children:[
           {
                path :'/profile',
                element :<Profile/>
            }
        ]
    }
])

export default Router
