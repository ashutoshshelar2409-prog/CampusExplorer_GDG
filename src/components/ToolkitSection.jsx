import { useState } from 'react';
import { useCampus } from '../context/useCampus';

function ToolkitSection() {
  const { data } = useCampus();
  const toolkit = data?.toolkit || [];
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="tracks" className="toolkit-section py-5 bg-white border-top">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5 reveal-on-scroll">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i className="bi bi-compass me-1"></i> Student Navigation Hub
            </span>
            <h2 className="section-title text-navy fw-bold mb-3">Interests & Tracks Toolkit</h2>
            <p className="text-muted fs-6">
              Curated playbooks, teammate matchmaking, spatial room finding, and open-source campus engineering hubs.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="row g-4">
          {toolkit.map((item, idx) => (
            <div key={item.id || idx} className={`col-md-6 col-lg-3 reveal-on-scroll reveal-delay-${idx + 1}`}>
              <div className="card h-100 border rounded-4 p-4 shadow-sm bg-light-subtle toolkit-card transition-all d-flex flex-column">
                <div className="toolkit-icon-box bg-white text-primary rounded-3 shadow-sm d-flex align-items-center justify-content-center mb-3">
                  <span className="material-symbols-outlined fs-2">{item.icon}</span>
                </div>

                <h3 className="h6 fw-bold text-navy mb-2">{item.title}</h3>
                <p className="text-muted small flex-grow-1 mb-4">{item.desc}</p>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center justify-content-between w-100"
                  onClick={() => setActiveModal(item)}
                >
                  <span>{item.cta}</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModal && (
        <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3" role="dialog" aria-modal="true">
          <div className="modal-content-custom bg-white rounded-4 shadow-lg overflow-hidden w-100 max-w-650 animate-modal-in p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
              <div className="d-flex align-items-center gap-2">
                <div className="p-2 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center">
                  <span className="material-symbols-outlined fs-4">{activeModal.icon}</span>
                </div>
                <div>
                  <h4 className="fw-bold text-navy mb-0">{activeModal.title}</h4>
                  <small className="text-muted">Interests & Student Toolset</small>
                </div>
              </div>
              <button
                type="button"
                className="btn-close-custom rounded-circle border-0 d-flex align-items-center justify-content-center"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <p className="text-secondary mb-4">{activeModal.desc}</p>

            <div className="bg-light p-3 rounded-3 mb-4">
              <h6 className="fw-bold text-navy mb-2">Track Overview & Next Steps</h6>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Peer-reviewed guidelines curated by senior club leads and mentors.</span>
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Direct integration with campus Discord channels & GitHub guilds.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Weekly drop-in advisory hours at GDG Innovation Labs (Block C).</span>
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-end gap-2 pt-2 border-top">
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4 py-2"
                onClick={() => setActiveModal(null)}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ToolkitSection;
