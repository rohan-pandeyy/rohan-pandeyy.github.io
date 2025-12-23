import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WorksPage from './Pages/WorksPage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import AchievementsPage from './Pages/AchievementsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
