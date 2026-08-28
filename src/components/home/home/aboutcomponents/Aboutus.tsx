// app/about/page.tsx or components/AboutUs.tsx
'use client';

import React, { useEffect } from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import image1 from "@/assets/images/ourstory/image-1.jpg";
import image2 from "@/assets/images/ourstory/image-2.jpg";
import image3 from "@/assets/images/ourstory/vector-1.png";
import image4 from "@/assets/images/ourstory/vector-2.png";

const AboutUs = () => {
  // Use the AOS hook
  useAOS();

  return (
    <section className="yul-st">
      {/* =========================================
                INTRO - WHITE SECTION
            ========================================= */}
      <div className="services-section">
        <div className="services-content">
          <div className="row align-items-center">
            <div className="col-lg-9 mb-4 mb-lg-0">
              <h4
                className="px-about-title  text-tenor"
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                Leading Web Design Company in <span className="text-blue-about"> Chennai Since 2015 </span>
              </h4>

              <p
                className="mb-0"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                Yulanto Web Creations is a comprehensive web design company in Chennai that has been helping businesses build powerful, professional, and results-driven digital identities since 2015. What began as a passion for creativity, technology, and innovative web solutions has grown into a trusted website development company serving startups, small and medium-sized businesses, and established organizations across India and international markets.
              </p>
            </div>

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div
                data-aos="image-zoom"
                data-aos-delay="300"
                
              >
                <img
                  src={image3.src}
                  alt="Team collaborating in modern web development office"
                  className="about-small-img"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
                ABOUT SECTION - BLUE
            ========================================= */}
      <section className="about-blue-section">
        <div className="container-fuild">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="about-img-wrap"
                data-aos="image-zoom"
                data-aos-delay="100"
                
              >
                <img
                  src={image1.src}
                  alt="Team collaborating in modern web development office"
                  className="about-small-img"
                  
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="about-content-side">
                <h4
                  className="px-about-title"
                  data-aos="text-reveal"
                  data-aos-delay="200"
                >
                  <span className="text-white">Building Digital Experiences That Matter </span>
                </h4>

                <p
                  className="text-figtree"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Yulanto Web Creations is a comprehensive web design company in Chennai that has been helping businesses build powerful, professional, and results-driven digital identities since 2015. What began as a passion for creativity, technology, and innovative web solutions has grown into a trusted website development company serving startups, small and medium-sized businesses, and established organizations across India and international markets. Over the years, we have built our reputation on quality, creativity, transparency, and a commitment to delivering exceptional results that help our clients achieve sustainable business growth.
                </p>

                <p
                  className="text-figtree mb-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  As a comprehensive website design and web development company, we offer a wide range of digital solutions tailored to meet the unique needs of every business. Our team takes the time to understand every client's business goals, target audience, and industry requirements before crafting customized solutions that reflect their unique brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
                SERVICES - WHITE SECTION
            ========================================= */}
      <div className="services-section">
        <div className="services-content">
          <div className="row align-items-center">
            <div className="col-lg-9 mb-4 mb-lg-0">
              <h4
                className="px-about-title"
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                Complete Digital Solutions for <span className="text-blue-about">Your Business Success </span>
              </h4>

              <p
                className="mb-0"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                As a full-service web design and website development company in Chennai, we provide a complete range of digital services, including responsive website design, WordPress development, WooCommerce and Shopify e-commerce websites, custom web applications, website redesign, web hosting, domain registration, SSL security, website maintenance, search engine optimization (SEO), Google Ads, social media marketing, and ongoing technical support. We believe that a successful website should not only look impressive but should also be fast, mobile-friendly, secure, easy to manage, and optimized for search engines to attract the right customers.
              </p>
            </div>

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div
                data-aos="image-rotate"
                data-aos-delay="300"
                
              >
                <img
                  src={image4.src}
                  alt="Team collaborating in modern web development office"
                  className="about-small-img"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
                EXPERIENCE SECTION - BLUE
            ========================================= */}
      <section className="about-blue-section second-blue-section">
        <div className="container-fulid">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-2 mb-4 mb-lg-0">
              <div
                className="about-img-wrap"
                data-aos="image-zoom"
                data-aos-delay="100"
                
              >
                <img
                  src={image2.src}
                  alt="Digital growth and web analytics strategies"
                  className="about-small-img"
                  
                />
              </div>
            </div>

            <div className="col-lg-8 order-lg-1">
              <div className="about-content-side">
                <h4
                  className="px-about-title"
                  data-aos="text-reveal-flip"
                  data-aos-delay="200"
                >
                  <span className="text-white">Experience, Creativity & Growth </span>
                </h4>

                <p
                  className="text-figtree"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Since our inception, we have successfully partnered with businesses from various industries, including real estate, education, healthcare, manufacturing, retail, hospitality, infrastructure, and professional services. Our client-centric approach, attention to detail, and dedication to excellence have enabled us to build long-lasting relationships and earn the trust of organizations worldwide. Whether it is designing a new website, redesigning an existing platform, or implementing a complete digital transformation strategy, we strive to exceed expectations with every project we undertake.
                </p>

                <p
                  className="text-figtree mb-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Today, Yulanto Web Creations stands as a leading web design and website development company in Chennai, recognized for professionalism, uniqueness, and exceptional creativity. Our mission is to empower businesses with innovative digital solutions that enhance brand visibility, improve online engagement, and generate measurable results. As technology continues to evolve, we remain committed to staying ahead of industry trends and helping our clients succeed in the ever-changing digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;