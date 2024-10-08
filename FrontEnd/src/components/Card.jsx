import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio'; 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Model from './Model';
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';

import {addToCart} from "../Redux/slices/cartSlice"

export default function BasicCard({product,isUpdate}) {
  const dispatch=useDispatch();

  const handelAddToCart=(data)=>{
    console.log(data);
    dispatch(addToCart(data))
  }
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{product.name}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <FaCartArrowDown/>
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={`http://localhost:3000/${product.productURL}`}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div className='flex w-full justify-between'>
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>Rs.{product.price}</Typography>
          </div>
          <div><Model isUpdate={!isUpdate} product={product} /></div>
        </div>
      </CardContent>
    </Card>
  );
}
