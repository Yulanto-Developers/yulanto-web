'use client';

import React from 'react';
import styles from './MajorClientPopups.module.css';
import popimg1 from '@/assets/img/pop-img/conversion-rate.png'
import popimg2 from '@/assets/img/pop-img/new-users.png'
import popimg3 from '@/assets/img/pop-img/session.png'

interface CaseStudyData {
    modalId: string;
    title: string;
    websiteUrl?: string;
    objectives: string[];
    bgColor?: string;
    impacts: {
        title: string;
        icon: string;
        desc: string;
    }[];
}

const caseStudiesData: CaseStudyData[] = [
    {
        modalId: 'harithams-modal',
        title: 'Harithams',
        websiteUrl: 'https://harithams.com',
        bgColor: '#1e3a8a',
        objectives: [
            'Redesign corporate web architecture for a modern user experience.',
            'Optimize project portfolio showcases for real estate inquiries.',
            'Integrate streamlined lead enquiry funnels and mobile performance optimization.'
        ],
        impacts: [
            { title: 'User Traffic', icon: popimg1.src, desc: '45% Growth in Monthly Leads' },
            { title: 'Performance', icon: popimg2.src, desc: '60% Faster Render Time' },
            { title: 'Engagement', icon: popimg3.src, desc: '50% Lower Bounce Rate' }
        ]
    },
    {
        modalId: 'preserve-metals-modal',
        title: 'Preserve Metals',
        websiteUrl: 'https://preservemetals.com',
        bgColor: '#003366',
        objectives: [
            'Position Deva Preservation Services as a global leader in sustainable corrosion protection and industrial asset preservation.',
            'Communicate the brand mission of extending infrastructure lifecycle while reducing environmental impact.',
            'Showcase advanced engineering solutions that eliminate degradation and improve long-term asset performance.'
        ],
        impacts: [
            { title: 'Asset Longevity', icon: popimg1.src, desc: '65% Increase in Lifecycle Performance' },
            { title: 'Industrial Engagement', icon: popimg2.src, desc: '48% Growth in Client Interactions' },
            { title: 'Sustainability Impact', icon: popimg3.src, desc: '60% Reduction in Asset Replacement Demand' }
        ]
    },
    {
        modalId: 'tkms-modal',
        title: 'TKMS',
        websiteUrl: 'https://tkms.in',
        bgColor: '#1a365d',
        objectives: [
            'Implement professional corporate UI tailored to business services.',
            'Optimize service-based lead capture mechanisms.',
            'Establish compliance-focused content structuring and SEO site architecture.'
        ],
        impacts: [
            { title: 'Lead Generation', icon: popimg1.src, desc: '40% Increase in Qualified Inquiries' },
            { title: 'Search Reach', icon: popimg2.src, desc: '55% Organic SEO Ranking Growth' },
            { title: 'User Retention', icon: popimg3.src, desc: '35% Higher On-Site Duration' }
        ]
    },
    {
        modalId: 'klitech-modal',
        title: 'KL-iTech',
        websiteUrl: 'https://klitech.in',
        bgColor: '#0f172a',
        objectives: [
            'Redesign UI with a high-tech modern aesthetic for enterprise users.',
            'Configure dynamic content structures for ease of maintenance.',
            'Enhance user experience tailored specifically for enterprise software clients.'
        ],
        impacts: [
            { title: 'Enterprise Inquiries', icon: popimg1.src, desc: '50% Higher Lead Conversion' },
            { title: 'Site Speed', icon: popimg2.src, desc: '70% Load Time Improvement' },
            { title: 'Brand Perception', icon: popimg3.src, desc: '65% Positive Client Feedback' }
        ]
    },
    {
        modalId: 'typhoon-modal',
        title: 'Typhoon',
        websiteUrl: 'https://typhoon.in',
        bgColor: '#1e293b',
        objectives: [
            'Design corporate-style website layout to organize product catalogs.',
            'Optimize enquiry flows to spark direct user conversations.',
            'Maintain continuous performance updates and ongoing site support.'
        ],
        impacts: [
            { title: 'Catalog Views', icon: popimg1.src, desc: '80% Growth in Product Views' },
            { title: 'Inquiry Rate', icon: popimg2.src, desc: '42% Increase in Direct Contact' },
            { title: 'Reliability', icon: popimg3.src, desc: '99.9% Continuous Uptime' }
        ]
    },
    {
        modalId: 'bmc-modal',
        title: 'BM Ceramics',
        websiteUrl: 'https://bmceramics.in',
        bgColor: '#064e3b',
        objectives: [
            'Custom UI redesign highlighting tile and ceramic product collections.',
            'Improve product showcase navigation for trade buyers.',
            'Provide continuous web maintenance and asset optimization.'
        ],
        impacts: [
            { title: 'Product Showcase', icon: popimg1.src, desc: '60% Increase in Catalog Downloads' },
            { title: 'User Experience', icon: popimg2.src, desc: '45% Faster Navigation Speed' },
            { title: 'Inquiries', icon: popimg3.src, desc: '38% Growth in Dealer Contacts' }
        ]
    },
    {
        modalId: 'pixcell-modal',
        title: 'Pixcellplay',
        websiteUrl: 'https://pixcellplay.com',
        bgColor: '#312e81',
        objectives: [
            'Web redesign focused on vibrant user interfaces for game showcases.',
            'Strengthen gaming brand presence through modern web elements.',
            'Improve interactive content display for mobile and desktop players.'
        ],
        impacts: [
            { title: 'User Engagement', icon: popimg1.src, desc: '75% Higher Player Interaction' },
            { title: 'Brand Visibility', icon: popimg2.src, desc: '50% Search Visibility Expansion' },
            { title: 'Session Time', icon: popimg3.src, desc: '2x Increase in Avg Session Length' }
        ]
    },
    {
        modalId: 'biox-modal',
        title: 'Bioxgreen',
        websiteUrl: 'https://bioxgreen.com',
        bgColor: '#14532d',
        objectives: [
            'Execute eco-friendly website redesign with clean navigation.',
            'Implement comprehensive on-page SEO strategies.',
            'Optimize page load speeds and conduct continuous maintenance.'
        ],
        impacts: [
            { title: 'Organic Search', icon: popimg1.src, desc: '85% Search Ranking Boost' },
            { title: 'Page Speed', icon: popimg2.src, desc: '90+ Google PageSpeed Score' },
            { title: 'Inquiries', icon: popimg3.src, desc: '55% Increase in B2B Leads' }
        ]
    },
    {
        modalId: 'stanson-modal',
        title: 'Stanson',
        websiteUrl: 'https://stanson.in',
        bgColor: '#374151',
        objectives: [
            'Develop scalable and adaptable corporate web layout.',
            'Implement targeted on-page SEO for target industry keywords.',
            'Perform speed optimizations for optimal cross-device performance.'
        ],
        impacts: [
            { title: 'Scalability', icon: popimg1.src, desc: '100% Scalable Architecture' },
            { title: 'Site Speed', icon: popimg2.src, desc: '65% Faster Loading' },
            { title: 'Lead Funnel', icon: popimg3.src, desc: '40% Boost in Conversion Rate' }
        ]
    }
];

interface MajorClientPopupsProps {
    phoneNumber?: string;
    linkNumber?: string;
}

export const MajorClientPopups: React.FC<MajorClientPopupsProps> = ({
    phoneNumber = '+91 99621 57250',
    linkNumber = 'tel:+919962157250',
}) => {
    return (
        <>
            {/* WhatsApp Chat Floating Box */}
            <div id="chat-box" className="position-fixed bottom-0 end-0 m-3 shadow" style={{ zIndex: 1050, display: 'none' }}>
                <div id="chat-top" className="bg-success text-white p-2 d-flex justify-content-between align-items-center">
                    <span>Need Help? Let's Chat</span>
                    <span id="chat-top-right" role="button">
                        <svg id="close-box" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" fill="#fff" />
                        </svg>
                    </span>
                </div>
                <div id="chat-msg" className="p-3 bg-white">
                    <p className="mb-2">Let's Make Something Great Work Together! Contact Us Promptly.</p>
                    <div id="chat-form" className="d-flex gap-2">
                        <input type="text" id="whats-in" className="form-control" placeholder="Type Name & Lets Start" required />
                        <button id="send-btn" className="btn btn-link p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48">
                                <path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" fill="rgb(18, 140, 126)" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Free Consultation Modal */}
            <div className="modal fade" id="consultation-modal" tabIndex={-1} aria-labelledby="consultation-modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content position-relative">
                        <button type="button" className={`btn-close ${styles.closeBtn}`} data-bs-dismiss="modal" aria-label="Close">X</button>
                        <div className="row g-0">


                            <div className="col-lg-6 bg-dark text-white p-4">
                                <h2>Connect With Us</h2>
                                <h4 className="h6 mt-3">Call Us</h4>
                                <div className="mb-2">
                                    <a href={linkNumber} className="text-white d-block text-decoration-none">
                                        <i className="fa fa-phone-alt me-2"></i>{phoneNumber}
                                    </a>
                                    <a href="tel:+914435695780" className="text-white d-block text-decoration-none">
                                        <i className="fa fa-phone-alt me-2"></i>+91 44 3569 5780
                                    </a>
                                </div>

                                <h4 className="h6 mt-3">Mail Us</h4>
                                <div>
                                    <a href="mailto:info@yulanto.com" className="text-white d-block text-decoration-none">
                                        <i className="fa fa-envelope me-2"></i>info@yulanto.com
                                    </a>
                                </div>

                                <h4 className="h6 mt-4">Follow Us</h4>
                                <div className="d-flex gap-3 fs-5">
                                    <a href="https://www.linkedin.com/company/yulanto-web-creations" target="_blank" className="text-white" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://www.facebook.com/yulantowebcreations" target="_blank" className="text-white" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/yulantoweb/" target="_blank" className="text-white" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic Case Study Modals */}
            {caseStudiesData.map((item) => (
                <div
                    key={item.modalId}
                    className="modal fade"
                    id={item.modalId}
                    tabIndex={-1}
                    aria-labelledby={`${item.modalId}Label`}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content position-relative overflow-hidden">
                            <button
                                type="button"
                                className={`btn-close ${styles.closeBtn}`}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                X
                            </button>
                            <div className="row g-0">
                                {/* Objective Section */}
                                <div className={`col-12 ${styles.caseStudySec}`}>
                                    <h3 className="h4 font-bold text-dark mb-1">{item.title} Case Study</h3>
                                    {item.websiteUrl && (
                                        <a
                                            href={item.websiteUrl}
                                            target="_blank"
                                            className={styles.caseSiteLink}
                                            rel="noreferrer"
                                        >
                                            View Website <i className="fa fa-paper-plane ms-1"></i>
                                        </a>
                                    )}

                                    <h5 className="mt-2 mb-2 fw-semibold">Objective</h5>
                                    <ul className={styles.caseObjList}>
                                        {item.objectives.map((obj, idx) => (
                                            <li key={idx}>
                                                <i className="fa fa-check-circle text-success mt-1"></i>
                                                <p className="m-0 text-muted">{obj}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact Section */}
                                <div
                                    className={`col-12 ${styles.resultSec}`}
                                    style={{ backgroundColor: item.bgColor || '#003366' }}
                                >
                                    <h4 className="text-center text-white mb-4">Impact Delivered</h4>
                                    <div className="d-flex justify-content-around flex-wrap gap-3">
                                        {item.impacts.map((imp, idx) => (
                                            <div key={idx} className={styles.resultBox}>
                                                <h6 className="text-white fw-bold mb-1">{imp.title}</h6>
                                                <img
                                                    src={imp.icon}
                                                    alt={imp.title}
                                                    width="40"
                                                    height="40"
                                                    className="my-2"
                                                />
                                                <p className="small text-light mb-0">{imp.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};