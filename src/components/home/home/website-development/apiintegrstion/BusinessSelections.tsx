import React from "react";
import {
  Briefcase,
  ShieldCheck,
  Code2,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import image1 from "@/assets/images/website-development/API-Integration/Why-Choose-Our-API-1.jpg";
import image2 from "@/assets/images/website-development/API-Integration/Why-Choose-Our-API-2.jpg";
import image3 from "@/assets/images/website-development/API-Integration/Why-Choose-Our-API-3.jpg";
import image4 from "@/assets/images/website-development/API-Integration/Why-Choose-Our-API-4.jpg";
import image5 from "@/assets/images/website-development/API-Integration/Why-Choose-Our-API-5.jpg";

const solutionsData = [
  {
    icon: Briefcase,
    image: image1,
    title: "Business-Focused Integration",
    description:
      "We understand your workflow and recommend an integration approach that supports your business objectives.",
  },
  {
    icon: ShieldCheck,
    image: image2,
    title: "Secure API Connectivity",
    description:
      "We follow secure development practices when connecting your application with external platforms and services.",
  },
  {
    icon: Code2,
    image: image3,
    title: "Custom API Integration",
    description:
      "Every business has different requirements. We develop customized API solutions based on your website, application, and third-party service.",
  },
  {
    icon: RefreshCw,
    image: image4,
    title: "Seamless Data Synchronization",
    description:
      "Automate the movement of information between different platforms and reduce manual data entry.",
  },
  {
    icon: TrendingUp,
    image: image5,
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
    backgroundColor: "rgba(63, 99, 125, 0.1)",
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
      <style>{`
        .custom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .custom-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
        }

        .api-card-image {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
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
            <span className="text-blue-about">
              API Integration Services?
            </span>
          </h4>

          <p
            className="mb-3"
            data-aos="text-reveal-lines"
            data-aos-delay="200"
          >
            We focus on building integrations that are secure, reliable,
            scalable, and aligned with your business requirements.
          </p>

          <div className="row g-4">
            {solutionsData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden custom-card">

                    {/* Image */}
                    <div
                      className="position-relative"
                      style={styles.cardImgPlaceholder}
                    >
                      <img
                        src={item.image.src}
                        alt={item.title}
                        className="api-card-image"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                      <div>

                        {/* Title */}
                        <div className="d-flex align-items-center mb-3">
                          <div style={styles.iconCircle} className="me-3">
                            <IconComponent
                              size={20}
                              color="#3F637D"
                            />
                          </div>

                          <h5 className="text-tenor fw-bold m-0">
                            {item.title}
                          </h5>
                        </div>

                        {/* Description */}
                        <p
                          className="card-text small"
                          style={styles.cardText}
                        >
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
                  API integration can bring your different business systems
                  together and create a connected digital ecosystem. Whether
                  you need Payment Gateway Integration, SMS Gateway
                  Integration, WhatsApp Gateway Integration, Zoho CRM
                  Integration, Chat API Integration, or Any Third Party API
                  Integration, our team can help you implement the right
                  solution.
                </p>

                <p
                  className="text-figtree text-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  From planning and API connectivity to testing and deployment,
                  we provide end-to-end API integration services for websites,
                  web applications, eCommerce platforms, and custom software.
                </p>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessSelections;