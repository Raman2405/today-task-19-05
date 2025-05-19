"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from '@/lib/motion';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Brand's Packaging?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Transform your hair products with stunning label designs that capture your brand's essence and appeal to your target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse Designs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Request Custom Design <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}