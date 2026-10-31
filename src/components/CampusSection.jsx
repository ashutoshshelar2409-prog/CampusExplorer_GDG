import { useState } from 'react';
import { campusLocations } from '../data/campusData';

function CampusSection() {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyLocation = (facility) => {
    navigator.clipboard?.writeText?.(`${facility.title} - ${facility.location}`);
    setCopiedId(facility.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="explore" className="campus-section py-5 bg-light-subtle">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5 reveal-on-scroll">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i className="bi bi-geo-alt-fill me-1"></i> Campus Spaces
            </span>
            <h2 className="section-title text-navy fw-bold mb-3">Explore Campus Facilities</h2>
            <p className="text-muted fs-6">
              Navigate university infrastructure designed for high academic achievement, athletic excellence, collaborative creation, and vibrant campus life.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="row g-4">
          {campusLocations.map((facility, idx) => (
            <div key={facility.id} className={`col-md-6 col-lg-4 reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden campus-card transition-all">
                {/* Card Image with Badge */}
                <div className="position-relative card-img-wrapper">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="card-img-top object-fit-cover w-100 facility-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <span className="facility-cat-pill position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2 fw-semibold">
                    <i className={`bi ${facility.icon} text-primary me-1`}></i>
                    {facility.category}
                  </span>
                  <span className="facility-badge-pill position-absolute bottom-0 end-0 m-3 rounded-pill px-2.5 py-1 small fw-medium">
                    {facility.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 card-title fw-bold text-navy mb-2">{facility.title}</h3>
                  <p className="card-text text-muted small flex-grow-1 mb-3">
                    {facility.shortDesc}
                  </p>

                  <div className="facility-meta small text-muted mb-3 pt-2 border-top">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <i className="bi bi-pin-map text-primary"></i>
                      <span>{facility.location}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-clock text-primary"></i>
                      <span>{facility.hours}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 fw-semibold w-100 justify-content-center"
                      onClick={() => setSelectedFacility(facility)}
                    >
                      <span>Explore Facility</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3" role="dialog" aria-modal="true">
          <div className="modal-content-custom bg-white rounded-4 shadow-lg overflow-hidden w-100 max-w-650 animate-modal-in">
            <div className="position-relative">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-100 object-fit-cover modal-header-img"
              />
              <button
                type="button"
                className="btn-close-custom position-absolute top-0 end-0 m-3 rounded-circle border-0 d-flex align-items-center justify-content-center shadow"
                onClick={() => setSelectedFacility(null)}
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <div className="modal-header-gradient position-absolute bottom-0 start-0 w-100 p-4 text-white">
                <span className="badge bg-primary rounded-pill mb-1">{selectedFacility.category}</span>
                <h3 className="h4 fw-bold mb-0 text-white">{selectedFacility.title}</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-secondary mb-4">{selectedFacility.shortDesc}</p>

              <div className="bg-light rounded-3 p-3 mb-4">
                <div className="row g-2 small">
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Campus Location</div>
                    <div className="text-navy fw-bold">{selectedFacility.location}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted fw-semibold">Standard Operating Hours</div>
                    <div className="text-navy fw-bold">{selectedFacility.hours}</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold text-navy mb-2">Key Highlights & Amenities</h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedFacility.highlights.map((item, idx) => (
                    <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-normal">
                      <i className="bi bi-check2 text-primary me-1"></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill px-4 py-2 flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                  onClick={() => handleCopyLocation(selectedFacility)}
                >
                  <i className={`bi ${copiedId === selectedFacility.id ? 'bi-check-lg' : 'bi-copy'}`}></i>
                  <span>{copiedId === selectedFacility.id ? 'Location Copied!' : 'Copy Location to Clipboard'}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4 py-2"
                  onClick={() => setSelectedFacility(null)}
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

export default CampusSection;
