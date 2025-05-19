"use client"

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckSquare, Palette, Search, Settings } from 'lucide-react';
import { motion } from '@/lib/motion';
import { designProcess } from '@/lib/data';

const iconComponents = {
  Search: Search,
  Palette: Palette,
  Settings: Settings,
  CheckSquare: CheckSquare
};

export default function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-16 md:py-24 bg-background" ref={containerRef}>
      <div className="container">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Our Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A straightforward approach to creating your perfect hair label design.
          </p>
        </div>
        
        <div className="relative">
          {/* Connect line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%-120px)] bg-border hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {designProcess.map((step, index) => {
              const IconComponent = iconComponents[step.icon as keyof typeof iconComponents];
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <span className="text-4xl font-serif text-muted-foreground/20 font-bold">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}