"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Logo from '@/components/logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-8 space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/designers">Designers</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {searchOpen ? (
            <div className="relative animate-fadeIn">
              <Input 
                className="w-[200px] lg:w-[300px] pr-8"
                placeholder="Search designs..." 
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button className="hidden md:flex">Get Started</Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16 animate-fadeIn md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <nav className="flex flex-col items-center p-8 space-y-6 text-lg">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="/categories" onClick={() => setMobileMenuOpen(false)}>Categories</MobileNavLink>
            <MobileNavLink href="/designers" onClick={() => setMobileMenuOpen(false)}>Designers</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <Button className="mt-4 w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode; 
}) {
  return (
    <Link 
      href={href} 
      className="text-2xl font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}