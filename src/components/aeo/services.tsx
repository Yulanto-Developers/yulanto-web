'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Target,
  FileText,
  Layers,
  Code,
  Link2,
  Wrench,
  Activity
} from 'lucide-react';

export default function Services() {
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const steps = [
    { name: 'Research', icon: Search },
    { name: 'Strategy', icon: Target },
    { name: 'Content', icon: FileText },
    { name: 'Structure', icon: Layers },
    { name: 'Schema', icon: Code },
    { name: 'Internal Linking', icon: Link2 },
    { name: 'Technical Optimization', icon: Wrench },
    { name: 'Monitoring', icon: Activity },
  ];

  const isMobile = windowWidth < 768;
  const radius = isMobile ? 110 : 160;
  const containerSize = isMobile ? 300 : 420;
  const centerPoint = containerSize / 2;

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110">
      <div className="container container-1550">

        {/* Title Header */}
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20 text-center">
                <span className="text-blue-about">How We Implement AEO </span>on Your Website
              </h4>
            </div>
          </div>
        </div>

        {/* 6-col & 6-col Split Layout */}
        <div className="row align-items-center mt-4">

          {/* Left Side: Circular Steps Diagram (col-lg-6) */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
            <div style={{ position: 'relative', width: `${containerSize}px`, height: `${containerSize}px` }}>

              {/* 8 Process Steps */}
              {steps.map((step, index) => {
                const angle = (index * 360) / steps.length - 90;
                const radians = (angle * Math.PI) / 180;
                const x = centerPoint + radius * Math.cos(radians);
                const y = centerPoint + radius * Math.sin(radians);

                const IconComponent = step.icon;

                return (
                  <div
                    key={step.name}
                    style={{
                      position: 'absolute',
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      zIndex: 3,
                    }}
                  >
                    {/* Step Icon Badge */}
                    <div
                      style={{
                        width: isMobile ? '38px' : '48px',
                        height: isMobile ? '38px' : '48px',
                        borderRadius: '50%',
                        backgroundColor: '#53ae7d',
                        color: '#ffffff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 12px rgba(83, 174, 125, 0.3)',
                      }}
                    >
                      <IconComponent size={isMobile ? 18 : 22} color="#ffffff" />
                    </div>

                    {/* Step Title */}
                    <span
                      style={{
                        fontSize: isMobile ? '10px' : '12px',
                        fontWeight: '700',
                        color: '#053456',
                        backgroundColor: '#ffffff',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        marginTop: '4px',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {step.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image Container with Paragraph Below (col-lg-6) */}
          <div className="col-lg-6">
            <div className="px-about-img-box mb-3 pDiv">
              <img
                src="/assets/img/aeo/cricle.jpg"
                alt="AEO Implementation"
                className="img-fluid"
              />
            </div>
          </div>
          <p className="text-figtree text-black mt-2" >
            We review your existing website, identify content gaps and create an optimization plan based on your business objectives and target audience.
          </p>

        </div>

      </div>
    </section>
  );
}