"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark, Heart } from 'lucide-react';
import { motion } from '@/lib/motion';
import { featuredDesigns } from '@/lib/data';

export default function FeaturedDesigns() {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="outline" className="mb-4">Featured Collection</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Trending Hair Label Designs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular designs that have been captivating brands around the world.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full"
          onValueChange={setActiveCategoryId}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="minimal">Minimal</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
              <TabsTrigger value="botanical">Botanical</TabsTrigger>
              <TabsTrigger value="modern">Modern</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <DesignGrid designs={featuredDesigns} />
          </TabsContent>
          
          <TabsContent value="minimal" className="mt-0">
            <DesignGrid designs={featuredDesigns.filter(d => d.category === 'minimal')} />
          </TabsContent>
          
          <TabsContent value="luxury" className="mt-0">
            <DesignGrid designs={featuredDesigns.filter(d => d.category === 'luxury')} />
          </TabsContent>
          
          <TabsContent value="botanical" className="mt-0">
            <DesignGrid designs={featuredDesigns.filter(d => d.category === 'botanical')} />
          </TabsContent>
          
          <TabsContent value="modern" className="mt-0">
            <DesignGrid designs={featuredDesigns.filter(d => d.category === 'modern')} />
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/gallery">View All Designs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesignGrid({ designs }: { designs: typeof featuredDesigns }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {designs.map((design, index) => (
        <motion.div
          key={design.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <DesignCard design={design} />
        </motion.div>
      ))}
    </div>
  );
}

function DesignCard({ design }: { design: typeof featuredDesigns[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={design.image}
          alt={design.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full" size="sm">
            View Details
          </Button>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg line-clamp-1">{design.title}</h3>
            <p className="text-muted-foreground text-sm">{design.designer}</p>
          </div>
          <Badge variant="outline" className="capitalize">
            {design.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}