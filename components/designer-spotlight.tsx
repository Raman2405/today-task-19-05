"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';
import { designers } from '@/lib/data';

export default function DesignerSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="outline" className="mb-4">Creative Minds</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Featured Designers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented designers behind our most stunning hair label creations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {designers.map((designer, index) => (
            <DesignerCard 
              key={designer.id}
              designer={designer}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/designers">View All Designers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesignerCard({ 
  designer, 
  index 
}: { 
  designer: typeof designers[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div 
        className="group relative h-full bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src={designer.image}
            alt={designer.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-medium">{designer.name}</h3>
          <p className="text-white/80 mb-2">{designer.specialty}</p>
          <div className="flex items-center">
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
              {designer.projects} Projects
            </Badge>
          </div>
          
          <div className={cn(
            "max-h-0 overflow-hidden transition-all duration-300",
            isHovered ? "max-h-40 mt-4" : "max-h-0 mt-0"
          )}>
            <p className="text-white/90 text-sm mb-4">{designer.bio}</p>
            <Button size="sm" variant="secondary" asChild>
              <Link href={`/designers/${designer.id}`}>
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}