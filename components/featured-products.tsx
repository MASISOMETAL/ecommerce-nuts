"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import styles from "./featured-products.module.css"
import { products } from "../app/data/products"
import { useAppDispatch } from "@/app/store/hooks"
import { addItem } from "@/app/store/slices/cartSlice"

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  slug: string;
  image: string;
  description: string;
}

export default function FeaturedProducts() {

  const dispatch = useAppDispatch()

  const handleAddToCart = (product: Product) => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      slug: product.slug,
    }

    dispatch(addItem(newProduct))
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Productos Destacados</h2>
      <div className={styles.grid}>
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className={styles.product}>
            <Link href={`/productos/${product.slug}`} className={styles.imageLink}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <Link href={`/productos/${product.slug}`} className={styles.name}>
                {product.name}
              </Link>
              <div className={styles.price}>${product.price.toFixed(2)}</div>
              <button
                className={`${styles.button}`}
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart size={16} />
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link href="/productos" className={styles.viewAllLink}>
          Ver todos los productos
        </Link>
      </div>
    </section>
  )
}

