import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GoHeart,GoHeartFill } from "react-icons/go";
import { add ,remove} from '../redux/Slice/CartSlice';
import { NavLink } from 'react-router-dom';
import usefetchCartData from '../usefetchCartData';

const Bestsellerscard = ({post}) => {
    const cart =useSelector((state)=>state.cart)
    const wishlist = useSelector((state)=>state.wishlist)
     const currentUser = useSelector((state) => state.loguser.currentUser)
     const {addToCart,removeFromCart,addToList,removeFromList} = usefetchCartData()
    const dispatch = useDispatch()

const handleAdd = (e) =>{
  e.preventDefault()
      console.log("before calling add")
        dispatch(add(post))
        console.log("after calling add")
        addToCart(currentUser.id,post)
        
        console.log("after addto cart method",currentUser.id,post)
    }
    const handleremoveFromCart = ()=>{
      dispatch(remove(post.id))
      removeFromCart(currentUser.id,post.id)
      
    }
     const addlike = (e)=>{
      e.preventDefault()
          console.log("addlike")
          dispatch(addToList(item))
          console.log("before addlist")
          fetchaddTolist(currentUser.id,post)
          console.log("after fetch list",currentUser.id,post)
        }
        const removelike = (e) =>{
          e.preventDefault()
          dispatch(removeFromList(item.id))
          console.log("before removelist")
          fetchremoveFromlist(currentUser.id,post.id)
          console.log("after removelist")
        }

  return (
    <NavLink to={`/home/product/${post.id}`} >
<div className='relative ml-5 w-60 h-90 flex flex-col items-center m-5 bg-gray-50 shadow-md'>
    <img src={post.image}  className='h-50 w-60 z-0'/>
     
    {
              wishlist?.some((p) => p.id == post.id)?
              (<button className='absolute top-2 right-2 cursor-pointer' onClick={removelike}><GoHeartFill className='h-5 w-5 mr-3 text-red-600'/></button>):
              (<button className='absolute top-2 right-2 cursor-pointer' onClick={addlike} ><GoHeart className='h-5 w-5 mr-3 '/></button>)
            }
    <h1  className='text-md'>{post.title}</h1>
    <h2 className='text-md text-gray-500 italic p-2'>{post.description.split(" ").slice(0,5).join(" ") + "..."}</h2>
    <p  className='text-xl font-semibold'>Rs.{post.price}</p>
    {
          cart?.some((p) => p.id == post.id) ?
          (<button className='h-8 w-35 bg-gray-400 text-gray-50 rounded-md cursor-pointer' onClick={handleremoveFromCart}>Remove Items</button>)
          :(<button className='h-8 w-25 bg-gray-400 text-gray-50 rounded-md cursor-pointer' onClick={handleAdd}>Add to cart</button>)
        }
</div>
</NavLink>
  )
}

export default Bestsellerscard