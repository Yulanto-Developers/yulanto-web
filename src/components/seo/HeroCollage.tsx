'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroCollage.css';

export interface HeroCollageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  stats?: { value: string; label: string }[];
  images?: string[];
}

// Sample placeholder images structured to mirror your reference image
const INTERNAL_IMAGES = [
  "assets/img/seo/top/top-img-4.jpg", // 1. Center Girl
  "assets/img/seo/top/top-img-2.jpg", // 2. Curology Bottle
  "assets/img/seo/top/top-img-3.jpg", // 3. Bread Bowl
  "assets/img/seo/top/top-img-6.jpg", // 4. Flower Heart
  "assets/img/seo/top/top-img-7.jpg", // 5. Red Car
  "assets/img/seo/top/top-img-5.jpg", // 6. Sunset Mountain
  "assets/img/seo/top/top-img-1.jpg", // 7. Umbrellas
];

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  ({ className = '', images = [], stats = [], ...props }, ref) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);

    const activeImages = images.length > 0 ? images : INTERNAL_IMAGES;

    return (
      <section 
        ref={ref} 
        className={`px-about-6-area pt-50 pb-80 pb-lg-110 ${className}`} 
        {...props}
      >
        <div className="container container-1550">
          {/* Section Header */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                SEO Company in Chennai
              </span>
            </div>

            <div className="col-xl-9">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Result-Driven SEO Strategies to </span>
                  Increase Traffic, Rankings & Leads
                </h4>
                <p className="text-figtree text-black mt-2">
                  Looking for a reliable SEO company in Chennai to improve your website's search engine rankings and generate quality leads? Our Chennai SEO services are designed to increase online visibility, attract relevant organic traffic, and help businesses achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>

          {/* Image Collage Layout Matching Reference Image */}
          <div className="hero-collage-wrapper position-relative my-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="hero-collage-container position-relative mx-auto">
              {/* Center Main Card */}
              {activeImages[0] && (
                <img
                  src={activeImages[0]}
                  alt="Main feature"
                  className="collage-img img-center animate-float-up"
                  style={{ animationDelay: '0s' }}
                />
              )}
              {/* Front Left Tall Card */}
              {activeImages[1] && (
                <img
                  src={activeImages[1]}
                  alt="Feature 2"
                  className="collage-img img-top-left animate-float-up"
                  style={{ animationDelay: '-1.2s' }}
                />
              )}
              {/* Top Left Small Card */}
              {activeImages[2] && (
                <img
                  src={activeImages[2]}
                  alt="Feature 3"
                  className="collage-img img-bottom-left animate-float-up"
                  style={{ animationDelay: '-2.5s' }}
                />
              )}
              {/* Top Right Card */}
              {activeImages[3] && (
                <img
                  src={activeImages[3]}
                  alt="Feature 4"
                  className="collage-img img-top-right animate-float-up"
                  style={{ animationDelay: '-3.5s' }}
                />
              )}
              {/* Far Right Card */}
              {activeImages[4] && (
                <img
                  src={activeImages[4]}
                  alt="Feature 5"
                  className="collage-img img-far-right animate-float-up"
                  style={{ animationDelay: '-4.8s' }}
                />
              )}
              {/* Bottom Right Horizontal Card */}
              {activeImages[5] && (
                <img
                  src={activeImages[5]}
                  alt="Feature 6"
                  className="collage-img img-bottom-right animate-float-up"
                  style={{ animationDelay: '-5.2s' }}
                />
              )}
              {/* Far Left Card */}
              {activeImages[6] && (
                <img
                  src={activeImages[6]}
                  alt="Feature 7"
                  className="collage-img img-far-left animate-float-up"
                  style={{ animationDelay: '-6s' }}
                />
              )}
            </div>
          </div>
          <p className="text-figtree text-black mt-20 font-paragraph-cls">
            As a professional SEO agency in Chennai, we combine keyword research, technical SEO, on-page optimization, content strategy, link building, and performance analytics to create customized search engine optimization strategies aligned with your business goals.
          </p>
        </div>
      </section>
    );
  }
);

HeroCollage.displayName = 'HeroCollage';

export { HeroCollage };
export default HeroCollage;