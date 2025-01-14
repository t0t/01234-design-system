'use client';

import { Card } from '@/components/ui/card';

export function ColorPalette() {
  const colors = [
    { name: 'Primary', class: 'bg-primary' },
    { name: 'Secondary', class: 'bg-secondary' },
    { name: 'Accent', class: 'bg-accent' },
    { name: 'Background', class: 'bg-background' },
    { name: 'Foreground', class: 'bg-foreground' },
    { name: 'Muted', class: 'bg-muted' },
    { name: 'Card', class: 'bg-card' },
    { name: 'Border', class: 'bg-border' },
  ];

  return (
    <section id="colors" className="py-16">
      <div className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color) => (
            <Card key={color.name} className="p-4 transition-transform hover:scale-105">
              <div className={`h-24 rounded-md ${color.class} mb-2`} />
              <p className="font-medium">{color.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}