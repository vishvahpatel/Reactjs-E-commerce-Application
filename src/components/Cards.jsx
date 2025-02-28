import React, { useEffect } from 'react'
import Spinner from './Spinner'
import Card from './card'
import { useParams } from 'react-router-dom'
import usefetchCartData from '../usefetchCartData'



const Cards = () => {
        const {posts,loading,fetchCartData}= usefetchCartData();
        const { id } = useParams();
        
useEffect(()=>{
    fetchCartData()
},[])
  return (
    <div  className='mt-10'>
        {
            loading ? <Spinner/> : 
            posts.length > 0 ? 
            (<div className='grid grid-cols-4 gap-4 ml-10 mb-5'>
                {
               posts.filter((post) => post.category === id).map((post) => (
                     <Card key = {post.id} post={post} />
                    ))
                    }
            </div>):
            (<div className='flex justify-center items-center h-screen w-screen'>
                No Data Found
            </div>)
        }
    </div>
  )
}

export default Cards