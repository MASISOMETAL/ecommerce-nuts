'use client'

import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import styles from "./page.module.css"
import { Provider } from "react-redux"
import { store } from "./store"

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </div>
    </Provider>
  )
}

