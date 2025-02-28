import { createSlice } from '@reduxjs/toolkit'


export const CartSlice =  createSlice({
    name:'cart',
    initialState:[{
        
    }],
    reducers:{
        setCart: (state, action) => {
            return action.payload;
        },
        
       add:(state,action)=>{
        state.push(action.payload)
       },
    
       remove:(state,action)=>{
            return state.filter((post) => post.id !== action.payload)
       },
       updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.find((item) => item.id === id);
        if (item) {
            item.quantity = quantity;
        }
    }
    
    }
})

export const {add,remove,setCart,updateQuantity} =CartSlice.actions 
export default CartSlice.reducer;

