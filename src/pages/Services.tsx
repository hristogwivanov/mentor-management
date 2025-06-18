import React from 'react';
import { backgroundOptions, colorThemes } from '../utils/backgroundOptions';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentBackground = backgroundOptions.corporate;

  const services = [
    {
      title: 'Бизнес менторство',
      description: 'Индивидуално менторство за ръководители и предприемачи',
      features: ['Стратегическо планиране', 'Лидерски умения', 'Развитие на екипа']
    },
    {
      title: 'Организационно развитие',
      description: 'Оптимизиране на бизнес процеси и структури',
      features: ['Процесно подобрение', 'Организационна структура', 'Управление на промяната']
    },
    {
      title: 'Обучения и тренинги',
      description: 'Корпоративни обучения за развитие на уменията',
      features: ['Лидерство', 'Комуникация', 'Управление на проекти']
    },
    {
      title: 'Консултантски услуги',
      description: 'Експертна консултация по бизнес въпроси',
      features: ['Бизнес анализ', 'Стратегически съвети', 'Решения за растеж']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${currentBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      paddingTop: '120px',
      paddingBottom: '2rem',
    }}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .services-header {
            animation: fadeInUp 0.8s ease-out;
          }
          
          .service-card {
            animation: fadeInUp 0.8s ease-out both;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:nth-child(1) { animation-delay: 0.1s; }
          .service-card:nth-child(2) { animation-delay: 0.2s; }
          .service-card:nth-child(3) { animation-delay: 0.3s; }
          .service-card:nth-child(4) { animation-delay: 0.4s; }
          
          .service-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.7);
            background: rgba(0, 0, 0, 0.5) !important;
          }
          
          .service-card:hover .service-title {
            animation: cardFloat 2s ease-in-out infinite;
          }
          
          .feature-item {
            transition: all 0.3s ease;
          }
          
          .feature-item:hover {
            transform: translateX(5px);
            color: ${currentTheme.accent} !important;
          }
        `}
      </style>
      
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: currentTheme.overlay,
        zIndex: 1,
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        zIndex: 2,
        position: 'relative',
      }}>
        <div 
          className="services-header"
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: currentTheme.text, 
            marginBottom: '1rem'
          }}>
            Нашите услуги
          </h1>
          
          <div style={{ 
            width: '6rem', 
            height: '0.25rem', 
            backgroundColor: currentTheme.accent, 
            margin: '0 auto 2rem', 
            borderRadius: '9999px' 
          }}></div>
          
          <p style={{
            fontSize: '1.2rem',
            color: currentTheme.textSecondary,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Предлагаме цялостни решения за развитие на вашия бизнес
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h3 
                className="service-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: currentTheme.accent,
                  marginBottom: '1rem'
                }}
              >
                {service.title}
              </h3>
              
              <p style={{
                color: currentTheme.textSecondary,
                marginBottom: '1.5rem',
                fontSize: '1rem',
                lineHeight: '1.5'
              }}>
                {service.description}
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="feature-item"
                    style={{
                      color: currentTheme.textSecondary,
                      marginBottom: '0.5rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: currentTheme.accent
                    }}>
                      •
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
