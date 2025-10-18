'use client';

import React from 'react';
import Image from 'next/image';
import { AboutContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

export const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
              {content.about.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.about.p1}
            </p>
            <p className="mt-4 text-gray-600">
              {content.about.p2}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Happy students graduating"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
