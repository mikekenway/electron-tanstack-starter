# Electron TanStack Starter

A modern Electron application starter template built with React, TanStack Router, TanStack Query, and Tailwind CSS v4. This project provides a solid foundation for building cross-platform desktop applications with a modern web stack.

## 🚀 Features

- **Electron** - Cross-platform desktop app framework
- **Electron Forge** - Complete tooling for Electron development
- **Vite** - Fast build tool and dev server
- **React 19** - Latest React with modern features
- **TanStack Router** - Type-safe routing with file-based routing
- **TanStack Query** - Powerful data synchronization for React
- **Tailwind CSS v4** - Utility-first CSS framework (no config required)
- **shadcn/ui** - Beautiful, accessible UI components
- **TypeScript** - Full type safety

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mikekenway/electron-tanstack-starter.git
   cd electron-tanstack-starter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Getting Started

### Development Mode

Start the application in development mode with hot reload:

```bash
pnpm start
```

This will:

- Start the Electron app
- Enable hot reload for both main and renderer processes
- Open the application window

### Building for Production

**Package the application:**

```bash
pnpm package
```

**Create distributables:**

```bash
pnpm make
```

This creates platform-specific installers in the `out/` directory:

- **Windows**: `.exe` installer
- **macOS**: `.dmg` and `.zip` files
- **Linux**: `.deb` and `.rpm` packages

## 📝 License

MIT License

Happy coding! 🎉
