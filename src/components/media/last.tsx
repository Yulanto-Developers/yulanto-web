'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

export default function AboutSection() {
    const { openModal } = useQuoteModal();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110 bg-white social-about-last-section"
      style={{ overflowX: 'hidden', width: '100%' }}
    >
      <div className="container container-1550 mx-auto px-4" style={{ overflow: 'hidden' }}>
        
        {/* Main Side-by-Side Wrapper */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            backgroundColor: '#ffffff'
          }}
        >
          
          {/* Left Side: Circular Image */}
          <div 
            style={{
              flex: '1 1 300px',
              maxWidth: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto'
            }}
            data-aos="fade-right"
          >
            <div 
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '4px solid #f3f4f6',
                flexShrink: 0
              }}
            >
              <img
                src="assets/img/social/last-bottom-.jpg"
                alt="Social Media Marketing"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div 
            style={{
              flex: '1 1 400px',
              minWidth: '300px'
            }}
            data-aos="fade-left"
          >
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Grow Your Brand with </span>
             Social Media Marketing
            </h4>


            <p className="text-figtree text-black mt-2">
              Ready to strengthen your online presence and connect with more customers? 
              Partner with a professional social media marketing company in Chennai for 
              strategic, creative, and results-focused social media campaigns.
            </p>

            <p className="text-figtree text-black mt-2 font-medium">
              Contact us today to discuss your social media marketing requirements.
            </p>
             {/* Left Aligned CTA Button */}
            <button
             onClick={openModal}
              className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
              style={{
                backgroundColor: '#053456',
                color: '#ffffff',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: '1px solid #053456',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
            <span style={{fontFamily: "Figtree, Figtree Fallback"}}>Let's Talk our Team</span>
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}