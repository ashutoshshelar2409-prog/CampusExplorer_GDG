import { useState, useMemo, useEffect } from 'react';
import { useCampus } from '../context/useCampus';

function SearchSection() {
  const { data } = useCampus();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamic rotating placeholder examples for a cool, living UI
  const placeholderExamples = useMemo(() => [
    "Search clubs, hackathons, campus facilities...",
    "Search 'GDG' or 'IEEE Student Branch'...",
    "Search 'Central Library' or 'Gymnasium'...",
    "Search 'Boot Club' or 'Campus Canteen'...",
    "Search 'Reading Halls' or 'Geek Fiesta'...",
    "Search 'VELOSE Racing' or 'Vishwakarandak'..."
  ], []);

  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % placeholderExamples.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [placeholderExamples.length]);

  // Unified items pool from live backend data
  const allItems = useMemo(() => {
    const clubs = (data?.clubs || []).map((club) => ({
      ...club,
      itemType: 'Club',
      typeLabel: 'Student Community',
      typeIcon: 'bi-people',
      typeBadgeClass: 'search-badge-club',
      displayTitle: club.name,
      displayDesc: club.desc,
      displayMeta: `${club.schedule || 'Weekly'} · ${club.members || 'Active'}`,
      metaIcon: 'bi-clock',
      categoryGroup: 'Clubs',
      tags: club.tags || [],
      image: club.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    }));

    const events = (data?.events || []).map((evt) => ({
      ...evt,
      itemType: 'Event',
      typeLabel: evt.typeLabel || 'Campus Event',
      typeIcon: 'bi-calendar-event',
      typeBadgeClass: 'search-badge-event',
      displayTitle: evt.title,
      displayDesc: evt.desc,
      displayMeta: `${evt.date} @ ${evt.place}`,
      metaIcon: 'bi-calendar3',
      categoryGroup: 'Events',
      tags: [evt.category, evt.organizer || 'Campus'],
      image: evt.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    }));

    const toolkit = (data?.toolkit || []).map((tool) => ({
      ...tool,
      itemType: 'Toolkit',
      typeLabel: 'Student Track & Guide',
      typeIcon: 'bi-compass',
      typeBadgeClass: 'search-badge-track',
      displayTitle: tool.title,
      displayDesc: tool.desc,
      displayMeta: tool.cta,
      metaIcon: 'bi-arrow-right-circle',
      categoryGroup: 'Tracks',
      tags: ['Guide', 'Resource'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    }));

    const locations = (data?.facilities || []).map((loc) => ({
      ...loc,
      itemType: 'Facility',
      typeLabel: 'Campus Facility',
      typeIcon: 'bi-building',
      typeBadgeClass: 'search-badge-facility',
      displayTitle: loc.title,
      displayDesc: loc.shortDesc,
      displayMeta: loc.location,
      metaIcon: 'bi-geo-alt',
      categoryGroup: 'Facilities',
      tags: loc.highlights || []
    }));

    return [...clubs, ...events, ...toolkit, ...locations];
  }, [data]);

  // Filtered results
  const filteredResults = useMemo(() => {
    return allItems.filter((item) => {
      // Category Filter
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'Clubs' && item.categoryGroup === 'Clubs') ||
        (activeCategory === 'Events' && item.categoryGroup === 'Events') ||
        (activeCategory === 'Tracks' && item.categoryGroup === 'Tracks') ||
        (activeCategory === 'Facilities' && item.categoryGroup === 'Facilities');

      if (!matchesCategory) return false;

      // Search Query Filter
      if (!searchTerm.trim()) return true;

      const query = searchTerm.toLowerCase();
      const matchTitle = (item.displayTitle || '').toLowerCase().includes(query);
      const matchDesc = (item.displayDesc || '').toLowerCase().includes(query);
      const matchMeta = (item.displayMeta || '').toLowerCase().includes(query);
      const matchCategory = (item.category || '').toLowerCase().includes(query);
      const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));

      return matchTitle || matchDesc || matchMeta || matchCategory || matchTags;
    });
  }, [allItems, searchTerm, activeCategory]);

  const quickChips = [
    { label: "GDG", query: "GDG" },
    { label: "Central Library", query: "Library" },
    { label: "Gymnasium", query: "Gym" },
    { label: "Canteen", query: "Canteen" },
    { label: "Boot Club", query: "Boot Club" },
    { label: "Reading Halls", query: "Reading" },
    { label: "Hackathon", query: "Hackathon" }
  ];

  return (
    <section id="search" className="search-section py-5 position-relative overflow-hidden">
      {/* Subtle Ambient Background Mesh */}
      <div className="search-bg-dots" aria-hidden="true"></div>
      <div className="search-bg-glow" aria-hidden="true"></div>

      <div className="container py-4 position-relative z-1">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4 reveal-on-scroll">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i className="bi bi-search me-1"></i> Instant Discovery
            </span>
            <h2 className="section-title text-navy fw-bold mb-3">Campus Search &amp; Directory</h2>
            <p className="text-muted fs-6">
              Search real-time across clubs, sprint events, student tracks, and university facilities in one unified directory.
            </p>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="row justify-content-center mb-4 reveal-on-scroll reveal-delay-1">
          <div className="col-lg-9 col-xl-8">
            <div className="search-box-wrapper rounded-pill p-2 border d-flex align-items-center transition-all">
              <span className="ps-3 pe-2 text-primary fs-5 d-flex align-items-center flex-shrink-0 search-icon-halo">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-transparent shadow-none px-2 py-2 search-input flex-grow-1"
                placeholder={placeholderExamples[placeholderIdx]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search campus database"
              />
              {searchTerm ? (
                <button
                  type="button"
                  className="btn btn-sm btn-link text-muted me-2 flex-shrink-0 search-clear-btn"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search query"
                  title="Clear search"
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              ) : (
                <span className="search-kbd-hint me-2 d-none d-md-inline-flex align-items-center gap-1 text-muted small">
                  <kbd className="search-kbd">Ctrl</kbd>
                  <kbd className="search-kbd">K</kbd>
                </span>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="d-flex flex-wrap align-items-center gap-2 mt-3 justify-content-center search-quick-queries">
              <span className="small text-muted fw-semibold">Popular Queries:</span>
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`btn btn-sm rounded-pill px-3 py-1 search-chip-btn ${
                    searchTerm.toLowerCase() === chip.query.toLowerCase()
                      ? 'btn-primary'
                      : 'btn-light border text-secondary'
                  }`}
                  onClick={() => setSearchTerm(chip.query)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 search-filter-container">
          {[
            { id: 'All', label: 'All Results', icon: 'bi-grid' },
            { id: 'Clubs', label: 'Clubs & Communities', icon: 'bi-people' },
            { id: 'Events', label: 'Events & Hackathons', icon: 'bi-calendar-event' },
            { id: 'Tracks', label: 'Interests & Tracks', icon: 'bi-compass' },
            { id: 'Facilities', label: 'Campus Facilities', icon: 'bi-building' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2 transition-all search-cat-filter-btn ${
                activeCategory === cat.id ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={`bi ${cat.icon}`}></i>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Results Count Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <span className="small text-muted">
            Showing <strong className="text-navy">{filteredResults.length}</strong> matching {filteredResults.length === 1 ? 'entry' : 'entries'}
            {searchTerm && <span> for &ldquo;<strong>{searchTerm}</strong>&rdquo;</span>}
          </span>
          {(searchTerm || activeCategory !== 'All') && (
            <button
              type="button"
              className="btn btn-sm btn-link text-primary text-decoration-none p-0 fw-semibold d-inline-flex align-items-center gap-1"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
            >
              <i className="bi bi-arrow-counterclockwise"></i> Reset Filters
            </button>
          )}
        </div>

        {/* Results Grid or Empty State */}
        {filteredResults.length > 0 ? (
          <div className="row g-3">
            {filteredResults.map((item) => (
              <div key={`${item.itemType}-${item.id}`} className="col-md-6 col-lg-4">
                <div className="card h-100 border rounded-4 p-3 shadow-hover search-result-card transition-all">
                  <div className="d-flex align-items-start gap-3 w-100" style={{ minWidth: 0 }}>
                    {item.itemType === 'Club' && (!item.image || item.image.startsWith('http')) ? (
                      <div 
                        className="rounded-3 d-flex align-items-center justify-content-center search-thumb text-white shadow-sm flex-shrink-0"
                        style={{ background: item.gradient || 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}
                      >
                        <i className={`bi ${item.icon || 'bi-people-fill'} fs-2`}></i>
                      </div>
                    ) : (
                      <img
                        src={item.image || '/campus-hero.jpg'}
                        alt={item.displayTitle}
                        className="rounded-3 object-fit-cover search-thumb flex-shrink-0"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/campus-hero.jpg";
                        }}
                      />
                    )}
                    <div className="flex-grow-1 search-card-content" style={{ minWidth: 0, overflow: 'hidden' }}>
                      <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                        <span className={`badge rounded-pill small search-type-pill ${item.typeBadgeClass}`}>
                          <i className={`bi ${item.typeIcon} me-1`}></i>
                          {item.typeLabel}
                        </span>
                        {item.category && (
                          <span className="badge search-cat-pill rounded-pill small text-truncate" style={{ maxWidth: '140px' }} title={item.category}>
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h4 className="h6 fw-bold text-navy text-truncate mb-1" title={item.displayTitle}>{item.displayTitle}</h4>
                      <p className="text-muted small mb-2 line-clamp-2 text-break">{item.displayDesc}</p>
                      <div className="small text-secondary text-truncate d-flex align-items-center gap-1" title={item.displayMeta}>
                        <i className={`bi ${item.metaIcon} text-primary flex-shrink-0`}></i>
                        <span className="text-truncate">{item.displayMeta}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-search-state text-center py-5 rounded-4 p-4 border border-dashed">
            <div className="empty-icon-circle mx-auto mb-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center text-primary">
              <i className="bi bi-search fs-2"></i>
            </div>
            <h4 className="fw-bold text-navy mb-2">No matching campus results found</h4>
            <p className="text-muted small max-w-450 mx-auto mb-4">
              We couldn&apos;t find anything matching &ldquo;{searchTerm}&rdquo; in the selected category.
              Try searching for &ldquo;GDG&rdquo;, &ldquo;Central Library&rdquo;, &ldquo;Gymnasium&rdquo;, &ldquo;Boot Club&rdquo;, or reset your filters.
            </p>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchSection;
