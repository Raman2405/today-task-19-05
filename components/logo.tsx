"use client"

import Link from 'next/link';
import { Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <Droplets className="h-8 w-8 text-primary" />
      <span className="font-serif text-xl font-semibold">Elixir</span>
    </Link>
  );
}