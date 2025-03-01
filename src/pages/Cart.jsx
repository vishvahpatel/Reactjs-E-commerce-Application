import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItems from '../components/CartItems'
import { Link } from 'react-router-dom'
import { setCart } from '../redux/Slice/CartSlice'


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.loguser.currentUser);

  const [totalAmount,setTotalAmount] = useState(0)
  const [totalItems,setTotalItems]= useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + (Number(curr.price) || 0) * (Number(curr.quantity) || 1), 0));
    setTotalItems(cart.reduce((acc, curr) => acc + (Number(curr.quantity) || 1), 0));
  }, [cart]);

  useEffect(() => {
    if (!currentUser) {
      dispatch(setCart([])); 
    }
  }, [currentUser, dispatch]);

  console.log("totalItems", totalItems)
  
  return (
    <div className='flex flex-col  h-screen w-screen mt-15'>
    
        {
            cart?.length > 0 ?
            (<div className='flex mt-5 w-screen  ml-5'>
                <div className='w-1/2'>
                  {
                    cart.map((post) => {
                      return <CartItems key={post.id} post={post} />
                    })
                  }
                </div>
                <div className='w-1/2  grid  grid-cols-1 content-between justify-center '>
                  <div className='flex flex-col justify-center items-center' >
                    <div className='text-4xl text-violet-600 font-serif'>Your Cart</div>
                    <div className='text-2xl font-semibold mt-6'>Summary</div>
                    <p><span>Total Items: {totalItems}</span></p>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <p className='text-lg mt-4'>Total Amount: <span className='text-violet-600 font-semibold'>Rs.{totalAmount}</span></p>
                    <button className='bg-violet-600 text-white h-10 w-32 rounded-sm mb-10 cursor-pointer'>
                      CheckOut Now
                    </button>
                 </div>
                </div>
              </div>
            ):
            (
                <div className=' flex h-screen flex-col justify-center items-center'>
                  <h1 className='text-xl font-semibold mb-2 text-violet-800'>Cart Empty</h1>
                  <Link to='/home'>
                      <button className='h-10 w-25 bg-green-600 text-white rounded-xs cursor-pointer'>Shop Now</button>
                  </Link>
                </div>
            )
        }
    </div>
  )
}

export default Cart



