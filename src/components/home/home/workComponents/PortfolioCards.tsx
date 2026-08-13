"use client";

import type { PortfolioItem } from "./portfolio";
import { usePortfolioModal } from "./PortfolioModalContext";
import "./PortfolioCards.css";

export interface PortfolioCardsProps {
  items: PortfolioItem[];
  activeCategory?: string;
}

export default function PortfolioCards({
  items,
  activeCategory = "all",
}: PortfolioCardsProps) {
  const { openModal } = usePortfolioModal();

  if (items.length === 0) {
    return (
      <p className="text-center text-muted py-5">
        No items found in this category.
      </p>
    );
  }

  return (
    /* Passing key={activeCategory} re-triggers the fade-in animation when clicking buttons */
    <div className="portfolio-modal-cards" key={activeCategory}>
      {items.map((item, index) => (
        <div
          className="portfolio-modal-card"
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => openModal(item)}
          style={{
            /* Staggered transition effect for each card */
            animationDelay: `${index * 0.06}s`,
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openModal(item);
            }
          }}
        >
          {/* Background Image Container */}
          <div className="portfolio-modal-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>

          {/* Date Badge */}
          {item.date && (
            <div className="portfolio-card-date-badge">{item.date}</div>
          )}

          {/* Overlay with Title, Category, Description and Plus Icon */}
          <div className="portfolio-modal-card-overlay">
            <div className="portfolio-card-info">
              {item.category && (
                <span className="portfolio-card-category">
                  &bull; {item.category.replace("-", " ")}
                </span>
              )}

              <h3 className="portfolio-card-title">{item.title}</h3>

              {item.description && (
                <p className="portfolio-card-description">{item.description}</p>
              )}
            </div>

            <button
              className="portfolio-card-plus-btn"
              aria-label={`Open ${item.title}`}
              tabIndex={-1}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}