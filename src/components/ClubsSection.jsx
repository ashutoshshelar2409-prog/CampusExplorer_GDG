import { useState } from 'react';
import { useCampus } from '../context/useCampus';

function ClubsSection() {
  const { data } = useCampus();
  const clubs = data?.clubs || [];
  const [selectedClub, setSelectedClub] = useState(null);
  const [recruitmentClub, setRecruitmentClub] = useState(null);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All');

  const handleOpenRecruitment = (club, e) => {
    if (e) e.stopPropagation();
    setRecruitmentClub(club);
    setIsNotified(false);
    setNotifyEmail('');
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setIsNotified(true);
    }
  };

  // Interactive filtering for clubs showcase
  const filteredClubs = clubs.filter((club) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Tech') {
      return club.category === 'Technology' || club.category === 'Cloud & DevOps' || club.category === 'Artificial Intelligence';
    }
    if (filterCategory === 'Community') {
      return club.category === 'Community' || club.isCommunity;
    }
    if (filterCategory === 'Engineering') {
      return club.category === 'Engineering' || club.category === 'Robotics';
    }
    if (filterCategory === 'Racing') {
      return club.category === 'Automotive & EV';
    }
    return true;
  });

  return (
    <section id="clubs" className="clubs-section py-5 position-relative overflow-hidden">
      {/* Modern Aesthetic Background Elements (Tech Dot Grid & Ambient Subtle Glows) */}
      <div className="clubs-bg-pattern" aria-hidden="true"></div>
      <div className="clubs-ambient-glow clubs-glow-blue" aria-hidden="true"></div>
      <div className="clubs-ambient-glow clubs-glow-cyan" aria-hidden="true"></div>
      <div className="clubs-ambient-glow clubs-glow-indigo" aria-hidden="true"></div>

      <div className="container py-4 position-relative z-1">
        {/* Section Header with Scroll Reveal */}
        <div className="row justify-content-center text-center mb-4 reveal-on-scroll">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i className="bi bi-people-fill me-1"></i> Student Communities & Guilds
            </span>
            <h2 className="section-title text-navy fw-bold mb-3">Clubs & Communities</h2>
            <p className="text-muted fs-6 mb-4">
              Connect with peers, learn cutting-edge skills, build real projects, and find lifelong friends across academic, technical, and engineering organizations at Vishwakarma Institute of Technology.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 pt-1 clubs-filter-container">
              <button
                type="button"
                className={`clubs-filter-pill ${filterCategory === 'All' ? 'active' : ''}`}
                onClick={() => setFilterCategory('All')}
              >
                <i className="bi bi-grid-fill me-1"></i> All Guilds (80+)
              </button>
              <button
                type="button"
                className={`clubs-filter-pill ${filterCategory === 'Tech' ? 'active' : ''}`}
                onClick={() => setFilterCategory('Tech')}
              >
                <i className="bi bi-code-slash me-1"></i> Technical & AI
              </button>
              <button
                type="button"
                className={`clubs-filter-pill ${filterCategory === 'Community' ? 'active' : ''}`}
                onClick={() => setFilterCategory('Community')}
              >
                <i className="bi bi-people-fill me-1"></i> Student Communities
              </button>
              <button
                type="button"
                className={`clubs-filter-pill ${filterCategory === 'Engineering' ? 'active' : ''}`}
                onClick={() => setFilterCategory('Engineering')}
              >
                <i className="bi bi-cpu me-1"></i> Engineering & Robotics
              </button>
              <button
                type="button"
                className={`clubs-filter-pill ${filterCategory === 'Racing' ? 'active' : ''}`}
                onClick={() => setFilterCategory('Racing')}
              >
                <i className="bi bi-lightning-charge-fill me-1"></i> Formula Racing & EV
              </button>
            </div>
          </div>
        </div>

        {/* Clubs Grid with Scroll Reveal */}
        <div className="row g-4">
          {filteredClubs.map((club, index) => {
            const isGdg = club.name.includes("GDG") || club.featured;
            const staggerDelay = `reveal-delay-${(index % 3) + 1}`;
            const hasManualImage = club.image && !club.image.startsWith('http');

            return (
              <div key={club.id || club.name} className={`col-md-6 col-lg-4 reveal-on-scroll ${staggerDelay}`}>
                <div className={`card h-100 border-0 rounded-4 overflow-hidden club-card transition-all position-relative ${isGdg ? 'shadow-md border-primary-emphasis ring-gdg' : 'shadow-sm'}`}>
                  {/* Card Top Accent Bar */}
                  <div className={`club-top-accent-bar ${isGdg ? 'bg-primary' : 'bg-gradient-secondary'}`}></div>

                  {/* Card Header: Manual Image or Aesthetic Branded Banner Placeholder */}
                  <div className="position-relative card-img-wrapper">
                    {hasManualImage ? (
                      <img
                        src={club.image}
                        alt={club.name}
                        className="card-img-top object-fit-cover w-100 club-img"
                        loading="lazy"
                      />
                    ) : (
                      /* Modern Aesthetic Branded Banner when awaiting manual photos */
                      <div 
                        className="club-custom-banner w-100 d-flex flex-column justify-content-between p-4 position-relative overflow-hidden"
                        style={{ background: club.gradient || 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}
                      >
                        {/* Monogram Watermark in Background */}
                        <div className="club-watermark" aria-hidden="true">
                          {club.initials || club.name.substring(0, 3)}
                        </div>

                        {/* Top Badges */}
                        <div className="d-flex justify-content-between align-items-center position-relative z-1">
                          {isGdg ? (
                            <span className="badge bg-warning text-dark shadow-sm rounded-pill px-3 py-1 fw-bold">
                              <i className="bi bi-star-fill me-1"></i> Featured Guild
                            </span>
                          ) : club.isCommunity ? (
                            <span className="badge bg-info text-dark shadow-sm rounded-pill px-3 py-1 fw-bold">
                              <i className="bi bi-award-fill me-1"></i> Apex Community
                            </span>
                          ) : (
                            <span className="club-badge-translucent rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-1">
                              <i className="bi bi-shield-check text-info"></i>
                              <span>Recognized Club</span>
                            </span>
                          )}

                          <span className="club-badge-photoslot rounded-pill px-2 py-1 d-inline-flex align-items-center gap-1" title="Ready for manual photo upload">
                            <i className="bi bi-camera-fill"></i>
                            <span>Photo Slot Ready</span>
                          </span>
                        </div>

                        {/* Center Icon & Branding */}
                        <div className="d-flex align-items-center gap-3 my-auto position-relative z-1">
                          <div className="club-banner-icon-circle rounded-circle d-flex align-items-center justify-content-center text-white shadow">
                            <i className={`bi ${club.icon || 'bi-people-fill'} fs-3`}></i>
                          </div>
                          <div>
                            <div className="fw-bolder text-white fs-5 lh-1 mb-1">{club.name}</div>
                            <small className="text-white-50">{club.meta}</small>
                          </div>
                        </div>

                        {/* Bottom Tag */}
                        <div className="d-flex justify-content-end position-relative z-1">
                          <span className="club-category-pill shadow-sm rounded-pill px-3 py-1 fw-bold d-inline-flex align-items-center gap-1">
                            <i className={`bi ${club.icon || 'bi-people'} text-primary`}></i>
                            <span>{club.isCommunity ? 'Student Community' : (club.category || 'Technical')}</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <h3 className="h5 card-title fw-bold text-navy mb-0">{club.name}</h3>
                      <span className={`badge ${club.isCommunity ? 'bg-info-subtle text-info-emphasis' : 'bg-primary-subtle text-primary'} rounded-pill px-2 py-1 small fw-semibold`}>
                        {club.isCommunity ? 'Community' : 'VIT Pune'}
                      </span>
                    </div>

                    <p className="text-secondary small fw-medium mb-2">{club.meta}</p>

                    <p className="card-text text-muted small flex-grow-1 mb-3">
                      {club.desc}
                    </p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {(club.tags || []).map((tag, idx) => (
                        <span key={idx} className="badge bg-light text-secondary rounded-pill px-2 py-1 small fw-normal">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="d-flex align-items-center justify-content-between small text-muted pt-2 border-top mb-3">
                      <span><i className="bi bi-clock me-1 text-primary"></i>{club.schedule || 'Weekly Sessions'}</span>
                      <span><i className="bi bi-people me-1 text-primary"></i>{club.members || 'Active Community'}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 flex-grow-1 fw-semibold d-inline-flex align-items-center justify-content-center gap-1"
                        onClick={() => setSelectedClub(club)}
                      >
                        <span>Learn More</span>
                        <i className="bi bi-arrow-right-short fs-5"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1 shadow-sm"
                        onClick={(e) => handleOpenRecruitment(club, e)}
                        title="Click to check recruitment details"
                      >
                        <i className={`bi ${club.isCommunity ? 'bi-people-fill' : 'bi-person-plus-fill'}`}></i>
                        <span>{club.isCommunity ? 'Join Community' : 'Join Club'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 80+ Clubs Notice & Ecosystem Banner */}
        <div className="mt-5 p-4 p-lg-5 rounded-4 bg-gradient-vit-banner text-white position-relative overflow-hidden shadow-lg reveal-on-scroll">
          {/* Decorative watermark and ambient glowing orbs */}
          <div className="vit-banner-watermark" aria-hidden="true">VIT PUNE</div>
          <div className="vit-banner-glow-1" aria-hidden="true"></div>
          <div className="vit-banner-glow-2" aria-hidden="true"></div>

          <div className="row align-items-center g-4 position-relative z-1">
            <div className="col-lg-8">
              <div className="vit-banner-pill px-3 py-1 mb-3 rounded-pill">
                <span className="live-status-dot"></span>
                <span>VIT Student Ecosystem · 80+ Recognized Clubs</span>
              </div>
              <h3 className="h3 fw-bold text-white mb-2">
                More Student Clubs & Guilds Are Being Added!
              </h3>
              <p className="text-white-75 mb-3 fs-6">
                Vishwakarma Institute of Technology (VIT Pune) is home to over <strong>80+ active student clubs, technical chapters, racing teams, cultural societies, and social forums</strong>. We are actively onboarding and updating details for all campus organizations on this discovery webpage.
              </p>
              <div className="d-flex flex-wrap gap-2 pt-1">
                <span className="vit-banner-chip rounded-pill">
                  <i className="bi bi-cpu-fill text-info"></i>
                  <span>40+ Technical & Coding Chapters</span>
                </span>
                <span className="vit-banner-chip rounded-pill">
                  <i className="bi bi-palette-fill text-warning"></i>
                  <span>20+ Cultural, Music & Drama Guilds</span>
                </span>
                <span className="vit-banner-chip rounded-pill">
                  <i className="bi bi-trophy-fill text-danger"></i>
                  <span>10+ Sports & Formula Racing Teams</span>
                </span>
                <span className="vit-banner-chip rounded-pill">
                  <i className="bi bi-heart-fill text-success"></i>
                  <span>10+ Social Impact & Media Bodies</span>
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#search" className="btn btn-vit-banner-search btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2">
                <span>Search All 80+ Clubs</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Will Start Soon Modal */}
      {recruitmentClub && (
        <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3" role="dialog" aria-modal="true">
          <div className="modal-content-custom bg-white rounded-4 shadow-2xl overflow-hidden w-100 max-w-650 animate-modal-in">
            {/* Modal Header */}
            <div className="p-4 bg-gradient-navy text-white position-relative">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="badge bg-warning text-dark rounded-pill px-3 py-1 fw-bold">
                  <i className="bi bi-megaphone-fill me-1"></i> Upcoming Recruitment Drive
                </span>
                <button
                  type="button"
                  className="btn-close-custom text-white border-0 bg-transparent fs-5"
                  onClick={() => setRecruitmentClub(null)}
                  aria-label="Close"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <h3 className="h4 fw-bold text-white mb-1">
                Recruitment Will Start Soon!
              </h3>
              <p className="text-white-75 small mb-0">
                Official auditions and member intake for <strong>{recruitmentClub.name}</strong>
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <div className="alert alert-primary bg-primary-subtle border-0 rounded-3 mb-4 d-flex align-items-start gap-3">
                <i className="bi bi-calendar2-check-fill fs-3 text-primary"></i>
                <div>
                  <div className="fw-bold text-navy">VIT Campus Induction Schedule</div>
                  <div className="small text-secondary">
                    Club recruitment, orientation presentations, and domain auditions across technical, management, design, and sponsorship teams will officially kick off shortly for the upcoming semester.
                  </div>
                </div>
              </div>

              {/* Recruitment Domains & Roles */}
              <h6 className="fw-bold text-navy mb-2">Available Domains During Recruitment</h6>
              <div className="row g-2 mb-4 small">
                <div className="col-sm-6">
                  <div className="p-2 border rounded-3 bg-light">
                    <div className="fw-semibold text-navy"><i className="bi bi-code-slash text-primary me-1"></i> Technical & Dev Core</div>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Full Stack, App Dev, ML & Embedded</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-2 border rounded-3 bg-light">
                    <div className="fw-semibold text-navy"><i className="bi bi-palette text-danger me-1"></i> Creative & Design</div>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>UI/UX, 3D Assets, Video Editing</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-2 border rounded-3 bg-light">
                    <div className="fw-semibold text-navy"><i className="bi bi-people text-success me-1"></i> Events & Operations</div>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Hackathons, Logistics, Moderation</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-2 border rounded-3 bg-light">
                    <div className="fw-semibold text-navy"><i className="bi bi-broadcast text-warning me-1"></i> PR & Sponsorship</div>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>Industry Outreach, Media & Socials</span>
                  </div>
                </div>
              </div>

              {/* Get Notified Form */}
              <div className="p-3 rounded-3 border bg-light-subtle mb-4">
                <div className="fw-bold text-navy mb-1">
                  <i className="bi bi-bell-fill text-warning me-1"></i> Want Priority Notification?
                </div>
                <p className="text-muted small mb-3">
                  Enter your student email and we will notify you the moment Google Forms / audition links go live!
                </p>

                {isNotified ? (
                  <div className="alert alert-success border-0 mb-0 py-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                    <span className="small fw-semibold">You're on the priority list! We'll alert you as soon as recruitment forms open.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="d-flex gap-2">
                    <input
                      type="email"
                      className="form-control form-control-sm rounded-pill px-3"
                      placeholder="student.prn@vit.edu"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-primary btn-sm rounded-pill px-3 text-nowrap fw-semibold">
                      Notify Me
                    </button>
                  </form>
                )}
              </div>

              {/* Modal Footer */}
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-navy rounded-pill px-4 py-2"
                  onClick={() => setRecruitmentClub(null)}
                >
                  Got It, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Club Details Modal */}
      {selectedClub && (
        <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3" role="dialog" aria-modal="true">
          <div className="modal-content-custom bg-white rounded-4 shadow-lg overflow-hidden w-100 max-w-650 animate-modal-in">
            <div className="position-relative">
              {selectedClub.image && !selectedClub.image.startsWith('http') ? (
                <img
                  src={selectedClub.image}
                  alt={selectedClub.name}
                  className="w-100 object-fit-cover modal-header-img"
                />
              ) : (
                <div 
                  className="modal-header-banner p-4 text-white d-flex flex-column justify-content-end"
                  style={{ 
                    minHeight: '180px', 
                    background: selectedClub.gradient || 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' 
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="club-banner-icon-circle rounded-circle d-flex align-items-center justify-content-center text-white shadow">
                      <i className={`bi ${selectedClub.icon || 'bi-people'} fs-3`}></i>
                    </div>
                    <div>
                      <span className="club-badge-translucent rounded-pill px-3 py-1 mb-2 d-inline-block small fw-semibold">{selectedClub.meta}</span>
                      <h3 className="h4 fw-bold mb-0 text-white">{selectedClub.name}</h3>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                type="button"
                className="btn-close-custom position-absolute top-0 end-0 m-3 rounded-circle border-0 d-flex align-items-center justify-content-center shadow bg-white"
                onClick={() => setSelectedClub(null)}
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg text-dark"></i>
              </button>
            </div>

            <div className="p-4">
              <p className="text-secondary mb-4">{selectedClub.desc}</p>

              <div className="bg-light rounded-3 p-3 mb-4">
                <div className="row g-3 small">
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Faculty / Student Leads</div>
                    <div className="text-navy fw-bold">{selectedClub.lead || 'Student Chapter Leads'}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Meeting Times</div>
                    <div className="text-navy fw-bold">{selectedClub.schedule || 'Scheduled Weekly'}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Regular Venue</div>
                    <div className="text-navy fw-bold">{selectedClub.location || 'Campus Innovation Wing'}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Official Contact</div>
                    <div className="text-navy fw-bold">{selectedClub.email || 'campus@gdgexplorer.edu'}</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold text-navy mb-2">Core Topics & Learning Tracks</h6>
                <div className="d-flex flex-wrap gap-2">
                  {(selectedClub.tags || []).map((tag, idx) => (
                    <span key={idx} className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill px-4 py-2 flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                  onClick={() => {
                    const clubToJoin = selectedClub;
                    setSelectedClub(null);
                    handleOpenRecruitment(clubToJoin);
                  }}
                >
                  <i className="bi bi-person-plus-fill"></i>
                  <span>Join Club (Recruitment Info)</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4 py-2"
                  onClick={() => setSelectedClub(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ClubsSection;
