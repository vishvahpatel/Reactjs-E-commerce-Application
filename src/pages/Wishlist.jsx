import React from 'react'
import { useSelector } from 'react-redux'
import WishlistItems from '../components/WishlistItems'
import { Link } from 'react-router-dom'

const Wishlist = () => {

    const wishlist = useSelector((state)=>state.wishlist)
  return (
    <div className='grid grid-cols-4 gap-4 ml-10 mb-5 mt-10'>
        { wishlist.length > 0?
            (wishlist.map((post)=>{
                return <WishlistItems key={post.id} post={post} />
            })):
            (
                <div className='flex justify-center items-center h-screen w-screen flex-col'>
                    <h1 className='text-2xl text-violet-600 font-semibold mb-5'>Add Items In Wishlist</h1>
                    <Link to='/home'>
                      <button className='h-10 w-25 bg-green-600 text-white rounded-xs cursor-pointer'>Shop Now</button>
                  </Link>
                </div>

            )
        }
    </div>
  )
}

export default Wishlist