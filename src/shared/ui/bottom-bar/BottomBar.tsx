import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Newspaper, CircleHelp, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { to: '/news', icon: Newspaper, label: 'Новости' },
  { to: '/help', icon: CircleHelp, label: 'Помощь' },
  { to: '/portfolio', icon: Briefcase, label: 'Портфолио' },
  { to: '/profile', icon: User, label: 'Профиль' },
];

export function BottomBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide if scrolling down and not at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 100, opacity: 0, x: '-50%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-md md:hidden"
        >
          <nav className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-[2rem] px-4 py-3 flex justify-between items-center shadow-2xl backdrop-blur-xl transition-colors duration-300">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition-all duration-300 ${
                    isActive ? 'text-black dark:text-white' : 'text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300'
                  }`
                }
              >
                <item.icon className="w-5 h-5" strokeWidth={2} />
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
