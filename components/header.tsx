'use client';

import * as React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

export function Header() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${
      isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Design System</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#colors" className="text-sm font-medium hover:text-primary">Colors</a>
            <a href="#typography" className="text-sm font-medium hover:text-primary">Typography</a>
            <a href="#components" className="text-sm font-medium hover:text-primary">Components</a>
            <a href="#layout" className="text-sm font-medium hover:text-primary">Layout</a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-6">
                <a href="#colors" className="text-sm font-medium hover:text-primary">Colors</a>
                <a href="#typography" className="text-sm font-medium hover:text-primary">Typography</a>
                <a href="#components" className="text-sm font-medium hover:text-primary">Components</a>
                <a href="#layout" className="text-sm font-medium hover:text-primary">Layout</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}