import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function PortPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8 py-6"
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Портфолио</h1>
      
      <div className="grid gap-8 md:grid-cols-3 items-start">
        {/* Left Column: Statistics */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-1">Моя статистика</h2>
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 text-center shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="w-24 h-24 bg-gray-200 dark:bg-neutral-800 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Алексей Смирнов</h3>
            <p className="text-gray-500 dark:text-neutral-400 text-sm mb-6">Волонтер года</p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-white/5 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">42</span>
                <span className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-wider font-medium">Задачи</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold flex items-center justify-center gap-1 text-gray-900 dark:text-white">
                  4.9 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-wider font-medium">Рейтинг</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Reviews */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-1">Последние отзывы</h2>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-neutral-800 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">Мария Иванова</div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">2 дня назад</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-neutral-300 text-sm leading-relaxed">
                  "Огромное спасибо Алексею за помощь! Очень быстро откликнулся и помог с ремонтом. Настоящий профессионал и добрый человек. Рекомендую всем!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
