import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from './Model'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/slices/productSlice'
const AdminProduct = () => {

  const[isUpdate ,setIsUpdate]=useState(false);

  const {products ,isProductAdded}=useSelector(state=>state.product);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts())
  },[isProductAdded]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          Admin Products
        </div>
        <div>
          <div className='border-black border-2  m-2 rounded-md hover:bg-slate-100'><Modal /></div>
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {
          products.map((product,index)=>{
            return (
              <Card product={product} isUpdate={isUpdate}  setIsUpdate={setIsUpdate} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AdminProduct