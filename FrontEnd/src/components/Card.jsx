import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio'; 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Model from './Model';

export default function BasicCard({product,isUpdate}) {
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
          <BookmarkAdd />
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
