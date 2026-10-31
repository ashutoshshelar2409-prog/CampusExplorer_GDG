import { useState, useEffect } from 'react';
import { CampusContext } from './campusContextDef';
import * as localData from '../data/campusData';

export function CampusProvider({ children }) {
  const [data, setData] = useState({
    navLinks: localData.NAV_LINKS,
    heroStats: localData.HERO_STATS,
    orbitNodes: localData.ORBIT_NODES,
    clubs: localData.CLUBS,
    events: localData.EVENTS,
    eventFilters: localData.EVENT_FILTERS,
    toolkit: localData.TOOLKIT,
    footerColumns: localData.FOOTER_COLUMNS,
    facilities: localData.campusLocations,
  });

  const [joinedClubs, setJoinedClubs] = useState({ 'club-gdg': true });
  const [rsvpdEvents, setRsvpdEvents] = useState({ 'evt-gdgverse': true });

  // Dark Mode state with persistence
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('vit_theme');
      if (saved) return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('vit_theme', theme);
    } catch {
      // safe fallback
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleJoin = (clubId) => {
    setJoinedClubs((prev) => ({
      ...prev,
      [clubId]: !prev[clubId]
    }));
  };

  const handleToggleRsvp = (eventId) => {
    const isCurrentlyRsvpd = !!rsvpdEvents[eventId];
    setRsvpdEvents((prev) => ({
      ...prev,
      [eventId]: !isCurrentlyRsvpd
    }));

    setData((prev) => ({
      ...prev,
      events: prev.events.map((e) => {
        if (e.id === eventId) {
          const delta = isCurrentlyRsvpd ? 1 : -1;
          return { ...e, spotsLeft: Math.max(0, (e.spotsLeft || 30) + delta) };
        }
        return e;
      })
    }));
  };

  const value = {
    data,
    joinedClubs,
    rsvpdEvents,
    handleToggleJoin,
    handleToggleRsvp,
    theme,
    toggleTheme
  };

  return (
    <CampusContext.Provider value={value}>
      {children}
    </CampusContext.Provider>
  );
}

export default CampusProvider;
