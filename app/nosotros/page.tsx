import styles from "./page.module.css"
import Image from "next/image"

export default function Nosotros() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Nuestra Historia</h1>
          <p className={styles.subtitle}>Frutos secos de la mejor calidad desde 2010</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>Quiénes Somos</h2>
          <p className={styles.text}>
            Somos una empresa familiar dedicada a la selección y distribución de los mejores frutos secos del mercado.
            Nuestra pasión por los productos naturales nos ha llevado a crear una marca que representa calidad, frescura
            y compromiso con la salud de nuestros clientes.
          </p>
          <p className={styles.text}>
            Desde nuestros inicios en 2010, hemos trabajado directamente con productores locales para garantizar que
            cada producto que ofrecemos cumpla con los más altos estándares de calidad.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/img/tienda.jpg?height=400&width=600"
            alt="Nuestra tienda"
            width={600}
            height={400}
            className={styles.storyImage}
          />
        </div>
      </section>

      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Calidad</h3>
            <p className={styles.valueText}>
              Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad y frescura.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Sostenibilidad</h3>
            <p className={styles.valueText}>
              Trabajamos con productores que respetan el medio ambiente y utilizan prácticas sostenibles.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Transparencia</h3>
            <p className={styles.valueText}>
              Compartimos información clara sobre el origen y proceso de nuestros productos.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Servicio</h3>
            <p className={styles.valueText}>Nos esforzamos por brindar una experiencia excepcional a cada cliente.</p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <Image
                src="/img/carlos-rodriguez.jpg?height=300&width=300"
                alt="Fundador"
                width={300}
                height={300}
                className={styles.roundedImage}
              />
            </div>
            <h3 className={styles.memberName}>Carlos Rodríguez</h3>
            <p className={styles.memberRole}>Fundador</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <Image
                src="/img/maria-gonzales.jpg?height=300&width=300"
                alt="Directora de Calidad"
                width={300}
                height={300}
                className={styles.roundedImage}
              />
            </div>
            <h3 className={styles.memberName}>María González</h3>
            <p className={styles.memberRole}>Directora de Calidad</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <Image
                src="/img/juan-martinez.jpg?height=300&width=300"
                alt="Jefe de Producción"
                width={300}
                height={300}
                className={styles.roundedImage}
              />
            </div>
            <h3 className={styles.memberName}>Juan Martínez</h3>
            <p className={styles.memberRole}>Jefe de Producción</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Visítanos</h2>
        <div className={styles.contactInfo}>
          <div className={styles.addressBlock}>
            <h3 className={styles.contactTitle}>Nuestra Tienda</h3>
            <p className={styles.contactText}>Calle Principal 123</p>
            <p className={styles.contactText}>Ciudad, CP 12345</p>
            <p className={styles.contactText}>Tel: (123) 456-7890</p>
            <p className={styles.contactText}>Email: info@frutossecos.com</p>
          </div>
          <div className={styles.hoursBlock}>
            <h3 className={styles.contactTitle}>Horario</h3>
            <p className={styles.contactText}>Lunes a Viernes: 9:00 - 20:00</p>
            <p className={styles.contactText}>Sábados: 10:00 - 18:00</p>
            <p className={styles.contactText}>Domingos: Cerrado</p>
          </div>
        </div>
      </section>
    </main>
  )
}

