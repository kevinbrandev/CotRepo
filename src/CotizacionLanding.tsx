import React from 'react';
import './CotizacionLanding.css';

interface PriceItem {
  icon: string;
  label: string;
  price: string;
}

interface PaymentTerm {
  percentage: string;
  amount: string;
  description: string;
}

interface TimelineItem {
  week: string;
  description: string;
}

const CotizacionLanding: React.FC = () => {
  const priceItems: PriceItem[] = [
    { icon: '🎯', label: 'Kickoff y Arquitectura', price: '$1.200.000' },
    { icon: '📱', label: 'Maquetación Responsive', price: '$3.200.000' },
    { icon: '🔗', label: 'Integración CMS/HubSpot', price: '$2.000.000' },
    { icon: '🔍', label: 'Búsqueda Avanzada', price: '$2.400.000' },
    { icon: '🤖', label: 'Asistente de IA', price: '$3.200.000' },
    { icon: '✅', label: 'QA y Performance', price: '$1.400.000' },
    { icon: '🚀', label: 'Go-live y Handover', price: '$600.000' },
  ];

  const paymentTerms: PaymentTerm[] = [
    { percentage: '40%', amount: '$5.600.000', description: 'Anticipo inicial' },
    { percentage: '40%', amount: '$5.600.000', description: 'Entrega staging' },
    { percentage: '20%', amount: '$2.800.000', description: 'Go-live final' },
  ];

  const timeline: TimelineItem[] = [
    { week: 'Semana 1', description: 'Kickoff, análisis de Figma y definición de arquitectura' },
    { week: 'Semanas 2-3', description: 'Maquetación responsive y desarrollo de componentes' },
    { week: 'Semana 4', description: 'Integración con HubSpot CMS y configuración SEO' },
    { week: 'Semana 5-6', description: 'Implementación de búsqueda avanzada y asistente IA' },
    { week: 'Semana 7', description: 'QA integral, optimización y go-live' },
  ];

  const handleAcceptQuote = () => {
    window.location.href = 'mailto:Brand-147@hotmail.com?subject=Acepto%20la%20cotización';
  };

  return (
    <div className="cotizacion-container">
      <header className="header">
        <div className="logo-area">
          <h2>💻 Desarrollo Web Profesional</h2>
        </div>
        <h1 className="main-title">Cotización de Servicios</h1>
        <p className="subtitle">Soluciones digitales innovadoras con IA integrada</p>
      </header>

      <div className="client-info">
        <div className="info-grid">
          <div className="info-item">
            <span className="icon">🏢</span>
            <strong>Cliente:</strong>
            <span>Advalis</span>
          </div>
          <div className="info-item">
            <span className="icon">👨‍💻</span>
            <strong>Proveedor:</strong>
            <span>Kevin Bran</span>
          </div>
          <div className="info-item">
            <span className="icon">📅</span>
            <strong>Fecha:</strong>
            <span>25/09/2025</span>
          </div>
          <div className="info-item">
            <span className="icon">⏰</span>
            <strong>Validez:</strong>
            <span>15 días</span>
          </div>
        </div>
      </div>

      <section className="services-section">
        <h2 className="section-title">Características Principales</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>🤖 Asistente IA con OpenAI</h3>
            <p>Integración completa de asistente inteligente con endpoint serverless seguro, protección de API Key y control de cuotas.</p>
          </div>
          <div className="service-card">
            <h3>🚀 Desarrollo en HubSpot</h3>
            <p>Implementación completa con módulos personalizados, CMS integrado, blog optimizado y SEO técnico avanzado.</p>
          </div>
          <div className="service-card">
            <h3>🔍 Búsqueda Avanzada</h3>
            <p>Sistema de búsqueda inteligente con indexación de contenidos, autosuggest y filtros facetados para mejor experiencia.</p>
          </div>
        </div>
      </section>

      <div className="pricing-table">
        <div className="pricing-header">
          <h2>Detalle de Inversión</h2>
        </div>
        <div className="pricing-content">
          {priceItems.map((item, index) => (
            <div key={index} className="price-item">
              <span className="price-label">
                {item.icon} {item.label}
              </span>
              <span className="price-value">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="total-section">
        <h3>Inversión Total</h3>
        <div className="total-amount">$14.000.000 COP</div>
      </div>

      <div className="payment-terms">
        <h2 className="section-title">Plan de Pagos</h2>
        <div className="payment-grid">
          {paymentTerms.map((term, index) => (
            <div key={index} className="payment-card">
              <div className="payment-percentage">{term.percentage}</div>
              <div className="payment-amount">{term.amount}</div>
              <div className="payment-desc">{term.description}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="timeline">
        <h2 className="section-title">Cronograma del Proyecto</h2>
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>{item.week}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="contact-info">
          <a href="tel:3016666049" className="contact-item">
            <span>📞</span>
            <span>301 666 6049</span>
          </a>
          <a href="mailto:Brand-147@hotmail.com" className="contact-item">
            <span>✉️</span>
            <span>Brand-147@hotmail.com</span>
          </a>
        </div>
        <p className="footer-note">Incluye 14 días de soporte post-lanzamiento</p>
        <p className="footer-detail">✨ 2 rondas de cambios sobre diseño aprobado</p>
        <button className="cta-button" onClick={handleAcceptQuote}>
          Aceptar Cotización
        </button>
      </footer>
    </div>
  );
};

export default CotizacionLanding;