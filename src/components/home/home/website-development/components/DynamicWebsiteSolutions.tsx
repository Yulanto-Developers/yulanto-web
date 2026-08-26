import React from 'react';
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CARD_DATA = [
    {
        id: 'easy-manage',
        title: 'Easy to Manage',
        text: 'A dynamic website is a perfect solution for large corporations aiming to effortlessly publish and oversee a diverse range of their products and services. The dynamic interface of these websites allows for content and graphics creation without requiring any specialized IT knowledge, and updates can be easily made within the company.',
        patternClass: 'web-dev-card-pattern-dots',
        aosDelay: '100',
    },
    {
        id: 'highly-scalable',
        title: 'Highly Scalable',
        text: 'Dynamic websites are highly valued for their extensive scalability. Opting for a dynamic web design for your company allows you to access a diverse range of modules that provide an abundance of interactive features on the webpage, such as articles, blogs, e-commerce, event calendars, secure login, forums, and more.',
        patternClass: 'web-dev-card-pattern-dots',
        aosDelay: '200',
    },
    {
        id: 'search-engine-support',
        title: 'Supported By Search Engines',
        text: 'Because of the regular content updates, search engines tend to prefer dynamic websites. Pages are indexed by web crawlers, giving higher rankings to new and recently updated content.',
        patternClass: 'web-dev-card-pattern-dots',
        aosDelay: '300',
    },
];

type WebDevCardProps = {
    id: string;
    title: string;
    text: string;
    patternClass: string;
    aosDelay?: string;
};

type DynamicWebsiteSolutionsProps = {
    cards?: WebDevCardProps[];
};

// 2. Reusable Card Component
const WebDevCard = ({ title, text, patternClass, aosDelay }: WebDevCardProps) => {
    return (
        <div 
            className={`web-dev-card ${patternClass}`}
            data-aos="fade-up"
            data-aos-delay={aosDelay || '0'}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
        >
            <h3 className="web-dev-card-title text-tenor">{title}</h3>
            <p className="web-dev-card-text text-tenor">{text}</p>
        </div>
    );
};

// 3. Main Layout Component
const DynamicWebsiteSolutions = ({ cards = CARD_DATA }: DynamicWebsiteSolutionsProps) => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <>
            <style>{`
      
        /* Column Container with Custom Small Dashed Border */
        .web-dev-card-col {
          position: relative;
          padding: 2rem 1rem;
        }

        /* Fine/Small Right Dashed Border on Desktop (4px dash, 4px gap) */
        @media (min-width: 768px) {
          .web-dev-card-col:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 10%;
            right: 0;
            height: 80%;
            width: 2px;
            background-image: linear-gradient(to bottom, #53ae7d  50%, transparent 50%);
            background-size: 2px 8px;
            background-repeat: repeat-y;
          }
        }

        /* Fine/Small Bottom Dashed Border on Mobile (4px dash, 4px gap) */
        @media (max-width: 767.98px) {
          .web-dev-card-col:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            height: 2px;
            background-image: linear-gradient(to right, #53ae7d  50%, transparent 50%);
            background-size: 8px 2px;
            background-repeat: repeat-x;
          }
        }

        /* Base Pattern Card Structure */
        .web-dev-card {
          position: relative;
          border-radius: 12px;
          padding: 1rem;
          background-color: #ffffff;
          transition: transform 0.3s ease;
          overflow: hidden;
          height: 100%;
        }

        /* Pattern Styles */
        .web-dev-card-pattern-dots {
          background-image: radial-gradient(rgba(31, 224, 121, 0.2) 1.5px, transparent 1.5px);
          background-size: 16px 16px;
        }

        /* Hover State */
        .web-dev-card:hover {
          transform: translateY(-4px);
        }

        .web-dev-card-title {
          color: #053456;
          font-weight: 700;
          font-size: 28px;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .web-dev-card-text {
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        /* AOS Override - Disable animation on mobile if needed */
        @media (max-width: 576px) {
          [data-aos] {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

            <section className="container container-1750 py-5">

                <SectionTitle
                    subtitle="Simple to Handle"
                    titleFirst="Why Dynamic "
                    titleSecond=" Website Designing? "
                    description=""
                    className="mb-0 pb-0"
                    data-aos="fade-up"
                    data-aos-duration="600"
                />

                <div className="row g-0">
                    {cards.map((card) => (
                        <div key={card.id} className="col-12 col-md-4 web-dev-card-col">
                            <WebDevCard
                                id={card.id}
                                title={card.title}
                                text={card.text}
                                patternClass={card.patternClass}
                                aosDelay={card.aosDelay}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default DynamicWebsiteSolutions;