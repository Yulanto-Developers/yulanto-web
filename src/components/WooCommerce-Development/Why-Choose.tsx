'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FeatureItem {
  title: string;
  icon: string;
}

const expectations: FeatureItem[] = [
  { title: 'Business-focused ecommerce solutions', icon: 'fa-solid fa-chart-pie' },
  { title: 'Responsive and mobile-friendly design', icon: 'fa-solid fa-mobile-screen-button' },
  { title: 'Customized WooCommerce functionality', icon: 'fa-brands fa-wordpress-simple' },
  { title: 'SEO-friendly website structure', icon: 'fa-solid fa-magnifying-glass-dollar' },
  { title: 'Secure payment integration', icon: 'fa-solid fa-lock' },
  { title: 'User-friendly administration', icon: 'fa-solid fa-sliders' },
  { title: 'Scalable website architecture', icon: 'fa-solid fa-layer-group' },
  { title: 'Performance-focused development', icon: 'fa-solid fa-gauge-high' },
  { title: 'Third-party integrations', icon: 'fa-solid fa-plug' },
  { title: 'Ongoing maintenance and support', icon: 'fa-solid fa-headset' },
];

export default function WhyChooseUsSection(): React.ReactElement {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ overflowX: 'hidden' }}
    >
      <div className="container container-1550">
        {/* Top Section Subtitle */}
        <div className="row align-items-center mb-4" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              A Reliable Partner for Your Ecommerce Website
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-0">
                <span style={{ color: '#053456' }}> Why Choose Our WooCommerce </span>Development Services in Chennai?
              </h4>
                <p className="text-figtree text-black mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Choosing the right WooCommerce development company in Chennai can make a significant difference to the performance and usability of your online store. We combine WordPress development, ecommerce functionality, responsive design, and business-focused solutions to create websites that are practical, scalable, and easy to manage.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Split: Left Text & Right Visual */}
        <div className="row align-items-center g-5">
          {/* Left Side: Content & Cards */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="pe-lg-3">
            

              <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                What you can expect from our team:
              </h5>

              {/* Cards Grid replacing plain bullets */}
              <div className="row row-cols-1 row-cols-sm-2 g-3 mb-4">
                {expectations.map((item, idx) => (
                  <div key={idx} className="col">
                    <div 
                      className="d-flex align-items-center p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(5, 52, 86, 0.08)';
                        e.currentTarget.style.borderColor = '#053456';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                      }}
                    >
                      <div 
                        className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'rgba(5, 52, 86, 0.08)',
                        }}
                      >
                        <i className={item.icon} style={{ color: '#053456', fontSize: '16px' }}></i>
                      </div>
                      <span style={{ color: '#1e293b', fontSize: '15px', fontWeight: 600, lineHeight: '1.3',fontFamily: "Figtree, Figtree Fallback",
 }}>
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

           
            </div>
          </div>

          {/* Right Side: Detailed WooCommerce Illustration */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="position-relative p-2">
              <svg 
                viewBox="0 0 900 520" 
                className="img-fluid w-100 h-auto"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#053456" floodOpacity="0.12" />
                  </filter>
                  <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8fafc" />
                  </linearGradient>
                  <linearGradient id="wooBadgeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#96588a" />
                    <stop offset="100%" stopColor="#7f54b3" />
                  </linearGradient>
                </defs>

                {/* Floor Shadow */}
                <ellipse cx="450" cy="480" rx="380" ry="22" fill="#cbd5e1" opacity="0.5" />

                {/* Main Laptop Screen (WooCommerce Store) */}
                <g filter="url(#shadow)">
                  <rect x="180" y="80" width="500" height="320" rx="16" fill="#0b1e36" />
                  <rect x="195" y="95" width="470" height="290" rx="6" fill="url(#screenGrad)" />
                  
                  {/* Top Bar Controls */}
                  <circle cx="430" cy="87" r="3" fill="#64748b" />
                  <circle cx="210" cy="107" r="4" fill="#ef4444" />
                  <circle cx="222" cy="107" r="4" fill="#f59e0b" />
                  <circle cx="234" cy="107" r="4" fill="#10b981" />
                  
                  {/* Search Header Bar */}
                  <rect x="250" y="103" width="220" height="10" rx="5" fill="#f1f5f9" />
                  <rect x="255" y="106" width="40" height="4" rx="2" fill="#94a3b8" />
                  
                  {/* WooCommerce Brand Badge inside Screen Header */}
                  <rect x="580" y="101" width="75" height="14" rx="3" fill="url(#wooBadgeGrad)" />
                  <text x="588" y="112" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">WooCommerce</text>

                  {/* Main Banner Hero area */}
                  <rect x="210" y="122" width="440" height="85" rx="8" fill="#e0f2fe" />
                  <text x="320" y="152" fill="#053456" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Shop Your Favorites</text>
                  <text x="320" y="168" fill="#64748b" fontSize="10" fontFamily="sans-serif">Featured Product Collection</text>
                  <rect x="320" y="176" width="70" height="20" rx="10" fill="#053456" />
                  <text x="337" y="189" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">BUY NOW</text>

                  {/* Product Cards Row */}
                  {/* Product 1 */}
                  <rect x="210" y="215" width="100" height="85" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                  <circle cx="260" cy="242" r="16" fill="#fbcfe8" />
                  <text x="235" y="272" fill="#053456" fontSize="10" fontWeight="bold" fontFamily="sans-serif">₹1,299</text>
                  <rect x="280" y="262" width="22" height="14" rx="3" fill="#22c55e" />

                  {/* Product 2 */}
                  <rect x="323" y="215" width="100" height="85" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                  <circle cx="373" cy="242" r="16" fill="#ddd6fe" />
                  <text x="348" y="272" fill="#053456" fontSize="10" fontWeight="bold" fontFamily="sans-serif">₹2,499</text>
                  <rect x="393" y="262" width="22" height="14" rx="3" fill="#3b82f6" />

                  {/* Product 3 */}
                  <rect x="436" y="215" width="100" height="85" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                  <circle cx="486" cy="242" r="16" fill="#fef08a" />
                  <text x="461" y="272" fill="#053456" fontSize="10" fontWeight="bold" fontFamily="sans-serif">₹899</text>
                  <rect x="506" y="262" width="22" height="14" rx="3" fill="#ef4444" />

                  {/* Product 4 */}
                  <rect x="550" y="215" width="100" height="85" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                  <circle cx="600" cy="242" r="16" fill="#bbf7d0" />
                  <text x="575" y="272" fill="#053456" fontSize="10" fontWeight="bold" fontFamily="sans-serif">₹1,799</text>
                  <rect x="620" y="262" width="22" height="14" rx="3" fill="#10b981" />

                  {/* Laptop Stand Base */}
                  <path d="M 120 400 L 740 400 L 710 420 L 150 420 Z" fill="#cbd5e1" />
                  <rect x="380" y="400" width="100" height="5" fill="#94a3b8" rx="2" />
                </g>

                {/* Mobile Screen (Responsive Ecommerce View) */}
                <g filter="url(#shadow)">
                  <rect x="670" y="250" width="115" height="220" rx="18" fill="#0b1e36" />
                  <rect x="676" y="258" width="103" height="204" rx="14" fill="#ffffff" />
                  <rect x="705" y="263" width="45" height="5" rx="2" fill="#cbd5e1" />
                  
                  {/* Mobile Header */}
                  <rect x="684" y="275" width="87" height="20" rx="4" fill="#f8fafc" />
                  <circle cx="695" cy="285" r="5" fill="#053456" />
                  <circle cx="760" cy="285" r="5" fill="#22c55e" />

                  {/* Mobile Product Card */}
                  <rect x="684" y="302" width="87" height="90" rx="6" fill="#e0f2fe" />
                  <circle cx="727" cy="335" r="18" fill="#ffffff" />
                  <rect x="695" y="365" width="65" height="6" rx="3" fill="#053456" />

                  {/* Mobile Buy Button */}
                  <rect x="684" y="405" width="87" height="28" rx="14" fill="#22c55e" />
                  <text x="705" y="422" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BUY NOW</text>
                </g>

                {/* Floating Card: Order Tracking (Left) */}
                <g filter="url(#shadow)">
                  <rect x="40" y="160" width="160" height="85" rx="10" fill="#ffffff" />
                  <text x="55" y="180" fill="#053456" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Order Tracking</text>
                  <circle cx="65" cy="210" r="10" fill="#10b981" />
                  <path d="M 61 210 L 64 213 L 70 207" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <rect x="80" y="208" width="30" height="4" fill="#10b981" />
                  <circle cx="120" cy="210" r="10" fill="#22c55e" />
                  <rect x="135" y="208" width="30" height="4" fill="#e2e8f0" />
                  <circle cx="175" cy="210" r="8" fill="#e2e8f0" />
                </g>

                {/* Floating Card: Store Growth Chart (Top Right) */}
                <g filter="url(#shadow)">
                  <rect x="680" y="25" width="170" height="95" rx="10" fill="#ffffff" />
                  <text x="695" y="46" fill="#053456" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Store Growth</text>
                  {/* Bars */}
                  <rect x="700" y="85" width="12" height="20" rx="2" fill="#bfdbfe" />
                  <rect x="720" y="75" width="12" height="30" rx="2" fill="#60a5fa" />
                  <rect x="740" y="65" width="12" height="40" rx="2" fill="#053456" />
                  <rect x="760" y="55" width="12" height="50" rx="2" fill="#22c55e" />
                  {/* Upward Growth Arrow */}
                  <path d="M 695 85 Q 735 60, 790 38" fill="none" stroke="#f97316" strokeWidth="3" />
                  <polygon points="788,32 800,38 792,48" fill="#f97316" />
                </g>

                {/* Floating Badge: Order Confirmed (Top Center) */}
                <g filter="url(#shadow)">
                  <rect x="500" y="15" width="145" height="45" rx="8" fill="#ffffff" />
                  <circle cx="522" cy="37" r="11" fill="#10b981" />
                  <path d="M 517 37 L 520 40 L 527 33" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <text x="540" y="32" fill="#053456" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Order Confirmed</text>
                  <text x="540" y="44" fill="#64748b" fontSize="8" fontFamily="sans-serif">Your order is on its way</text>
                </g>

                {/* Floating Card: Secure Payment Gateway (Right) */}
                <g filter="url(#shadow)">
                  <rect x="710" y="150" width="165" height="85" rx="10" fill="#ffffff" />
                  <rect x="725" y="165" width="135" height="45" rx="6" fill="#15803d" />
                  <rect x="735" y="175" width="28" height="18" rx="3" fill="#f59e0b" />
                  <circle cx="828" cy="187" r="8" fill="#ef4444" opacity="0.85" />
                  <circle cx="838" cy="187" r="8" fill="#f59e0b" opacity="0.85" />
                  <text x="725" y="222" fill="#053456" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SECURE PAYMENT</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
           <p className="text-figtree text-black m-0" >
                Whether you are launching your first online store or improving an existing ecommerce website, our team can help you select and implement the right WooCommerce solution.
              </p>
      </div>
    </section>
  );
}