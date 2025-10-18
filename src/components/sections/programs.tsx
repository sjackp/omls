'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProgramsContent } from '@/types';
import { useLanguage } from '@/lib/language-context';

export const Programs: React.FC = () => {
  const { content } = useLanguage();
  
  const programImages = [
    "https://images.unsplash.com/photo-1576765689493-5452331904b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
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
