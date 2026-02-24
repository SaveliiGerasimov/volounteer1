import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function SuppPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8 py-6 max-w-3xl mx-auto w-full"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">Поддержка</h1>
        <p className="text-gray-500 dark:text-neutral-400">Найдите ответы на частые вопросы или напишите нам.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Частые вопросы (FAQ)</h2>
        <div className="flex flex-col gap-2">
          {[
            'Как стать волонтером?',
            'Как создать заявку на помощь?',
            'Как работает система рейтинга?',
          ].map((q, i) => (
            <details key={i} className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl group shadow-sm dark:shadow-none transition-colors duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium list-none text-gray-900 dark:text-white">
                {q}
                <ChevronDown className="w-5 h-5 text-gray-500 dark:text-neutral-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-4 text-gray-500 dark:text-neutral-400 text-sm">
                Здесь будет подробный ответ на вопрос. Мы стараемся делать нашу платформу максимально понятной и удобной для всех пользователей.
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm dark:shadow-none transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Форма обращения</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">Тема обращения</label>
            <select className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors appearance-none">
              <option>Проблема с заявкой</option>
              <option>Техническая ошибка</option>
              <option>Жалоба на пользователя</option>
              <option>Другое</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">Сообщение</label>
            <textarea
              rows={4}
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors resize-none"
              placeholder="Опишите вашу проблему подробно..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl px-4 py-3 mt-2 hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </motion.div>
  );
}
