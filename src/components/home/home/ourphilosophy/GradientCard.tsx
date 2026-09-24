"use client";
import * as React from "react";
import { motion } from "framer-motion";

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  badgeColor: string;
  title: string;
  description: string;
  imageUrl: string;
  gradient?: "orange" | "gray" | "purple" | "green";
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient = "gray",
      badgeColor,
      title,
      description,
      imageUrl,
      ...props
    },
    ref
  ) => {
    // Map gradient to CSS class
    const gradientClass = {
      orange: "bg-gradient-to-br-orange",
      gray: "bg-gradient-to-br-gray",
      purple: "bg-gradient-to-br-purple",
      green: "bg-gradient-to-br-green",
    }[gradient];

    // Animation variants for framer-motion
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-100"
        ref={ref}
      >
        <div
          className={`position-relative d-flex flex-column justify-content-between h-100 w-100 overflow-hidden rounded-3 p-4 shadow-sm transition-shadow duration-300 hover-shadow-lg ${gradientClass} ${className || ""}`}
          {...props}
        >
          {/* Decorative background image with animation */}
          <motion.img
            src={imageUrl}
            alt={`${title} background graphic`}
            variants={imageAnimation}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="position-absolute w-75 opacity-80 pointer-events-none"
            style={{ right: "-25%", bottom: "-25%" }}
          />

          {/* Card Content */}
          <div className="position-relative z-1 d-flex flex-column h-100">
            {/* Badge - Color dot only */}
            <div className="mb-3">
              <span
                className="d-inline-block rounded-circle"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: badgeColor,
                }}
              />
            </div>

            {/* Title and Description */}
            <div className="flex-grow-1">
              <h3 className="fs-2 fw-bold text-dark mb-2 text-tenor">{title}</h3>
              <p className="text-dark text-opacity-70 tx-14 text-figtree" style={{ maxWidth: "280px" }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

GradientCard.displayName = "GradientCard";

export { GradientCard };