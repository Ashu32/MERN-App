import {createSlice} from "@reduxjs/toolkit";

let cartCountSlice = createSlice({
    name:'cartCount',
    initialState:{
        value:0,
        cartlist:[]
    },
    reducers:{
        incrementCounter:(state)=>{state.value++},
        setCartList:(state,action)=>{state.cartlist.push(action.payload)}
    }
})

export let {incrementCounter,setCartList}= cartCountSlice.actions
export default cartCountSlice.reducer