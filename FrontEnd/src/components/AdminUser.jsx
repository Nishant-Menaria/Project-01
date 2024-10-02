import React, { useEffect} from 'react'
import  {useDispatch,useSelector} from "react-redux"
import { getAllUsers } from '../Redux/slices/authSlice';
import  DataGrid  from './DataGrid';

const AdminUser = () => {
  const dispatch =useDispatch();
  const {allUsers}= useSelector(state=>state.auth);

  useEffect(()=>{
    dispatch(getAllUsers());
  },[]);

  return (
    <div>
      AdminUser
      <DataGrid allUsers={allUsers} />
    </div>
  )
}

export default AdminUser