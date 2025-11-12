'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProgramsContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

export const Programs: React.FC = () => {
  const { content } = useLanguage();
  
  const programImages = [
    "/images/nationalanthem1.jpeg",
    "/images/nationalanthem2.jpeg",
    "/images/nationalanthem3.jpeg"
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            {content.programs.title}
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            {content.programs.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.programs.items.map((program, index) => (
            <Card key={program.title} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image 
                  src={programImages[index]} 
                  alt={program.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
