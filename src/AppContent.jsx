import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Team from "./pages/Team.jsx";
import { ArrowDownCircle } from "lucide-react";
import Footer from './components/Footer';

function AppContent() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [showTip, setShowTip] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/about", "/services", "/projects", "/team", "/contact"];

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

  // Hide floating indicator after 5s
  useEffect(() => {
    const indicatorTimer = setTimeout(() => setShowIndicator(false), 5000);
    return () => clearTimeout(indicatorTimer);
  }, []);

  // Hide tip after 5s
  useEffect(() => {
    const tipTimer = setTimeout(() => setShowTip(false), 5000);
    return () => clearTimeout(tipTimer);
  }, []);

  // Handle mobile scroll up and down
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollPosition = window.innerHeight + currentScrollTop;
      const pageHeight = document.body.offsetHeight;

      // Scroll down to next page
      if (scrollPosition >= pageHeight - 5) {
        navigateToNext();
      }

      // Scroll up to top of page
      if (currentScrollTop < lastScrollTop && currentScrollTop === 0) {
        navigateToPrev();
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle desktop arrow keys
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Floating indicator */}
      {showIndicator && (
        <div className="fixed left-1/2 bottom-10 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-50 flex flex-col items-center gap-3 animate-bounce">
          <button
            onClick={navigateToNext}
            className="btn btn-outline btn-primary btn-circle text-white shadow-lg"
          >
            <ArrowDownCircle size={26} />
          </button>

          {/* Floating tip */}
          {showTip && (
            <div className="text-sm bg-base-200 text-primary rounded-lg px-3 py-1 shadow-md animate-fade-in-out whitespace-nowrap">
              Press <strong>↑</strong> / <strong>↓</strong> to navigate
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default AppContent;
