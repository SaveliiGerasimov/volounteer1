import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export function RegPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // If user clears the input, let it be empty
    if (!input) {
      setPhone('');
      return;
    }

    // Remove all non-digits
    const digits = input.replace(/\D/g, '');
    
    // Extract the "content" digits (excluding the initial 7 if present)
    let content = digits;
    if (digits.startsWith('7')) {
        content = digits.substring(1);
    }

    // Limit to 10 digits
    content = content.substring(0, 10);

    // Format
    let formatted = '+7';
    if (content.length > 0) formatted += ' ' + content.substring(0, 3);
    if (content.length > 3) formatted += ' ' + content.substring(3, 6);
    if (content.length > 6) formatted += ' ' + content.substring(6, 8);
    if (content.length > 8) formatted += ' ' + content.substring(8, 10);

    setPhone(formatted);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    navigate('/news');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex flex-col items-center justify-center p-4 text-gray-900 dark:text-neutral-50 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-[#141414] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl transition-colors duration-300"
      >
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">Регистрация</h1>
        <p className="text-gray-500 dark:text-neutral-400 text-center mb-8">Создайте новый аккаунт</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">ФИО</label>
            <input
              type="text"
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors"
              placeholder="Иванов Иван Иванович"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors"
              placeholder="+7 999 000 00 00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1">Пароль</label>
            <input
              type="password"
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl px-4 py-3 mt-4 hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Зарегистрироваться
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-neutral-400">
          Уже есть аккаунт?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-black dark:text-white hover:underline"
          >
            Войти
          </button>
        </div>
      </motion.div>
    </div>
  );
}
