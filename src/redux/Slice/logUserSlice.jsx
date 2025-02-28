import { createSlice } from '@reduxjs/toolkit'


export const logUserSlice =  createSlice({
    name:'loguser',
    initialState:{
        users:[], 
        currentUser:null
    },
    reducers: {
        addUser: (state, action) => {
            console.log('Adding user:', action.payload);
            state.users.push(action.payload); 
             state.currentUser = action.payload; 
        },
        setCurrentUser: (state, action) => {
            console.log("current user-",state,action)
            state.currentUser = action.payload; 
        },
        logoutUser: (state) => {
            console.log("logout user--")
            state.currentUser = null; 
        }
    }
})

export const {addUser,setCurrentUser,logoutUser} =logUserSlice.actions 
export default logUserSlice.reducer;