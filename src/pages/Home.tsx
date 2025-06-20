import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundOptions, colorThemes } from '../utils/backgroundOptions';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentBackground = backgroundOptions.modernOffice;

  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${currentBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      paddingTop: '80px',
      boxSizing: 'border-box',
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
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
            }
          }
          
          .home-card {
            animation: fadeInUp 1s ease-out 0.3s both;
          }
          
          .home-title {
            animation: fadeInUp 1.2s ease-out 0.5s both;
          }
          
          .home-divider {
            animation: fadeInUp 1.4s ease-out 0.7s both;
          }
          
          .home-description {
            animation: fadeInUp 1.6s ease-out 0.9s both;
          }
          
          .home-buttons {
            animation: fadeInUp 1.8s ease-out 1.1s both;
          }
          
          .btn-primary {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .btn-primary:hover {
            transform: translateY(-3px) scale(1.05);
            animation: pulseGlow 1.5s ease-in-out infinite;
          }
          
          .btn-primary:active {
            transform: translateY(-1px) scale(1.02);
          }
          
          .btn-secondary {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }
          
          .btn-secondary:hover {
            transform: translateY(-3px) scale(1.05);
            background: ${currentTheme.accent} !important;
            color: ${currentTheme.primary} !important;
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          }
          
          .btn-secondary:active {
            transform: translateY(-1px) scale(1.02);
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
      
      {/* Main content area */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}>
        <div 
          className="home-card"
          style={{
            width: '90%',
            maxWidth: '800px',
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '3rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <h1 
            className="home-title"
            style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: currentTheme.text, 
              marginBottom: '1rem' 
            }}
          >
            Добре дошли в Mentor Management
          </h1>
          
          <div 
            className="home-divider"
            style={{ 
              width: '6rem', 
              height: '0.25rem', 
              backgroundColor: currentTheme.accent, 
              margin: '0 auto 2rem', 
              borderRadius: '9999px' 
            }}
          ></div>
          
          <p 
            className="home-description"
            style={{ 
              fontSize: '1.25rem', 
              color: currentTheme.textSecondary, 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}
          >
            Професионална платформа за менторство и управление на бизнес процеси. 
            Помагаме на компании да развият своя потенциал чрез експертно менторство.
          </p>
          
          <div 
            className="home-buttons"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}
          >
            <Link 
              to="/about"
              className="btn-primary"
              style={{
                background: currentTheme.accent,
                color: currentTheme.primary,
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Научете повече
            </Link>
            
            <Link 
              to="/contact"
              className="btn-secondary"
              style={{
                background: 'transparent',
                color: currentTheme.text,
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: `2px solid ${currentTheme.text}`,
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Свържете се с нас
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
