import { useEffect, useState } from "react";

export default function DCIPApplicationPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Always show popup on refresh / entry
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);
  };

  const applyNow = () => {
    window.open("https://forms.gle/9WQxp8fyfbmn8NzFA", "_blank");
  };

  if (!visible) return null;

  return (
    <>
      <div className="dcip-overlay">
        <div className="dcip-glow" />

        <div className="dcip-modal animate-popup-3d">
          {/* Accent */}
          <div className="dcip-accent" />

          {/* Close */}
          <button className="dcip-close" onClick={closePopup}>
            ×
          </button>

          {/* Header */}
          <div className="dcip-header">
            <span className="dcip-badge">
              OFFICIAL GOVERNMENT NOTIFICATION
            </span>

            <h2 className="dcip-title">
              District Collector Internship Program
              <span>Batch 7 – Applications Open</span>
            </h2>

            <p className="dcip-subtitle">
              District Administration • Government Initiative
            </p>
          </div>

          <div className="dcip-divider" />

          {/* Content */}
          <div className="dcip-content">
            <p>
              Applications are invited from eligible students and young
              professionals for the
              <strong> District Collector Internship Program (DCIP – Batch 7)</strong>.
              This internship provides structured exposure to governance,
              district administration, and public service delivery.
            </p>

            <ul>
              <li>Direct exposure to District Administration</li>
              <li>Hands-on governance & policy experience</li>
              <li>Open to students from all academic backgrounds</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="dcip-footer">
            <p>Apply only via the official application form.</p>

            <div className="dcip-actions">
              <button className="dcip-btn-secondary" onClick={closePopup}>
                Close
              </button>

              <button className="dcip-btn-primary" onClick={applyNow}>
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ALL CSS INCLUDED */}
      <style>{`
        .dcip-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(10px);
          padding: 1rem;
        }

        .dcip-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          background: rgba(37,99,235,0.25);
          filter: blur(130px);
          border-radius: 50%;
        }

        .dcip-modal {
          position: relative;
          width: 100%;
          max-width: 650px;
          background: rgba(255,255,255,0.94);
          border-radius: 20px;
          box-shadow: 0 50px 140px rgba(0,0,0,0.4);
          transform-style: preserve-3d;
        }

        .dcip-accent {
          height: 4px;
          background: linear-gradient(90deg,#1e3a8a,#2563eb,#1e3a8a);
          border-radius: 20px 20px 0 0;
        }

        .dcip-close {
          position: absolute;
          top: 14px;
          right: 18px;
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
        }

        .dcip-close:hover {
          color: #111827;
        }

        .dcip-header {
          padding: 2rem 2rem 1.2rem;
        }

        .dcip-badge {
          display: inline-block;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          font-size: 0.7rem;
          font-weight: 700;
          color: #1e3a8a;
        }

        .dcip-title {
          margin-top: 1rem;
          font-size: 1.6rem;
          font-weight: 800;
          color: #111827;
        }

        .dcip-title span {
          display: block;
          color: #1e40af;
        }

        .dcip-subtitle {
          margin-top: 0.4rem;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .dcip-divider {
          height: 1px;
          margin: 0 2rem;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
        }

        .dcip-content {
          padding: 1.5rem 2rem;
          font-size: 0.9rem;
          line-height: 1.7;
          color: #374151;
        }

        .dcip-content ul {
          margin-top: 1rem;
          padding-left: 1.1rem;
        }

        .dcip-content li {
          margin-bottom: 0.5rem;
        }

        .dcip-footer {
          padding: 1.2rem 2rem;
          background: #f9fafb;
          border-radius: 0 0 20px 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .dcip-actions {
          display: flex;
          gap: 0.75rem;
        }

        .dcip-btn-secondary {
          padding: 0.45rem 1.1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: white;
          cursor: pointer;
        }

        .dcip-btn-secondary:hover {
          background: #f3f4f6;
        }

        .dcip-btn-primary {
          padding: 0.45rem 1.3rem;
          border-radius: 8px;
          border: none;
          background: linear-gradient(90deg,#1e3a8a,#2563eb);
          color: white;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(30,58,138,0.4);
          transition: transform 0.2s ease;
        }

        .dcip-btn-primary:hover {
          transform: scale(1.05);
        }

        @keyframes popup3d {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateX(14deg) translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateX(0deg) translateY(0) scale(1);
          }
        }

        .animate-popup-3d {
          animation: popup3d 0.6s cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>
    </>
  );
}
