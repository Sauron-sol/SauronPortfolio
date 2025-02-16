// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-selector">
      {['fr', 'en', 'de'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`lang-btn ${i18n.language === lang ? 'active' : ''}`}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/logos/flags/${lang}.svg`}
            alt={lang}
            className="lang-flag"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;