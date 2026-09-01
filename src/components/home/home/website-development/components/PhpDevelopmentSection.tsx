import React from "react";

const PhpDevelopmentSection = () => {
    return (
        <section>
            {/* Scoped CSS for Dashed Flow Line Animation */}
            <style>{`
        @keyframes dashFlowRight {
          to {
            stroke-dashoffset: -24;
          }
        }

        @keyframes dashFlowLeft {
          to {
            stroke-dashoffset: 24;
          }
        }

        .animated-dash-right {
          stroke-dasharray: 8, 6;
          animation: dashFlowRight 1.2s linear infinite;
        }

        .animated-dash-left {
          stroke-dasharray: 8, 6;
          animation: dashFlowLeft 1.2s linear infinite;
        }
      `}</style>

            <div className="container  mt-3">
                <div className="row">
                    <div className="col-xl-3">
                        <span
                            className="tp-section-subtitle text-black blink-ball mt-40"
                            style={{ lineHeight: "25px" }}
                            data-aos="text-reveal"
                            data-aos-delay="100"
                        >
                            PHP Web Development Company in Chennai
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4
                                className="px-about-title text-tenor"
                                data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                Professional PHP Development{" "}
                                <span className="text-blue-about">Services in Chennai</span>
                            </h4>
                            <p
                                className="mb-0"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                Yulanto Web Creations is a trusted PHP web development company
                                in Chennai, delivering secure, scalable, high-performance
                                websites and web applications for businesses of all sizes. Our
                                experienced PHP developers in Chennai combine modern
                                development practices, clean coding standards, and
                                business-focused strategies to build websites that are fast,
                                responsive, secure, and easy to manage.
                            </p>
                        </div>
                    </div>

                    {/* Static SVG Data Flow Visual */}
                    <div className="col-xl-12 mt-4 text-center" >
                        <svg
                            viewBox="0 0 900 220"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-100"
                            style={{ maxHeight: "220px" }} data-aos="fade-up" data-aos-delay="300"
                        >
                            {/* --- Animated Dash Connection Lines --- */}
                            {/* Request Line: Left -> Right */}
                            <path
                                d="M 260 85 L 630 85"
                                stroke="#2563EB"
                                strokeWidth="2.5"
                                className="animated-dash-right"
                            />
                            <polygon points="630,79 642,85 630,91" fill="#2563EB" />

                            {/* Response Line: Right -> Left */}
                            <path
                                d="M 640 145 L 270 145"
                                stroke="#10B981"
                                strokeWidth="2.5"
                                className="animated-dash-left"
                            />
                            <polygon points="270,139 258,145 270,151" fill="#10B981" />

                            {/* Request Badge */}
                            <g transform="translate(400, 63)">
                                <rect x="0" y="0" width="100" height="24" rx="12" fill="#EFF6FF" stroke="#BFDBFE" />
                                <text x="50" y="16" textAnchor="middle" fill="#2563EB" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                                    HTTP Request
                                </text>
                            </g>

                            {/* Response Badge */}
                            <g transform="translate(400, 141)">
                                <rect x="0" y="0" width="100" height="24" rx="12" fill="#ECFDF5" stroke="#A7F3D0" />
                                <text x="50" y="16" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                                    JSON Response
                                </text>
                            </g>

                            {/* --- LEFT NODE: CLIENT BROWSER --- */}
                            <g transform="translate(40, 10)">
                                <rect x="0" y="0" width="200" height="190" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

                                {/* Laptop Graphic */}
                                <rect x="50" y="30" width="100" height="68" rx="6" fill="#1E293B" />
                                <rect x="55" y="35" width="90" height="50" rx="3" fill="#38BDF8" opacity="0.15" />
                                <rect x="62" y="42" width="40" height="6" rx="2" fill="#38BDF8" />
                                <rect x="62" y="53" width="76" height="4" rx="2" fill="#94A3B8" />
                                <rect x="62" y="61" width="60" height="4" rx="2" fill="#94A3B8" />
                                <rect x="62" y="70" width="24" height="9" rx="3" fill="#2563EB" />
                                <path d="M 90 98 L 110 98 L 115 116 L 85 116 Z" fill="#64748B" />
                                <rect x="75" y="116" width="50" height="5" rx="2.5" fill="#475569" />

                                <text x="100" y="146" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                                    Client Browser
                                </text>
                                <text x="100" y="165" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">
                                    User Interface
                                </text>
                            </g>

                            {/* --- RIGHT NODE: PHP SERVER --- */}
                            <g transform="translate(660, 10)">
                                <rect x="0" y="0" width="200" height="190" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

                                {/* Server Graphic */}
                                <rect x="55" y="30" width="90" height="90" rx="8" fill="#1E293B" />
                                <rect x="63" y="38" width="74" height="20" rx="4" fill="#334155" />
                                <circle cx="73" cy="48" r="3" fill="#10B981" />
                                <circle cx="83" cy="48" r="3" fill="#38BDF8" />
                                <line x1="98" y1="48" x2="125" y2="48" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />

                                <rect x="63" y="64" width="74" height="20" rx="4" fill="#334155" />
                                <circle cx="73" cy="74" r="3" fill="#10B981" />
                                <circle cx="83" cy="74" r="3" fill="#F59E0B" />
                                <line x1="98" y1="74" x2="125" y2="74" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />

                                <rect x="75" y="91" width="50" height="18" rx="9" fill="#777BB4" />
                                <text x="100" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                                    PHP 8+
                                </text>

                                <text x="100" y="146" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                                    PHP Server & DB
                                </text>
                                <text x="100" y="165" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">
                                    Backend Processing
                                </text>
                            </g>
                        </svg>
                    </div>


                    <div className="col-xl-12 mt-3">
                        <p
                            className="mb-0"
                            data-aos="text-reveal-lines"
                            data-aos-delay="200"
                        >
                            As an experienced PHP development company in Chennai, we develop customized solutions using PHP and popular frameworks such as Laravel. From corporate websites and dynamic business portals to eCommerce platforms and custom web applications, our team provides complete PHP website development in Chennai tailored to your business requirements.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PhpDevelopmentSection;