import React from 'react';
import {
    FaClipboardList,
    FaDraftingCompass,
    FaCode,
    FaDatabase,
    FaVial,
    FaRocket
} from 'react-icons/fa';

const processSteps = [
    {
        id: "01",
        title: "Requirement Analysis",
        description: "We understand your business, target audience, website objectives, features, and functional requirements.",
        icon: <FaClipboardList />
    },
    {
        id: "02",
        title: "UI/UX & Website Planning",
        description: "Our team plans the website structure, navigation, user experience, and visual direction according to your brand.",
        icon: <FaDraftingCompass />
    },
    {
        id: "03",
        title: "Web Design & Development",
        description: "Our designers and developers work together to create a responsive, user-friendly, and functional website.",
        icon: <FaCode />
    },
    {
        id: "04",
        title: "CMS & Database Integration",
        description: "Where required, we integrate CMS platforms, databases, APIs, payment gateways, forms, and other business-specific functionality.",
        icon: <FaDatabase />
    },
    {
        id: "05",
        title: "Testing & Optimization",
        description: "The website is tested across devices and browsers to identify functionality, usability, responsiveness, and performance issues.",
        icon: <FaVial />
    },
    {
        id: "06",
        title: "Deployment & Support",
        description: "After final approval, the website is deployed to the live server. We also provide post-development support and maintenance options.",
        icon: <FaRocket />
    }
];

const ProcessSection = () => {
    const brandColors = ["#053456", "#53ae7d"];

    return (
        <>
            <style>{`
        /* Outer circle for the icon */
        .icon-circle {
          width: 100px;
          height: 100px;
          transition: transform 0.3s ease;
        }

        .process-card:hover .icon-circle {
          transform: translateY(-5px);
        }

        /* Overlapping badge for the step number */
        .step-badge {
          width: 38px;
          height: 38px;
          bottom: 0px;
          right: 0px;
          font-size: 0.85rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
          width: 110px;
          height: 100px;
        }
      `}</style>

            <section className="py-4">
                <div className="container">

                    <h4 className="px-about-title mb-20 text-center">
                       Our Dynamic <span className="text-blue-about"> Web Development </span> Approach
                    </h4>

                    <div className="row g-4 justify-content-center">
                        {processSteps.map((step, index) => {
                            const circleBg = brandColors[index % brandColors.length];

                            return (
                                <div key={step.id} className="col-12 col-md-6 col-lg-4">
                                    <div className="process-card text-center h-100 p-3">
                                        {/* Circle and Badge container */}
                                        <div className="icon-wrapper position-relative mx-auto mb-4">
                                            <div
                                                className="icon-circle d-flex align-items-center justify-content-center text-white rounded-circle shadow"
                                                style={{ backgroundColor: circleBg }}
                                            >
                                                <span className="fs-2">{step.icon}</span>
                                            </div>
                                            {/* Number Badge */}
                                            <span
                                                className="step-badge position-absolute rounded-circle bg-white fw-bold shadow-sm d-flex align-items-center justify-content-center"
                                                style={{ color: circleBg }}
                                            >
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <h5 className="fw-bold mb-3">{step.title}</h5>
                                        <p className="text-muted small lh-lg mb-0">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProcessSection;