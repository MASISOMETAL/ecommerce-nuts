import styles from "./page.module.css"
import Image from "next/image"

export default function Contacto() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contáctanos</h1>
          <p className={styles.subtitle}>Estamos aquí para atenderte</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className={styles.input}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className={styles.input}
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="asunto" className={styles.label}>
                  Asunto
                </label>
                <select id="asunto" name="asunto" className={styles.select} required>
                  <option value="">Selecciona un asunto</option>
                  <option value="pedido">Información sobre pedidos</option>
                  <option value="producto">Consulta sobre productos</option>
                  <option value="mayorista">Ventas al por mayor</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className={styles.textarea}
                  placeholder="Escribe tu mensaje aquí"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Información de contacto</h2>

              <div className={styles.infoGroup}>
                <h3 className={styles.infoTitle}>Dirección</h3>
                <p className={styles.infoText}>Calle Principal 123</p>
                <p className={styles.infoText}>Ciudad, CP 12345</p>
              </div>

              <div className={styles.infoGroup}>
                <h3 className={styles.infoTitle}>Teléfono</h3>
                <p className={styles.infoText}>(123) 456-7890</p>
                <p className={styles.infoText}>(123) 456-7891</p>
              </div>

              <div className={styles.infoGroup}>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>info@frutossecos.com</p>
                <p className={styles.infoText}>ventas@frutossecos.com</p>
              </div>

              <div className={styles.infoGroup}>
                <h3 className={styles.infoTitle}>Horario de atención</h3>
                <p className={styles.infoText}>Lunes a Viernes: 9:00 - 20:00</p>
                <p className={styles.infoText}>Sábados: 10:00 - 18:00</p>
                <p className={styles.infoText}>Domingos: Cerrado</p>
              </div>

              <div className={styles.socialLinks}>
                <h3 className={styles.infoTitle}>Síguenos</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    FB
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Instagram">
                    IG
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Twitter">
                    TW
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                    WA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>Nuestra ubicación</h2>
        <div className={styles.mapContainer}>
          <Image
            src="/img/mapa.png?height=400&width=1200"
            alt="Mapa de ubicación"
            width={1200}
            height={400}
            className={styles.mapImage}
          />
          <p className={styles.mapText}>
            Estamos ubicados en una zona céntrica de fácil acceso. Contamos con estacionamiento para clientes.
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Realizan envíos a domicilio?</h3>
            <p className={styles.faqAnswer}>
              Sí, realizamos envíos a toda la ciudad y alrededores. Para pedidos mayores a $500, el envío es gratuito.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Cuál es el pedido mínimo para compras al por mayor?</h3>
            <p className={styles.faqAnswer}>
              Para compras al por mayor, el pedido mínimo es de 5kg por producto. Contáctanos para conocer nuestros
              precios especiales.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Ofrecen productos orgánicos?</h3>
            <p className={styles.faqAnswer}>
              Sí, contamos con una línea de productos orgánicos certificados. Puedes identificarlos por el sello verde
              en su empaque.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Cómo puedo hacer un pedido personalizado?</h3>
            <p className={styles.faqAnswer}>
              Puedes contactarnos por teléfono, email o a través del formulario en esta página para solicitar pedidos
              personalizados o mezclas especiales.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

