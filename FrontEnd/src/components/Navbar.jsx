import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import { logOut } from '../Redux/slices/authSlice';
import { FaCartPlus  ,FaUser ,FaUsers ,FaProductHunt ,FaJediOrder } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import Badge from '@mui/material/Badge';

const Navbar = () => {
    const { isLogedin, role } = useSelector((state) => state.auth);
    const { cartItem }=useSelector((state)=>state.cart);
    const dispatch = useDispatch()

    const handelLogOut=()=>{
        dispatch(logOut());
    }

    const navigate=useNavigate();

    useEffect(()=>{
        if(!isLogedin){
            navigate('/');
        }
    },[isLogedin]);



    return (
        <div className='flex justify-between items-center bg-sky-950 p-2 py-4 w-full'>
            <div className='text-white text-2xl font-medium'>
                Logo
            </div>
            <div>
                <input type="text" placeholder='Search...' className='p-2 py-1 border border-gray-100 bg-transparent text-white outline-none' />
            </div>
            {
                isLogedin
                    ?
                    (
                        role =="User"
                            ?
                            (
                                <div className='flex gap-5 text-white'>
                                    <Badge badgeContent={cartItem.length} color="primary">
                                    <Link to="/cart">
                                        <FaCartPlus />
                                        Cart
                                    </Link>
                                    </Badge>
                                    <Link to="/myorder">My-Orders</Link>
                                    <Link to="/profile">
                                        <FaUser />
                                        Profile
                                    </Link>
                                    <button onClick={handelLogOut}><IoIosLogOut /></button>
                                </div>
                            )
                            :
                            (
                                <div className='flex gap-5 text-white'>
                                    <Link to="/dashboard">
                                        <MdDashboard />
                                        Dashboard
                                    </Link>
                                    <Link to="/adminUser">
                                        <FaUsers />
                                        Users
                                    </Link>
                                    <Badge badgeContent={cartItem.length} color="primary">
                                    <Link to="/cart">
                                        <FaCartPlus />
                                        Cart
                                    </Link>
                                    </Badge>
                                    <Link to="/adminProduct">
                                        <FaProductHunt />
                                        Products
                                    </Link>
                                    <Link to="/adminOrder">
                                        <FaJediOrder />
                                        Orders
                                    </Link>
                                    <Link to="/profile">
                                        <FaUser />
                                        Profile
                                    </Link>
                                    <button onClick={handelLogOut}><IoIosLogOut /></button>
                                </div>
                            )
                    )
                    :
                    (
                        <div className='flex gap-5 text-white'>
                            {/* <Link to="/cart">Dashboard</Link>
                <Link to="/cart">Users</Link>
                <Link to="/cart">Product</Link> */}
                            <Badge badgeContent={cartItem.length} color="primary">
                                    <Link to="/cart">
                                        <FaCartPlus />
                                        Cart
                                    </Link>
                                    </Badge>
                            <Link to="/login">
                                <IoLogIn />
                                Login
                            </Link>
                            <Link to="/signup">
                                <SiGnuprivacyguard />
                                Signup
                            </Link>
                        </div>
                    )
            }

        </div>
    )
}

export default Navbar