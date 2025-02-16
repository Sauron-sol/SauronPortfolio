// src/pages/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/projects.css';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
  demo?: string;
}

const Projects = () => {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: Array.isArray(t('projects.portfolio.technologies', { returnObjects: true }))
        ? t('projects.portfolio.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.portfolio.github')
    },
    {
      id: 2,
      title: t('projects.lottery.title'),
      description: t('projects.lottery.description'),
      technologies: Array.isArray(t('projects.lottery.technologies', { returnObjects: true }))
        ? t('projects.lottery.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.lottery.github')
    },
    {
      id: 3,
      title: t('projects.security.title'),
      description: t('projects.security.description'),
      technologies: Array.isArray(t('projects.security.technologies', { returnObjects: true }))
        ? t('projects.security.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.security.github')
    },
    {
      id: 4,
      title: t('projects.nft.title'),
      description: t('projects.nft.description'),
      technologies: Array.isArray(t('projects.nft.technologies', { returnObjects: true }))
        ? t('projects.nft.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.nft.github')
    },
    {
      id: 5,
      title: t('projects.cia.title'),
      description: t('projects.cia.description'),
      technologies: Array.isArray(t('projects.cia.technologies', { returnObjects: true }))
        ? t('projects.cia.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.cia.github')
    },
    {
      id: 6,
      title: t('projects.cybertoolbox.title'),
      description: t('projects.cybertoolbox.description'),
      technologies: Array.isArray(t('projects.cybertoolbox.technologies', { returnObjects: true }))
        ? t('projects.cybertoolbox.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.cybertoolbox.github')
    },
    {
      id: 7,
      title: t('projects.ohlerat.title'),
      description: t('projects.ohlerat.description'),
      technologies: Array.isArray(t('projects.ohlerat.technologies', { returnObjects: true }))
        ? t('projects.ohlerat.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.ohlerat.github')
    },
    {
      id: 8,
      title: t('projects.s0p0wn3d.title'),
      description: t('projects.s0p0wn3d.description'),
      technologies: Array.isArray(t('projects.s0p0wn3d.technologies', { returnObjects: true }))
        ? t('projects.s0p0wn3d.technologies', { returnObjects: true }) as string[]
        : [],
      github: t('projects.s0p0wn3d.github')
    }
  ];

  const getLogoPath = (tech: string) => {
    return process.env.PUBLIC_URL + `/logos/languages/${tech.toLowerCase().replace(/\s+/g, '-')}.svg`;
  };

  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('projects.title')}
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map(tech => (
                <div key={tech} className="tech-item">
                  <img 
                    src={getLogoPath(tech)}
                    alt={tech}
                    className="tech-logo"
                    onError={(e) => {
                      console.log(`Failed to load logo for ${tech}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <img 
                    src={process.env.PUBLIC_URL + '/logos/github.svg'} 
                    alt="GitHub" 
                  />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;