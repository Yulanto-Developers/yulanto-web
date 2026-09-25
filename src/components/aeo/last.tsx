'use client';

import React from 'react';
import { useQuoteModal } from '../home/home/myComponents/Content/QuoteContext';
export default function FutureSearchSection() {
  const { openModal } = useQuoteModal();
  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110">
      <div className="container container-1550">
        <div className="row align-items-center g-4">

          {/* Left Side Image Container */}
          <div className="col-lg-6">
            <div className="px-about-img-box rounded-4 overflow-hidden">
              <img
                src="/assets/img/aeo/aeo-work.jpg"
                alt="Make Your Website Ready for the Future of Search"
                className="img-fluid w-100 object-fit-cover"
                style={{ borderRadius: '16px', height: '350px' }}
              />
            </div>
          </div>

          {/* Right Side Content Container */}
          <div className="col-lg-6" >
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about"> Make Your Website Ready  </span>for the Future of Search
            </h4>


            <p className="text-figtree text-black mt-2">
              Search is becoming more conversational, intelligent and answer-focused.
              Don't build your website only for today's search results. Build content that clearly explains who you are, what you offer, who you serve and the questions your customers need answered.

            </p>



            <p className="text-figtree text-black mt-2">
              Ready to improve your website's search and AI visibility?
              Talk to Yulanto Web Creations about an AEO and SEO strategy designed around your business, services and target audience.

            </p>


            <button
              onClick={() => { openModal('manual') }}
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
              <span className='text-figtree'>Let's Talk our Team</span>
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
            </button>
            {/* CTA Buttons */}

          </div>

        </div>
      </div>
    </section>
  );
}