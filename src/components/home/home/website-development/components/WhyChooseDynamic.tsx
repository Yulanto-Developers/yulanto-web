'use client';

import React from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '@/components/home/home/aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';

// Image Imports
import image1 from '@/assets/images/website-development/dynamic-website-development/image-1.jpg';
import image2 from '@/assets/images/website-development/dynamic-website-development/image-2.jpg';
import image3 from '@/assets/images/website-development/dynamic-website-development/image-3.jpg';
import image4 from '@/assets/images/website-development/dynamic-website-development/image-4.jpg';

const sectionsData = [
    {
        title: 'Easy Content Management',
        paragraphs: [
            'Dynamic websites make it easier for businesses to manage large amounts of content and regularly update their products and services. With a suitable CMS, your team can make content updates without depending on technical experts for every small change.',
            'Our web development company in Chennai creates user-friendly websites that help businesses efficiently manage their online presence.'
        ],
        image: image1,
        alt: 'Easy Content Management'
    },
    {
        title: 'Highly Scalable',
        paragraphs: [
            'A dynamic website can grow along with your business. Additional pages, products, services, features, integrations, user accounts, and other modules can be added as your requirements increase.',
            'Our web developers in Chennai build websites with scalability in mind, helping your website accommodate future business growth and changing customer requirements.'
        ],
        image: image2,
        alt: 'Highly Scalable'
    },
    {
        title: 'Interactive & Feature-Rich',
        paragraphs: [
            'Dynamic websites can provide a wide range of interactive functionality, including:'
        ],
        listItems: [
            'Blogs and news sections',
            'Product & service catalogues',
            'E-commerce functionality',
            'Online booking systems',
            'Event calendars',
            'Customer login & registration',
            'Contact & enquiry forms',
            'Membership systems',
            'Search functionality',
            'Database integration',
            'Payment gateway integration',
            'Social media integration',
            'Third-party API integration'
        ],
        image: image3,
        alt: 'Interactive & Feature-Rich'
    },
    {
        title: 'SEO-Friendly Website Structure',
        paragraphs: [
            'A properly developed dynamic website can support SEO through clean website architecture, editable content, optimized page structures, mobile responsiveness, fast-loading pages, and search-engine-friendly URLs.',
            'Our web design and development companies in Chennai approach combines design, functionality, usability, and technical SEO considerations to create websites that provide a strong foundation for digital marketing.'
        ],
        image: image4,
        alt: 'SEO-Friendly Website Structure'
    }
];

const WhyChooseDynamic = () => {
    useAOS();

    return (
        <section className="dynamic-choose-section py-5">
            <style jsx>{`
                .feature-row {
                    margin-bottom: 5rem;
                }

                .feature-row:last-child {
                    margin-bottom: 0;
                }

                .section-block h2 {
                    font-weight: 700;
                    
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.5rem;
                  
                    font-family:Tenor Sans", "Tenor Sans Fallback";
                    color: #000000;
                }
                .text-tenor {
                  font-size: 26px !important;
                   }
                .section-block p {
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                    font-size: 16px;
                }

                .section-block ul {
                    list-style-type: none;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 0.85rem 1rem;
                    margin-top: 1.25rem;
                    padding-left: 0;
                }

                .section-block li {
                    position: relative;
                    padding-left: 1.75rem;
                    color: #222;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 1.4;
                }

                .section-block li i {
                    position: absolute;
                    left: 0;
                    top: 0.2rem;
                    color: #053456;
                }

                .feature-img-wrapper {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
                }

                .feature-img-wrapper img {
                    width: 100%;
                    height: 300px;
                   
                    border-radius: 12px;
                    display: block;
                }

                /* Mobile & Tablet Responsive Enhancements */
                @media (max-width: 991px) {
                    .feature-row {
                        margin-bottom: 3.5rem;
                    }

                    .section-block h2 {
                        font-size: 22px !important;
                        margin-bottom: 0.75rem;
                    }

                    .feature-img-wrapper img {
                        height: 260px;
                    }
                }

                @media (max-width: 575px) {
                    .feature-row {
                        margin-bottom: 2.75rem;
                    }

                    .section-block ul {
                        grid-template-columns: 1fr; /* Single column on small mobile screens */
                        gap: 0.75rem;
                    }

                    .feature-img-wrapper img {
                        height: 220px;
                    }
                }
            `}</style>

            <div className="container px-3 px-sm-4">

                <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Easy to Manage
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Why Choose Dynamic
                                </span>Website Development?
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                A professionally developed dynamic website makes it simple to manage your online content. Administrators can update pages, services, products, images, blogs, testimonials, and other information through an easy-to-use interface.                            </p>
                        </div>
                    </div>
                </div>
                {/* Title Header */}
                {/* <h4
                    className="px-about-title text-tenor mb-5 text-center"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Why Choose Dynamic <span className="text-blue-about"> Website Development? </span>
                </h4> */}

                {/* Alternating Rows */}
                {sectionsData.map((item, index) => {
                    const isEven = index % 2 === 1;

                    return (
                        <div
                            key={index}
                            className={`row align-items-center gy-4 gy-lg-5 feature-row ${isEven ? 'flex-lg-row-reverse' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {/* Text Content Column */}
                            <div className="col-lg-6 col-12">
                                <div className="section-block">
                                    <h2 className='text-tenor'>{item.title}</h2>
                                    {item.paragraphs.map((para, pIndex) => (
                                        <p key={pIndex}>{para}</p>
                                    ))}

                                    {item.listItems && (
                                        <ul>
                                            {item.listItems.map((listItem, lIndex) => (
                                                <li key={lIndex}>
                                                    <i className="fa-solid fa-layer-group"></i>
                                                    {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="col-lg-6 col-12">
                                <div className="feature-img-wrapper">
                                    <img
                                        src={typeof item.image === 'string' ? item.image : item.image.src}
                                        alt={item.alt}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyChooseDynamic;