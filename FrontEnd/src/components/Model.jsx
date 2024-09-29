import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import {useDispatch ,useSelector} from 'react-redux'
import { addProduct,updateProduct,updateProductWithImage } from '../Redux/slices/productSlice';
import { useForm } from 'react-hook-form';

export default function BasicModal({isUpdate,product}) {
  const [open, setOpen] = React.useState(false);
  const [isImageUpdate ,setIsImageUpdate] =React.useState(false);
  const {register ,handleSubmit ,reset} = useForm();
  const dispatch = useDispatch();

  const { isProductAdded, isLoading } = useSelector((state) => state.product);

  const handelProduct=(data)=>{
    if(isUpdate){
      if(isImageUpdate){
        const formData =new FormData();
 
        formData.append("name",data.name);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("description",data.description);
        formData.append("productImage",data.productImage[0]);

        dispatch(updateProductWithImage({data:formData,id:product._id}));

      }else{
        dispatch(updateProduct(data));
      }

    }else{
      const formData =new FormData();
 
      formData.append("name",data.name);
      formData.append("price",data.price);
      formData.append("category",data.category);
      formData.append("description",data.description);
      formData.append("productImage",data.productImage[0]);

      dispatch(addProduct(formData));
    }
  }

  React.useEffect(()=>{
    if(isUpdate){
      reset(product)
    }
  },[product]);

  React.useEffect(() => {
    if (isProductAdded && !isLoading) {
      setOpen(false); 
    }
  }, [isProductAdded, isLoading]);


  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
            <div>
                <div className='flex justify-between mb-5'>
                    <div><h1 className='font-bold text-2xl'>{isUpdate ? "Update Product" : "Add Product"}</h1></div>
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                </div>
                <div>
                    <form onSubmit={handleSubmit(handelProduct)} >
                        <div className='grid grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="name">Product Name</label>
                                <input type="text" name='name'  className= ' border-black border-2 p-2' {...register('name')}/>
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <input type="text" name='price'  className= ' border-black border-2 p-2' {...register("price")}/>
                            </div>
                            <div>
                                <label htmlFor="description">Product Description</label>
                                <input type="text" name='description'  className= ' border-black border-2 p-2' {...register("description")}/>
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <input type="text" name='category'  className= ' border-black border-2 p-2' {...register("category")}/>
                            </div>
                            <div>
                              {!isUpdate ? (
                                <input type="file" name="productImage" className="border-black border-2 p-1" {...register("productImage")} />
                              ) : (
                                !isImageUpdate ? ( 
                                  <div>
                                    <img src={`http://localhost:3000/${product.productURL}`} alt="Product" className='h-20' />
                                    <div className='border-black border-2 mt-2 p-2 cursor-pointer w-fit' onClick={() => setIsImageUpdate(true)}>Edit Image</div>
                                  </div>
                                ) : (
                                  <div className='flex w-full justify-between gap-2'>
                                    <input type="file" name="productImage" className="border-black border-2 p-1" {...register("productImage")} />
                                    <span className='border-black border-2 p-2 mt-2 h-full cursor-pointer' onClick={() => setIsImageUpdate(false)}>X</span>
                                  </div>
                                )
                              )}
                            </div>
                        </div>
                        <button className='border-black border-2 p-2 mt-4 '>{isUpdate ? "Update Product" : "Add Product"}</button>
                    </form>
                </div>
            </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
