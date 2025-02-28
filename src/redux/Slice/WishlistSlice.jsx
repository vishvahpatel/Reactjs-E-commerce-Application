import { createSlice } from '@reduxjs/toolkit'


export const WishlistSlice =  createSlice({
    name:'wishlist',
    initialState:{
        listItems:[],
    },
    reducers:{
        setlist:(state,action)=>{
            return action.payload
        },
       addToList:(state,action)=>{
        state.push(action.payload)
       },
       removeFromList:(state,action)=>{
            return state.filter((post) => post.id !== action.payload)
       },
    }
}) 

export const {addToList,removeFromList,setlist} =WishlistSlice.actions 
export default WishlistSlice.reducer;