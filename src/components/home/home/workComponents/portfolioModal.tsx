"use client";

import { useEffect } from "react";
import { usePortfolioModal } from "./PortfolioModalContext";
import "./PortfolioCards.css";

export default function PortfolioModalCards() {
  const { selected, closeModal } = usePortfolioModal();

  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, closeModal]);

  if (!selected) {
    return null;
  }

  return (
    <div
      className="portfolio-fullscreen-backdrop"
      onClick={closeModal}
    >
      <div
        className="portfolio-fullscreen-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Image Section */}
        <div className="portfolio-modal-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.image}
            alt={selected.title}
            className="portfolio-modal-image"
          />

          {/* Title & Close Button Overlay on Image */}
          <div className="portfolio-modal-image-overlay">
            <h2>{selected.title}</h2>
            <button
              type="button"
              className="portfolio-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Bottom Description Section */}
        <div className="portfolio-modal-content">
          <p>{selected.description}</p>
        </div>
      </div>
    </div>
  );
}