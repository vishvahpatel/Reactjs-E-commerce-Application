import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { add ,remove} from '../redux/Slice/CartSlice';
import { addToList, removeFromList } from '../redux/Slice/WishlistSlice';
import { GoHeart,GoHeartFill } from "react-icons/go";
import usefetchCartData from '../usefetchCartData';
import { NavLink} from 'react-router-dom';
import { IoIosStar } from "react-icons/io";



const Card = ({post}) => {
    const cart =useSelector((state)=>state.cart)
    const wishlist = useSelector((state)=>state.wishlist)
     const currentUser = useSelector((state) => state.loguser.currentUser)
    const dispatch = useDispatch()
   
    const {addToCart,removeFromCart,fetchaddTolist,fetchremoveFromlist} = usefetchCartData()
  

    const handleAdd = (e) =>{
      e.preventDefault() 
        dispatch(add(post))
        addToCart(currentUser.id,post)
    }
    const handleremoveFromCart = (e)=>{
      e.preventDefault() 
      dispatch(remove(post.id))
      removeFromCart(currentUser.id,post.id)
      
    }
    const addlike = (e)=>{
      e.preventDefault() 
      dispatch(addToList(post))
      fetchaddTolist(currentUser.id,post)
    }
    const removelike = (e) =>{
      e.preventDefault() 
      dispatch(removeFromList(post.id))
      fetchremoveFromlist(currentUser.id,post.id)
    }


  return (
    <NavLink to={`/home/product/${post.id}`} >
    <div className=' relative h-95 w-68 mt-10 rounded-lg bg-gray-50 flex flex-col items-center shadow-md  cursor-pointer'  >
    
        <img src={post.image[0]} className='h-60 w-68 z-0 rounded-t-lg '/>
        

        {
          wishlist?.some((p) => p.id == post.id)?
          (<button className='absolute top-2 right-2 cursor-pointer' onClick={removelike}><GoHeartFill className='h-5 w-5 mr-3 text-red-600'/></button>):
          (<button className='absolute top-2 right-2 cursor-pointer' onClick={addlike} ><GoHeart className='h-5 w-5 mr-3 '/></button>)
        }

        <h2 className='text-gray-600'>{post.title}</h2>
        <p className='text-sm'>{post.description.split(" ").slice(0,5).join(" ") + "..."}</p>
        <div className='flex   w-40 place-items-center justify-center'>
                        <p className='font-semibold'>{post?.rating?.rate} </p> 
                        <p className='border-r-2 border-gray-300 mr-3 pr-2'> <IoIosStar   className='text-green-600 '/></p>
                        <p>{post?.rating?.count} reviews </p>
                 </div>
        <p className='font-semibold text-lg'>Rs.{post.price}</p>
        <div>
        {
          cart?.some((p) => p.id == post.id)?
          (<button className='h-8 w-35 bg-violet-400  text-white rounded-md cursor-pointer' onClick={handleremoveFromCart}>Remove Items</button>)
          :(<button className='h-8 w-25 bg-violet-600  text-white rounded-md cursor-pointer' onClick={handleAdd}>Add to cart</button>)
        }
        </div>
    </div>
    </NavLink>
  )
}

export default Card