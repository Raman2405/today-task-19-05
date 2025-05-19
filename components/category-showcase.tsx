"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from '@/lib/motion';
import { categories } from '@/lib/data';

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect label design for your specific hair product category.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" asChild>
            <Link href="/categories" className="group">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ 
  category, 
  index 
}: { 
  category: typeof categories[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link 
        href={`/category/${category.id}`}
        className="block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg aspect-[4/5] group">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10",
            "transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-90"
          )} />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-white text-xl font-medium mb-1">
              {category.title}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {category.count} designs
            </p>
            <div className={cn(
              "w-10 h-10 rounded-full bg-white flex items-center justify-center",
              "transition-all duration-300 ease-out",
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}>
              <ArrowRight className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}