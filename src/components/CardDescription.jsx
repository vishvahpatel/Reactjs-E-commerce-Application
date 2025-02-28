import  { useEffect } from 'react'
import usefetchCartData from '../usefetchCartData';
import { useParams } from 'react-router-dom';
import { GoHeart,GoHeartFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/Slice/CartSlice';
import { addToList,removeFromList } from '../redux/Slice/WishlistSlice';
import { Carousel } from "@material-tailwind/react";
import { IoIosStar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';


const CardDescription = () => {
    const {addToCart,removeFromCart,fetchaddTolist,fetchremoveFromlist,bestsellerSinglePost,singlePost,fetchSingleCardDesc,fetchsinglebestsellercard}= usefetchCartData();
    const cart =useSelector((state)=>state.cart)
    const wishlist = useSelector((state)=>state.wishlist)
    const currentUser = useSelector((state) => state.loguser.currentUser)
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            fetchSingleCardDesc(id); 
            
        }
    }, [id]);
    useEffect(()=>{
      if(id){
        fetchsinglebestsellercard(id);
      }
    },[id])


    const handleAdd = () =>{
          console.log("before calling add")
            dispatch(add(singlePost))
            dispatch(add(bestsellerSinglePost))
            console.log("after calling add")
            addToCart(currentUser.id,singlePost)
            addToCart(currentUser.id),bestsellerSinglePost
            
            console.log("after addto cart method",currentUser.id,singlePost)
        }
        const handleremoveFromCart = ()=>{
          dispatch(remove(singlePost.id))
          dispatch(remove(bestsellerSinglePost.id))
          removeFromCart(currentUser.id,singlePost.id)
          removeFromCart(currentUser.id,bestsellerSinglePost.id)
          
        }
        const addlike = ()=>{
          console.log("addlike")
          dispatch(addToList(singlePost))
          dispatch(addToList(bestsellerSinglePost))
          console.log("before addlist")
          fetchaddTolist(currentUser.id,singlePost)
          fetchaddTolist(currentUser.id,bestsellerSinglePost)
          console.log("after fetch list",currentUser.id,singlePost)
        }
        const removelike = () =>{
          dispatch(removeFromList(singlePost.id))
          dispatch(removeFromList(bestsellerSinglePost,id))
          console.log("before removelist")
          fetchremoveFromlist(currentUser.id,singlePost.id)
          fetchremoveFromlist(currentUser.id,bestsellerSinglePost.id)
          console.log("after removelist")
        }
    
        
   
  return (
    
    <div className=' mt-20 ml-5 flex  '>
    
        <div className='relative w-2/5'>

<div className='h-[27rem] w-[28rem]'>
        {singlePost?.image && (
          <Carousel
            className="rounded-xl shadow-2xl"
            autoplay
            autoplayDelay={3000} 
            loop
            transition={{ duration: 0.5 }} 
          >
            {Object.values(singlePost.image ).map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                className="h-[27rem] w-[28rem] rounded-sm"
                alt={`Product ${index}`}
              />
            ))}
          </Carousel>
        )}
        </div> 

           {
                wishlist?.some((p) => p.id == singlePost.id)?
                (<button className='absolute top-2 right-[9%] cursor-pointer' onClick={removelike}><GoHeartFill className='h-6 w-6 mr-3 text-red-600'/></button>):
                (<button className='absolute top-2 right-[9%] cursor-pointer' onClick={addlike} ><GoHeart className='h-6 w-6 mr-3 '/></button>)
            }
        </div>
        <div className='3/5 ml-10'>
            <h1 className='text-4xl font-semibold '>{singlePost.title}</h1>
            <div className='text-2xl font-semibold mt-2  flex place-items-center'>
            <p className='text-gray-400'>MRP</p><MdCurrencyRupee />{singlePost.price}</div>
            <div className='flex border-1 border-gray-300 w-40 place-items-center justify-center'>
                <p className='font-semibold'>{singlePost?.rating?.rate} </p> 
                <p className='border-r-2 border-gray-300 mr-3 pr-2'> <IoIosStar   className='text-green-600 '/></p>
                <p>{singlePost?.rating?.count} reviews </p>
         </div>  
            <p className='text-3xl text-gray-300 font-serif mt-2 italic '>{singlePost.description}</p>
            <h1 className='text-lg font-semibold'>Specification</h1>
            {singlePost?.about?.map((text, index) => (
            <p key={index} className="text-md text-gray-700 my-2 flex place-items-center">
                <GoDotFill />{text}
            </p>))}
          
            {
          cart?.some((p) => p.id == singlePost.id)?
          (<button className='h-10 w-50 bg-gray-400 hover:bg-gray-300 text-gray-50 rounded-md cursor-pointer' onClick={handleremoveFromCart}>Remove Items</button>)
          :(<button className='h-10 w-50 bg-gray-400 hover:bg-gray-300 text-gray-50 rounded-md cursor-pointer shadow-xl' onClick={handleAdd}>Add to cart</button>)
        }
        <NavLink to='/cart'>
            <button className='h-10 w-50 ml-5 bg-violet-400 hover:bg-violet-300 text-white rounded-md cursor-pointer'>View Cart</button>
        </NavLink>
            
        </div>
    </div>
    
  )
}

export default CardDescription