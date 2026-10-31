import { campusStats } from '../data/campusData';

function AboutSection() {
  const pillars = [
    {
      icon: "bi-compass",
      title: "Interactive Navigation",
      desc: "Detailed campus facilities, operating hours, study pods, athletic spaces, and cafeteria locations mapped out.",
      colorClass: "pillar-theme-blue",
      tag: "Live Navigation"
    },
    {
      icon: "bi-people",
      title: "Community Connection",
      desc: "Discover technical societies like Google Developer Groups (GDG), sports leagues, entrepreneurship incubators, and cultural hubs.",
      colorClass: "pillar-theme-emerald",
      tag: "80+ Peer Guilds"
    },
    {
      icon: "bi-calendar-check",
      title: "Curated Campus Events",
      desc: "Stay updated on hackathons, guest lectures, live performances, and student tournaments with immediate RSVP options.",
      colorClass: "pillar-theme-amber",
      tag: "Event Passes"
    },
    {
      icon: "bi-lightning-charge",
      title: "Built for Students",
      desc: "Fast, responsive, zero-friction discovery tool engineered for collegiate peers to make the most of campus life.",
      colorClass: "pillar-theme-violet",
      tag: "Campus First"
    }
  ];

  return (
    <section id="about" className="about-section py-5 position-relative overflow-hidden border-top">
      {/* Modern Atmospheric Background Orbs */}
      <div className="about-bg-dots" aria-hidden="true"></div>
      <div className="about-ambient-orb about-orb-blue" aria-hidden="true"></div>
      <div className="about-ambient-orb about-orb-purple" aria-hidden="true"></div>

      <div className="container py-4 position-relative z-1">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5 reveal-on-scroll">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i className="bi bi-info-circle me-1"></i> About Campus Explorer
            </span>
            <h2 className="section-title text-navy fw-bold mb-3">Empowering Your University Journey</h2>
            <p className="text-muted fs-6">
              Campus Explorer is a modern university discovery platform built to help freshers and seniors alike discover campus facilities, find student communities, and unlock opportunities at Vishwakarma Institute of Technology (VIT Pune).
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="row g-4 mb-5">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`col-md-6 col-lg-3 reveal-on-scroll reveal-delay-${idx + 1}`}>
              <div className={`card h-100 border rounded-4 p-4 shadow-sm pillar-card modern-pillar-card ${pillar.colorClass} transition-all`}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="pillar-icon-box rounded-3 d-flex align-items-center justify-content-center">
                    <i className={`bi ${pillar.icon} fs-4`}></i>
                  </div>
                  <span className="pillar-badge-tag">{pillar.tag}</span>
                </div>
                <h3 className="h6 fw-bold text-navy mb-2 pillar-title">{pillar.title}</h3>
                <p className="text-muted small mb-0 lh-base">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Stats Banner — Clean, Sleek, No Cluttered Owl Shape */}
        <div className="stats-banner modern-stats-banner rounded-4 p-4 p-lg-5 text-white shadow position-relative overflow-hidden reveal-on-scroll">
          <div className="position-relative z-1">
            <div className="row text-center g-3 g-lg-4 justify-content-center">
              {campusStats.map((stat, idx) => (
                <div key={idx} className="col-6 col-lg-3">
                  <div className={`stat-card-glass stat-card-${idx} p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center transition-all`}>
                    <div className={`stat-gradient-num stat-grad-${idx} fw-bold mb-2 lh-1`}>
                      {stat.value}
                    </div>
                    <div className="stat-label-box d-flex align-items-center justify-content-center gap-1.5 text-white-75 small fw-semibold text-center">
                      <i className={`bi ${stat.icon} stat-accent-icon stat-icon-${idx}`}></i>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stats-bg-glow" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
