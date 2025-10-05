import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HackerBackground from './components/HackerBackground';
import TechBackground from './components/TechBackground';
import CyberBackground from './components/CyberBackground';
import ParticleField from './components/ParticleField';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SecurityResearch from './pages/SecurityResearch';

const BackgroundWrapper = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const getBackground = () => {
    switch(location.pathname) {
      case '/':
        return <HackerBackground />;
      case '/about':
        return <TechBackground />;
      case '/projects':
        return <CyberBackground />;
      case '/blog':
        return <ParticleField />;
      case '/contact':
        return <TechBackground />;
      case '/security':
        return <CyberBackground />;
      default:
        return <HackerBackground />;
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative`}>
      {getBackground()}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/security" element={<SecurityResearch />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <BackgroundWrapper darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
}

export default App;