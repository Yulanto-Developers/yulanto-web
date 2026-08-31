'use client';

import React from 'react';
import Image from 'next/image';
import { useAOS } from '@/components/hooks/useAOS';

// --- TYPES ---
interface ProcessStep {
  title: string;
  description: string[];
  subListHeader?: string;
  subList?: string[];
  imageUrl: string;
  imageAlt: string;
}

interface CardTwoDesProps {
  step: ProcessStep;
  index: number;
}

// --- DATA ---
const processList: ProcessStep[] = [
  {
    title: "1. Requirement Gathering",
    description: [
      "We begin by understanding your business, target audience, competitors, website objectives, required features, content requirements, and technical expectations.",
      "This helps our website developers in Chennai create a clear development strategy based on your business needs."
    ],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Requirement Gathering"
  },
  {
    title: "2. Planning & Website Architecture",
    description: [
      "Once the requirements are finalized, we create the website structure, navigation flow, sitemap, and functional plan.",
      "Wireframes may also be prepared to establish the page structure and user journey before moving into the design stage."
    ],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Planning & Website Architecture"
  },
  {
    title: "3. UI/UX Design",
    description: [
      "Our designers create an engaging and user-friendly interface based on your brand identity. The design process includes layout, typography, colors, imagery, visual hierarchy, and user experience.",
      "The objective is to create a website that not only looks professional but also makes it easy for visitors to find information and take action."
    ],
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "UI/UX Design"
  },
  {
    title: "4. Website Development",
    description: [
      "After design approval, our development team converts the approved designs into a fully functional website.",
      "Depending on your requirements, we can work with technologies and platforms such as HTML, CSS, JavaScript, PHP, WordPress, Laravel, CodeIgniter, WooCommerce, and other suitable technologies."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Website Development"
  },
  {
    title: "5. Testing & Quality Assurance",
    description: [
      "Before launch, the website undergoes comprehensive testing to identify and resolve technical issues."
    ],
    subListHeader: "Testing may include:",
    subList: [
      "Browser compatibility",
      "Mobile responsiveness",
      "Page speed and performance",
      "Navigation and usability",
      "Forms and functionality",
      "Links and integrations",
      "Security checks",
      "Basic SEO implementation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Testing & Quality Assurance"
  },
  {
    title: "6. Deployment",
    description: [
      "Once testing is completed and the website receives final approval, we deploy the website to the live server.",
      "Our team assists with the necessary hosting, domain, SSL, configuration, and deployment requirements to ensure a smooth launch."
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Deployment"
  },
  {
    title: "7. Maintenance & Updates",
    description: [
      "Website development does not end after launch. Regular updates and maintenance help keep your website secure, functional, and up to date.",
      "We can provide ongoing website maintenance, security updates, backups, content updates, technical support, and performance improvements based on your requirements."
    ],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Maintenance & Updates"
  }
];

// --- CARD COMPONENT ---
function CardTwoDes({ step, index }: CardTwoDesProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`proc-step-card ${isEven ? 'proc-step-even' : 'proc-step-odd'}`}
      data-aos={isEven ? "fade-right" : "fade-left"}
      data-aos-delay={(index % 3) * 100 + 100}
    >
      <div className="proc-media-frame" data-aos="image-zoom" data-aos-delay="200">
        <Image
          src={step.imageUrl}
          alt={step.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 420px"
          className="proc-media-img"
        />
      </div>

      <div className="proc-body-content">
        <h3 className="proc-heading-title" data-aos="text-reveal" data-aos-delay="150">
          {step.title}
        </h3>

        {step.description.map((paragraph, pIdx) => (
          <p key={pIdx} className="proc-body-text" data-aos="text-reveal-lines" data-aos-delay={200 + pIdx * 50}>
            {paragraph}
          </p>
        ))}

        {step.subList && step.subList.length > 0 && (
          <div className="proc-sublist-wrapper" data-aos="fade-up" data-aos-delay="250">
            {step.subListHeader && (
              <span className="proc-sublist-label">{step.subListHeader}</span>
            )}
            <div className="proc-sublist-group">
              {step.subList.map((item, idx) => (
                <div key={idx} className="proc-sublist-item">
                  <i className="fa-solid fa-circle-check proc-fa-icon" aria-hidden="true"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function ProcessPage() {
  useAOS();

  return (
    <main className="proc-section-wrapper">
      <section className="container">
        <div className="row mb-3">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball mt-40"
              style={{ lineHeight: "25px" }} data-aos="text-reveal"
              data-aos-delay="100"
            >
              Our Website  <br />
              Development Process
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">

              <h4
                className="px-about-title text-tenor"
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                A Structured Approach to <span className="text-blue-about"> Custom Website Development</span>
              </h4>
              <p
                className="mb-0"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                We follow a systematic website development process to ensure that every stage of your project is carefully planned, designed, developed, tested, and launched.
              </p>
            </div>
          </div>
        </div>
        {processList.map((step, idx) => (
          <CardTwoDes key={idx} step={step} index={idx} />
        ))}
      </section>

      <style jsx global>{`
        /* Wrapper */
        .proc-section-wrapper {
          width: 100%;
          padding: 24px 0;
        }

        /* Highly scoped component-level CSS */
        .proc-step-card {
          display: flex;
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px -2px rgba(5, 52, 86, 0.06);
          overflow: hidden;
          margin-bottom: 28px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease;
        }

        .proc-step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(5, 52, 86, 0.15);
          border-color: #53ae7d;
        }

        /* Alternating Zigzag Logic */
        .proc-step-even {
          flex-direction: row;
        }

        .proc-step-odd {
          flex-direction: row-reverse;
        }

        /* Media Frame */
        .proc-media-frame {
          position: relative;
          width: 40%;
          min-width: 320px;
          min-height: 250px;
          background-color: #f8fafc;
          overflow: hidden;
          flex-shrink: 0;
        }

        .proc-media-img {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proc-step-card:hover .proc-media-img {
          transform: scale(1.06);
        }

        /* Card Content Body */
        .proc-body-content {
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .proc-heading-title {
          margin: 0 0 14px 0;
          font-weight: 700;
          color: #053456;
          line-height: 1.35;
        }

        .proc-body-text {
          margin: 0 0 12px 0;
          line-height: 1.7;
          color: #053456;
          opacity: 0.9;
        }

        .proc-body-text:last-of-type {
          margin-bottom: 0;
        }

        /* Specific Sublist Formatting */
        .proc-sublist-wrapper {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px dashed rgba(5, 52, 86, 0.15);
        }

        .proc-sublist-label {
          display: block;
          font-weight: 700;
          color: #053456;
          margin-bottom: 14px;
        }

        /* Horizontally Aligned Items Flex Layout */
        .proc-sublist-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
        }

        .proc-sublist-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #053456;
          line-height: 1.5;
          background-color: rgba(83, 174, 125, 0.08);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(83, 174, 125, 0.2);
        }

        .proc-fa-icon {
          color: #53ae7d;
          font-size: 14px;
          flex-shrink: 0;
        }

        /* Responsive Behavior */
        @media (max-width: 900px) {
          .proc-step-card,
          .proc-step-even,
          .proc-step-odd {
            flex-direction: column;
          }

          .proc-media-frame {
            width: 100%;
            min-width: 100%;
            height: 220px;
            min-height: 220px;
          }

          .proc-body-content {
            padding: 24px;
          }

          .proc-sublist-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .proc-sublist-item {
            width: 100%;
            border-radius: 8px;
          }
        }
      `}</style>
    </main>
  );
}