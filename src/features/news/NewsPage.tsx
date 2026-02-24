import { motion } from 'motion/react';

export function NewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 py-6"
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Новости</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="h-40 bg-gray-200 dark:bg-neutral-900 rounded-2xl w-full object-cover" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Важное объявление {i}</h2>
              <p className="text-gray-500 dark:text-neutral-400 text-sm line-clamp-3">
                Здесь будет текст новости или объявления платформы. Мы постоянно работаем над улучшением сервиса и добавлением новых функций.
              </p>
            </div>
            <button className="mt-auto text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white py-2 px-4 rounded-xl transition-colors w-fit">
              Читать далее
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
