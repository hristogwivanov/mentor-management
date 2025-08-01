import React, { useState } from 'react';
import { backgroundOptions, defaultTheme } from '../utils/backgroundOptions';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

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
  const currentTheme = defaultTheme;
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
      newErrors.email = 'Email-ът е задължителен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Моля въведете валиден email адрес';
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
      const response = await fetch('contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Server error:', result.message);
        console.error('Debug info:', result.debug); // Added debug logging
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className={styles.contactContainer} style={{ backgroundImage: `url(${currentBackground})` }}>
        {/* Overlay for better text readability */}
        <div className={styles.overlay} style={{ background: currentTheme.overlay }}></div>

        <div className={styles.mainContent}>
          <div className={styles.contactContent}>
            {/* Header Section */}
            <div className={styles.headerSection}>
              <h1 className={styles.pageTitle} style={{ color: currentTheme.text }}>Контакти</h1>
              <div className={styles.divider} style={{ backgroundColor: currentTheme.accent }}></div>
              <p className={styles.pageSubtitle} style={{ color: currentTheme.textSecondary }}>
                Свържете се с нас за консултация или повече информация
              </p>
            </div>

            {/* Contact Cards Section */}
            <div className={styles.cardsSection}>
              <div className={styles.contactCard}>
                <h3 className={styles.cardTitle} style={{ color: currentTheme.accent }}>
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className={styles.cardIcon}
                    style={{ color: currentTheme.accent }}
                  />
                  Телефон
                </h3>
                <p className={styles.cardText} style={{ color: currentTheme.textSecondary, fontSize: '1.6rem' }}>
                  0899 109 507
                </p>
              </div>

              <div className={styles.contactCard}>
                <h3 className={styles.cardTitle} style={{ color: currentTheme.accent }}>
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className={styles.cardIcon}
                    style={{ color: currentTheme.accent }}
                  />
                  Email
                </h3>
                <div className={styles.emailList} style={{ color: currentTheme.textSecondary }}>
                  <p className={styles.emailItem}>mentor.management.mm@gmail.com</p>
                  <p className={styles.emailItem}>office@mentor-management.eu</p>
                  <p className={styles.emailItem}>v.kostova@mentor-management.eu</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle} style={{ color: currentTheme.accent }}>
                Изпратете ни съобщение
              </h2>

              {submitSuccess && (
                <div className={styles.successMessage}>
                  ✅ Съобщението беше изпратено успешно! Ще се свържем с вас скоро.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  {/* First Name Field */}
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Име"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.firstName ? styles.errorInput : ''}`}
                    />
                    {errors.firstName && (
                      <p className={styles.errorMessage}>
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name Field */}
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Фамилия"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.lastName ? styles.errorInput : ''}`}
                    />
                    {errors.lastName && (
                      <p className={styles.errorMessage}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
                  />
                  {errors.email && (
                    <p className={styles.errorMessage}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Тема (относно)"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${errors.subject ? styles.errorInput : ''}`}
                  />
                  {errors.subject && (
                    <p className={styles.errorMessage}>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Съобщение"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${styles.formTextarea} ${errors.message ? styles.errorInput : ''}`}
                  />
                  {errors.message && (
                    <p className={styles.errorMessage}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={styles.submitButton}
                  style={{
                    background: isSubmitting ? 'rgba(156, 163, 175, 0.5)' : currentTheme.accent,
                    color: currentTheme.primary
                  }}
                >
                  {isSubmitting ? (
                    <div className={styles.loadingContainer}>
                      <div className={styles.loadingSpinner}></div>
                      Изпращане...
                    </div>
                  ) : 'Изпрати съобщение'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
