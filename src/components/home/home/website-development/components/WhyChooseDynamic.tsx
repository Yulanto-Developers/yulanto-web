'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '@/components/home/home/aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';

// Replace image imports with your actual asset paths
import image1 from '@/assets/images/ourstory/image-1.jpg';
import image2 from '@/assets/images/ourstory/image-2.jpg';
import image3 from '@/assets/images/ourstory/vector-1.png';
import image4 from '@/assets/images/ourstory/vector-2.png';

const dynamicImages = [image1, image2, image3, image4];

const WhyChooseDynamic = () => {
    useAOS();
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const dataIndex = entry.target.getAttribute('data-index');
                    const index = parseInt(dataIndex || '0', 10);
                    if (!isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <section className="dynamic-choose-section py-5">
            <style jsx>{`
        .scroll-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          gap: 4rem;
          position: relative;
        }

        .content-side {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .section-block {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0;
        }

        .section-block h2 {
          font-weight: 700;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }

        .section-block p {
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .section-block ul {
          list-style-type: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem 1rem;
          margin-top: 1rem;
          padding-left: 0;
        }

        .section-block li {
          position: relative;
          padding-left: 1.75rem;
          color: #222;
          font-weight: 500;
          font-size: 16px;
        }

        .section-block li i {
          position: absolute;
          left: 0;
          top: 0.25rem;
          color: #053456;
        }

        .image-side {
          flex: 1;
          position: sticky;
          top: 15vh;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          background-color: #ffffff;
        }

        .dynamic-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dynamic-img.active {
          opacity: 1;
        }

        @media (max-width: 991px) {
          .scroll-container {
            flex-direction: column-reverse;
            gap: 2rem;
          }

          .image-side {
            position: relative;
            top: 0;
            height: 350px;
          }

          .image-wrapper {
            height: 350px;
          }

          .section-block {
            min-height: auto;
            padding: 2rem 0;
          }
        }
      `}</style>

            <div className="container">
                {/* Title Header with requested AOS and styles */}
                <h4
                    className="px-about-title mb-30 text-center"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Why Choose Dynamic  <span className="text-blue-about"> Website Development? </span>
                </h4>

                {/* Dynamic Scroll & Sticky Image Layout */}
                <div className="scroll-container">
                    <div className="content-side">
                        <section
                            className="section-block"
                            data-index="0"
                            ref={(el) => {
                                if (el) sectionRefs.current[0] = el;
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h2>Easy Content Management</h2>
                            <p>
                                Dynamic websites make it easier for businesses to manage large
                                amounts of content and regularly update their products and
                                services. With a suitable CMS, your team can make content updates
                                without depending on technical experts for every small change.
                            </p>
                            <p>
                                Our web development company in Chennai creates user-friendly
                                websites that help businesses efficiently manage their online
                                presence.
                            </p>
                        </section>

                        <section
                            className="section-block"
                            data-index="1"
                            ref={(el) => {
                                if (el) sectionRefs.current[1] = el;
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h2>Highly Scalable</h2>
                            <p>
                                A dynamic website can grow along with your business. Additional
                                pages, products, services, features, integrations, user accounts,
                                and other modules can be added as your requirements increase.
                            </p>
                            <p>
                                Our web developers in Chennai build websites with scalability in
                                mind, helping your website accommodate future business growth and
                                changing customer requirements.
                            </p>
                        </section>

                        <section
                            className="section-block"
                            data-index="2"
                            ref={(el) => {
                                if (el) sectionRefs.current[2] = el;
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h2>Interactive & Feature-Rich</h2>
                            <p>
                                Dynamic websites can provide a wide range of interactive
                                functionality, including:
                            </p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Blogs and news
                                    sections
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Product & service
                                    catalogues
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> E-commerce
                                    functionality
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Online booking
                                    systems
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Event calendars
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Customer login &
                                    registration
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Contact & enquiry
                                    forms
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Membership systems
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Search
                                    functionality
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Database integration
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Payment gateway
                                    integration
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Social media
                                    integration
                                </li>
                                <li>
                                    <i className="fa-solid fa-layer-group"></i> Third-party API
                                    integration
                                </li>
                            </ul>
                        </section>

                        <section
                            className="section-block"
                            data-index="3"
                            ref={(el) => {
                                sectionRefs.current[3] = el;
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h2>SEO-Friendly Website Structure</h2>
                            <p>
                                A properly developed dynamic website can support SEO through
                                clean website architecture, editable content, optimized page
                                structures, mobile responsiveness, fast-loading pages, and
                                search-engine-friendly URLs.
                            </p>
                            <p>
                                Our web design and development companies in Chennai approach
                                combines design, functionality, usability, and technical SEO
                                considerations to create websites that provide a strong foundation
                                for digital marketing.
                            </p>
                        </section>
                    </div>

                    <div className="image-side">
                        <div className="image-wrapper">
                            {dynamicImages.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src}
                                    alt={`Dynamic section feature ${index + 1}`}
                                    className={`dynamic-img ${activeIndex === index ? 'active' : ''
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseDynamic;