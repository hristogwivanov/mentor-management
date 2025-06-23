import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { colorThemes } from "../utils/backgroundOptions";

const Footer: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer Content */}
      <footer
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          padding: "2rem 0",
          paddingBottom: "4rem", // Extra space for sticky copyright
          marginTop: "40px",
          color: currentTheme.text,
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Company Info */}
            <div>
              <h3
                style={{
                  color: currentTheme.accent,
                  marginBottom: "1rem",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Mentor Management
              </h3>
              <p
                style={{
                  color: currentTheme.textSecondary,
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  userSelect: "text",
                  cursor: "text",
                }}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: currentTheme.textSecondary,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  Начало
                </Link>
                <Link
                  to="/about"
                  style={{
                    color: currentTheme.textSecondary,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  За нас
                </Link>
                <Link
                  to="/services"
                  style={{
                    color: currentTheme.textSecondary,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  Услуги
                </Link>
                <Link
                  to="/contact"
                  style={{
                    color: currentTheme.textSecondary,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
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
                <p
                  style={{
                    margin: "0.5rem 0",
                    userSelect: "text",
                    cursor: "text",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:mentor.management.mm@gmail.com"
                    style={{
                      color: currentTheme.textSecondary,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    mentor.management.mm@gmail.com
                  </a>
                </p>
                <p
                  style={{
                    margin: "0.5rem 0",
                    userSelect: "text",
                    cursor: "text",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:office@mentor-management.eu"
                    style={{
                      color: currentTheme.textSecondary,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    office@mentor-management.eu
                  </a>
                </p>
                <p
                  style={{
                    margin: "0.5rem 0",
                    userSelect: "text",
                    cursor: "text",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="mailto:v.kostova@mentor-management.eu"
                    style={{
                      color: currentTheme.textSecondary,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    v.kostova@mentor-management.eu
                  </a>
                </p>
                <p
                  style={{
                    margin: "0.5rem 0",
                    userSelect: "text",
                    cursor: "text",
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <a
                    href="tel:+359212345678"
                    style={{
                      color: currentTheme.textSecondary,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    0899 109 507
                  </a>
                </p>
                <p
                  style={{
                    margin: "0.5rem 0",
                    userSelect: "text",
                    cursor: "text",
                  }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Варна, България
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            footer a:hover {
              color: ${currentTheme.accent} !important;
            }
            
            footer * {
              pointer-events: auto;
            }
          `}
        </style>
      </footer>

      {/* Sticky Copyright Section */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(15px)",
          borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          padding: "0.75rem 0",
          textAlign: "center",
          zIndex: 1000,
          pointerEvents: "auto",
        }}
      >
        <p
          style={{
            color: currentTheme.textSecondary,
            fontSize: "0.85rem",
            margin: 0,
            userSelect: "text",
            cursor: "text",
          }}
        >
          &copy; {currentYear} Mentor Management. Всички права запазени.
        </p>
      </div>
    </>
  );
};

export default Footer;
