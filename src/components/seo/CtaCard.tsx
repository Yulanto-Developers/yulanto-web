"use client";

import React, { useState, forwardRef, FormEvent } from "react";
import { motion, Variants } from "framer-motion";
import "./CtaCard.css";

export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  inputPlaceholder?: string;
  onButtonClick?: (email: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const CtaCard = forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className = "",
      imageSrc = "/images/cta-bg.jpg",
      inputPlaceholder = "Email address",
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onButtonClick) {
        onButtonClick(email);
      }
    };

    return (
      <div
        ref={ref}
        className={`cta-card-container position-relative w-100 overflow-hidden ${className}`}
        {...props}
      >
        {/* Background Image */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="CTA Background"
            className="cta-bg-image position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            aria-hidden="true"
          />
        )}

        {/* Overlay */}
        <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100" />

        {/* Content Container */}
        <motion.div
          className="position-relative z-1 container py-5 px-4 px-md-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="row align-items-center g-4">
            {/* Exact Content Column */}
            <div className="col-12 col-lg-12 text-start text-light">
              
                <h4 className="px-about-title mb-20">
              <span className="text-light"> Want to Increase Your Website Traffic?</span> 
            </h4>
              <motion.p
                className="lead text-light mb-0 opacity-90"
                variants={itemVariants}
              >
               Improve your online presence with professional Chennai SEO services designed to attract the right audience and generate sustainable organic growth.

Our SEO specialists in Chennai can help improve your search visibility, increase qualified website traffic, and create opportunities for more enquiries and conversions.
              </motion.p>
              <p className="text-light" style={{ fontSize: "16px" }}>Contact our SEO team today to discuss your SEO requirements.</p>


            </div>

           
         
          </div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export default CtaCard;