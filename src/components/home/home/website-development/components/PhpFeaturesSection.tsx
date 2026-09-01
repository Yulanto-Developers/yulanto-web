'use client';

import React from 'react';
import {
  Smartphone,
  Layers,
  Sliders,
  Database,
  Share2,
  ShieldCheck,
  TrendingUp,
  Zap,
  LucideIcon,
} from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export default function PhpFeaturesSection() {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: 'Responsive UI & UX',
      description:
        'Create websites that work seamlessly across desktops, tablets, and smartphones.',
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      icon: Smartphone,
    },
    {
      id: 2,
      title: 'Powerful Front-End & Back-End',
      description:
        'Build complete web solutions with robust frontend interfaces and efficient backend functionality.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      icon: Layers,
    },
    {
      id: 3,
      title: 'Custom Functionality',
      description:
        'Develop features and modules according to your specific business processes.',
      image:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
      icon: Sliders,
    },
    {
      id: 4,
      title: 'Database Integration',
      description:
        'Connect your website with MySQL and other database solutions for efficient data management.',
      image:
        'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
      icon: Database,
    },
    {
      id: 5,
      title: 'API & Third-Party Integration',
      description:
        'Integrate payment gateways, CRM systems, marketing tools, external APIs, and other business applications.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      icon: Share2,
    },
    {
      id: 6,
      title: 'Security-Focused Development',
      description:
        'Follow appropriate coding and security practices to protect your website and customer data.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      icon: ShieldCheck,
    },
    {
      id: 7,
      title: 'Scalable Architecture',
      description:
        'Develop applications that can evolve with your business and accommodate future requirements.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      icon: TrendingUp,
    },
    {
      id: 8,
      title: 'Performance Optimization',
      description:
        'Optimize code, database queries, images, and other website components to improve overall performance.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      icon: Zap,
    },
  ];

  return (
    <section className="py-5">
      <div className="container mt-3">
        {/* EXACT UNTOUCHED HEADER */}
        <div className="row mb-5">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <span
                className="tp-section-subtitle text-black blink-ball mt-0"
                style={{ lineHeight: '25px' }}
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                PHP Development Features
              </span>

              <h4
                className="px-about-title mb-3 fw-bold"
                style={{ color: '#053456' }}
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                Powerful Features for{' '}
                <span className="text-black">Modern PHP Websites</span>
              </h4>
              <p
                className="mb-3 text-secondary"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                We leverage the flexibility of PHP to create feature-rich
                websites and web applications that deliver a smooth user
                experience and support business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-4 text-center">
          <h4
            className="px-about-title fw-bold"
            style={{ color: '#053456' }}
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            Key Features <span className="text-black">We Deliver</span>
          </h4>
        </div>

        {/* CARDS GRID */}
        <div className="row g-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="col-12 col-sm-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={100 + (index % 4) * 100}
              >
                <div className="feature-card position-relative overflow-hidden rounded-4 shadow-sm">
                  {/* Background Image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="card-bg-img w-100 h-100 position-absolute top-0 start-0"
                  />

                  {/* Top Right Circle Icon Badge */}
                  <div className="icon-circle position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center text-white">
                    <IconComponent size={18} />
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="card-content-overlay position-absolute bottom-0 start-0 w-100 p-4 d-flex flex-column justify-content-end">
                    <h5 className="card-title text-white fw-bold mb-0">
                      {feature.title}
                    </h5>

                    {/* Revealing Description */}
                    <div className="desc-wrapper">
                      <p className="card-desc text-white-50 mb-0 mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic CSS Styles */}
      <style jsx>{`
        .feature-card {
          height: 340px;
          cursor: pointer;
          background-color: #053456;
        }

        .card-bg-img {
          object-fit: cover;
          filter: brightness(0.9);
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
            filter 0.6s ease;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          z-index: 2;
          transition: background-color 0.3s ease, border-color 0.3s ease,
            transform 0.3s ease;
        }

        .card-content-overlay {
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(5, 52, 86, 0.95) 0%,
            rgba(5, 52, 86, 0.75) 45%,
            rgba(5, 52, 86, 0) 100%
          );
          transition: background 0.4s ease;
          z-index: 1;
        }

        .card-title {
          font-size: 17px;
          line-height: 1.35;
          letter-spacing: -0.2px;
        }

        .desc-wrapper {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.25, 1, 0.5, 1),
            opacity 0.35s ease;
        }

        .card-desc {
          font-size: 13.5px;
          line-height: 1.55;
        }

        /* Hover States */
        .feature-card:hover .card-bg-img {
          transform: scale(1.1);
          filter: brightness(0.65);
        }

        .feature-card:hover .icon-circle {
          background: #053456;
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.05);
        }

        .feature-card:hover .card-content-overlay {
          background: linear-gradient(
            to top,
            rgba(5, 52, 86, 0.98) 0%,
            rgba(5, 52, 86, 0.85) 65%,
            rgba(5, 52, 86, 0.3) 100%
          );
        }

        .feature-card:hover .desc-wrapper {
          max-height: 120px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}