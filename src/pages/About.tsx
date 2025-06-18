import React, { useState, useEffect } from 'react';
import { backgroundOptions, colorThemes } from '../utils/backgroundOptions';
import Footer from '../components/Footer';

// Import certificate images
import cert1 from '../assets/images/certificates/Preporyka V Nikolaeva ot SA.png';
import cert2 from '../assets/images/certificates/Препоръка Директор.png';
import cert3 from '../assets/images/certificates/Препоръка Педагог.png';
import cert4 from '../assets/images/certificates/Препоръка-ВСУ.png';
import cert5 from '../assets/images/certificates/Препоръка-бизнес.png';
import cert6 from '../assets/images/certificates/Сертификат НЛП коуч.png';
import cert7 from '../assets/images/certificates/Сертификат НЛП мастър практик.png';
import cert8 from '../assets/images/certificates/Удостоверение Медиация за възстановяване на отношения.png';
import cert9 from '../assets/images/certificates/Удостоверение за вписване в Единен регистър на медиаторите.png';
import cert10 from '../assets/images/certificates/Удостоверение за обучение за медиатор.png';
import cert11 from '../assets/images/certificates/Удостоверение за специализация-Бизнес медиация.png';
import cert12 from '../assets/images/certificates/Удостоверение за специализация-Медиация на работното място.png';
import cert13 from '../assets/images/certificates/диплома за ОНС доктор.png';

const About: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentBackground = backgroundOptions.workspace;
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState<number | null>(null);

  const certificates = [
    { src: cert1, title: 'Препоръка от СА' },
    { src: cert2, title: 'Препоръка Директор' },
    { src: cert3, title: 'Препоръка Педагог' },
    { src: cert4, title: 'Препоръка ВСУ' },
    { src: cert5, title: 'Препоръка Бизнес' },
    { src: cert6, title: 'Сертификат НЛП Коуч' },
    { src: cert7, title: 'Сертификат НЛП Мастър Практик' },
    { src: cert8, title: 'Медиация за възстановяване на отношения' },
    { src: cert9, title: 'Единен регистър на медиаторите' },
    { src: cert10, title: 'Обучение за медиатор' },
    { src: cert11, title: 'Специализация Бизнес медиация' },
    { src: cert12, title: 'Специализация Медиация на работното място' },
    { src: cert13, title: 'Диплома за ОНС доктор' },
  ];

  const goToPrevious = () => {
    if (selectedCertificateIndex !== null) {
      const newIndex = selectedCertificateIndex === 0 
        ? certificates.length - 1 
        : selectedCertificateIndex - 1;
      setSelectedCertificateIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedCertificateIndex !== null) {
      const newIndex = selectedCertificateIndex === certificates.length - 1 
        ? 0 
        : selectedCertificateIndex + 1;
      setSelectedCertificateIndex(newIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCertificateIndex !== null) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setSelectedCertificateIndex(null);
      }
    }
  };

  useEffect(() => {
    if (selectedCertificateIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCertificateIndex]);

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
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .about-content {
            animation: fadeInUp 0.8s ease-out;
          }
          
          .certificates-gallery {
            animation: fadeInUp 1s ease-out 0.3s both;
          }
          
          .certificate-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
          }
          
          .certificate-item:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }
          
          .modal {
            animation: zoomIn 0.3s ease-out;
          }
          
          .modal-backdrop {
            backdrop-filter: blur(10px);
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
          className="about-content"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '3rem',
          }}
        >
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: currentTheme.text, 
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            За нас
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
            lineHeight: '1.6',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Mentor Management е водеща консултантска компания, специализирана в областта на 
            бизнес менторството и организационното развитие. С дългогодишен опит и доказани 
            резултати, ние помагаме на компании да постигнат своите цели чрез професионално 
            менторство и експертни консултации.
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            color: currentTheme.textSecondary,
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            Нашият екип от сертифицирани специалисти притежава богат опит в различни области 
            на бизнеса и е готов да ви подкрепи в постигането на вашите амбициозни цели.
          </p>
        </div>

        {/* Certificates Gallery */}
        <div className="certificates-gallery">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: currentTheme.text,
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Сертификати и Препоръки
          </h2>
          
          <div style={{
            width: '4rem',
            height: '0.25rem',
            backgroundColor: currentTheme.accent,
            margin: '0 auto 3rem',
            borderRadius: '9999px'
          }}></div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="certificate-item"
                onClick={() => setSelectedCertificateIndex(index)}
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={certificate.src}
                  alt={certificate.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{
                    color: currentTheme.accent,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    margin: 0,
                  }}>
                    {certificate.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full-size certificate viewing */}
      {selectedCertificateIndex !== null && (
        <div
          className="modal-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
          onClick={() => setSelectedCertificateIndex(null)}
        >
          <div
            className="modal"
            style={{
              maxWidth: '95vw',
              maxHeight: '95vh',
              position: 'relative',
              background: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '12px',
              padding: '1rem',
              overflow: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              padding: '1rem',
            }}>
              {/* Header with title, counter, and navigation buttons */}
              <div style={{
                position: 'relative',
                textAlign: 'center',
                marginBottom: '1rem',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Left navigation button */}
                <button
                  onClick={goToPrevious}
                  style={{
                    position: 'absolute',
                    left: '50px',
                    background: currentTheme.accent,
                    color: currentTheme.primary,
                    border: 'none',
                    borderRadius: '8px',
                    width: '50px',
                    height: '40px',
                    minWidth: '50px',
                    minHeight: '40px',
                    maxWidth: '50px',
                    maxHeight: '40px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 1001,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1',
                    padding: '0',
                    margin: '0',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <span style={{ 
                    display: 'block',
                    lineHeight: '1'
                  }}>
                    &#8592;
                  </span>
                </button>

                {/* Centered title and counter */}
                <div>
                  <h3 style={{
                    color: currentTheme.accent,
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    margin: '0 0 0.5rem 0',
                  }}>
                    {certificates[selectedCertificateIndex].title}
                  </h3>
                  <p style={{
                    color: currentTheme.textSecondary,
                    fontSize: '0.9rem',
                    margin: 0,
                  }}>
                    {selectedCertificateIndex + 1} от {certificates.length}
                  </p>
                </div>

                {/* Right navigation button */}
                <button
                  onClick={goToNext}
                  style={{
                    position: 'absolute',
                    right: selectedCertificateIndex === 8 ? '62px' : '110px', 
                    background: currentTheme.accent,
                    color: currentTheme.primary,
                    border: 'none',
                    borderRadius: '8px',
                    width: '50px',
                    height: '40px',
                    minWidth: '50px',
                    minHeight: '40px',
                    maxWidth: '50px',
                    maxHeight: '40px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 1001,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1',
                    padding: '0',
                    margin: '0',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <span style={{ 
                    display: 'block',
                    lineHeight: '1'
                  }}>
                    &#8594;
                  </span>
                </button>

                {/* Close button */}
                <button
                  onClick={() => setSelectedCertificateIndex(null)}
                  style={{
                    position: 'absolute',
                    right: selectedCertificateIndex === 8 ? '2px' : '50px', 
                    background: currentTheme.accent,
                    color: currentTheme.primary,
                    border: 'none',
                    borderRadius: '8px',
                    width: '50px',
                    height: '40px',
                    minWidth: '50px',
                    minHeight: '40px',
                    maxWidth: '50px',
                    maxHeight: '40px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 1001,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1',
                    padding: '0',
                    margin: '0',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <span style={{ 
                    display: 'block',
                    lineHeight: '1'
                  }}>
                    ×
                  </span>
                </button>
              </div>

              {/* Certificate image */}
              <img
                src={certificates[selectedCertificateIndex].src}
                alt="Certificate"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '85vw',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default About;
