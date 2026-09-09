'use client';

import React from 'react';
import Image from 'next/image';

export const AIAcceleratedDesign: React.FC = () => {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}>
      <div className="container container-1550">
        <div 
          className="row align-items-center" 
          data-aos="fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '40px 0'
          }}
        >
          {/* Left Column: Image Container */}
          <div 
            className="col-xl-5 col-lg-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                minHeight: '480px',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/assets/img/AI/top-1.jpg"
                alt="AI Doesn't Replace Great Design. It Accelerates It."
                fill
                priority
                sizes="(max-width: 991px) 100vw, 45vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-xl-7 col-lg-6">
            <div className="px-project-title-box" style={{ paddingLeft: '20px' }}>

              <h4 
                className="px-about-title mb-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="text-blue-about" >
                  AI Doesn't Replace Great Design.
                </span>{' '}
                It Accelerates It.
              </h4>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                  color: '#334155'
                }}
              >
                We use AI throughout our website design and development workflow to explore ideas faster, generate and refine visual concepts, accelerate development, improve content workflows, and reduce repetitive production work.
              </p>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  margin: 0,
                  color: '#334155'
                }}
              >
                But the final website isn't left to AI. Our designers and developers review, refine, customize, test, and optimize every important part of the experience.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAcceleratedDesign;