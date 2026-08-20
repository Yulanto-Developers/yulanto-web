"use client";

import React from "react";
import "../aboutcomponents/ourStory.css";

const AboutUs = () => {
  const image1 =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";

  const image2 =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80";

  return (
    <section className="yul-st">

      {/* =========================================
          INTRO - WHITE SECTION
      ========================================= */}
      <div className="services-section">
        <div className="services-content">
          <div className="row align-items-center">
            <div className="col-lg-9 mb-4 mb-lg-0">
              <h4 className="px-about-title text-effect">
                Yulanto  <span className="text-blue-about">  Digital Solutions</span>
              </h4>

              <p className="mb-0">
                Yulanto Web Creations is a comprehensive web design company in Chennai that has been helping businesses build powerful, professional, and results-driven digital identities since 2015. What began as a passion for creativity, technology, and innovative web solutions has grown into a trusted website development company serving startups, small and medium-sized businesses, and established organizations across India and international markets.
              </p>
            </div>

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="about-img-wrap">
                <img
                  src={image1}
                  alt="Team collaborating in modern web development office"
                  className="img-fluid"
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
              <div className="about-img-wrap">
                <img
                  src={image1}
                  alt="Team collaborating in modern web development office"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="about-content-side">

                <h2 className="text-figtree">
                  Building Digital Experiences That Matter
                </h2>

                <p className="text-figtree">
                  Yulanto Web Creations is a comprehensive web design company in Chennai that has been helping businesses build powerful, professional, and results-driven digital identities since 2015. What began as a passion for creativity, technology, and innovative web solutions has grown into a trusted website development company serving startups, small and medium-sized businesses, and established organizations across India and international markets. Over the years, we have built our reputation on quality, creativity, transparency, and a commitment to delivering exceptional results that help our clients achieve sustainable business growth.
                </p>

                <p className="text-figtree mb-0">
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
              <h4 className="px-about-title text-effect">
                Yulanto  <span className="text-blue-about">  Digital Solutions</span>
              </h4>

              <p className="mb-0">
                As a full-service web design and website development company in Chennai, we provide a complete range of digital services, including responsive website design, WordPress development, WooCommerce and Shopify e-commerce websites, custom web applications, website redesign, web hosting, domain registration, SSL security, website maintenance, search engine optimization (SEO), Google Ads, social media marketing, and ongoing technical support. We believe that a successful website should not only look impressive but should also be fast, mobile-friendly, secure, easy to manage, and optimized for search engines to attract the right customers.
              </p>
            </div>

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="about-img-wrap">
                <img
                  src={image1}
                  alt="Team collaborating in modern web development office"
                  className="img-fluid"
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
              <div className="about-img-wrap">
                <img
                  src={image2}
                  alt="Digital growth and web analytics strategies"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-8 order-lg-1">

              <div className="about-content-side">

                <h2 className="text-figtree">
                  Experience, Creativity & Growth
                </h2>

                <p className="text-figtree">
                  Since our inception, we have successfully partnered with businesses from various industries, including real estate, education, healthcare, manufacturing, retail, hospitality, infrastructure, and professional services. Our client-centric approach, attention to detail, and dedication to excellence have enabled us to build long-lasting relationships and earn the trust of organizations worldwide. Whether it is designing a new website, redesigning an existing platform, or implementing a complete digital transformation strategy, we strive to exceed expectations with every project we undertake.
                </p>

                <p className="text-figtree mb-0">
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