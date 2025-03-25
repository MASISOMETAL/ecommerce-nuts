import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../index"

interface CartSlice {
  items: ProductCart[]
}

interface ProductCart {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  slug: string
}

const initialState: CartSlice = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductCart>) => {

      const productRepeat = state.items.some(item => item.id === action.payload.id)

      if (productRepeat) return
      
      state.items.push(action.payload)
      
    },
    updateQuantity: (state, action: PayloadAction<{id: number, newQuantity: number}>) => {
      const {id, newQuantity} = action.payload

      const item = state.items.find(item => item.id === id)
      
      item.quantity = newQuantity
      
    },
    removeItem: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      
      state.items = state.items.filter(item=> item.id !== action.payload)
    }
  }
})

export const { addItem, updateQuantity, removeItem } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.items

export default cartSlice.reducer