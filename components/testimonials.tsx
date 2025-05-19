"use client"

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from '@/lib/motion';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-primary/5">
          <Quote className="w-full h-full" />
        </div>
        
        <div className="text-center space-y-3 mb-12 relative">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from brands who have transformed their product packaging with our designs.
          </p>
        </div>
        
        <div className="relative px-4 md:px-10 lg:px-20">
          <div 
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="shrink-0 w-full bg-background shadow-sm border-none"
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="italic text-lg md:text-xl leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-medium text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={handlePrev}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={handleNext}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}