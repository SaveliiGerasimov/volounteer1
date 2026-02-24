import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bell, Newspaper, CircleHelp, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { to: '/news', icon: Newspaper, label: 'Новости' },
  { to: '/help', icon: CircleHelp, label: 'Оказать помощь' },
  { to: '/portfolio', icon: Briefcase, label: 'Портфолио' },
  { to: '/profile', icon: User, label: 'Профиль' },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Логотип</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Notifications */}
        <button
          className="p-2 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors relative"
          aria-label="Уведомления"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-neutral-950"></span>
        </button>
      </div>
    </header>
  );
}
