import { useState } from 'react';
import { useCampus } from '../context/useCampus';

function Hero() {
  const { data } = useCampus();
  const heroStats = data?.heroStats || [
    { value: "80+", label: "Active Chapters & Labs" },
    { value: "100%", label: "Curated Peer Guilds" },
    { value: "Open", label: "Decentralized Access" }
  ];
  const orbitNodes = data?.orbitNodes || [];
  const [activeView, setActiveView] = useState('building'); // 'building' | 'quad'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section position-relative overflow-hidden">
      {/* Background Layer: Real College Campus Photo with Aesthetic Cinematic Overlay */}
      <div className="hero-bg-container">
        <div 
          className="hero-bg-image" 
          style={{ backgroundImage: "url('/campus-hero.jpg')" }}
          aria-hidden="true"
        ></div>
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-pattern"></div>
        
        {/* Ambient Glowing Orbs for Modern Tech Vibe */}
        <div className="hero-ambient-orb orb-primary" aria-hidden="true"></div>
        <div className="hero-ambient-orb orb-emerald" aria-hidden="true"></div>
        <div className="hero-ambient-orb orb-violet" aria-hidden="true"></div>
      </div>

      <div className="container position-relative py-5 py-lg-6 z-2">
        <div className="row align-items-center g-5 min-vh-75">
          {/* Left Hero Content */}
          <div className="col-lg-6 hero-text-col">
            {/* Top Showcase Badge */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill hero-badge-glass">
              <span className="badge-glow-dot"></span>
              <span className="hero-badge-title">Vishwakarma Institute of Technology (VIT-PUNE)</span>
              <span className="hero-badge-pill-tag">GDG Campus</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title fw-bolder mb-3 text-white">
              Discover Your Campus. <br />
              <span className="hero-gradient-title">Find Your Community.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-lead mb-4 fs-5 text-slate-200">
              Explore world-class academic facilities, connect with student-led organizations,
              and take part in exciting workshops, hackathons, and sports events happening across your campus.
            </p>

            {/* Quick Interactive Discovery Chips */}
            <div className="hero-chips-container d-flex flex-wrap gap-2 mb-4">
              <button 
                onClick={() => scrollToSection('explore')} 
                className="hero-chip-btn"
                title="Jump to Academic Facilities"
              >
                <i className="bi bi-building text-info"></i>
                <span>Academic Blocks</span>
              </button>
              <button 
                onClick={() => scrollToSection('clubs')} 
                className="hero-chip-btn"
                title="Jump to Student Clubs"
              >
                <i className="bi bi-people-fill text-warning"></i>
                <span>80+ Student Clubs</span>
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="hero-chip-btn"
                title="Jump to Upcoming Events"
              >
                <i className="bi bi-calendar-event text-danger"></i>
                <span>Tech Events</span>
              </button>
              <button 
                onClick={() => scrollToSection('tracks')} 
                className="hero-chip-btn"
                title="Jump to Skill Tracks"
              >
                <i className="bi bi-compass text-success"></i>
                <span>Interests & Tracks</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <a 
                href="#explore" 
                className="btn btn-glow-primary btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <span className="fw-semibold">Explore Campus</span>
                <i className="bi bi-arrow-down-short fs-4"></i>
              </a>

              <a 
                href="#clubs" 
                className="btn btn-glass-secondary btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-people-fill text-primary"></i>
                <span className="fw-semibold">Discover Clubs</span>
              </a>

              <a
                href="#search"
                className="btn btn-glass-search px-3 py-3 rounded-pill d-inline-flex align-items-center gap-2"
                title="Open live search"
              >
                <i className="bi bi-search text-info"></i>
                <span className="d-none d-sm-inline">Directory</span>
              </a>
            </div>

            {/* Frosted Glass Hero Stats */}
            <div className="row g-3 pt-3">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="col-4">
                  <div className="hero-stat-card p-3 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className={`stat-pulsing-dot stat-dot-${idx}`}></span>
                      <span className="fw-extrabold fs-3 text-white tracking-tight">{stat.value}</span>
                    </div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Visual with Interactive Orbit Nodes & Real College Card */}
          <div className="col-lg-6">
            <div className="hero-visual-wrapper position-relative mx-auto">
              {/* Central Frame Featuring Real College Building */}
              <div className="hero-image-frame rounded-4 overflow-hidden shadow-2xl position-relative">
                {/* Visual Top Header Tag */}
                <div className="hero-card-meta-bar d-flex justify-content-between align-items-center px-3 py-2">
                  <span className="d-flex align-items-center gap-2 text-white small fw-semibold">
                    <i className="bi bi-geo-alt-fill text-danger"></i>
                    <span>Campus Academic Block & Quad</span>
                  </span>
                  <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1 small d-flex align-items-center gap-1">
                    <span className="live-status-dot"></span>
                    <span>Active Now</span>
                  </span>
                </div>

                {/* Main College Campus Image */}
                <img
                  src={activeView === 'building' ? "/campus-hero.jpg" : "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"}
                  alt="Real University campus building with green lawns and arched architectural block"
                  className="img-fluid w-100 object-fit-cover hero-main-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "/campus-hero.jpg";
                  }}
                />
                
                {/* Dynamic Vignette & Lighting Overlay */}
                <div className="hero-image-overlay"></div>

                {/* Bottom Interactive View Switcher */}
                <div className="hero-image-caption-bar d-flex align-items-center justify-content-between px-3 py-2">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-camera text-primary"></i>
                    <span className="small text-white-50">Campus Main View</span>
                  </div>
                  <div className="btn-group btn-group-sm" role="group">
                    <button
                      type="button"
                      className={`btn ${activeView === 'building' ? 'btn-primary' : 'btn-dark text-white-50'}`}
                      onClick={() => setActiveView('building')}
                      style={{ fontSize: '0.75rem' }}
                    >
                      Campus Block
                    </button>
                    <button
                      type="button"
                      className={`btn ${activeView === 'quad' ? 'btn-primary' : 'btn-dark text-white-50'}`}
                      onClick={() => setActiveView('quad')}
                      style={{ fontSize: '0.75rem' }}
                    >
                      Student Quad
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Orbit Nodes from Backend Data */}
              {orbitNodes.map((node, idx) => (
                <div
                  key={node.id || idx}
                  className={`orbit-node-card position-absolute shadow-lg rounded-3 p-2 px-3 border transition-all orbit-pos-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection('clubs')}
                  onKeyDown={(e) => e.key === 'Enter' && scrollToSection('clubs')}
                  title={`View ${node.title} in Clubs section`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="orbit-icon-circle rounded-circle d-flex align-items-center justify-content-center text-white">
                      <span className="material-symbols-outlined fs-5">{node.icon}</span>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-white" style={{ fontSize: '0.85rem' }}>{node.title}</span>
                        {node.badge && (
                          <span className="badge rounded-pill orbit-sub-badge" style={{ fontSize: '0.65rem' }}>
                            {node.badge}
                          </span>
                        )}
                      </div>
                      <small className="orbit-subtext d-block" style={{ fontSize: '0.72rem' }}>{node.sub}</small>
                    </div>
                  </div>
                </div>
              ))}

              {/* Central Floating Badge */}
              <div className="floating-card floating-card-center shadow-lg p-2 px-3 rounded-pill border d-none d-sm-flex align-items-center gap-2">
                <span className="material-symbols-outlined text-info fs-5">verified</span>
                <span className="small fw-semibold text-white">Curated Campus Guilds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Smooth Wave / Gradient Divider to Seamlessly Blend into Content Sections */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}

export default Hero;

