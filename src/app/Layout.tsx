import { Outlet } from 'react-router-dom';
import { BottomBar } from '../shared/ui/bottom-bar/BottomBar';
import { TopBar } from '../shared/ui/top-bar/TopBar';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-neutral-50 pb-24 md:pb-0 transition-colors duration-300">
      <TopBar />
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
}
