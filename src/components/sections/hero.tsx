'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeroContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const { content } = useLanguage();

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <Image 
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="Modern school building"
        fill
        className="object-cover"
        priority
      />
      
      <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          {content.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
          {content.hero.subtitle}
        </p>
        <div className="mt-8">
          <Button 
            onClick={onRegisterClick} 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform transition hover:scale-105"
          >
            {content.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
