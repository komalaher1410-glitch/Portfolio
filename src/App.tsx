import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingOverlay from './components/LoadingOverlay';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';
import AIWidget from './components/AIWidget';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 transition-colors duration-500">
      <LoadingOverlay visible={loading} />
      {!loading && <CustomCursor />}
      <ParticleBackground />
      <ScrollProgress />
      <AIWidget />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 pb-24 pt-6 md:px-10 lg:px-14">
        <NavBar theme={theme} onThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
