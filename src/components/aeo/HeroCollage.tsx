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
  "assets/img/aeo/top-img-4.jpg", // 1. Center Girl
  // "assets/img/aeo/top-img-3.jpg", // 1. Center Girl
  "assets/img/aeo/top-img-2.jpg", // 2. Curology Bottle
  "assets/img/aeo/top-img-2.jpg", // 2. Curology Bottle
  "assets/img/aeo/top-img-3.jpg", // 3. Bread Bowl
  "assets/img/aeo/top-img-3.jpg", // 3. Bread Bowl
  "assets/img/aeo/top-img-5.jpg", // 6. Sunset Mountain
  "assets/img/aeo/top-img-1.jpg", // 7. Umbrellas
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

        className="px-about-6-area pt-40 pb-40 pb-lg-110"

      >
        <div className="container container-1550">
          {/* Section Header */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                AEO Company in Chennai
              </span>
            </div>

            <div className="col-xl-9">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Get Your Business Ready  </span>
                  for AI-Powered Search
                </h4>
                <p className="text-figtree text-black mt-2">
                  Search is changing. People are no longer searching only with short keywords—they are asking complete questions and expecting direct answers from Google, Bing, AI search platforms and digital assistants.Answer Engine Optimization (AEO) helps your website provide clear, structured and useful answers that search engines and AI-powered platforms can better understand and potentially use when responding to relevant queries.
                </p>
              </div>
            </div>
          </div>

          {/* Image Collage Layout Matching Reference Image */}
          <div className="hero-collage-wrapper position-relative my-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="hero-collage-container position-relative mx-auto">
              {/* Center Main Card */}
              {activeImages[0] && (
                <img
                  src={activeImages[0]}
                  alt="AEO services"
                  className="collage-img img-center animate-float-up"
                  style={{ animationDelay: '0s' }}
                />
              )}
              {/* Front Left Tall Card */}
              {activeImages[1] && (
                <img
                  src={activeImages[1]}
                  alt="AEO services in chennai"
                  className="collage-img img-top-left animate-float-up"
                  style={{ animationDelay: '-1.2s' }}
                />
              )}



              {/* Far Right Card */}
              {activeImages[4] && (
                <img
                  src={activeImages[4]}
                  alt="Answer Engine Optimizatio"
                  className="collage-img img-far-right animate-float-up"
                  style={{ animationDelay: '-4.8s' }}
                />
              )}
              {/* Bottom Right Horizontal Card */}
              {activeImages[5] && (
                <img
                  src={activeImages[5]}
                  alt="Answer Engine Optimizatio company"
                  className="collage-img img-bottom-right animate-float-up"
                  style={{ animationDelay: '-5.2s' }}
                />
              )}
              {/* Far Left Card */}
              {activeImages[6] && (
                <img
                  src={activeImages[6]}
                    alt="Answer Engine Optimizatio company in chennai"
                  className="collage-img img-far-left animate-float-up"
                  style={{ animationDelay: '-6s' }}
                />
              )}
            </div>
          </div>
          <p className="text-figtree text-black seo-description">
           At Yulanto Web Creations, we combine AEO with SEO, content optimization, structured data and website improvements to help businesses build stronger visibility across modern search experiences.
          </p>

        </div>


      </section>
    );
  }
);

HeroCollage.displayName = 'HeroCollage';

export { HeroCollage };
export default HeroCollage;