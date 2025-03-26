import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import styles from "./page.module.css"
import { products } from "@/app/data/products"


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe",
    }
  }

  return {
    title: `${product.name} - Frutos Secos`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no existe.</p>
        <Link href="/productos" className={styles.backLink}>
          <ArrowLeft size={16} />
          Volver a productos
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link href="/productos" className={styles.backLink}>
        <ArrowLeft size={16} />
        Volver a productos
      </Link>

      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.name}>{product.name}</h1>
          <div className={styles.price}>${product.price.toFixed(2)}</div>

          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <label htmlFor="quantity">Cantidad:</label>
              <select id="quantity" className={styles.select}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className={styles.addToCart}>
              <ShoppingCart size={20} />
              Añadir al Carrito
            </button>
          </div>

          <div className={styles.nutritionalInfo}>
            <h3>Información Nutricional</h3>
            <p>Por cada 100g:</p>
            <ul>
              <li>
                <strong>Calorías:</strong> {product.nutritionalInfo.calories}
              </li>
              <li>
                <strong>Proteínas:</strong> {product.nutritionalInfo.protein}
              </li>
              <li>
                <strong>Carbohidratos:</strong> {product.nutritionalInfo.carbs}
              </li>
              <li>
                <strong>Grasas:</strong> {product.nutritionalInfo.fat}
              </li>
              <li>
                <strong>Fibra:</strong> {product.nutritionalInfo.fiber}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

