'use client';

import React from 'react';
import { UsersIcon, BookOpenIcon, ShieldCheckIcon } from '@/components/ui/icons';
import { WhyUsContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

export const WhyUs: React.FC = () => {
  const { content } = useLanguage();
  
  const icons = [
    <UsersIcon key="users" className="h-8 w-8 text-blue-600" />,
    <BookOpenIcon key="book" className="h-8 w-8 text-blue-600" />,
    <ShieldCheckIcon key="shield" className="h-8 w-8 text-blue-600" />
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            {content.whyUs.title}
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            {content.whyUs.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {content.whyUs.features.map((feature, index) => (
            <div key={feature.title} className="p-8 bg-white rounded-xl shadow-lg">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
