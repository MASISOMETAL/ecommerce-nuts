"use client"

import { Suspense } from "react"
import styles from "./page.module.css"
import CategoriesFilter from "@/components/categoriesFilter";
// products deberia venir de una base de datos

import { products } from "../../../data/products"

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  const product = products.filter((p) => p.category === params.slug)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.slug}</h1>

      <div className={styles.layout}>
        <div className={styles.content}>
          <Suspense fallback={<div className={styles.loading}>Cargando productos...</div>}>
            <CategoriesFilter products={product} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

