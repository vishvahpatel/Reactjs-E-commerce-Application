import React from 'react'
import usefetchCartData from '../usefetchCartData'
import Bestsellerscard from './Bestsellerscard'
import { useEffect } from 'react'

const BestSellers = () => {
  const {bestsellerspost,fetchBestsellers} = usefetchCartData();
   useEffect(()=>{
      fetchBestsellers()
    },[])
  return (
    <div >
    <h1 className='text-xl font-semibold mt-2 text-blue-600 italic'>BestSellers</h1>

        <div className=' flex justify-around  shadow- '>
          {
            bestsellerspost.map((post) => (
              <Bestsellerscard key = {post.id} post={post} />
                     
                    ))
          }
        </div>
    
    </div>
  )
}

export default BestSellers