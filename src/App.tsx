import { Fragment, useEffect, useState } from 'react'
import './metalmax.css'

const phoneNumber = '+54 9 2617 50-6018'
const whatsappNumber = '5492617506018'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Tengo Para vender: ')}`
const locationUrl = 'https://maps.app.goo.gl/Rmu2KCheLhJ5BHGL9'
const mapEmbedUrl = 'https://www.google.com/maps?q=-32.84109%2C-68.695998&z=15&output=embed'
const businessHours = 'Lun. a vie.: 08:00 a 13:00 y 15:30 a 19:00 hs'

const services = [
  {
    number: '01',
    title: 'Compra de materiales',
    description: 'Recibimos materiales ferrosos y no ferrosos de empresas, talleres y particulares.',
    details: 'Cuéntanos el tipo de material, la cantidad aproximada y dónde se encuentra para revisar la operación.',
  },
  {
    number: '02',
    title: 'Venta y suministro',
    description: 'Conectamos materiales recuperados con quienes los necesitan para seguir produciendo.',
    details: 'Consulta disponibilidad y especificaciones del material que buscas. Revisamos cada solicitud directamente.',
  },
  {
    number: '03',
    title: 'Atención directa',
    description: 'Revisamos cada operación contigo y coordinamos los próximos pasos de forma clara.',
    details: 'Acordamos condiciones, entrega y seguimiento de acuerdo con el material y el alcance de cada operación.',
  },
]

const workCards = [
  {
    image: 'https://res.cloudinary.com/dry6dvzoj/image/upload/v1791602605/WhatsApp_Image_2026-10-10_at_00.19.54_1_n8dyo5.jpg',
    title: 'Compra de materiales',
    description: 'Recibimos consultas por materiales ferrosos y no ferrosos, para evaluar cada operación.',
  },
  {
    image: 'https://res.cloudinary.com/dry6dvzoj/image/upload/v1791602610/WhatsApp_Image_2026-10-10_at_00.19.54_e7nlyz.jpg',
    title: 'Venta y suministro',
    description: 'Conectamos materiales disponibles con empresas, talleres y distribuidores.',
  },
  {
    image: 'https://res.cloudinary.com/dry6dvzoj/image/upload/v1791602837/Chatarra-2-960x450_n9dobf.png',
    title: 'Materiales recuperados',
    description: 'Promovemos que los materiales puedan volver a incorporarse a la actividad industrial.',
  },
  {
    image: 'https://res.cloudinary.com/dry6dvzoj/image/upload/v1791602878/WhatsApp_Image_2026-10-10_at_00.21.42_bc1rzc.jpg',
    title: 'Atención directa',
    description: 'Revisamos cada consulta contigo y coordinamos los próximos pasos de forma clara.',
  },
  {
    image: 'https://res.cloudinary.com/dry6dvzoj/image/upload/v1791602964/image_4_vqdglo.png',
    title: 'Operaciones a medida',
    description: 'Acordamos condiciones y entrega según el material y el alcance de cada operación.',
  },
]

function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(/\s+/)

  return words.map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span
        className="reveal-word"
        data-reveal
        style={{ transitionDelay: `${delay + index * 45}ms` }}
      >
        {word}
      </span>
      {index < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}

function App() {
  const [openService, setOpenService] = useState<string | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -32px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dante Herrera, inicio">
          <img
            className="brand-logo"
            src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1791062567/ChatGPT_Image_3_oct_2026_18_21_52_ahe1ne.png"
            alt=""
          />
          <span>DANTE HERRERA</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#materiales">Materiales</a>
          <a href="#servicios">Qué hacemos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a
          className="whatsapp-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Enviar por WhatsApp: Tengo Para vender"
          title="Enviar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.43-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.89-9.89a9.83 9.83 0 0 1 7.01 2.91 9.82 9.82 0 0 1 2.9 7.01c0 5.45-4.44 9.89-9.91 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.28.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/logo.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><RevealWords text="Compra y venta de materiales" /></p>
            <h1>
              <span className="heading-line"><RevealWords text="El valor de los materiales," /></span>
              <span className="heading-line heading-accent"><RevealWords text="en movimiento." delay={180} /></span>
            </h1>
            <p className="hero-intro" data-reveal>
              Comercializamos metales y materiales industriales con atención directa, criterios claros y una operación confiable.
            </p>
            <div className="hero-contact-quick" data-reveal>
              <span className="hero-contact-label">Horarios de atención</span>
              <span>{businessHours}</span>
            </div>
          </div>
          <p className="hero-caption">MATERIALES QUE VUELVEN A LA INDUSTRIA</p>
        </section>

        <section className="materials section-wrap" id="materiales">
          <div className="section-heading" data-reveal>
            <p className="eyebrow eyebrow-dark">Materiales</p>
            <h2>
              <span className="heading-line"><RevealWords text="Compramos y vendemos" /></span>
              <span className="heading-line">lo que <em><RevealWords text="mueve la industria." delay={150} /></em></span>
            </h2>
            <p>Atendemos operaciones de distintos volúmenes. Cuéntanos qué material tienes y revisamos contigo la mejor forma de avanzar.</p>
          </div>
        </section>

        <section className="operations" id="servicios">
          <video className="operations-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/camion.mp4" type="video/mp4" />
          </video>
          <div className="operations-shade" />
          <div className="operations-inner section-wrap">
            <div className="operations-heading">
              <p className="eyebrow">Dante Herrera</p>
              <h2>
                <span className="heading-line"><RevealWords text="Relaciones comerciales claras." /></span>
                <span className="heading-line heading-accent"><RevealWords text="Materiales con futuro." delay={150} /></span>
              </h2>
            </div>
            <div className="service-list">
              {services.map((service, index) => {
                const isOpen = openService === service.number
                const detailsId = `service-details-${service.number}`

                return (
                <article className="service-row" data-reveal key={service.number} style={{ transitionDelay: `${index * 100}ms` }}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className={`service-toggle${isOpen ? ' is-open' : ''}`}
                    type="button"
                    aria-label={`${isOpen ? 'Ocultar' : 'Ver'} detalles: ${service.title}`}
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    onClick={() => setOpenService(isOpen ? null : service.number)}
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                  <div className="service-details" id={detailsId} hidden={!isOpen}>
                    <p>{service.details}</p>
                  </div>
                </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="lo-que-hacemos">
          <div className="work-heading" data-reveal>
            <p className="eyebrow eyebrow-dark">Lo que hacemos</p>
            <h2>Materiales y soluciones para la industria.</h2>
            <p>Acompañamos la compra y venta de materiales industriales con atención directa, desde la consulta hasta la coordinación de cada operación.</p>
          </div>
          <div className="work-grid">
            {workCards.map((card, index) => (
              <article className="work-card" data-reveal key={card.title} style={{ transitionDelay: `${index * 70}ms` }}>
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="work-card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="contact-heading">
            <p className="eyebrow eyebrow-dark">Contacto</p>
            <h2><RevealWords text="¿Qué material tienes para negociar?" /></h2>
            <p>Cuéntanos qué necesitas comprar o vender. Nuestro equipo podrá orientarte sobre la operación.</p>
          </div>
          <div className="contact-details">
            <div className="contact-detail" data-reveal>
              <span>Teléfono / WhatsApp</span>
              <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}>
                <strong>{phoneNumber}</strong>
              </a>
            </div>
            <div className="contact-detail" data-reveal>
              <span>Ubicación</span>
              <div className="contact-map">
                <iframe
                  src={mapEmbedUrl}
                  title="Vista previa de la ubicación en Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href={locationUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
              </div>
            </div>
            <div className="contact-detail" data-reveal>
              <span>Horarios de atención</span>
              <strong>{businessHours}</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <img
            className="brand-logo"
            src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1791062567/ChatGPT_Image_3_oct_2026_18_21_52_ahe1ne.png"
            alt=""
          />
          <span>DANTE HERRERA</span>
        </a>
        <p>Compra y venta de materiales industriales.</p>
        <span>© {new Date().getFullYear()} Dante Herrera</span>
      </footer>
    </div>
  )
}

export default App
