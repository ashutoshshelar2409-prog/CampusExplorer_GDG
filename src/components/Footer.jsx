import { useCampus } from '../context/useCampus';

const CURRENT_YEAR = 2026;

function Footer() {
  const { data } = useCampus();
  const footerColumns = data?.footerColumns || [];

  const getFooterLinkHref = (path) => {
    if (path === 'clubs-and-communities' || path.includes('club') || path.includes('vit')) return '#clubs';
    if (path === 'events' || path === 'hackathons') return '#events';
    if (path.includes('roadmap') || path.includes('room-finder') || path.includes('guidelines') || path === 'project-hub') return '#tracks';
    return `#${path}`;
  };

  return (
    <footer className="site-footer bg-navy text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
          {/* Brand & Bio */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="brand-logo-wrapper d-flex align-items-center justify-content-center bg-white rounded-3 shadow-sm p-1">
                <img 
                  src="/vit-logo.png" 
                  alt="Vishwakarma Institutes VI Logo" 
                  className="brand-logo-img"
                  width="36"
                  height="36"
                />
              </div>
              <div>
                <div className="fs-5 fw-bold text-white lh-1 mb-1">Campus Explorer</div>
                <small className="text-secondary fw-semibold d-block" style={{ fontSize: '0.68rem', letterSpacing: '0.04em' }}>
                  VISHWAKARMA INSTITUTE OF TECHNOLOGY (VIT-PUNE)
                </small>
              </div>
            </div>
            <p className="text-secondary small mb-4 pe-lg-3">
              Your modern, unified platform for Vishwakarma Institute of Technology (VIT Pune). Discover academic facilities,
              join student societies like Google Developer Groups (GDG), and stay on top of upcoming campus events.
            </p>

            <div className="d-flex align-items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footerColumns.map((col, idx) => (
            <div key={idx} className="col-6 col-lg-3">
              <h6 className="text-uppercase fw-bold text-white small mb-3 tracking-wider">{col.title}</h6>
              <ul className="list-unstyled footer-links small">
                {(col.links || []).map((link, lIdx) => (
                  <li key={lIdx} className="mb-2">
                    <a href={getFooterLinkHref(link.path)} className="text-decoration-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between small text-secondary">
          <div className="mb-2 mb-md-0">
            &copy; {CURRENT_YEAR} Campus Explorer. All rights reserved. Prepared for Google Developer Groups (GDG).
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="badge bg-dark text-white-50 border border-secondary border-opacity-25 px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1.5">
              <span className="footer-status-dot"></span>
              All Systems Operational
            </span>
            <span className="badge bg-dark text-white-50 border border-secondary border-opacity-25 px-3 py-2 rounded-pill">
              <i className="bi bi-code-slash text-primary me-1"></i> React 19 + Vite + Bootstrap 5
            </span>
            <a
              href="#home"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 text-white-50 text-decoration-none d-inline-flex align-items-center gap-1 footer-back-to-top"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <i className="bi bi-arrow-up-short fs-6"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
