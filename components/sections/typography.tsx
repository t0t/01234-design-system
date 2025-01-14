'use client';

export function Typography() {
  return (
    <section id="typography" className="py-16">
      <div className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="text-3xl font-bold mb-8">Typography</h2>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
            <p className="text-sm text-muted-foreground">Font size: 2.25rem (36px)</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
            <p className="text-sm text-muted-foreground">Font size: 1.875rem (30px)</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
            <p className="text-sm text-muted-foreground">Font size: 1.5rem (24px)</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-2">Heading 4</h4>
            <p className="text-sm text-muted-foreground">Font size: 1.25rem (20px)</p>
          </div>
          
          <div>
            <p className="text-base mb-2">Body Text</p>
            <p className="text-sm text-muted-foreground">Font size: 1rem (16px)</p>
          </div>
          
          <div>
            <p className="text-sm mb-2">Small Text</p>
            <p className="text-sm text-muted-foreground">Font size: 0.875rem (14px)</p>
          </div>
        </div>
      </div>
    </section>
  );
}