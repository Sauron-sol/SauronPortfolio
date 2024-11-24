// src/components/layout/Navigation.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navigation.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="navbar">
        <img src="logos/logo-perso.jpeg" alt="logo" className="social-icon" />
      
      <motion.div 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
      >
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {t('navigation.home')}
        </NavLink>
        <NavLink 
          to="/projects"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {t('navigation.projects')}
        </NavLink>
      </motion.div>

      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;