'use client';

import React, { useState } from 'react';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Programs } from '@/components/sections/programs';
import { WhyUs } from '@/components/sections/why-us';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/sections/footer';
import { RegistrationModal } from '@/components/forms/registration-modal';
import { LanguageProvider } from '@/lib/language-context';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <LanguageProvider>
      <div className="bg-white text-gray-700 antialiased">
        <Header onRegisterClick={handleOpenModal} />
        
        <main>
          <Hero onRegisterClick={handleOpenModal} />
          <About />
          <Programs />
          <WhyUs />
          <Testimonials />
        </main>
        
        <Footer onRegisterClick={handleOpenModal} />
        
        <RegistrationModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </LanguageProvider>
  );
}
