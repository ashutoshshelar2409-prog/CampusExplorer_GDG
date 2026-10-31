import { useState, useEffect } from 'react';
import { useCampus } from '../context/useCampus';

function EventsSection() {
  const { data, rsvpdEvents, handleToggleRsvp } = useCampus();
  const events = data?.events || [];
  const filters = data?.eventFilters || ["All Events", "Workshops", "Hackathons", "College Events"];

  const [activeCategory, setActiveCategory] = useState("All Events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [toast, setToast] = useState(null);

  // Category Icon Mapping
  const categoryIcons = {
    "All Events": "bi-grid-fill",
    "Workshops": "bi-laptop",
    "Hackathons": "bi-code-square",
    "College Events": "bi-stars"
  };

  const getCategorySlug = (cat) => {
    if (!cat) return 'default';
    const lower = cat.toLowerCase();
    if (lower.includes('workshop')) return 'workshops';
    if (lower.includes('hackathon')) return 'hackathons';
    if (lower.includes('college')) return 'college-events';
    return lower.replace(/\s+/g, '-');
  };

  const getCategoryIcon = (cat) => {
    const slug = getCategorySlug(cat);
    if (slug === 'workshops') return 'bi-cpu';
    if (slug === 'hackathons') return 'bi-terminal';
    if (slug === 'college-events') return 'bi-stars';
    return 'bi-calendar-event';
  };

  const getCategoryCount = (filter) => {
    if (filter === "All Events") return events.length;
    if (filter === "College Events") {
      return events.filter(e => e.category === "College Events" || e.category === "College Event").length;
    }
    return events.filter(e => e.category.toLowerCase() === filter.toLowerCase()).length;
  };

  // Toast Auto-Dismiss
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Modal ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    if (selectedEvent) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  const handleRsvpAction = (evt, e) => {
    if (e) e.stopPropagation();
    const willBeRsvpd = !rsvpdEvents[evt.id];
    handleToggleRsvp(evt.id);

    setToast({
      type: willBeRsvpd ? 'reserved' : 'cancelled',
      title: willBeRsvpd ? '🎉 Seat Reserved!' : 'RSVP Cancelled',
      message: willBeRsvpd
        ? `You're confirmed for "${evt.title}". Pass saved to your profile!`
        : `Your reservation for "${evt.title}" has been updated.`
    });
  };

  const filteredEvents = activeCategory === "All Events"
    ? events
    : events.filter(e => {
        if (activeCategory === "College Events") {
          return e.category === "College Events" || e.category === "College Event";
        }
        return e.category.toLowerCase() === activeCategory.toLowerCase();
      });

  return (
    <section id="events" className="events-section py-5 position-relative overflow-hidden">
      {/* Aesthetic Animated Background System */}
      <div className="events-top-glow-line" aria-hidden="true"></div>
      <div className="events-bg-dots" aria-hidden="true"></div>
      <div className="events-ambient-orb events-orb-blue" aria-hidden="true"></div>
      <div className="events-ambient-orb events-orb-purple" aria-hidden="true"></div>
      <div className="events-ambient-orb events-orb-amber" aria-hidden="true"></div>

      {/* Floating Dynamic Decorative Badges */}
      <div className="events-floating-accent events-accent-1" aria-hidden="true" title="Calendar">
        <i className="bi bi-calendar4-week"></i>
      </div>
      <div className="events-floating-accent events-accent-2" aria-hidden="true" title="Passes">
        <i className="bi bi-ticket-perforated"></i>
      </div>
      <div className="events-floating-accent events-accent-3" aria-hidden="true" title="Awards">
        <i className="bi bi-trophy"></i>
      </div>
      <div className="events-floating-accent events-accent-4" aria-hidden="true" title="Festivals">
        <i className="bi bi-stars"></i>
      </div>

      <div className="container py-4 position-relative z-1">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4 reveal-on-scroll">
          <div className="col-lg-9 col-xl-8">
            {/* Live Indicator Badge */}
            <div className="d-inline-flex align-items-center gap-2 mb-3 events-header-badge">
              <span className="events-live-beacon">
                <span className="beacon-core"></span>
                <span className="beacon-ring"></span>
              </span>
              <span className="events-badge-text fw-semibold">Campus Calendar • Active Season 2026</span>
              <span className="events-badge-pill-hot">
                <i className="bi bi-fire me-1"></i>4 Flagship Events
              </span>
            </div>

            {/* Section Title with Animated Gradient Accent */}
            <h2 className="events-main-title fw-bold mb-3">
              Upcoming <span className="events-title-gradient">Campus Events</span>
            </h2>

            <p className="events-subtitle text-muted fs-6 mb-4">
              Participate in GDGVerse inductions, Geek Fiesta AI workshops & ideathons, and the legendary Vishwakarandak annual gathering.
            </p>

            {/* Quick Live Highlights Bar */}
            <div className="events-highlights-bar d-flex flex-wrap justify-content-center gap-3">
              <div className="events-highlight-item">
                <i className="bi bi-lightning-charge-fill text-warning"></i>
                <span>Instant RSVP Pass</span>
              </div>
              <div className="events-highlight-divider" aria-hidden="true"></div>
              <div className="events-highlight-item">
                <i className="bi bi-patch-check-fill text-primary"></i>
                <span>Certificates & GDG Swag</span>
              </div>
              <div className="events-highlight-divider" aria-hidden="true"></div>
              <div className="events-highlight-item">
                <i className="bi bi-people-fill text-success"></i>
                <span>1,300+ Registered Students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Filter Buttons with Counts */}
        <div className="events-filter-container d-flex flex-wrap justify-content-center gap-2 mb-5 reveal-on-scroll reveal-delay-1">
          {filters.map((filter) => {
            const icon = categoryIcons[filter] || "bi-calendar-event";
            const count = getCategoryCount(filter);
            const isActive = activeCategory === filter;
            return (
              <button
                key={filter}
                type="button"
                className={`events-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(filter)}
              >
                <i className={`bi ${icon}`}></i>
                <span>{filter}</span>
                <span className="events-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="row g-4 events-grid-enter" key={activeCategory}>
          {filteredEvents.map((evt, idx) => {
            const isRsvpd = !!rsvpdEvents[evt.id];
            const currentSpots = evt.spotsLeft ?? 30;
            const categorySlug = getCategorySlug(evt.category);
            const totalEstimatedSpots = Math.max(100, currentSpots + 50);
            const capacityPercent = Math.min(96, Math.max(45, Math.round(((totalEstimatedSpots - currentSpots) / totalEstimatedSpots) * 100)));

            return (
              <div
                key={evt.id || evt.title}
                className={`col-md-6 col-lg-6 col-xl-6 reveal-on-scroll reveal-delay-${(idx % 2) + 1}`}
              >
                <div className={`card h-100 border-0 rounded-4 overflow-hidden event-card modern-event-card transition-all category-${categorySlug}`}>
                  {/* Category Gradient Top Accent Bar */}
                  <div className="event-card-accent-bar" aria-hidden="true"></div>

                  <div className="row g-0 h-100">
                    {/* Event Image Column */}
                    <div className="col-md-5 position-relative card-img-wrapper event-img-col">
                      <img
                        src={evt.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"}
                        alt={evt.title}
                        className="w-100 h-100 object-fit-cover event-img"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {/* Image Shimmer Reflection Sweep */}
                      <div className="event-img-shimmer" aria-hidden="true"></div>

                      {/* Category Floating Pill */}
                      <span className={`event-category-badge badge-cat-${categorySlug} position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2 fw-semibold`}>
                        <i className={`bi ${getCategoryIcon(evt.category)} me-1`}></i>
                        {evt.category}
                      </span>

                      {/* Live RSVP Pulsing Beacon */}
                      {evt.pulse && (
                        <span className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center gap-2 px-2 py-1 event-live-rsvp-pill rounded-pill text-white small">
                          <span className="badge-pulse-indicator"></span>
                          <span style={{ fontSize: '0.72rem', fontWeight: 600 }}>Live RSVP</span>
                        </span>
                      )}

                      {/* Spots Urgency Tag */}
                      {currentSpots < 70 && (
                        <span className="position-absolute bottom-0 end-0 m-3 px-2 py-1 event-urgent-pill rounded-pill small">
                          <i className="bi bi-fire me-1 text-danger"></i>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>{currentSpots} spots left</span>
                        </span>
                      )}
                    </div>

                    {/* Card Content Column */}
                    <div className="col-md-7">
                      <div className="card-body p-4 d-flex flex-column h-100 event-card-body">
                        {/* Type & Status Header */}
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="event-type-badge rounded-pill px-2.5 py-1 small fw-semibold">
                            <i className="bi bi-bookmark-fill me-1 text-primary opacity-75"></i>
                            {evt.typeLabel}
                          </span>
                          <span className="small event-status-text fw-medium d-inline-flex align-items-center gap-1.5">
                            <span className="event-status-dot"></span>
                            {evt.status}
                          </span>
                        </div>

                        <h3 className="h5 card-title fw-bold event-card-title mb-2">
                          {evt.title}
                        </h3>

                        <p className="card-text text-muted small flex-grow-1 mb-3 event-card-desc">
                          {evt.desc}
                        </p>

                        {/* Date, Location & Capacity Meter */}
                        <div className="event-meta-box p-3 rounded-3 mb-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center gap-2">
                              <div className="event-meta-icon-wrapper text-primary">
                                <span className="material-symbols-outlined fs-6">{evt.dateIcon || 'schedule'}</span>
                              </div>
                              <span className="fw-semibold event-meta-text">{evt.date}</span>
                            </div>
                            <span className={`badge ${currentSpots < 30 ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'} rounded-pill fw-semibold px-2 py-1`}>
                              {currentSpots} spots left
                            </span>
                          </div>

                          <div className="d-flex align-items-center gap-2 mb-2">
                            <div className="event-meta-icon-wrapper text-secondary">
                              <span className="material-symbols-outlined fs-6">{evt.placeIcon || 'apartment'}</span>
                            </div>
                            <span className="text-truncate small text-secondary">{evt.place}</span>
                          </div>

                          {/* Visual Registration Capacity Meter */}
                          <div className="event-capacity-meter mt-2 pt-1 border-top">
                            <div className="d-flex justify-content-between small text-muted mb-1" style={{ fontSize: '0.7rem' }}>
                              <span>Registration Capacity</span>
                              <span className="fw-semibold text-navy">{capacityPercent}% Reserved</span>
                            </div>
                            <div className="progress" style={{ height: '5px' }}>
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                style={{
                                  width: `${capacityPercent}%`,
                                  background: currentSpots < 30
                                    ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                                    : 'linear-gradient(90deg, #10b981, #06b6d4)'
                                }}
                                aria-valuenow={capacityPercent}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="d-flex gap-2 mt-auto">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 flex-grow-1 fw-semibold d-inline-flex align-items-center justify-content-center gap-1 event-details-btn"
                            onClick={() => setSelectedEvent(evt)}
                          >
                            <span>Event Details</span>
                            <i className="bi bi-arrow-right event-arrow-icon"></i>
                          </button>

                          <button
                            type="button"
                            className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold event-rsvp-btn ${isRsvpd ? 'is-rsvpd text-white' : 'text-white'}`}
                            onClick={(e) => handleRsvpAction(evt, e)}
                            title={isRsvpd ? "Cancel RSVP" : "Reserve Seat (Free RSVP)"}
                          >
                            {isRsvpd ? (
                              <span className="d-inline-flex align-items-center gap-1 rsvp-bounce-in">
                                <i className="bi bi-check2-circle"></i> RSVP&apos;d
                              </span>
                            ) : (
                              <span className="d-inline-flex align-items-center gap-1">
                                <i className="bi bi-ticket-perforated-fill"></i> RSVP
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Toast Notification */}
      {toast && (
        <div className="events-toast-notification position-fixed bottom-0 end-0 m-4 p-3 rounded-4 shadow-lg d-flex align-items-center gap-3 animate-toast-in z-3">
          <div className={`events-toast-icon ${toast.type === 'reserved' ? 'bg-success text-white' : 'bg-secondary text-white'} rounded-circle d-flex align-items-center justify-content-center`}>
            <i className={`bi ${toast.type === 'reserved' ? 'bi-check-lg' : 'bi-info-lg'}`}></i>
          </div>
          <div>
            <div className="fw-bold small">{toast.title}</div>
            <div className="small text-white-50">{toast.message}</div>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white ms-auto small"
            onClick={() => setToast(null)}
            aria-label="Dismiss toast"
          ></button>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3" role="dialog" aria-modal="true">
          <div className="modal-content-custom bg-white rounded-4 shadow-lg overflow-hidden w-100 max-w-650 animate-modal-in">
            <div className="position-relative">
              <img
                src={selectedEvent.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"}
                alt={selectedEvent.title}
                className="w-100 object-fit-cover modal-header-img"
              />
              <button
                type="button"
                className="btn-close-custom position-absolute top-0 end-0 m-3 rounded-circle border-0 d-flex align-items-center justify-content-center shadow"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <div className="modal-header-gradient position-absolute bottom-0 start-0 w-100 p-4 text-white">
                <span className={`badge rounded-pill mb-2 px-3 py-1.5 badge-cat-${getCategorySlug(selectedEvent.category)}`}>
                  <i className={`bi ${getCategoryIcon(selectedEvent.category)} me-1`}></i>
                  {selectedEvent.category}
                </span>
                <h3 className="h4 fw-bold mb-0 text-white">{selectedEvent.title}</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-secondary mb-4">{selectedEvent.desc}</p>

              <div className="bg-light rounded-3 p-3 mb-4">
                <div className="row g-3 small">
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Event Timing</div>
                    <div className="text-navy fw-bold">{selectedEvent.date}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Venue Location</div>
                    <div className="text-navy fw-bold">{selectedEvent.place}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Category</div>
                    <div className="text-navy fw-bold">{selectedEvent.typeLabel}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Host Organization</div>
                    <div className="text-navy fw-bold">{selectedEvent.organizer || 'Technical Council'}</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-2 border-top">
                <button
                  type="button"
                  className={`btn rounded-pill px-4 py-2 flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 ${
                    rsvpdEvents[selectedEvent.id] ? 'btn-success' : 'btn-primary'
                  }`}
                  onClick={() => handleRsvpAction(selectedEvent)}
                >
                  <i className={`bi ${rsvpdEvents[selectedEvent.id] ? 'bi-check-circle-fill' : 'bi-ticket-perforated-fill'}`}></i>
                  <span>{rsvpdEvents[selectedEvent.id] ? 'Seat Confirmed (Click to Cancel)' : 'Reserve Your Seat (Free RSVP)'}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4 py-2"
                  onClick={() => setSelectedEvent(null)}
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

export default EventsSection;
