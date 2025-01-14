'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Components() {
  return (
    <section id="components" className="py-16">
      <div className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="text-3xl font-bold mb-8">Components</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 transition-transform hover:scale-105">
                  <h4 className="text-xl font-bold mb-2">Card {i}</h4>
                  <p className="text-muted-foreground">
                    This is a sample card component with hover animation.
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Carousel</h3>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((i) => (
                  <CarouselItem key={i}>
                    <Card className="p-6">
                      <div className="aspect-square flex items-center justify-center">
                        <span className="text-4xl font-bold">{i}</span>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}