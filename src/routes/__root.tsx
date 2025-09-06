import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/theme-provider';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <div className='min-h-screen'>
        <Outlet />
      </div>
    </ThemeProvider>
  ),
});
