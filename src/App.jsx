import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore.js'

import Navbar from './components/Navbar';
import LetterGlitch from './components/LetterGlitch';
import ThemeSelector from './components/ThemeSelector.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Team from './pages/Team.jsx';


import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="relative w-screen overflow-x-hidden bg-base-100" data-theme={theme}>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>

        {/* Glitch effect background — now fixed behind all pages */}
        <div className="fixed inset-0 z-0">
          <LetterGlitch glitchSpeed={80} opacity={50} />
        </div>

        {/* ThemeSelector floating button */}
        <div className="fixed top-20 right-3 z-50">
          <ThemeSelector />
        </div>

        {/* Foreground content */}
        <div className="relative z-40">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
