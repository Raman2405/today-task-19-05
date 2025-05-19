"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';

const heroImages = [
  {
    url: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    alt: "Elegant hair product bottles with minimalist labels"
  },
  {
    url: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    alt: "Luxury hair care products with premium packaging"
  },
  {
    url: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg",
    alt: "Sophisticated hair serum bottles on marble background"
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      {/* Background images */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white space-y-6"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Elevate Your Hair Products with Premium Label Designs
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl">
            Discover beautifully crafted label designs that capture the essence of your brand
            and make your products stand out on the shelf.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Browse Designs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentImageIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}