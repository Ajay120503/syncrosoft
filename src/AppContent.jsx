import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team.jsx";
import { ArrowDownCircle } from "lucide-react";

function AppContent() {
  const [showIndicator, setShowIndicator] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/about", "/services", "/projects", "/team", "/testimonials", "/contact"];

  const getNextPage = () => {
    const currentIndex = pages.indexOf(location.pathname);
    return pages[(currentIndex + 1) % pages.length];
  };

  const getPrevPage = () => {
    const currentIndex = pages.indexOf(location.pathname);
    return pages[(currentIndex - 1 + pages.length) % pages.length];
  };

  const navigateToNext = () => {
    navigate(getNextPage());
  };

  const navigateToPrev = () => {
    navigate(getPrevPage());
  };

  // Show floating indicator once per session
  useEffect(() => {
    const shownOnce = sessionStorage.getItem("floatingIndicatorShown");

    if (!shownOnce) {
      const loadTimer = setTimeout(() => {
        setShowIndicator(true);
        setShowTip(true);

        const tipTimer = setTimeout(() => {
          setShowTip(false);
          setShowIndicator(false);
        }, 5000);

        sessionStorage.setItem("floatingIndicatorShown", "true");

        return () => clearTimeout(tipTimer);
      }, 1200);

      return () => clearTimeout(loadTimer);
    }
  }, [location.pathname]);

  // Desktop arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        navigateToNext();
      } else if (e.key === "ArrowUp") {
        navigateToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating indicator */}
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="w-1/2 fixed right-1/2 bottom-20 transform -translate-x-1/2 z-50 flex flex-col items-center gap-3"
          >
            <button
              onClick={navigateToNext}
              className="btn btn-outline btn-primary btn-circle text-white shadow-lg animate-bounce"
            >
              <ArrowDownCircle size={26} />
            </button>

            {/* Tip text */}
            <AnimatePresence>
              {showTip && (
                <motion.div
                  key="tip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm hidden lg:block bg-base-200 text-primary rounded-lg px-3 py-1 shadow-md whitespace-nowrap"
                >
                  Press <strong>↑</strong> / <strong>↓</strong> to navigate
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AppContent;
