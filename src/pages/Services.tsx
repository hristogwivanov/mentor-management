import React from "react";
import { backgroundOptions, defaultTheme } from "../utils/backgroundOptions";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBalanceScale,
  faCogs,
  faGraduationCap,
  faLightbulb,
  faSitemap,
  faStar,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  const currentTheme = defaultTheme;
  const currentBackground = backgroundOptions.corporate;

  const services = [
    {
      title: "Лидерство в действие",
      description: "3 месечна програма за развитие на лидерски умения. Програмата е предназначена за мениджъри и включва следните модули:",
      features: [
        "Аз делегирам резултатно",
        "Ефективност на моя ръководен стил",
        "Целеполагам и взимам решения с лекота",
        "Как да \"поправям\" \"счупени\" взаимоотношения",
        "Моите успешни \"меки\" умения",
        "Вдъхновяващо лидерство",
        "Управление на времето",
      ],
      icon: faStar,
    },
    {
      title: "Организиране на тиймбилдинги",
      description: "Организиране на тиймбилдинги от областта на груповата динамика за подобряване на уменията за работа в екип и междуличностните взаимоотношения",
      features: [],
      icon: faUsers,
    },
    {
      title: "Конфликтите като възможност на работното място",
      description: "Включени теми:",
      features: [
        "Природа на конфликта",
        "Стратегии за справяне с конфликтни ситуации",
        "Превенция на междуличностния конфликт",
        "Управление на взаимоотношенията на работното място чрез медиаторски техники и подходи"
      ],
      icon: faBalanceScale,
    },
    {
      title: "Аз ръководителят - опорни точки в управлението",
      description: "Включени теми:",
      features: [
        "Правила и техники за делегиране на права",
        "Властта – враг, приятел или инструмент за въздействие",
        "Мога ли да работя ситуационно и резултатно?",
        "Управление на времето – как да направя „мисията“ възможна"
      ],
      icon: faUserTie,
    },
    {
      title: "Моят екип е успешен",
      description: "Менторски програми с персонално консултиране за подобряване на вътрешноорганизационната среда или за решаване на конкретен казус, свързан с взаимоотношенията и взаимодействията на работното място",
      features: [
        "По-важни факти за груповата динамика. За какво да внимавам в поведението на членовете на моя екип?",
        "Взаимоотношения и роли в екипа",
        "Как да се справям с трудните взаимоотношения"
      ],
      icon: faAward,
    },
    {
      title: "Организационен редизайн",
      description: "Комплексни услуги за оптимизиране на организационната структура и процеси:",
      features: [
        "Диагностика на организационната среда – анализ на организационната структура и на ефективността на основните управленски процеси",
        "Проектиране на нова организационна структура и изработка на длъжностни характеристики",
        "Архитектура на основните управленски процеси и алгоритми за информационен обмен",
        "Идентифициране и коригиране на вътрешно-организационни затруднения и конфликтни зони",
        "Разработване на персонализирани HR стратегии за подобряване на мотивацията, ограничаване на текучеството и повишаване на ангажираността на служителите, чрез създаване на позитивна организационна култура"
      ],
      icon: faSitemap,
    },
  ];

  const productPortfolio = [
    {
      title: "Продуктовото портфолио на \"Ментор Мениджмънт ММ\" ЕООД включва:",
      features: [
        "Персонализирани и групови обучения и семинари за мениджъри, служители и екипи",
        "Персонализирани и групови тренинги",
        "Фирмен тиймбилдинг",
        "Решаване на персонализирани казуси на работното място",
        "Личен коучинг за мениджъри за разкриване на вътрешния им потенциал и за утвърждаването им като лидери",
        "Медиация при вътрешноорганизационни конфликти",
        "Личен коучинг за служители за повишаване на пригодността им на работното място",
        "Индивидуално консултантско обслужване на фирми за подобряване на вътрешноорганизационната среда и организационен редизайн",
        "Абонаментно консултантско обслужване на фирми за подобряване на вътрешноорганизационната среда",
      ],
      conclusion: "В \"Ментор Мениджмънт ММ\" ЕООД предлагаме интегрирани, персонализирани консултантски решения, които са съобразени с конкретните потребности на всяка организация. Услугите ни са насочени към подобряване на вътрешния комуникационен обмен, повишаване на мотивацията на служителите и изграждането на устойчива и здравословна работна среда.",
    },
  ];

  const needs = [
    {
      title: "Ако вие се нуждаете от:",
      features: [
        "изслушване, разбиране и проверка на идеите си;",
        "смяна на фокуса за по-добро разбиране на дадена ситуация;",
        "техники за водене на трудни разговори;",
        "умения за вземане на решения;",
        "умения за работа с хора и екипи;",
        "увереност при справяне с междуличностни проблеми;",
        "способност да давате обратна връзка;",
        "определяне на важните за вас неща и пренареждане на приоритетите;",
      ],
    },
  ];

  const organizationalChallenges = [
    {
      title: "Ако във вашата организация или екип има едно или няколко от следните:",
      features: [
        "неспазване на сроковете за изпълнение на задачите;",
        "неспазване на указанията за работа;",
        "неспазване на фирмената тайна;",
        "спорове от типа \"кой е по-по-най\";",
        "самозабравяне на отделни служители;",
        "междуличностни конфликти и интриги;",
        "ниска мотивация;",
        "липса на разбиране;",
        "текучество на кадри;",
        "липса на признание за полаганите усилия;",
        "ниска лична самооценка;",
      ],
      conclusion: "Ние от \"Ментор Мениджмънт ММ\" ЕООД можем да Ви предложим работещи решения.",
    },
  ];

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
          <div className={styles.servicesContent}>
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

              <div className={styles.needsSection}>
                {needs.map((need, index) => (
                  <div key={index} className={styles.needsListCard}>
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      {need.title}
                    </h2>
                    <ul className={styles.featuresList}>
                      {need.features.map((feature, featureIndex) => (
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
                            e.currentTarget.style.color =
                              currentTheme.textSecondary;
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
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      Ние от „Ментор Мениджмънт ММ“ ЕООД можем да Ви предложим
                      работещи решения.
                    </h2>
                  </div>
                ))}
              </div>

              <div className={styles.needsSection}>
                {organizationalChallenges.map((challenge, index) => (
                  <div key={index} className={styles.needsListCard}>
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      {challenge.title}
                    </h2>
                    <ul className={styles.featuresList}>
                      {challenge.features.map((feature, featureIndex) => (
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
                            e.currentTarget.style.color =
                              currentTheme.textSecondary;
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
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      {challenge.conclusion}
                    </h2>
                  </div>
                ))}
              </div>

              <div className={styles.needsSection}>
                {productPortfolio.map((portfolio, index) => (
                  <div key={index} className={styles.needsListCard}>
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      {portfolio.title}
                    </h2>
                    <ul className={styles.featuresList}>
                      {portfolio.features.map((feature, featureIndex) => (
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
                            e.currentTarget.style.color =
                              currentTheme.textSecondary;
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
                    <h2
                      className={styles.needsTitle}
                      style={{ color: currentTheme.text }}
                    >
                      {portfolio.conclusion}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            <h2
              className={styles.needsTitle}
              style={{ 
                color: currentTheme.text,
                textAlign: 'center',
                marginTop: '3rem',
                marginBottom: '2rem'
              }}
            >
              ПРЕДЛАГАНИ ОБРАЗОВАТЕЛНИ И ПРАКТИКО-ПРИЛОЖНИ ПРОГРАМИ:
            </h2>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
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
                          e.currentTarget.style.color =
                            currentTheme.textSecondary;
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
            <p 
  style={{ 
    fontWeight: 'bold',
    color: currentTheme.text,
    textAlign: 'center',
    marginTop: '3rem',
    marginBottom: '2rem',
    padding: '0 2rem',
    lineHeight: '1.6'
  }}
>
  Продължителността на менторските програми, обученията, семинарите, тренингите и тиймбилдингите, както и времето за работа по всяка от включените теми, подлежи на допълнително съгласуване според потребностите на заявителя. Водещ критерии при проектиране на консултантската услуга от „Ментор Мениджмънт ММ" ЕООД е индивидуалният подход към всеки бизнес, казус и участници.
</p>
          </div>
          
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Services;
