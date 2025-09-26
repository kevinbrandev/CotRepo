import React, { useState } from 'react';
import './CotizacionLanding.css';
import { translations, type Language } from './translations';

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
  const [currentVersion, setCurrentVersion] = useState<1 | 2>(1);
  const [language, setLanguage] = useState<Language>('es');
  const t = translations[language];

  const priceItemsVersion1: PriceItem[] = [
    { icon: '🎯', label: t.pricing.items.kickoff, price: '$1.200.000' },
    { icon: '📱🔍', label: t.pricing.items.responsiveSearch, price: '$3.200.000' },
    { icon: '🔗', label: t.pricing.items.cms, price: '$2.000.000' },
    { icon: '🤖', label: t.pricing.items.ai, price: '$3.200.000' },
    { icon: '✅', label: t.pricing.items.qa, price: '$1.400.000' },
    { icon: '🚀', label: t.pricing.items.golive, price: '$600.000' },
  ];

  const priceItemsVersion2: PriceItem[] = [
    { icon: '🎯', label: t.pricing.items.kickoff, price: '$1.200.000' },
    { icon: '📱🔍', label: t.pricing.items.responsiveSearch, price: '$3.200.000' },
    { icon: '🔗', label: t.pricing.items.cms, price: '$2.000.000' },
    { icon: '✅', label: t.pricing.items.qa, price: '$1.400.000' },
    { icon: '🚀', label: t.pricing.items.golive, price: '$600.000' },
  ];

  const priceItems = currentVersion === 1 ? priceItemsVersion1 : priceItemsVersion2;

  const totalVersion1 = 11600000;
  const totalVersion2 = 8400000;
  const currentTotal = currentVersion === 1 ? totalVersion1 : totalVersion2;

  const paymentTermsVersion1: PaymentTerm[] = [
    { percentage: '40%', amount: '$4.640.000', description: t.payment.initial },
    { percentage: '40%', amount: '$4.640.000', description: t.payment.staging },
    { percentage: '20%', amount: '$2.320.000', description: t.payment.final },
  ];

  const paymentTermsVersion2: PaymentTerm[] = [
    { percentage: '40%', amount: '$3.360.000', description: t.payment.initial },
    { percentage: '40%', amount: '$3.360.000', description: t.payment.staging },
    { percentage: '20%', amount: '$1.680.000', description: t.payment.final },
  ];

  const paymentTerms = currentVersion === 1 ? paymentTermsVersion1 : paymentTermsVersion2;

  const timelineVersion1: TimelineItem[] = [
    { week: `${t.timeline.week} 1`, description: t.timeline.items.kickoff },
    { week: `${t.timeline.weeks} 2-3`, description: t.timeline.items.responsive },
    { week: `${t.timeline.week} 4`, description: t.timeline.items.cms },
    { week: `${t.timeline.week} 5-6`, description: t.timeline.items.searchAi },
    { week: `${t.timeline.week} 7`, description: t.timeline.items.qa },
  ];

  const timelineVersion2: TimelineItem[] = [
    { week: `${t.timeline.week} 1`, description: t.timeline.items.kickoff },
    { week: `${t.timeline.weeks} 2-3`, description: t.timeline.items.responsive },
    { week: `${t.timeline.week} 4`, description: t.timeline.items.cms },
    { week: `${t.timeline.week} 5`, description: t.timeline.items.search },
    { week: `${t.timeline.week} 6`, description: t.timeline.items.qa },
  ];

  const timeline = currentVersion === 1 ? timelineVersion1 : timelineVersion2;

  const handleAcceptQuote = () => {
    const subject = language === 'es' ? 'Acepto%20la%20cotización' : 'I%20accept%20the%20quote';
    window.location.href = `mailto:Brand-147@hotmail.com?subject=${subject}`;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="cotizacion-container">
      <button className="language-toggle" onClick={toggleLanguage}>
        🌐 {t.header.language}
      </button>
      <header className="header">
        <div className="logo-area">
          <h2>{t.header.title}</h2>
        </div>
        <h1 className="main-title">{t.header.mainTitle}</h1>
        <p className="subtitle">{t.header.subtitle}</p>
        <div className="version-buttons">
          <button
            className={`version-btn ${currentVersion === 1 ? 'active' : ''}`}
            onClick={() => setCurrentVersion(1)}
          >
            {t.header.version1}
          </button>
          <button
            className={`version-btn ${currentVersion === 2 ? 'active' : ''}`}
            onClick={() => setCurrentVersion(2)}
          >
            {t.header.version2}
          </button>
        </div>
      </header>

      <div className="client-info">
        <div className="info-grid">
          <div className="info-item">
            <span className="icon">🏢</span>
            <strong>{t.clientInfo.client}:</strong>
            <span>Advalis</span>
          </div>
          <div className="info-item">
            <span className="icon">👨‍💻</span>
            <strong>{t.clientInfo.provider}:</strong>
            <span>Kevin Bran</span>
          </div>
          <div className="info-item">
            <span className="icon">📅</span>
            <strong>{t.clientInfo.date}:</strong>
            <span>25/09/2025</span>
          </div>
          <div className="info-item">
            <span className="icon">⏰</span>
            <strong>{t.clientInfo.validity}:</strong>
            <span>{t.clientInfo.validityValue}</span>
          </div>
        </div>
      </div>

      <section className="services-section">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="service-cards">
          {currentVersion === 1 && (
            <div className="service-card">
              <h3>{t.services.aiAssistant.title}</h3>
              <p>{t.services.aiAssistant.description}</p>
            </div>
          )}
          <div className="service-card">
            <h3>{t.services.hubspot.title}</h3>
            <p>{t.services.hubspot.description}</p>
          </div>
          <div className="service-card">
            <h3>{t.services.search.title}</h3>
            <p>{t.services.search.description}</p>
          </div>
        </div>
      </section>

      <div className="pricing-table">
        <div className="pricing-header">
          <h2>{t.pricing.title}</h2>
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
        <h3>{t.pricing.total}</h3>
        <div className="total-amount">
          ${currentTotal.toLocaleString('es-CO')} {t.pricing.currency}
        </div>
      </div>

      <div className="payment-terms">
        <h2 className="section-title">{t.payment.title}</h2>
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
        <h2 className="section-title">{t.timeline.title}</h2>
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
        <p className="footer-note">{t.footer.support}</p>
        <p className="footer-detail">{t.footer.changes}</p>
        <button className="cta-button" onClick={handleAcceptQuote}>
          {t.footer.cta}
        </button>
      </footer>
    </div>
  );
};

export default CotizacionLanding;