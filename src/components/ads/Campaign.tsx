'use client';

import React from 'react';
import {
  FaMagnifyingGlassChart,
  FaBullseye,
  FaMagnifyingGlass,
  FaImage,
  FaRotateLeft,
  FaBagShopping,
  FaChartLine,
} from 'react-icons/fa6';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  const isFirstRow = index < 4;
  const isFirstColumn = index % 4 === 0;

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 0',
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRight: index % 4 !== 3 ? '1px solid #e5e5e5' : 'none',
    borderLeft: isFirstColumn ? '1px solid #e5e5e5' : 'none',
    borderBottom: isFirstRow ? '1px solid #e5e5e5' : 'none',
  };

  const gradientStyles: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: 'opacity 200ms',
    pointerEvents: 'none',
    background: isFirstRow
      ? 'linear-gradient(to top, #f9fafb, transparent)'
      : 'linear-gradient(to bottom, #f9fafb, transparent)',
  };

  const iconStyles: React.CSSProperties = {
    marginBottom: '16px',
    position: 'relative',
    zIndex: 10,
    padding: '0 40px',
    color: '#053456',
  };

  const titleContainerStyles: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    position: 'relative',
    zIndex: 10,
    padding: '0 40px',
  };

  const titleBarStyles: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: '24px',
    width: '4px',
    borderRadius: '0 9999px 9999px 0',
    background: '#d4d4d4',
    transition: 'all 200ms',
  };

  const titleTextStyles: React.CSSProperties = {
    display: 'inline-block',
    transition: 'transform 200ms',
    color: '#262626',
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: '14px !important',
    color: '#525252',
    maxWidth: '320px',
    position: 'relative',
    zIndex: 10,
    padding: '0 40px',
    margin: 0,
    lineHeight: '1.5',
  };

  return (
    <div
      className="feature-item"
      style={containerStyles}
      onMouseEnter={(e) => {
        const gradient = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement;
        const bar = e.currentTarget.querySelector('.title-bar') as HTMLElement;
        const text = e.currentTarget.querySelector('.title-text') as HTMLElement;

        if (gradient) gradient.style.opacity = '1';
        if (bar) {
          bar.style.height = '32px';
          bar.style.background = '#053456';
        }
        if (text) text.style.transform = 'translateX(8px)';
      }}
      onMouseLeave={(e) => {
        const gradient = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement;
        const bar = e.currentTarget.querySelector('.title-bar') as HTMLElement;
        const text = e.currentTarget.querySelector('.title-text') as HTMLElement;

        if (gradient) gradient.style.opacity = '0';
        if (bar) {
          bar.style.height = '24px';
          bar.style.background = '#d4d4d4';
        }
        if (text) text.style.transform = 'translateX(0)';
      }}
    >
      <div className="gradient-overlay" style={gradientStyles} />

      <div style={iconStyles}>{icon}</div>

      <div style={titleContainerStyles}>
        <div className="title-bar" style={titleBarStyles} />
        <span className="title-text" style={titleTextStyles}>
          {title}
        </span>
      </div>

      <p style={descriptionStyles}>{description}</p>
    </div>
  );
};

export const Campaign: React.FC = () => {
  const features = [
    {
      title: 'PPC Solutions Designed Around Your Business Goals',
      description:
        'Our Google Ads agency in Chennai provides end-to-end PPC campaign management services to help businesses improve their online visibility and lead generation.',
      icon: <FaMagnifyingGlassChart size={24} />,
    },
    {
      title: 'PPC Audit',
      description:
        'Our PPC audit evaluates your existing campaigns, keywords, ad groups, targeting, bidding strategies, conversion tracking, landing pages, and overall account structure to identify opportunities for improvement.',
      icon: <FaMagnifyingGlassChart size={24} />,
    },
    {
      title: 'Google Ads Campaign Management',
      description:
        'We plan, create, launch, monitor, and optimize Google Ads campaigns according to your business objectives. Our campaign management approach focuses on improving relevant traffic and generating quality conversions.',
      icon: <FaBullseye size={24} />,
    },
    {
      title: 'Search Advertising',
      description:
        'Reach customers actively searching for your products or services with highly targeted Google Search Ads. We optimize keywords, ad copy, bidding, and search terms to improve campaign performance.',
      icon: <FaMagnifyingGlass size={24} />,
    },
    {
      title: 'Display Advertising',
      description:
        'Use visually engaging Google Display Ads to build brand awareness and reach relevant audiences across websites, apps, and other Google partner properties.',
      icon: <FaImage size={24} />,
    },
    {
      title: 'Remarketing & Retargeting',
      description:
        'Reconnect with visitors who have previously interacted with your website. Remarketing campaigns can help bring potential customers back to your website and encourage them to complete an enquiry or purchase.',
      icon: <FaRotateLeft size={24} />,
    },
    {
      title: 'Google Shopping Ads',
      description:
        'For eligible eCommerce businesses, Google Shopping campaigns can showcase products with relevant information such as product images, names, and prices to help attract potential buyers.',
      icon: <FaBagShopping size={24} />,
    },
    {
      title: 'Conversion Tracking & Analytics',
      description:
        'We configure and monitor conversion tracking to understand which campaigns, keywords, advertisements, and landing pages are generating enquiries, sales, or other valuable actions.',
      icon: <FaChartLine size={24} />,
    },
  ];

  const wrapperStyles: React.CSSProperties = {
    backgroundColor: '#ffffff',
    width: '100%',
  };

  const sectionStyles: React.CSSProperties = {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    position: 'relative',
    zIndex: 10,
    backgroundColor: '#ffffff',
  };

  return (
    <div style={wrapperStyles}>
      <section style={sectionStyles}>
        {/* Title Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Google Ads
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Google Ads </span>
                Campaign Services
              </h4>
            </div>
          </div>
        </div>

        <div style={gridStyles}>
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Campaign;