import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProfPage() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize state based on document class
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 py-6 max-w-2xl mx-auto w-full"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Профиль</h1>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors relative overflow-hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5 text-orange-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 flex items-center gap-4 md:gap-6 shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 dark:bg-neutral-800 rounded-full shrink-0" />
        <div className="min-w-0 flex-1">
          <h2 className="text-xl md:text-2xl font-bold truncate text-gray-900 dark:text-white">Алексей Смирнов</h2>
          <p className="text-gray-500 dark:text-neutral-400 text-sm md:text-base truncate">alexey.smirnov@example.com</p>
          <p className="text-xs md:text-sm text-gray-400 dark:text-neutral-500 mt-1 truncate">+7 (999) 123-45-67</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold px-2 text-gray-900 dark:text-white">Настройки аккаунта</h3>
        <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
          <button className="w-full text-left px-6 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-700 dark:text-gray-200">
            Безопасность
          </button>
          <button 
            onClick={() => navigate('/support')}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-700 dark:text-gray-200"
          >
            Поддержка
          </button>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 flex items-center justify-center gap-2 w-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-500 font-semibold rounded-xl px-4 py-4 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        Выйти из аккаунта
      </button>
    </motion.div>
  );
}
