# Modern Design System

A comprehensive design system and style guide built with Next.js and Tailwind CSS, featuring accessible components, responsive layouts, and a beautiful dark mode.

## Latest Updates (April 2024)

### 🚀 New Features
- Added GitHub Pages deployment support
- Introduced new fade-in animations for all sections
- Enhanced card hover animations with scale effect
- Improved mobile navigation with accessible sheet component
- Added custom fade-in keyframes animation

### 🔧 Technical Improvements
- Removed dependency on Framer Motion for simpler animation implementation
- Optimized build configuration for static deployment
- Added `.nojekyll` file support for GitHub Pages
- Implemented proper base path handling for production builds

### 🐛 Bug Fixes
- Fixed accessibility issues in the Sheet component by adding proper titles
- Improved animation performance by using native CSS transitions
- Enhanced keyboard navigation in mobile menu
- Optimized animation timing for smoother transitions

## Features

### 🎨 Design Tokens
- **Color System**: Carefully crafted color palette with WCAG 2.1 compliance
- **Typography**: Fluid type scale with responsive sizing
- **Spacing**: Consistent spacing system based on 4px increments
- **Dark Mode**: Full dark mode support with smooth transitions

### 🧱 Components
- **Interactive Elements**
  - Button system with multiple variants
  - Card components with hover animations
  - Interactive carousel
  - Form elements
  - Navigation components

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+

### ⚡ Performance
- Static site generation with Next.js
- Optimized Tailwind CSS
- Responsive images
- Smooth animations

### ♿ Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- Color contrast compliance

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages

## Getting Started

1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view the design system.

## Deployment

To deploy to GitHub Pages:

1. Update the \`basePath\` in \`next.config.js\` with your repository name
2. Run the deployment command:
\`\`\`bash
npm run deploy
\`\`\`

3. Configure GitHub Pages in your repository settings to use the \`gh-pages\` branch

## Project Structure

\`\`\`
├── app/                # Next.js app directory
│   ├── globals.css    # Global styles and CSS variables
│   ├── layout.tsx     # Root layout component
│   └── page.tsx       # Home page component
├── components/        
│   ├── ui/           # Base UI components
│   ├── sections/     # Page sections
│   ├── header.tsx    # Site header
│   ├── hero.tsx      # Hero section
│   └── theme-provider.tsx
└── lib/              # Utility functions
\`\`\`

## Components

### Core Components
- **Button**: Primary, secondary, outline, and ghost variants
- **Card**: Flexible container with hover animations
- **Carousel**: Touch-enabled slider component
- **Typography**: Consistent text styles and hierarchy

### Layout Components
- **Container**: Centered content wrapper
- **Grid System**: Responsive grid layouts
- **Spacing**: Consistent spacing utilities

## Theme Customization

The design system uses CSS variables for easy theme customization. Colors, spacing, and other design tokens can be modified in \`app/globals.css\`.

### Color Palette
- Primary: Main brand color
- Secondary: Supporting color
- Accent: Highlight color
- Background: Page background
- Foreground: Text color
- Muted: Subtle backgrounds
- Border: Border color

## Development

### Adding New Components

1. Create component in \`components/ui\`
2. Add styles using Tailwind CSS
3. Ensure accessibility
4. Add to documentation

### Modifying Theme

1. Update CSS variables in \`app/globals.css\`
2. Test in both light and dark modes
3. Verify color contrast

## Building for Production

\`\`\`bash
npm run build
\`\`\`

This will create an optimized production build in the \`out\` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License