// src/components/layout/RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { ThemeToggle } from '../../App'; // Add this import
import LanguageSelector from '../LanguageSelector'; // Add this import

const RootLayout = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <ThemeToggle />
      <LanguageSelector />
    </div>
  );
};

export default RootLayout;