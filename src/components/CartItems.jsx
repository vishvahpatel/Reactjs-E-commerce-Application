import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux'
import { remove,updateQuantity } from '../redux/Slice/CartSlice';
import usefetchCartData from '../usefetchCartData';
import { MdCurrencyRupee } from "react-icons/md";



const CartItems = ({post}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.loguser.currentUser)
  const {removeFromCart} = usefetchCartData()

 
  const handleremoveFromCart = ()=>{
    dispatch(remove(post.id))
    removeFromCart(currentUser.id,post.id)
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: post.id, quantity: newQuantity }));
    console.log("quantity",newQuantity)
  };
 

  return (
    <div className='flex justify-center h-50 w-150 mb-4 ml-4'>
      <div >
        <img src={post.image[0]} className='h-50 w-50'/>
      </div>
      <div className='mt-10 ml-5'>
        <h1 className='text-lg '>{post.title}</h1>
        <h2 className='text-md text-gray-500 italic'>{post.description}</h2>
           <div className='mt-2'>
          <label className='mr-2'>Qty:</label>
          <select 
            className='border' 
            value={post.quantity||1}   
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>

        </div>
        <div className='flex justify-between mt-5'>
          <p className='text-violet-600 text-lg flex place-items-center'><MdCurrencyRupee />{Number(post.price)*Number(post.quantity||1)}</p>
          <div >
              <MdDelete  className='cursor-pointer h-6 w-6 text-red-600' onClick={handleremoveFromCart}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

