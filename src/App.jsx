import { useEffect } from 'react';
import { CampusProvider } from './context/CampusContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CampusSection from './components/CampusSection';
import ClubsSection from './components/ClubsSection';
import EventsSection from './components/EventsSection';
import ToolkitSection from './components/ToolkitSection';
import SearchSection from './components/SearchSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function MainApp() {
  // Initialize scroll-to-view reveal animations across all sections
  useScrollReveal();

  const handleSearchScroll = () => {
    const el = document.getElementById('search');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) setTimeout(() => input.focus(), 400);
    }
  };

  // Global keyboard shortcut for Ctrl+K / Cmd+K search focus
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleSearchScroll();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="campus-app-root">
      {/* Navigation Header */}
      <Header onSearchClick={handleSearchScroll} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Student Clubs & Communities */}
        <ClubsSection />

        {/* Upcoming Campus Events */}
        <EventsSection />

        {/* Interests & Tracks Toolkit */}
        <ToolkitSection />

        {/* Explore Campus Facilities */}
        <CampusSection />

        {/* Live Search & Filter Directory */}
        <SearchSection />

        {/* About Section & Impact Metrics */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CampusProvider>
      <MainApp />
    </CampusProvider>
  );
}

export default App;
