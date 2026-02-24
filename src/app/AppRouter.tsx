import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../features/auth/LoginPage';
import { RegPage } from '../features/auth/RegPage';
import { NewsPage } from '../features/news/NewsPage';
import { HelpPage } from '../features/help/HelpPage';
import { PortPage } from '../features/port/PortPage';
import { ProfPage } from '../features/prof/ProfPage';
import { SuppPage } from '../features/supp/SuppPage';
import { Layout } from './Layout';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/news" replace />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="portfolio" element={<PortPage />} />
          <Route path="profile" element={<ProfPage />} />
          <Route path="support" element={<SuppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
