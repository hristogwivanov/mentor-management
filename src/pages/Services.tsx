import React from 'react';
import { backgroundOptions, colorThemes } from '../utils/backgroundOptions';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCogs, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentBackground = backgroundOptions.corporate;

  const services = [
    {
      title: 'Бизнес менторство',
      description: 'Индивидуално менторство за ръководители и предприемачи',
      features: ['Стратегическо планиране', 'Лидерски умения', 'Развитие на екипа'],
      icon: faUserTie
    },
    {
      title: 'Организационно развитие',
      description: 'Оптимизиране на бизнес процеси и структури',
      features: ['Процесно подобрение', 'Организационна структура', 'Управление на промяната'],
      icon: faCogs
    },
    {
      title: 'Обучения и тренинги',
      description: 'Корпоративни обучения за развитие на уменията',
      features: ['Лидерство', 'Комуникация', 'Управление на проекти'],
      icon: faGraduationCap
    },
    {
      title: 'Консултантски услуги',
      description: 'Експертна консултация по бизнес въпроси',
      features: ['Бизнес анализ', 'Стратегически съвети', 'Решения за растеж'],
      icon: faLightbulb
    }
  ];

  return (
    <div 
      className={styles.container}
      style={{
        backgroundImage: `url(${currentBackground})`,
      }}
    >

      
      {/* Overlay for better text readability */}
      <div 
        className={styles.overlay}
        style={{
          background: currentTheme.overlay,
        }}
      ></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.servicesHeader}>
          <h1 
            className={styles.pageTitle}
            style={{ color: currentTheme.text }}
          >
            Нашите услуги
          </h1>
          
          <div 
            className={styles.titleDivider}
            style={{ backgroundColor: currentTheme.accent }}
          ></div>
          
          <p 
            className={styles.subtitle}
            style={{ color: currentTheme.textSecondary }}
          >
            Предлагаме цялостни решения за развитие на вашия бизнес
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
            >
              <div className={styles.iconContainer}>
                <FontAwesomeIcon 
                  icon={service.icon} 
                  size="3x" 
                  style={{ color: currentTheme.accent }} 
                />
              </div>
              <hr 
                className={`${styles.serviceDivider} ${styles.serviceDividerTop}`}
                style={{ backgroundColor: currentTheme.accent }}
              />
              
              <h3 
                className={styles.serviceTitle}
                style={{ color: currentTheme.accent }}
              >
                {service.title}
              </h3>
              
              <hr 
                className={`${styles.serviceDivider} ${styles.serviceDividerBottom}`}
                style={{ backgroundColor: currentTheme.accent }}
              />
              
              <p 
                className={styles.serviceDescription}
                style={{ color: currentTheme.textSecondary }}
              >
                {service.description}
              </p>
              
              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={styles.featureItem}
                    style={{
                      color: currentTheme.textSecondary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentTheme.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = currentTheme.textSecondary;
                    }}
                  >
                    <span 
                      className={styles.featureBullet}
                      style={{ color: currentTheme.accent }}
                    >
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
