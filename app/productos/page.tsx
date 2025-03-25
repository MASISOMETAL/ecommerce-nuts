"use client"

import { Suspense, useState } from "react"
import ProductList from "@/components/product-list"
import ProductFilter from "@/components/product-filter"
import styles from "./page.module.css"
// products deberia venir de una base de datos

import { products } from "../data/products"
import { Provider } from "react-redux"
import { store } from "../store"

export default function ProductsPage() {

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nuestros Productos</h1>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
          </aside>

          <div className={styles.content}>
            <Suspense fallback={<div className={styles.loading}>Cargando productos...</div>}>
              <ProductList products={filteredProducts} />
            </Suspense>
          </div>
        </div>
      </div>
    </Provider>
  )
}

