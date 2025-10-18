'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, GraduationCapIcon } from '@/components/ui/icons';
import { HeaderContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

interface HeaderProps {
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { language, setLanguage, content } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangButtonClick = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <GraduationCapIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">OM EL-Mo'mneen</span>
        </a>
        
        <nav className="hidden md:flex gap-6 items-center">
          {content.header.navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={handleLangButtonClick} variant="outline" size="sm">
            {content.languageName}
          </Button>
        </nav>
        
        <div className="flex items-center gap-2 md:hidden">
          <Button onClick={handleLangButtonClick} variant="outline" size="sm">
            {content.languageName}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button onClick={onRegisterClick}>
            {content.header.enroll}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {content.header.navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button 
              onClick={() => { 
                onRegisterClick(); 
                setIsMenuOpen(false); 
              }} 
              className="w-full mt-2"
            >
              {content.header.enroll}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
