# Sanchit Singh - Portfolio

A responsive React-based static portfolio website showcasing academic research, publications, and achievements.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Static Generation**: Fast-loading static website
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized bundle size and loading times

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The `dist` folder contains all static files needed for deployment. You can deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Upload `dist` contents to your repository
- **AWS S3**: Upload `dist` contents to an S3 bucket
- **Any static hosting service**

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── header.tsx          # Navigation header
│   └── ui/                     # Reusable UI components
├── hooks/
│   └── use-toast.ts           # Toast notification hook
├── lib/
│   ├── placeholder-images.json # Image data
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main application component
├── main.tsx                   # React entry point
└── app/
    └── globals.css            # Global styles
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License