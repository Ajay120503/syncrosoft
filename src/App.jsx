import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useThemeStore } from './store/useThemeStore.js'

import LetterGlitch from './components/LetterGlitch';
import ThemeSelector from './components/ThemeSelector.jsx';
import Loader from './components/Loader.jsx';
import { Toaster } from 'react-hot-toast';
import AppContent from './AppContent';

function App() {
  const { theme } = useThemeStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [theme]);

  if (loading) return <Loader />;

  return (
    <div className="relative w-screen overflow-x-hidden bg-base-100" data-theme={theme}>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <div className="fixed inset-0 z-0">
          <LetterGlitch glitchSpeed={80} opacity={50} />
        </div>
        <div className="fixed top-20 right-3 z-50">
          <ThemeSelector />
        </div>
        <div className="relative z-50">
          <AppContent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
