'use client'

import React from 'react'
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import styles from "./linkCart.module.css"
import { useAppSelector} from "../app/store/hooks"

export default function LinkCart() {

  const itemsQuantity = useAppSelector(state => state.cart.items)

  return (
    <Link href="/carrito" className={styles.cart}>
      <ShoppingCart size={24} />
      <span className={styles.cartCount}>{itemsQuantity.length}</span>
    </Link>
  )
}

