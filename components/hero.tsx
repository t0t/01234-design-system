'use client';

import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="opacity-0 translate-y-4 animate-[fadeIn_0.8s_ease-out_forwards]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Modern Design System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive guide to building beautiful, accessible, and performant user interfaces
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
}