'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';
import { LanguageContextType } from '@/types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    // Set document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add/remove font class based on language
    if (language === 'ar') {
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    content: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
