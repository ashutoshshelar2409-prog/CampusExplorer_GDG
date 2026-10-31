import { useState, useEffect } from 'react';
import { useCampus } from '../context/useCampus';

function Header({ onSearchClick }) {
  const { data, theme, toggleTheme } = useCampus();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Map user provided nav paths to valid anchor hashes on page
  const getSectionHash = (path) => {
    if (path === 'home') return '#home';
    if (path === 'clubs-and-communities' || path === 'clubs') return '#clubs';
    if (path === 'events') return '#events';
    if (path === 'interests-and-tracks' || path === 'tracks') return '#tracks';
    return `#${path}`;
  };

  const navLinks = data?.navLinks || [
    { label: "Home", path: "home" },
    { label: "Clubs & Communities", path: "clubs-and-communities" },
    { label: "Events", path: "events" },
    { label: "Interests & Tracks", path: "interests-and-tracks" },
  ];

  return (
    <header className={`site-header sticky-top ${scrolled ? 'site-header-scrolled' : ''}`}>
      <nav className="container navbar navbar-expand-lg py-2 py-lg-3">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-decoration-none" href="#home" onClick={closeMenu}>
          <div className="brand-logo-wrapper d-flex align-items-center justify-content-center bg-white rounded-3 shadow p-1">
            <img 
              src="/vit-logo.png" 
              alt="Vishwakarma Institute of Technology VIT Pune Logo" 
              className="brand-logo-img"
              width="38"
              height="38"
            />
          </div>
          <div className="d-flex flex-column lh-1">
            <div className="d-flex align-items-center gap-2">
              <span className="brand-title">Campus Explorer</span>
              <span className="badge vit-brand-tag d-none d-sm-inline-flex">VIT-PUNE</span>
            </div>
            <span className="brand-subtitle">VISHWAKARMA INSTITUTE OF TECHNOLOGY (VIT-PUNE)</span>
          </div>
        </a>

        {/* Mobile Actions: Dark Mode Toggle + Hamburger Toggle */}
        <div className="d-flex align-items-center gap-2 ms-auto d-lg-none">
          <button
            type="button"
            className="btn btn-theme-toggle rounded-circle d-inline-flex align-items-center justify-content-center"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill text-warning fs-5"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-info fs-5"></i>
            )}
          </button>
          <button
            className="navbar-toggler border-0 shadow-none px-2 py-1"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="campusNavbar"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg text-primary' : 'bi-list fs-2 text-white'}`}></i>
          </button>
        </div>

        {/* Dynamic Nav Links from Backend */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show mobile-nav-open' : ''}`} id="campusNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 my-3 my-lg-0">
            {navLinks.map((link) => (
              <li key={link.path || link.label} className="nav-item">
                <a
                  className="nav-link px-3 py-2 rounded-pill nav-link-custom"
                  href={getSectionHash(link.path)}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className="nav-link px-3 py-2 rounded-pill nav-link-custom" href="#explore" onClick={closeMenu}>
                Explore Spaces
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 ms-lg-3 pt-2 pt-lg-0 border-top border-lg-0 border-secondary">
            {/* Quick Search */}
            <a
              href="#search"
              className="btn btn-quick-search btn-sm px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2 w-100 w-lg-auto justify-content-center"
              onClick={() => {
                closeMenu();
                if (onSearchClick) onSearchClick();
              }}
            >
              <i className="bi bi-search text-primary"></i>
              <span>Quick Search</span>
              <kbd className="header-kbd d-none d-xl-inline-block">Ctrl K</kbd>
            </a>

            {/* Desktop Dark Mode Toggle Button */}
            <button
              type="button"
              className="btn btn-theme-toggle rounded-circle d-none d-lg-inline-flex align-items-center justify-content-center"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <i className="bi bi-sun-fill text-warning fs-5"></i>
              ) : (
                <i className="bi bi-moon-stars-fill text-info fs-5"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;