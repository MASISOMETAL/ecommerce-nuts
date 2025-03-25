"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import styles from "./header.module.css"
import LinkCart from "./linkCart"
import { Provider } from "react-redux"
import { store } from "@/app/store"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/LogoMASISO.svg?height=40&width=40" alt="Logo" width={40} height={40} />
          <span>Frutos Secos</span>
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" onClick={() => setIsMenuOpen(false)}>
                Productos
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <Provider store={store}>
          <LinkCart />
        </Provider>
      </div>
    </header>
  )
}

