import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colorThemes } from '../utils/backgroundOptions';
import MMLogoHeader from '../assets/images/MMLogoHeader.png';

const Navigation: React.FC = () => {
  const location = useLocation();
  const theme = colorThemes.elegant;

  const navItems = [
    { path: '/', label: 'Начало' },
    { path: '/about', label: 'За нас' },
    { path: '/services', label: 'Услуги' },
    { path: '/contact', label: 'Контакти' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      padding: '1rem 0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'slideInFromTop 0.8s ease-out',
    }}>
      <style>
        {`
          @keyframes slideInFromTop {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
            }
          }
          
          .nav-link {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }
          
          .nav-link:hover {
            transform: translateY(-2px);
            color: ${theme.accent} !important;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: ${theme.accent};
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .nav-link.active::after {
            width: 100%;
            animation: glow 2s ease-in-out infinite;          }
          
          .nav-brand {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .nav-brand:hover {
            transform: scale(1.05);
            color: ${theme.accent} !important;
          }
        `}
      </style>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
      }}>
        <Link
          to="/"
          className="nav-brand"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img 
            src={MMLogoHeader} 
            alt="Mentor Management" 
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Link>

        <div style={{
          display: 'flex',
          gap: '2rem',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{
                color: location.pathname === item.path ? theme.accent : theme.textSecondary,
                textDecoration: 'none',
                fontWeight: location.pathname === item.path ? '600' : '400',
                fontSize: '1rem',
                paddingBottom: '0.25rem',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
