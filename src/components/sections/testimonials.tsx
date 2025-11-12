'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

export const Testimonials: React.FC = () => {
  const { content } = useLanguage();
  
  const avatars = [
    "/images/nationalanthemmanonstage.jpeg", 
    "/images/nationalanthem3.jpeg"
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {content.testimonials.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <p className="italic text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4">
                <div className="relative w-12 h-12">
                  <Image 
                    src={avatars[index]} 
                    alt={testimonial.name} 
                    fill
                    className="rounded-full border-2 border-white/50 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
