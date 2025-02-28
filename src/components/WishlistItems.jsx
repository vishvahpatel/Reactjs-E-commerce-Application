import React from 'react'
import Card from './card'

const WishlistItems = ({post}) => {
  return (
    <div>
        <Card key = {post.id} post={post}/>
    </div>
    
  )
}

export default WishlistItems