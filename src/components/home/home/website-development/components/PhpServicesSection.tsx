import React from "react";

const MinimalistMatrixPhpServices = () => {
    const services = [
        { title: "Custom PHP Website Development", desc: "Clean-code solutions built specifically for your custom business logic." },
        { title: "PHP Business Website Development", desc: "High-performance enterprise sites built for maximum conversion." },
        { title: "Dynamic PHP Website Development", desc: "Data-driven web experiences powered by dynamic database rendering." },
        { title: "PHP Web Application Development", desc: "Complex, scalable web applications for enterprise-grade operations." },
        { title: "PHP CMS Development", desc: "Tailored content management panels for total site control." },
        { title: "Custom Portal Development", desc: "Multi-tiered user portals with granular role-based permissions." },
        { title: "Laravel Web Application Development", desc: "Enterprise application architectures leveraging Laravel features." },
        { title: "Laravel Website Development", desc: "Rapid, secure, and easily scalable web development on Laravel." },
        { title: "PHP CMS Development & Tuning", desc: "Custom plugins, theme development, and deep performance tuning." },
        { title: "API Development & Integration", desc: "Secure API interfaces for connecting web apps with mobile and external systems." },
        { title: "Payment Gateway Integration", desc: "PCI-DSS compliant payment processing for credit cards and gateways." },
        { title: "Database Development & Integration", desc: "Relational database schema modeling, indexing, and speed tuning." },
        { title: "Third-Party API Integration", desc: "Connecting your PHP platform with CRM, ERP, and marketing platforms." },
        { title: "PHP Website Redesign", desc: "Revamping legacy PHP codebases into responsive design standards." },
        { title: "PHP Website Migration", desc: "Risk-free migration of code bases, data schemas, and server environments." },
        { title: "Website Performance Optimization", desc: "Deep caching, script minification, and database query optimization." },
        { title: "PHP Website Maintenance & Support", desc: "Ongoing security patches, bug fixes, automated backups, and updates." }
    ];

    return (
        <>
            <style>{`
        /* Matrix Grid Container */
        .matrix-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0;
          border-top: 1px solid rgba(5, 52, 86, 0.15);
          border-left: 1px solid rgba(5, 52, 86, 0.15);
          border-radius: 12px;
          overflow: hidden;
        }

        /* Matrix Cell Styling */
        .matrix-cell-card {
          position: relative;
          border-right: 1px solid rgba(5, 52, 86, 0.15);
          border-bottom: 1px solid rgba(5, 52, 86, 0.15);
          background-color: #ffffff;
          padding: 2rem 1.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;

          /* Faded Grid Pattern Background */
          background-image: 
            linear-gradient(to right, rgba(5, 52, 86, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(5, 52, 86, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Top Accent Indicator Line */
        .matrix-accent-line {
          width: 28px;
          height: 3px;
          background-color: #53ae7d;
          margin-bottom: 1rem;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Cell Hover Effects */
        .matrix-cell-card:hover {
          background-color: #053456;
          color: #ffffff !important;
          z-index: 2;
          box-shadow: inset 0 0 0 1px #053456, 0 12px 24px rgba(5, 52, 86, 0.18);
        }

        .matrix-cell-card:hover .matrix-title {
          color: #ffffff !important;
        }

        .matrix-cell-card:hover .matrix-accent-line {
          width: 45px;
          background-color: #53ae7d;
        }

        .matrix-cell-card:hover .matrix-desc {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>

            <section className="py-5">
                <div className="container mt-3">

                    {/* EXACT UNTOUCHED HEADER */}
                    <div className="row mb-5">

                        <div className="col-xl-12">
                            <div className="px-project-title-box">

                                <span
                                    className="tp-section-subtitle text-black blink-ball mt-0"
                                    style={{ lineHeight: "25px" }} data-aos="text-reveal"
                                    data-aos-delay="100"
                                >
                                    Top PHP Developers in Chennai
                                </span>
                               
                                <h4
                                    className="px-about-title mb-3 fw-bold"
                                    style={{ color: "#053456" }}
                                    data-aos="text-reveal"
                                    data-aos-delay="100"
                                >
                                    Experienced PHP Developers for{" "}
                                    <span className="text-black">High-Performance Websites</span>
                                </h4>
                                <p className="mb-3 text-secondary" data-aos="text-reveal-lines" data-aos-delay="200">
                                    Our skilled PHP development team creates powerful and user-friendly websites with a strong focus on performance, security, scalability, and responsive design. Whether you need a new business website, an eCommerce platform, a custom web application, or an existing website upgrade, our PHP website development Chennai solutions are designed to support your business goals.
                                </p>
                                <p className="mb-0 text-secondary" data-aos="text-reveal-lines" data-aos-delay="200">
                                    We follow structured development processes to deliver clean, maintainable, and efficient code. Our PHP companies in Chennai approach combines technical expertise with creative design to deliver websites that provide an engaging experience across desktops, tablets, and mobile devices.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section Heading */}
                    <div className="mb-4 text-center">
                        <h4 className="px-about-title fw-bold" style={{ color: "#053456" }} data-aos="text-reveal" data-aos-delay="100">
                            Why Choose <span className="text-black">PHP Development?</span>
                        </h4>
                    </div>

                    {/* Faded Grid Border Matrix */}
                    <div className="matrix-grid-container shadow-sm">
                        {services.map((item, idx) => (
                            <div key={idx} className="matrix-cell-card d-flex flex-column justify-content-between">
                                <div>
                                    <div className="matrix-accent-line"></div>
                                    <h6 className="matrix-title fw-bold mb-2 fs-6" style={{ color: "#053456" }}>
                                        {item.title}
                                    </h6>
                                </div>
                                <p className="matrix-desc small text-muted mb-0 mt-2">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default MinimalistMatrixPhpServices;