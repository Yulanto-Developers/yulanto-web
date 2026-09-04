'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Do I need a Shopify subscription to run my online store?',
    answer: 'Yes. Shopify is a hosted ecommerce platform, so you need an appropriate Shopify subscription to operate your online store. Shopify provides hosting, SSL, ecommerce infrastructure, and platform features as part of its plans.'
  },
  {
    id: 2,
    question: 'How much does Shopify website development cost?',
    answer: 'The cost depends on your store requirements, number of products, design complexity, theme customization, integrations, payment gateways, third-party applications, content requirements, and custom functionality.\n\nAs an experienced Shopify development partner, we can review your requirements and provide a suitable quotation based on your project scope.'
  },
  {
    id: 3,
    question: 'Do you provide Shopify development services in Chennai?',
    answer: 'Yes. We provide Shopify website development and ecommerce development services in Chennai for startups, small businesses, and established companies. We can also work with clients across India and international markets.'
  },
  {
    id: 4,
    question: 'Can you customize an existing Shopify theme?',
    answer: 'Yes. Our Shopify developers can customize an existing Shopify theme to match your brand identity and business requirements. This may include layouts, navigation, product pages, collections, banners, sections, checkout-related elements, and other supported customizations.'
  },
  {
    id: 5,
    question: 'Can you develop a custom Shopify store?',
    answer: 'Yes. We provide custom Shopify development for businesses that require functionality beyond standard Shopify configurations. Depending on the requirement, we can work with custom themes, Shopify apps, APIs, integrations, and other Shopify development solutions.'
  },
  {
    id: 6,
    question: 'Does Shopify support SEO and digital marketing?',
    answer: 'Yes. Shopify includes several built-in SEO capabilities and supports integration with various marketing, analytics, advertising, and SEO tools. However, achieving strong search visibility requires an overall SEO strategy covering technical SEO, content, keywords, website structure, performance, and ongoing optimization.'
  },
  {
    id: 7,
    question: 'Do you provide Shopify maintenance and support?',
    answer: 'Yes. We provide Shopify maintenance and support services for both newly developed and existing Shopify stores. Our support can include updates, modifications, troubleshooting, integrations, content changes, performance improvements, and ongoing development.'
  },
  {
    id: 8,
    question: 'Can you migrate an existing ecommerce website to Shopify?',
    answer: 'Yes. We can assist with ecommerce migration to Shopify, including product data, categories, customer information, website structure, design, integrations, and other migration requirements, depending on the existing platform.'
  }
];

export const ShopifyFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ background: 'transparent' }}>
      <style>{`
        .faq-accordion-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-accordion-card.active {
          border-color: #cbd5e1 !important;
          box-shadow: 0 12px 30px -10px rgba(5, 52, 86, 0.08) !important;
        }
      `}</style>

      <div className="container container-1550">
        
        {/* Modern Section Header */}
        <div className="row justify-content-center mb-50" data-aos="fade-up">
          <div className="col-xl-8 text-center">
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: '#f1f5f9', 
                padding: '6px 16px', 
                borderRadius: '20px', 
                marginBottom: '16px' 
              }}
            >
              <HelpCircle size={16} color="#053456" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#053456', fontFamily: '"Tenor Sans", sans-serif' }}>
                Got Questions?
              </span>
            </div>

            <h4 className="px-about-title mb-20">
              <span className="text-blue-about" style={{ color: '#053456' }}>Frequently Asked </span> Questions
            </h4>
            
            <p className="text-figtree text-black" style={{ color: '#475569', lineHeight: '1.7', fontSize: '16px' }}>
              Everything you need to know about our Shopify development services, processes, pricing, and platform capabilities.
            </p>
          </div>
        </div>

        {/* Accordion List Grid */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-10">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.id}
                    className={`faq-accordion-card ${isOpen ? 'active' : ''}`}
                    style={{
                      backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      overflow: 'hidden',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      style={{
                        width: '100%',
                        padding: '24px 28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: isOpen ? '#053456' : '#0f172a',
                          fontFamily: '"Tenor Sans", sans-serif',
                          lineHeight: '1.4'
                        }}
                      >
                        {faq.question}
                      </span>

                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? '#053456' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {/* Accordion Expandable Content */}
                    <div
                      style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        padding: isOpen ? '0 28px 24px 28px' : '0 28px'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '15px',
                          color: '#475569',
                          lineHeight: '1.7',
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '16px',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopifyFAQSection;