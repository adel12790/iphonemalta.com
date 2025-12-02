# iPhone Malta - Mobile Phone Repair Website

A modern, responsive website for a mobile phone repair service in Malta. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Multi-page Navigation**: 
  - Home page with hero section, services overview, and testimonials
  - Services page with detailed repair offerings
  - About page with company information
  - Contact page with contact form
- **Fast Performance**: Built with Vite for optimal build times and hot module replacement
- **Type Safety**: Full TypeScript support for better code quality

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **Yarn** (or npm)

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd iphonemalta.com
```

2. Install dependencies:
```bash
yarn install
```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Create a production build:

```bash
yarn build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
yarn preview
```

### Linting

Run ESLint to check for code issues:

```bash
yarn lint
```

## 📁 Project Structure

```
iphonemalta.com/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # React components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   ├── ui/         # UI components (Button, Cards, Forms)
│   │   └── utils/      # Utility components (ScrollToTop)
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Colors and Styling

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize the color scheme by modifying the theme configuration.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add a navigation link in `src/components/layout/Navbar.tsx` (if needed)

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🌐 Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For any changes or updates, please contact the project maintainer.

---

Built with ❤️ for iPhone Malta

