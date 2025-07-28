import React, { useState, useEffect } from "react";
import { backgroundOptions, defaultTheme } from "../utils/backgroundOptions";
import Footer from "../components/Footer";
import styles from "./About.module.css";

// Import certificate images
import cert1 from "../assets/images/certificates/Preporyka V Nikolaeva ot SA.png";
import cert2 from "../assets/images/certificates/Препоръка Директор.png";
import cert3 from "../assets/images/certificates/Препоръка Педагог.png";
import cert4 from "../assets/images/certificates/Препоръка-ВСУ.png";
import cert5 from "../assets/images/certificates/Препоръка-бизнес.png";
import cert6 from "../assets/images/certificates/Сертификат НЛП коуч.png";
import cert7 from "../assets/images/certificates/Сертификат НЛП мастър практик.png";
import cert8 from "../assets/images/certificates/Удостоверение за обучение за медиатор.png";
import cert9 from "../assets/images/certificates/Удостоверение за вписване в Единен регистър на медиаторите.png";
import cert10 from "../assets/images/certificates/Удостоверение Медиация за възстановяване на отношения.png";
import cert11 from "../assets/images/certificates/Удостоверение за специализация-Бизнес медиация.png";
import cert12 from "../assets/images/certificates/Удостоверение за специализация-Медиация на работното място.png";
import cert13 from "../assets/images/certificates/Удостоверение за специализация-Медиация между деца-родители-учители.jpg";
import cert14 from "../assets/images/certificates/диплома за ОНС доктор.png";

const About: React.FC = () => {
  const currentTheme = defaultTheme;
  const currentBackground = backgroundOptions.workspace;
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState<
    number | null
  >(null);

  const certificates = [
    { src: cert1, title: "Препоръка от СА" },
    { src: cert2, title: "Препоръка Директор" },
    { src: cert3, title: "Препоръка Педагог" },
    { src: cert4, title: "Препоръка ВСУ" },
    { src: cert5, title: "Препоръка Бизнес" },
    { src: cert6, title: "Сертификат НЛП Коуч" },
    { src: cert7, title: "Сертификат НЛП Мастър Практик" },
    { src: cert8, title: "Обучение за медиатор" },
    { src: cert9, title: "Единен регистър на медиаторите" },
    { src: cert10, title: "Медиация за възстановяване на отношения" },
    { src: cert11, title: "Специализация Бизнес медиация" },
    { src: cert12, title: "Специализация Медиация на работното място" },
    { src: cert13, title: "Специализация Медиация между деца-родители-учители" },
    { src: cert14, title: "Диплома за ОНС доктор" },
  ];

  const goToPrevious = () => {
    if (selectedCertificateIndex !== null) {
      const newIndex =
        selectedCertificateIndex === 0
          ? certificates.length - 1
          : selectedCertificateIndex - 1;
      setSelectedCertificateIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedCertificateIndex !== null) {
      const newIndex =
        selectedCertificateIndex === certificates.length - 1
          ? 0
          : selectedCertificateIndex + 1;
      setSelectedCertificateIndex(newIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCertificateIndex !== null) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setSelectedCertificateIndex(null);
      }
    }
  };

  useEffect(() => {
    if (selectedCertificateIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedCertificateIndex]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
          <div className={styles.aboutContent}>
            <h1
              className={styles.pageTitle}
              style={{ color: currentTheme.text }}
            >
              За нас
            </h1>

            <div
              className={styles.titleDivider}
              style={{ backgroundColor: currentTheme.accent }}
            ></div>

            <p
              className={styles.mainText}
              style={{ color: currentTheme.textSecondary }}
            >
              „Ментор Мениджмънт ММ“ ЕООД е консултантска фирма, специализирана
              в анализ, оптимизация и развитие на вътрешната организационна
              среда в компании от различни сектори на обществено-икономическия
              живот. Нашата цел е, чрез използването на комплексни и практически
              ориентирани методи и подходи, да помагаме на мениджърите и техните
              екипи да постигат устойчиво подобрение във взаимоотношенията си и
              в резултатите от осъществяваните от тях дейности. Вярваме, че
              всяка организация има уникален вътрешно-организационен климат,
              което изисква персонализирано отношение и поведение. Затова ние
              работим в тясно сътрудничество с управленските екипи и
              служителите, и предлагаме реално приложими и устойчиви решения.
            </p>

            <p
              className={styles.secondaryText}
              style={{ color: currentTheme.textSecondary }}
            >
              Управител на „Ментор Мениджмънт ММ“ ЕООД е Велислава Костова –
              специалист с дългогодишен практически и академичен опит в областта
              на организационното управление и развитие. Тя има образователна и
              научна степен „доктор“ в професионално направление „Администрация
              и управление“.
              <br />
              Доктор Велислава Костова е:
            </p>
            <ul className={styles.featuresList}>
                <li
                  className={styles.featureItem}
                  style={{ color: currentTheme.textSecondary }}
                >
                  <span
                    className={styles.featureBullet}
                    style={{ color: currentTheme.accent }}
                  >
                    •
                  </span>
                  сертифициран медиатор с редица специализации, в това число по
                  медиация на работното място, медиация за възстановяване на
                  отношения и бизнес медиация
                </li>
                <li
                  className={styles.featureItem}
                  style={{ color: currentTheme.textSecondary }}
                >
                  <span
                    className={styles.featureBullet}
                    style={{ color: currentTheme.accent }}
                  >
                    •
                  </span>
                  сертифициран НЛП личен и бизнес коуч, което подпомага работата
                  и при изграждане и трансформиране на личностни и екипни модели
                  на поведение.
                </li>
            </ul>
            <br />
            <p>
              <em> Мисия на „Ментор Мениджмънт ММ“ ЕООД</em><br />С мисъл за
              бъдещето на Вашия бизнес, ние предлагаме работещи персонализирани
              решения за развитието на устойчива вътрешноорганизационна среда –
              с креативни лидери и ефективни екипи.
            </p>
            <br />
            <p>
              <em>Корпоративно послание</em><br />
              С мъдрост в управлението и с мисъл за бъдещето!
            </p>
          </div>

          {/* Users and Services Section */}
          <div className={styles.aboutContent} style={{ marginTop: '3rem' }}>
            <h2
              className={styles.sectionTitle}
              style={{ color: currentTheme.text }}
            >
              Кои могат да ползват услугите ни?
            </h2>

            <div
              className={styles.sectionDivider}
              style={{ backgroundColor: currentTheme.accent }}
            ></div>

            <p
              className={styles.mainText}
              style={{ color: currentTheme.textSecondary, marginBottom: '1.5rem' }}
            >
              Ползватели на продуктите и услугите на "Ментор Мениджмънт ММ" ЕООД могат да бъдат:
            </p>

            <ul className={styles.featuresList}>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Мениджъри на екипи, в това число:
                <ul className={styles.featuresList} style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                  <li
                    className={styles.featureItem}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    <span
                      className={styles.featureBullet}
                      style={{ color: currentTheme.accent }}
                    >
                      •
                    </span>
                    Топ-мениджъри
                  </li>
                  <li
                    className={styles.featureItem}
                    style={{ color: currentTheme.textSecondary }}
                  >
                    <span
                      className={styles.featureBullet}
                      style={{ color: currentTheme.accent }}
                    >
                      •
                    </span>
                    Мениджъри на различни йерархични нива в структурата на организацията
                  </li>
                </ul>
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Отделни служители
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Различни групи в организацията
              </li>
            </ul>

            <h3
              style={{ 
                color: currentTheme.text, 
                fontSize: '1.5rem', 
                marginTop: '2.5rem', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}
            >
              Как можем да ви помогнем?
            </h3>

            <p
              className={styles.mainText}
              style={{ color: currentTheme.textSecondary, marginBottom: '1.5rem' }}
            >
              Екипът на "Ментор Мениджмънт ММ" ЕООД може да ви съдейства за:
            </p>

            <ul className={styles.featuresList}>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Изграждането на хармонична работна среда, без конфликти и без напрежение при изпълняване на служебните задължения
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Получаване на признание за полаганите от вас усилия
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Изграждане на доверие между хора и екипи
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Постигане на увереност в собствените си възможности
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Изграждане на оптимална организационна структура на Вашата организация или екип
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Подобряване на основни бизнес процеси
              </li>
            </ul>
          </div>

          {/* Trust and Results Section */}
          <div className={styles.aboutContent} style={{ marginTop: '3rem' }}>
            <h2
              className={styles.sectionTitle}
              style={{ color: currentTheme.text }}
            >
              Доверие и резултати:
            </h2>

            <div
              className={styles.sectionDivider}
              style={{ backgroundColor: currentTheme.accent }}
            ></div>

            <p
              className={styles.mainText}
              style={{ color: currentTheme.textSecondary, marginBottom: '1.5rem' }}
            >
              Един от нашите клиенти е "Ди Ай Ес" ЕООД, където изпълнихме цялостна програма, включваща:
            </p>

            <ul className={styles.featuresList}>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Организационен редизайн
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Въвеждане на система за стимули и санкции
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Усъвършенстване на вътрешна документация
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Провеждане на специализирани тиймбилдинги с фокус върху груповата динамика, работата в екип и управлението на междуличностни взаимоотношения.
              </li>
            </ul>

            <p
              className={styles.mainText}
              style={{ color: currentTheme.textSecondary, marginTop: '2rem', marginBottom: '1.5rem' }}
            >
              По настояще компанията се възползва от абонаментен пакет, който включва:
            </p>

            <ul className={styles.featuresList}>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Текуща оценка и атестиране на служителите
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Управление на взаимоотношенията и работния климат
              </li>
              <li
                className={styles.featureItem}
                style={{ color: currentTheme.textSecondary }}
              >
                <span
                  className={styles.featureBullet}
                  style={{ color: currentTheme.accent }}
                >
                  •
                </span>
                Провеждане на фирмени тиймбилдинги
              </li>
            </ul>
          </div>

          {/* Certificates Gallery */}
          <div className={styles.certificatesContent}>
            <div className={styles.certificatesGallery}>
              <h2
                className={styles.sectionTitle}
                style={{ color: currentTheme.text }}
              >
                Сертификати и Препоръки
              </h2>

              <div
                className={styles.sectionDivider}
                style={{ backgroundColor: currentTheme.accent }}
              ></div>

              <div className={styles.certificatesGrid}>
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className={styles.certificateItem}
                    onClick={() => setSelectedCertificateIndex(index)}
                  >
                    <img
                      src={certificate.src}
                      alt={certificate.title}
                      className={styles.certificateImage}
                    />
                    <div className={styles.certificateInfo}>
                      <h3
                        className={styles.certificateTitle}
                        style={{ color: currentTheme.accent }}
                      >
                        {certificate.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for full-size certificate viewing */}
        {selectedCertificateIndex !== null && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedCertificateIndex(null)}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalInner}>
                {/* Header with title, counter, and navigation buttons */}
                <div className={styles.modalHeader}>
                  {/* Left navigation button */}
                  <button
                    onClick={goToPrevious}
                    className={`${styles.navButton} ${styles.prevButton}`}
                    style={{
                      background: currentTheme.accent,
                      color: currentTheme.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    <span className={styles.buttonContent}>&#8592;</span>
                  </button>

                  {/* Centered title and counter */}
                  <div>
                    <h3
                      className={styles.modalTitle}
                      style={{ color: currentTheme.accent }}
                    >
                      {certificates[selectedCertificateIndex].title}
                    </h3>
                    <p
                      className={styles.counter}
                      style={{ color: currentTheme.textSecondary }}
                    >
                      {selectedCertificateIndex + 1} от {certificates.length}
                    </p>
                  </div>

                  {/* Right navigation button */}
                  <button
                    onClick={goToNext}
                    className={`${styles.navButton} ${styles.nextButton}`}
                    style={{
                      right: selectedCertificateIndex === 8 ? "62px" : "110px",
                      background: currentTheme.accent,
                      color: currentTheme.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    <span className={styles.buttonContent}>&#8594;</span>
                  </button>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCertificateIndex(null)}
                    className={`${styles.navButton} ${styles.closeButton} ${
                      selectedCertificateIndex === 8
                        ? styles.closeButtonSpecial
                        : ""
                    }`}
                    style={{
                      right: selectedCertificateIndex === 8 ? "2px" : "50px",
                      background: currentTheme.accent,
                      color: currentTheme.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    <span className={styles.buttonContent}>×</span>
                  </button>
                </div>

                {/* Certificate image */}
                <img
                  src={certificates[selectedCertificateIndex].src}
                  alt="Certificate"
                  className={styles.certificateDisplayImage}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default About;
