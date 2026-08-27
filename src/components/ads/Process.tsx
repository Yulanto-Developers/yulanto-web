'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faKey,
  faChess,
  faPenNib,
  faSliders,
  faLaptopCode,
  faCoins,
  faFilter,
  faDesktop,
  faArrowsRotate,
  faChartColumn,
} from '@fortawesome/free-solid-svg-icons';

interface ProcessItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ title, description, icon, delay = 0 }) => {
  const itemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    padding: '20px',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    border: '1px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
  };

  const iconWrapperStyles: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    backgroundColor: '#f8fafc',
    color: '#053456',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
  };

  const contentStyles: React.CSSProperties = {
    flexGrow: 1,
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '8px',
    lineHeight: '1.3',
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: '15px !important',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
  };

  return (
    <div
      className="modern-process-item"
      style={itemStyles}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="600"
      onMouseEnter={(e) => {
        const item = e.currentTarget;
        item.style.backgroundColor = '#ffffff';
        item.style.borderColor = 'rgba(5, 52, 86, 0.12)';
        item.style.boxShadow = '0 16px 32px -8px rgba(5, 52, 86, 0.08)';
        item.style.transform = 'translateY(-2px)';

        const iconBox = item.querySelector('.process-icon-box') as HTMLElement;
        if (iconBox) {
          iconBox.style.backgroundColor = '#053456';
          iconBox.style.color = '#ffffff';
          iconBox.style.borderColor = '#053456';
        }
      }}
      onMouseLeave={(e) => {
        const item = e.currentTarget;
        item.style.backgroundColor = '#ffffff';
        item.style.borderColor = 'transparent';
        item.style.boxShadow = 'none';
        item.style.transform = 'translateY(0)';

        const iconBox = item.querySelector('.process-icon-box') as HTMLElement;
        if (iconBox) {
          iconBox.style.backgroundColor = '#f8fafc';
          iconBox.style.color = '#053456';
          iconBox.style.borderColor = '#e2e8f0';
        }
      }}
    >
      <div className="process-icon-box" style={iconWrapperStyles}>
        {icon}
      </div>

      <div style={contentStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <p style={descriptionStyles}>{description}</p>
      </div>
    </div>
  );
};

export const PpcProcess: React.FC = () => {
  const steps = [
    {
      title: 'Business & Competitor Analysis',
      description:
        'Understand your products, services, market, competitors, and business objectives.',
      icon: <FontAwesomeIcon icon={faChartPie} />,
    },
    {
      title: 'Keyword Research',
      description:
        'Identify relevant, high-intent keywords and search terms for your campaigns.',
      icon: <FontAwesomeIcon icon={faKey} />,
    },
    {
      title: 'Campaign Strategy',
      description:
        'Develop campaign structures based on your target audience, locations, services, and budget.',
      icon: <FontAwesomeIcon icon={faChess} />,
    },
    {
      title: 'Ad Copy Development',
      description:
        'Create relevant and compelling advertisements designed to encourage users to take action.',
      icon: <FontAwesomeIcon icon={faPenNib} />,
    },
    {
      title: 'Campaign Setup',
      description:
        'Configure campaigns, ad groups, targeting, bidding strategies, extensions, and conversion tracking.',
      icon: <FontAwesomeIcon icon={faSliders} />,
    },
    {
      title: 'Landing Page Optimization',
      description:
        'Review landing pages for relevance, usability, messaging, and conversion opportunities.',
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      title: 'Bid & Budget Management',
      description:
        'Monitor bids and budgets to improve campaign efficiency.',
      icon: <FontAwesomeIcon icon={faCoins} />,
    },
    {
      title: 'Search Term Analysis',
      description:
        'Identify valuable search queries and exclude irrelevant searches using negative keywords.',
      icon: <FontAwesomeIcon icon={faFilter} />,
    },
    {
      title: 'Performance Monitoring',
      description:
        'Track campaign performance and identify areas that require improvement.',
      icon: <FontAwesomeIcon icon={faDesktop} />,
    },
    {
      title: 'Continuous Optimization',
      description:
        'Test ads, keywords, audiences, bids, and landing pages to improve campaign results.',
      icon: <FontAwesomeIcon icon={faArrowsRotate} />,
    },
    {
      title: 'Reporting & Insights',
      description:
        'Provide performance insights to help you understand your advertising investment and campaign progress.',
      icon: <FontAwesomeIcon icon={faChartColumn} />,
    },
  ];

  const wrapperStyles: React.CSSProperties = {
    width: '100%',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={wrapperStyles}>
      <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
        <div className="container container-1550">
          {/* Section Header */}
          <div className="row align-items-center mb-5" data-aos="fade-up" data-aos-duration="800">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                Our Google PPC Campaign Process
              </span>
            </div>
            <div className="col-xl-9">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">A Structured Approach to </span>
                  Pay-Per-Click Advertising
                </h4>
                <p className="text-figtree text-black mt-2">Our PPC management services in Chennai follow a structured process designed to improve campaign efficiency and maximize advertising opportunities.</p>
              </div>
            </div>
          </div>

          {/* Minimal Process List Grid with Staggered AOS Animations */}
          <div style={gridStyles}>
            {steps.map((step, index) => (
              <ProcessItem
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={(index % 3) * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PpcProcess;