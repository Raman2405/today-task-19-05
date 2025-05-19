"use client"

// This is a lightweight abstraction for animations
// You can replace with framer-motion if needed

import { ReactNode } from "react";

type MotionProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children: ReactNode;
  className?: string;
};

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    children, 
    className 
  }: MotionProps) => {
    return (
      <div 
        className={className}
        style={{
          opacity: animate?.opacity,
          transform: `translateY(${animate?.y}px)`,
          transition: `all ${transition?.duration || 0.3}s ease-out`
        }}
      >
        {children}
      </div>
    );
  }
};