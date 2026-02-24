import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';

export function HelpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 py-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Заявки на помощь</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-neutral-500" />
            <input
              type="text"
              placeholder="Поиск заявок..."
              className="w-full bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors shadow-sm dark:shadow-none"
            />
          </div>
          <button className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 p-2 rounded-xl text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors shadow-sm dark:shadow-none">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-sm dark:shadow-none transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold rounded-lg">Срочно</span>
                <span className="text-xs text-gray-500 dark:text-neutral-500">Сегодня, 14:30</span>
              </div>
              <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Помощь с доставкой продуктов</h2>
              <p className="text-gray-500 dark:text-neutral-400 text-sm">Требуется волонтер для доставки продуктов пожилому человеку в районе Центрального парка.</p>
            </div>
            <button className="bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl px-6 py-2 hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap">
              Откликнуться
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
