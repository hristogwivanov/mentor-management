import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { defaultTheme } from '../utils/backgroundOptions';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentTheme = defaultTheme;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer Content */}
      <footer
        className={styles.footer}
        style={{
          background: currentTheme.footerBackground,
          color: currentTheme.text,
          paddingBottom: "2rem" /* Standard padding */
        }}
      >
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            {/* Company Info */}
            <div>
              <h3
                className={styles.sectionTitle}
                style={{ color: currentTheme.accent }}
              >
                Mentor Management
              </h3>
              <p
                className={styles.sectionText}
                style={{ color: currentTheme.textSecondary }}
              >
                Професионална платформа за менторство и управление на бизнес
                процеси
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  color: currentTheme.accent,
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Бързи връзки
              </h4>
              <div className={styles.linkContainer}>
                <Link
                  to="/"
                  className={styles.footerLink}
                  style={{ color: currentTheme.textSecondary }}
                >
                  Начало
                </Link>
                <Link
                  to="/about"
                  className={styles.footerLink}
                  style={{ color: currentTheme.textSecondary }}
                >
                  За нас
                </Link>
                <Link
                  to="/services"
                  className={styles.footerLink}
                  style={{ color: currentTheme.textSecondary }}
                >
                  Услуги
                </Link>
                <Link
                  to="/contact"
                  className={styles.footerLink}
                  style={{ color: currentTheme.textSecondary }}
                >
                  Контакт
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                style={{
                  color: currentTheme.accent,
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Контакт
              </h4>
              <div
                style={{
                  color: currentTheme.textSecondary,
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                <p className={styles.contactItem}>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:mentor.management.mm@gmail.com"
                    className={styles.contactLink}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    mentor.management.mm@gmail.com
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:office@mentor-management.eu"
                    className={styles.contactLink}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    office@mentor-management.eu
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:v.kostova@mentor-management.eu"
                    className={styles.contactLink}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    v.kostova@mentor-management.eu
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <a
                    href="tel:+359212345678"
                    className={styles.contactLink}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    0899 109 507
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Варна, България
                </p>
              </div>
            </div>
          </div>
          
          {/* No additional spacer needed */}
        </div>

        {/* Add hover effect through JSX */}
        <style>
          {`
            .${styles.footerLink}:hover, .${styles.contactLink}:hover {
              color: ${currentTheme.accent} !important;
            }
            
            footer * {
              pointer-events: auto;
            }
          `}
        </style>
      </footer>

      {/* Sticky Copyright Section */}
      <div className={styles.copyrightContainer}>
        <p className={styles.copyrightText}>
          &copy; {currentYear} Mentor Management. Всички права запазени.
        </p>
      </div>
    </>
  );
};

export default Footer;
