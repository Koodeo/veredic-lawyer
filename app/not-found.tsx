import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-bg">
        <div className="error-ring"></div>
        <div className="error-ring"></div>
      </div>
      
      <div className="error-inner">
        <div className="error-code">404</div>
        <h1 className="error-title">Página no <em>encontrada</em></h1>
        <p className="error-text">
          La página que busca no existe o ha sido movida. 
          Le invitamos a regresar a nuestra página principal.
        </p>
        
        <div className="error-actions">
          <Link href="/" className="error-btn primary">
            Volver al Inicio
          </Link>
          <Link href="#contact" className="error-btn secondary">
            Contactar Equipo
          </Link>
        </div>
      </div>
    </section>
  )
}
