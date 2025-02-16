import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Créer un contexte pour le thème
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Export the ThemeToggle component
export const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" />
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" />
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" />
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "projects", element: <Projects /> }
    ]
  }
], {
  future: {
    v7_relativeSplatPath: true
  }
});

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  const themeContextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export default App;
