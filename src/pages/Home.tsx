// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';
import { useTranslation } from 'react-i18next';

// Au début du fichier Home.tsx, ajouter l'interface
interface Activity {
  title: string;
  description: string;
  period: string;
  details?: string; // Le ? rend le champ optionnel
}

interface ActivityCategory {
  category: string;
  items: Activity[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  verificationUrl?: string;
  certId?: string;
}

interface Skill {
  name: string;
  level: number;
  logo?: string; // Make logo optional
}

interface Language {
  name: string;
  level: string;
  flag?: string; // Optionnel pour ajouter des drapeaux
}

// Au début du fichier, avec les autres interfaces
interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  logo?: string; // Optional car certaines expériences n'ont pas de logo
  tasks: string[]; // Défini comme un tableau de strings
  technologies: string[];
  type?: string; // Optional car toutes les expériences n'ont pas de type
}

const getLogoPath = (tech: string) => {
  return process.env.PUBLIC_URL + `/logos/languages/${tech.toLowerCase().replace(/\s+/g, '-')}.svg`;
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    }
  }
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Keep your existing typing effect
  useEffect(() => {
    const text = "Ingénieur Cybersécurité";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Add cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  const skills: Record<string, Skill[]> = {
    security: [
      {
        name: t('skills.items.burpsuite'),
        level: 85,
        logo: getLogoPath('burpsuite')
      },
      {
        name: t('skills.items.dastardly'),
        level: 75,
        logo: getLogoPath('dastardly')
      },
      {
        name: t('skills.items.nuclei'),
        level: 80,
        logo: getLogoPath('nuclei')
      },
      {
        name: t('skills.items.katana'),
        level: 80,
        logo: getLogoPath('katana')
      },
      {
        name: t('skills.items.sqlmap'),
        level: 85,
        logo: getLogoPath('sqlmap')
      },
      {
        name: t('skills.items.xsstrike'),
        level: 75,
        logo: getLogoPath('xsstrike')
      },
    ],
    development: [
      { 
        name: t('skills.items.react'), 
        level: 90, 
        logo: getLogoPath('react')
      },
      { 
        name: t('skills.items.typescript'),
        level: 85, 
        logo: getLogoPath('typescript')
      },
      { 
        name: t('skills.items.nodejs'),
        level: 80, 
        logo: getLogoPath('node-js')
      },
      { 
        name: t('skills.items.css'),
        level: 85, 
        logo: getLogoPath('css')
      },
      { 
        name: t('skills.items.oop'),
        level: 85,
        logo: getLogoPath('object-oriented')
      }
    ],
    blockchain: [
      { 
        name: t('skills.items.web3_dev'),
        level: 80, 
        logo: getLogoPath('solidity')
      },
      { 
        name: t('skills.items.web3_security'),
        level: 75, 
        logo: getLogoPath('web3-security')
      }
    ],
    operations: [
      { 
        name: t('skills.items.devops'),
        level: 80, 
        logo: getLogoPath('devops')
      },
      { 
        name: t('skills.items.devsecops'),
        level: 75, 
        logo: getLogoPath('security')
      }
    ],
    tools: [
      {
        name: t('skills.items.github'),
        level: 85,
        logo: getLogoPath('github')
      },
      {
        name: t('skills.items.gitlab'),
        level: 85,
        logo: getLogoPath('gitlab')
      },
      {
        name: t('skills.items.azure_devops'),
        level: 80,
        logo: getLogoPath('azure-devops')
      },
      {
        name: t('skills.items.vscode'),
        level: 90,
        logo: getLogoPath('vscode')
      },
      {
        name: t('skills.items.copilot'),
        level: 85,
        logo: getLogoPath('copilot')
      },
      {
        name: t('skills.items.cursor'),
        level: 85,
        logo: getLogoPath('cursor')
      }
    ],
    os: [
      {
        name: t('skills.items.unix'),
        level: 85,
        logo: getLogoPath('unix')
      },
      {
        name: t('skills.items.macos'),
        level: 90,
        logo: getLogoPath('macos')
      },
      {
        name: t('skills.items.windows'),
        level: 80,
        logo: getLogoPath('windows')
      }
    ],
    soft: [
      {
        name: t('skills.items.leadership'),
        level: 85,
        logo: getLogoPath('leadership')
      },
      {
        name: t('skills.items.management'),
        level: 80,
        logo: getLogoPath('management')
      }
    ],
  };

  const education = [
    {
      period: t('education.msc.period'),
      school: t('education.msc.school'),
      program: t('education.msc.program'),
      degree: t('education.msc.degree'),
      isPresent: true
    },
    {
      period: t('education.epitech.period'),
      school: t('education.epitech.school'),
      program: t('education.epitech.program'),
      degree:  t('education.epitech.bachelor'),
      gpa: t('education.epitech.gpa')
    }
  ];

  const experiences: Experience[] = [
    {
      period: t('experience.orange.present'),
      role: t('experience.orange.role'),
      company: t('experience.orange.company'),
      location: t('experience.orange.location'),
      logo: process.env.PUBLIC_URL + "/logos/orange.png",
      tasks: Array.isArray(t('experience.orange.tasks', { returnObjects: true })) 
        ? t('experience.orange.tasks', { returnObjects: true }) as string[]
        : [],
      technologies: [
        "Docker",
        "Kubernetes",
        "Gitlab CI",
        "Jenkins",
        "Nuclei",
        "Katana",
        "SQLMap",
        "SAST",
        "DAST"
      ]
    },
    {
      period: t('experience.amadeus.present'),
      role: t('experience.amadeus.role'),
      company: t('experience.amadeus.company'),
      location: t('experience.amadeus.location'),
      logo: process.env.PUBLIC_URL + "/logos/amadeus.png",
      tasks: Array.isArray(t('experience.amadeus.tasks', { returnObjects: true }))
        ? t('experience.amadeus.tasks', { returnObjects: true }) as string[]
        : [],
      technologies: [
        "Python",
        "MongoDB",
        "Security",
        "Automation",
        "Vulnerability Assessment"
      ],
      type: "internship"
    },
    {
      period: t('experience.alithya.present'),
      role: t('experience.alithya.role'),
      company: t('experience.alithya.company'),
      location: t('experience.alithya.location'),
      logo: process.env.PUBLIC_URL + "/logos/alithya.png",
      tasks: Array.isArray(t('experience.alithya.tasks', { returnObjects: true }))
        ? t('experience.alithya.tasks', { returnObjects: true }) as string[]
        : [],
      technologies: [
        "Apache Spark",
        "Kafka",
        "Elastic Search",
        "CassandraDB",
        "Python",
        "Big Data",
        "Fraud Detection"
      ],
      type: "contract"
    }
  ];

  const defaultLogo = process.env.PUBLIC_URL + "/logos/placeholder.png";

  // Mettre à jour la déclaration de activities avec le typage
  const activities: ActivityCategory[] = [
    {
      category: t('activities.categories.freelance'),
      items: [
        {
          title: t('activities.items.videoEditing.title'),
          description: t('activities.items.videoEditing.description'),
          period: t('activities.items.videoEditing.period'),
          details: t('activities.items.videoEditing.details')
        }
      ]
    },
  ];

  // Ajouter après les autres constantes
  const certifications: Certification[] = [
    {
      title: t('certifications.items.cisco.title'),
      issuer: t('certifications.items.cisco.issuer'),
      date: t('certifications.items.cisco.period'),
      badge: process.env.PUBLIC_URL + "/logos/cisco.jpeg",
      verificationUrl: t('certifications.items.cisco.link'),
    },
    {
      title: t('certifications.items.coursera.title'),
      issuer: t('certifications.items.coursera.issuer'),
      date: t('certifications.items.coursera.period'),
      badge: process.env.PUBLIC_URL + "/logos/coursera.jpeg",
      verificationUrl: t('certifications.items.coursera.link'),
      certId: t('certifications.items.coursera.id')
    }
  ];

  // Mise à jour dans Home.tsx des icônes
  const contactLinks = [
    {
      platform: 'github',
      svg: process.env.PUBLIC_URL + '/logos/github.svg',
      url: 'https://github.com/Sauron-sol'
    },
    {
      platform: 'linkedin',
      svg: process.env.PUBLIC_URL + '/logos/linkedin.png',
      url: 'https://www.linkedin.com/in/florian-%E2%82%BF-9553a8203/'
    },
    {
      platform: 'email',
      svg: process.env.PUBLIC_URL + '/logos/email.png',
      url: 'mailto:florian.bonamy@epitech.eu'
    }
  ];

  const languages: Language[] = [
    {
      name: t('languages.french'),
      level: t('languages.native'),
      flag: process.env.PUBLIC_URL + "/logos/flags/fr.svg"
    },
    {
      name: t('languages.english'),
      level: t('languages.professional'),
      flag: process.env.PUBLIC_URL + "/logos/flags/en.svg"
    },
    {
      name: t('languages.german'),
      level: t('languages.intermediate'),
      flag: process.env.PUBLIC_URL + "/logos/flags/de.svg"
    }
  ];

  return (
    <div className="home-container">
      <motion.div className="title-container">
        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="main-title"
        >
          Florian Bonamy
        </motion.h1>
        
        <motion.h2
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="job-title"
        >
          {displayedText}
          <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>_</span>
        </motion.h2>
      </motion.div>

      <motion.section 
        className="intro-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.title')}</h2>
        <p>{t('about.text')}</p>
      </motion.section>

      <motion.section 
        className="experience-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('experience.title')}</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <img 
                    src={exp.logo || defaultLogo} 
                    alt={`${exp.company} logo`} 
                    className="company-logo" 
                    onError={(e) => {
                      console.log(`Failed to load logo for ${exp.company}`);
                      e.currentTarget.src = defaultLogo;
                    }}
                  />
                  <div className="company-info">
                    <span className="period">{exp.period}</span>
                    <h3>{exp.role}</h3>
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="tasks-list">
                  {(exp.tasks && Array.isArray(exp.tasks)) ? 
                    exp.tasks.map((task: string, i: number) => (
                      <li key={i}>{task}</li>
                    )) : 
                    <li>No tasks available</li>
                  }
                </ul>
                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="skills-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('skills.title')}</h2>
        
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div 
            key={category}
            className="skills-category"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3 className="category-title">
              {t(`skills.categories.${category}`)}
            </h3>
            <div className="skills-grid">
              {skillList.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill.logo && (
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`} 
                      className="skill-logo"
                      onError={(e) => {
                        console.log(`Failed to load logo for ${skill.name}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        className="education-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('education.title')}</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <span className="year">{edu.period}</span>
                <div className="school-info">
                  <h3>{edu.school}</h3>
                  <span className="program">{edu.program}</span>
                </div>
                <h4>{edu.degree}</h4>
                {edu.gpa && <p className="gpa">{edu.gpa}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="activities-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('activities.title')}</h2>
        <div className="activities-grid">
          {activities.map((category, index) => (
            <motion.div 
              key={category.category}
              className="activity-category"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="activities-list">
                {category.items.map((activity, i) => (
                  <motion.div 
                    key={activity.title}
                    className="activity-item"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h4>{activity.title}</h4>
                    <span className="period">{activity.period}</span>
                    <p>{activity.description}</p>
                    {activity.details && <p className="details">{activity.details}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="certifications-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('certifications.title')}</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="certification-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {cert.badge && <img src={cert.badge} alt={cert.title} className="cert-badge" />}
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="date">{cert.date}</span>
              {cert.certId && <div className="cert-id">ID: {cert.certId}</div>}
              {cert.verificationUrl && (
                <a 
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-link"
                >
                  {t('certifications.verify')}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="languages-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('languages.title')}</h2>
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <motion.div 
              key={lang.name}
              className="language-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {lang.flag && <img src={lang.flag} alt={`${lang.name} flag`} className="language-flag" />}
              <h3>{lang.name}</h3>
              <p>{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('contact.title')}</h2>
        <p className="contact-intro">
          {t('contact.intro')}
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="contact-icon"
              target={link.platform !== 'email' ? '_blank' : undefined}
              rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
            >
              <img src={link.svg} alt={link.platform} />
            </a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;