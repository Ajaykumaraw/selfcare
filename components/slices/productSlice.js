import { createSlice } from "@reduxjs/toolkit"
import { product } from "../../sampleData/sampleData";


const productSlice = createSlice({
  name: "product",
  initialState: {
    productState : [...product]
  },
  reducers: {
    AllProduct:(state,action)=>{
        console.log(action.payload)
        state.productState = [...product]
    },
    filterProduct:(state,action)=>{
        state.productState = [...product]
        console.log(action.payload)
      state.productState = state.productState.filter((item)=> item.category == action.payload)
    },
  }
})

export const {filterProduct,AllProduct} = productSlice.actions
export default productSlice.reducer