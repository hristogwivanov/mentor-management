import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundOptions, defaultTheme } from '../utils/backgroundOptions';
import Footer from '../components/Footer';
import styles from './Home.module.css';

// Add dynamic styling for hover effects
const dynamicStyles = document.createElement('style');
document.head.appendChild(dynamicStyles);

const Home: React.FC = () => {
  const currentTheme = defaultTheme;
  const currentBackground = backgroundOptions.modernOffice;
  
  // Update dynamic styles for btnSecondary hover effect with theme colors
  React.useEffect(() => {
    // Get the exact same background as the primary button
    const primaryButtonBackground = currentTheme.accent;
    
    dynamicStyles.innerHTML = `
      .${styles.btnSecondary}:hover {
        background: ${primaryButtonBackground} !important;
        color: ${currentTheme.primary} !important;
        border-color: ${currentTheme.text} !important;
      }
    `;
    
    return () => {
      dynamicStyles.innerHTML = '';
    };
  }, [currentTheme]);

  return (
    <div className={styles.homeContainer} style={{
      backgroundImage: `url(${currentBackground})`
    }}>
      {/* Overlay for better text readability */}
      <div className={styles.overlay} style={{
        background: currentTheme.overlay
      }}></div>
      
      {/* Main content area */}
      <div className={styles.mainContent}>
        <div className={styles.homeCard}>
          <h1 
            className={styles.homeTitle}
            style={{ 
              color: currentTheme.text
            }}
          >
            Добре дошли в Mentor Management
          </h1>
          
          <div 
            className={styles.homeDivider}
            style={{ 
              backgroundColor: currentTheme.accent
            }}
          ></div>
          
          <p 
            className={styles.homeDescription}
            style={{ 
              color: currentTheme.textSecondary
            }}
          >
            Професионална платформа за менторство и управление на бизнес процеси. 
            Помагаме на компании да развият своя потенциал чрез експертно менторство.
          </p>
          
          <div className={styles.homeButtons}>
            <Link 
              to="/about"
              className={styles.btnPrimary}
              style={{
                background: currentTheme.accent,
                color: currentTheme.primary
              }}
            >
              Научете повече
            </Link>
            
            <Link 
              to="/contact"
              className={styles.btnSecondary}
              style={{
                color: currentTheme.text,
                border: `2px solid ${currentTheme.text}`
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
