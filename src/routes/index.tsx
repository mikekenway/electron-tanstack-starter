import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/navbar';
import { Plus, Minus, RotateCcw, Zap, Code2, Layers3 } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Navbar />

      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center p-6'>
        <div className='max-w-2xl mx-auto text-center space-y-8'>
          {/* Welcome Section */}
          <div className='space-y-4'>
            <div className='flex justify-center'>
              <Badge
                variant='outline'
                className='bg-primary/10 text-primary border-primary/30'
              >
                <Zap className='w-3 h-3 mr-1' />
                App Started Successfully
              </Badge>
            </div>
            <h1 className='text-4xl font-bold text-balance'>
              Welcome to your <span className='text-primary'>Electron App</span>
            </h1>
            <p className='text-lg text-muted-foreground text-pretty'>
              Your desktop application is running with Tanstack Router and modern tooling. Start
              building something amazing!
            </p>
          </div>

          {/* Interactive Counter Demo */}
          <Card className='bg-card/50 border-border/50 backdrop-blur-sm'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Code2 className='w-5 h-5 text-primary' />
                Interactive Demo
              </CardTitle>
              <CardDescription>
                Test that React state management is working properly
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='text-center'>
                <div className='text-6xl font-bold text-primary mb-4 font-mono'>{count}</div>
                <p className='text-sm text-muted-foreground mb-6'>
                  Click the buttons to test React state updates
                </p>
              </div>

              <div className='flex items-center justify-center gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => setCount(count - 1)}
                  className='w-12 h-12 p-0'
                >
                  <Minus className='w-4 h-4' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => setCount(0)}
                  className='px-6'
                >
                  <RotateCcw className='w-4 h-4 mr-2' />
                  Reset
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => setCount(count + 1)}
                  className='w-12 h-12 p-0'
                >
                  <Plus className='w-4 h-4' />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Info */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card className='bg-card/30 border-border/30'>
              <CardHeader className='pb-3'>
                <div className='w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2'>
                  <Layers3 className='w-5 h-5 text-blue-600' />
                </div>
                <CardTitle className='text-sm'>Electron</CardTitle>
                <CardDescription className='text-xs'>
                  Cross-platform desktop framework
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-card/30 border-border/30'>
              <CardHeader className='pb-3'>
                <div className='w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-2'>
                  <Code2 className='w-5 h-5 text-purple-600' />
                </div>
                <CardTitle className='text-sm'>Tanstack Router</CardTitle>
                <CardDescription className='text-xs'>Type-safe routing solution</CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-card/30 border-border/30'>
              <CardHeader className='pb-3'>
                <div className='w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-2'>
                  <Zap className='w-5 h-5 text-green-600' />
                </div>
                <CardTitle className='text-sm'>Vite + React</CardTitle>
                <CardDescription className='text-xs'>Fast development with HMR</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Next Steps */}
          <div className='text-center space-y-3'>
            <p className='text-sm text-muted-foreground'>
              Ready to start building? Edit{' '}
              <code className='bg-muted px-2 py-1 rounded text-xs font-mono'>app/page.tsx</code> to
              get started.
            </p>
            <p className='text-xs text-muted-foreground'>
              Hot reload is enabled - your changes will appear instantly.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='border-t border-border/40 bg-muted/20 py-4'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-xs text-muted-foreground'>
            Built with modern web technologies for desktop development
          </p>
        </div>
      </footer>
    </div>
  );
}
