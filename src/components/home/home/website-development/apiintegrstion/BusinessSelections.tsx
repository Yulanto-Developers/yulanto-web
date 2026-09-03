import React from "react";
import {
  Briefcase,
  ShieldCheck,
  Code2,
  RefreshCw,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";

const solutionsData = [
  {
    icon: Briefcase,
    title: "Business-Focused Integration",
    description:
      "We understand your workflow and recommend an integration approach that supports your business objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Secure API Connectivity",
    description:
      "We follow secure development practices when connecting your application with external platforms and services.",
  },
  {
    icon: Code2,
    title: "Custom API Integration",
    description:
      "Every business has different requirements. We develop customized API solutions based on your website, application, and third-party service.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Data Synchronization",
    description:
      "Automate the movement of information between different platforms and reduce manual data entry.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our integrations are designed to accommodate growing business requirements and future system enhancements.",
  },
];

const styles = {
  cardImgPlaceholder: {
    height: "190px",
    backgroundColor: "#e2e5e9",
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
  },
  cardText: {
    color: "#4b5563",
    lineHeight: "1.6",
  },
  iconCircle: {
    width: "40px",
    height: "40px",
    backgroundColor: "rgba(63, 99, 125, 0.1)", // Light tint of #3F637D
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    border: "1px solid rgba(63, 99, 125, 0.2)",
  },
};

const stylestwo = {
  aboutBlueSection: {
    color: "#fff",
    background: "#0b3456",
    width: "100%",
    padding: "35px 20px",
  },
};

const BusinessSelections = () => {
  return (
    <>
      {/* Component Specific CSS for Hover Effect */}
      <style>{`
        .custom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .custom-card:hover {
          transform: translateY(-10px); /* Lift the card */
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important; /* Increase shadow */
        }
      `}</style>

      <section className="py-5">
        <div className="container">
          <h4
            className="px-about-title text-tenor mb-3"
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            Why Choose Our{" "}
            <span className="text-blue-about">API Integration Services? </span>
          </h4>
          <p className="mb-3" data-aos="text-reveal-lines" data-aos-delay="200">
            We focus on building integrations that are secure, reliable,
            scalable, and aligned with your business requirements.
          </p>
          <div className="row g-4">
            {solutionsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  {/* Apply custom-card class for hover effect */}
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden custom-card">
                    {/* Diagonal Placeholder Header */}
                    <div
                      className="position-relative d-flex align-items-center justify-content-center"
                      style={styles.cardImgPlaceholder}
                    >
                      <ImageIcon
                        size={48}
                        color="#3F637D"
                        className="position-relative z-1"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                      <div>
                        {/* Title with Lucide Icon in Circle */}
                        <div className="d-flex align-items-center mb-3">
                          <div style={styles.iconCircle} className="me-3">
                            <IconComponent size={20} color="#3F637D" />
                          </div>
                          <h5 className="text-tenor fw-bold m-0">
                            {item.title}
                          </h5>
                        </div>

                        <p className="card-text small" style={styles.cardText}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="yul-st">
        <section
          style={stylestwo.aboutBlueSection}
          className="about-blue-section"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12">
                <h4
                  className="px-about-title text-tenor"
                  data-aos="text-reveal"
                  data-aos-delay="200"
                >
                  <span className="text-white">
                    Automate Your Business with API Integration
                  </span>
                </h4>

                <p
                  className="text-figtree text-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  API integration can bring your different business systems together and create a connected digital ecosystem. Whether you need Payment Gateway Integration, SMS Gateway Integration, WhatsApp Gateway Integration, Zoho CRM Integration, Chat API Integration, or Any Third Party API Integration, our team can help you implement the right solution.
                </p>
                <p className="text-figtree text-white"
                  data-aos="fade-up"
                  data-aos-delay="300">From planning and API connectivity to testing and deployment, we provide end-to-end API integration services for websites, web applications, eCommerce platforms, and custom software.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessSelections;
