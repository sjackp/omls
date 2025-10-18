'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FooterContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

interface FooterProps {
  onRegisterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  const { content } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {content.footer.contactTitle}
            </h3>
            <p className="text-sm">{content.footer.address}</p>
            <p className="text-sm mt-1">{content.footer.phone}</p>
            <p className="text-sm mt-1">{content.footer.email}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {content.footer.linksTitle}
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {content.footer.link1}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  {content.footer.link2}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {content.footer.link3}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {content.footer.ctaTitle}
            </h3>
            <p className="text-sm mb-4">{content.footer.ctaDescription}</p>
            <Button 
              onClick={onRegisterClick} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {content.footer.ctaButton}
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
