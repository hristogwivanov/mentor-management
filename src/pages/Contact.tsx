import React, { useState } from 'react';
import { colorThemes, backgroundOptions } from '../utils/backgroundOptions';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const currentTheme = colorThemes.elegant;
  const currentBackground = backgroundOptions.partnership;
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Името е задължително';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Името трябва да бъде поне 2 символа';
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Фамилията е задължителна';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Фамилията трябва да бъде поне 2 символа';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Имейлът е задължителен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Моля въведете валиден имейл адрес';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Темата е задължителна';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Темата трябва да бъде поне 3 символа';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Съобщението е задължително';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Съобщението трябва да бъде поне 10 символа';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    try {
      // Send data to PHP script
      const response = await fetch('./contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Server error:', result.message);
        alert('Грешка при изпращане на съобщението: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Възникна грешка при свързване със сървъра. Моля, опитайте отново по-късно.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem',
        zIndex: 2,
        position: 'relative',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: currentTheme.text, 
            marginBottom: '1rem'
          }}>
            Контакти
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
            Свържете се с нас за консултация или повече информация
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: currentTheme.accent,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <FontAwesomeIcon 
                icon={faPhone} 
                style={{
                  fontSize: '1.5rem',
                  color: currentTheme.accent
                }}
              />
              Телефон
            </h3>
            <p style={{
              color: currentTheme.textSecondary,
              fontSize: '1.1rem'
            }}>
              0899 109 507
            </p>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: currentTheme.accent,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <FontAwesomeIcon 
                icon={faEnvelope} 
                style={{
                  fontSize: '1.5rem',
                  color: currentTheme.accent
                }}
              />
              Имейл
            </h3>
            <div style={{ color: currentTheme.textSecondary, fontSize: '1rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>mentor.management.mm@gmail.com</p>
              <p style={{ marginBottom: '0.5rem' }}>office@mentor-management.eu</p>
              <p>v.kostova@mentor-management.eu</p>
            </div>
          </div>
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          padding: '2.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: currentTheme.accent,
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Изпратете ни съобщение
          </h2>
          
          {submitSuccess && (
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
              color: '#22c55e',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'center',
              animation: 'fadeInSlide 0.5s ease-out'
            }}>
              ✅ Съобщението беше изпратено успешно! Ще се свържем с вас скоро.
            </div>
          )}
          
          {submitSuccess && (
            <div style={{
              background: 'rgba(74, 222, 128, 0.15)',
              border: '1px solid rgba(74, 222, 128, 0.5)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              animation: 'fadeInSlide 0.5s ease-out'
            }}>
              <div style={{
                background: 'rgba(74, 222, 128, 0.25)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ margin: 0, color: '#fff' }}>
                Съобщението е изпратено успешно! Благодарим Ви за интереса.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{
            display: 'grid',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* First Name Field */}
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Име"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: errors.firstName ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: currentTheme.text,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentTheme.accent;
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.firstName ? '#ef4444' : 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {errors.firstName && (
                  <p style={{ 
                    color: '#ef4444', 
                    fontSize: '0.85rem', 
                    marginTop: '0.25rem',
                    animation: 'shake 0.5s ease-in-out'
                  }}>
                    {errors.firstName}
                  </p>
                )}
              </div>
              
              {/* Last Name Field */}
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Фамилия"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: errors.lastName ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: currentTheme.text,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentTheme.accent;
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.lastName ? '#ef4444' : 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {errors.lastName && (
                  <p style={{ 
                    color: '#ef4444', 
                    fontSize: '0.85rem', 
                    marginTop: '0.25rem',
                    animation: 'shake 0.5s ease-in-out'
                  }}>
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: errors.email ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: currentTheme.text,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = currentTheme.accent;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.email && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '0.85rem', 
                  marginTop: '0.25rem',
                  animation: 'shake 0.5s ease-in-out'
                }}>
                  {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Тема (относно)"
                value={formData.subject}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: errors.subject ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: currentTheme.text,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = currentTheme.accent;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.subject ? '#ef4444' : 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.subject && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '0.85rem', 
                  marginTop: '0.25rem',
                  animation: 'shake 0.5s ease-in-out'
                }}>
                  {errors.subject}
                </p>
              )}
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Съобщение"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: errors.message ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: currentTheme.text,
                  fontSize: '1rem',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = currentTheme.accent;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.message && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '0.85rem', 
                  marginTop: '0.25rem',
                  animation: 'shake 0.5s ease-in-out'
                }}>
                  {errors.message}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                background: isSubmitting ? 'rgba(156, 163, 175, 0.5)' : currentTheme.accent,
                color: currentTheme.primary,
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                justifySelf: 'center',
                position: 'relative',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              {isSubmitting ? (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Изпращане...
                </span>
              ) : (
                'Изпрати съобщение'
              )}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
      
      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes fadeInSlide {
          0% { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
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
        
        .btn-primary {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-3px) scale(1.05);
          animation: pulseGlow 1.5s ease-in-out infinite;
        }
        
        .btn-primary:active:not(:disabled) {
          transform: translateY(-1px) scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Contact;
