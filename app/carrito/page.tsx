"use client"

import Cart from "@/components/cart"
import { Provider } from "react-redux"
import { store } from "../store"

export default function CartPage() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  )
}

