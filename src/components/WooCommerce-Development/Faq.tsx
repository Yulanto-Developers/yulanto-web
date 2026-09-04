'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Is WordPress the Same as WooCommerce?',
    answer:
      'No. WordPress is a content management system, while WooCommerce is an ecommerce plugin that works with WordPress. WooCommerce adds online store functionality such as products, shopping carts, checkout, orders, payments, and inventory management.',
    icon: 'fa-brands fa-wordpress-simple',
  },
  {
    id: 2,
    question: 'Is WooCommerce Suitable for Small Businesses?',
    answer:
      'Yes. WooCommerce can be a suitable option for startups and small businesses because the platform is flexible and can be developed according to the size and requirements of the business.',
    icon: 'fa-solid fa-store',
  },
  {
    id: 3,
    question: 'Can You Develop a One Page Ecommerce Website?',
    answer:
      'Yes. We can create a one page ecommerce website for businesses that need a simple and focused online selling solution. The website can include product information, enquiry or purchase options, payment integration, and essential ecommerce functionality.',
    icon: 'fa-solid fa-file-code',
  },
  {
    id: 4,
    question: 'Can WooCommerce Be Customized?',
    answer:
      'Yes. WooCommerce supports extensive customization. Our WooCommerce custom development services can modify the design, functionality, checkout process, pricing, products, integrations, and other features according to your requirements.',
    icon: 'fa-solid fa-sliders',
  },
  {
    id: 5,
    question: 'Is WooCommerce SEO Friendly?',
    answer:
      'Yes. WooCommerce can support SEO-friendly ecommerce websites when the website structure, product content, technical SEO, page speed, metadata, schema, internal linking, and other SEO factors are properly optimized.',
    icon: 'fa-solid fa-arrow-trend-up',
  },
  {
    id: 6,
    question: 'Do You Provide WooCommerce Website Maintenance?',
    answer:
      'Yes. We provide ongoing WooCommerce website maintenance and support, including updates, security checks, performance improvements, troubleshooting, content and product updates, backups, and technical assistance.',
    icon: 'fa-solid fa-headset',
  },
];

export default function WooCommerceFAQ(): React.ReactElement {
  // Set default to null so no item is open on page load
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const leftFaqs = faqData.slice(0, 3);
  const rightFaqs = faqData.slice(3, 6);

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className="rounded-3 bg-white"
        style={{
          border: isOpen ? '1px solid #053456' : '1px solid #e2e8f0',
          boxShadow: isOpen
            ? '0 10px 25px rgba(5, 52, 86, 0.08)'
            : '0 2px 8px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
        }}
      >
        {/* Question Header */}
        <button
          type="button"
          onClick={() => toggleFAQ(faq.id)}
          className="w-100 d-flex align-items-center justify-content-between p-4 text-start border-0 bg-transparent"
          style={{ cursor: 'pointer' }}
        >
          <div className="d-flex align-items-center pe-3">
            {/* Matched Title Font Awesome Icon Box */}
            <span
              className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: isOpen ? '#053456' : '#f1f5f9',
                color: isOpen ? '#ffffff' : '#053456',
                transition: 'all 0.3s ease',
              }}
            >
              <i className={faq.icon} style={{ fontSize: '18px' }}></i>
            </span>
            
            <h5
              className="mb-0 fw-bold"
              style={{
                color: isOpen ? '#053456' : '#1e293b',
                fontSize: '1.05rem',
                fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',
              }}
            >
              {faq.question}
            </h5>
          </div>

          {/* Plus/Minus Indicator Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: isOpen ? 'rgba(5, 52, 86, 0.1)' : '#f8fafc',
              transition: 'transform 0.3s ease',
            }}
          >
            <i
              className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}
              style={{ color: '#053456', fontSize: '14px' }}
            ></i>
          </div>
        </button>

        {/* Answer Content */}
        {isOpen && (
          <div className="px-4 pb-4 pt-0">
            <div
              className="faq-answer"
              style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '16px',
                marginLeft: '56px',
              }}
            >
              <span
                style={{
                  color: '#475569',
                  fontSize: '15px !important',
                  lineHeight: '1.7',
                  fontFamily: '"Figtree", "Figtree Fallback"',
                  margin: 0,
                }}
              >
                {faq.answer}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      className="px-faq-area pt-80 pb-100" 
      style={{ overflowX: 'hidden', backgroundColor: '#ffff' }}
    >
      <div className="container container-1550">
        {/* Header Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20 text-center">
                <span style={{ color: '#053456' }}> Frequently Asked </span>Questions
              </h4>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Grid: 2 Columns */}
        <div className="row g-4 justify-content-center" data-aos="fade-up" data-aos-delay="100">
          {/* Left Column (Items 1 - 3) */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {leftFaqs.map((faq) => renderFaqCard(faq))}
            </div>
          </div>

          {/* Right Column (Items 4 - 6) */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {rightFaqs.map((faq) => renderFaqCard(faq))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}