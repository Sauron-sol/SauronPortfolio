// src/components/layout/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../styles/navigation.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Empêcher le défilement quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <img src="logos/logo-perso.jpeg" alt="logo" className="social-icon" />
      
      <motion.div 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        initial={false}
      >
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={() => setIsOpen(false)}
        >
          {t('navigation.home')}
        </NavLink>
        <NavLink 
          to="/projects"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={() => setIsOpen(false)}
        >
          {t('navigation.projects')}
        </NavLink>
      </motion.div>

      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;