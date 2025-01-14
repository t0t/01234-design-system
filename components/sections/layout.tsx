'use client';

import { Card } from '@/components/ui/card';

export function Layout() {
  return (
    <section id="layout" className="py-16">
      <div className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="text-3xl font-bold mb-8">Layout</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Grid System</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-4 transition-transform hover:scale-105">
                  <div className="h-20 flex items-center justify-center">
                    Column {i}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Container</h3>
            <Card className="p-4 transition-transform hover:scale-105">
              <div className="container mx-auto bg-muted p-4 rounded-lg">
                Container Example
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Spacing</h3>
            <div className="space-y-4">
              <Card className="p-4 transition-transform hover:scale-105">
                <div className="space-y-2">
                  <div className="h-4 bg-primary/20 rounded" />
                  <div className="h-4 bg-primary/40 rounded" />
                  <div className="h-4 bg-primary/60 rounded" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}