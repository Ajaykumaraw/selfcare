import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    total: 0,
  },
  reducers: {
      addToCart:(state,action)=>{
          state.item.push(action.payload);
          state.total += action.payload.price; 
      },
      removeFromCart:(state,action)=>{
          state.total -= action.payload.price;   
        state.item =  state.item.filter((item) => item.title != action.payload.title)
      },
      setQuantity :(state,action)=>{

      }
  }
})
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer