'use client'
import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { faPalette, faCode, faShieldHalved, faChartLine, faWrench, faLaptopFile } from '@fortawesome/free-solid-svg-icons';

const iconMap: any = {
    faPalette: faPalette,
    faCode: faCode,
    faShieldHalved: faShieldHalved,
    faLaptopMobile: faLaptopFile,
    faChartLine: faChartLine,
    faWrench: faWrench
};

const PortfolioCard = ({
    id,
    title,
    image,
    categories,
    description,
    year,
    portFolio
}: PortfolioProjectDT) => {
    const [activeFaq, setActiveFaq] = useState(0);

    return (
        <div className="px-portfolio-item px-portfolio-panel p-relative mb-30">
            <Link href={``}>

                {/* =================================================== */}
                {/* 💻 DESKTOP VERSION ONLY (Hidden on Mobile)        */}
                {/* =================================================== */}
                <div className="d-none d-md-block">
                    <div className="px-portfolio-thumb p-relative ripple-image">
                        <Image
                            width={1820}
                            height={820}
                            className="img-fluid w-100 h-100"
                            src={image}
                            alt={title}
                        />

                        <div className="portfolio-image-description">
                            <div className="portfolio-hover-title px-35">
                                {title !== "Invest in Your Website" && (
                                    <h2 className="text-white text-center text-tenor font-title-cls">
                                        {title}
                                    </h2>
                                )}
                                <p className="text-figtree" style={{ fontSize: '17px', textAlign: 'justify' }}>
                                    {description}
                                </p>

                                {/* OUR MANTRA */}
                                {title === "Our Success Mantra" && Array.isArray(portFolio) && (
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <span className="text-tenor text-white font-bold-cls text-start" style={{ fontSize: '20px' }}>
                                            Benefits of Choosing Yulanto Web Creations
                                        </span>
                                        {portFolio.map((item, idx) => {
                                            const chosenIcon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
                                            return (
                                                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", textAlign: 'left' }} className="text-figtree font-paragraph-cls">
                                                    {chosenIcon && (
                                                        <FontAwesomeIcon icon={chosenIcon} style={{ width: "20px", height: "20px", marginTop: "3px", flexShrink: 0, color: "#53AE7D" }} />
                                                    )}
                                                    <span className="text-white text-figtree fs-6 d-flex align-items-start">
                                                        <span className="text-nowrap text-bold-cls">{item.key}</span>
                                                        <span className="mx-2">:</span>
                                                        <span>{item.text}</span>
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}

                                {/* FAQ */}
                                {title === "FAQ?" && Array.isArray(portFolio) && (
                                    <div>
                                        {portFolio.map((item, index) => (
                                            <div key={index} style={{ marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,.2)", paddingBottom: "10px" }}>
                                                <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveFaq(activeFaq === index ? -1 : index); }} style={{ cursor: "pointer", color: "#fff", fontWeight: 600 }} className="fs-6 text-tenor">
                                                    {item.ques}
                                                </div>
                                                {activeFaq === index && (
                                                    <div style={{ marginTop: "10px", color: "#fff", fontSize: "18px" }}>
                                                        {Object.entries(item).filter(([key]) => key.startsWith("ans")).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => (
                                                            <p key={key} className="text-figtree" style={{ marginBottom: "5px", textAlign: 'left' }}>{value as string}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* INVEST CONTENTS */}
                                {title === "Invest in Your Website" && Array.isArray(portFolio) && (
                                    <div>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px" }}>
                                            {portFolio.slice(0, 2).map((item, index) => (
                                                <div key={index} className="box-grid">
                                                    <h4 className="text-tenor" style={{ color: "#fff", marginBottom: "15px", textAlign: "center" }}>{item.section}</h4>
                                                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#fff" }} className="text-figtree">
                                                        {item.points.map((point: string, i: number) => (
                                                            <li key={i} style={{ marginBottom: "10px", lineHeight: "1.2", fontSize: "15px" }}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ background: "rgba(255,255,255,.08)", borderLeft: "4px solid #53AE7D", padding: "10px 20px", borderRadius: "10px", marginBottom: "10px" }}>
                                            <h4 className="text-tenor" style={{ color: "#fff" }}>{portFolio[2].section}</h4>
                                            <span className="text-figtree" style={{ color: "#fff", margin: 0, fontSize: '16px', lineHeight: "1.5", textAlign: "justify" }}>{portFolio[2].description}</span>
                                        </div>
                                        <div style={{ background: "#53AE7D", color: "#fff", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: 600, fontSize: "16px" }} className="text-tenor">
                                            💡 {portFolio[3].description}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="px-portfolio-content portfolio-bottom-title">
                        <h2 className="px-portfolio-title">{title}</h2>
                    </div>
                </div>

                {/* =================================================== */}
                {/* 📱 MOBILE VERSION ONLY (Hidden on Desktop)         */}
                {/* =================================================== */}
                <div className="d-block d-md-none mobile-portfolio-card">
                    {/* Image Container with Title Overlay */}
                    <div className="px-portfolio-thumb position-relative overflow-hidden" style={{ borderRadius: "12px 12px 0 0" }}>
                        <Image
                            width={1820}
                            height={820}
                            className="img-fluid w-100 d-block"
                            src={image}
                            alt={title}
                            style={{ borderRadius: "12px 12px 0 0" }}
                        />

                        {/* Title Overlay over Image */}
                        <div
                            className="position-absolute bottom-0 start-0 w-100 p-2 text-center"
                            style={{
                                // background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)",
                                paddingTop: "25px"
                            }}
                        >
                            <h3 className="text-white text-tenor m-0" style={{ fontSize: '28px', fontWeight: '600', }}>
                                {title}
                            </h3>
                        </div>
                    </div>

                    {/* Content Box Below Image */}
                    <div className="mobile-portfolio-details p-3" style={{ background: "#1a1a1a", borderRadius: " 0 0 12px 12px" }}>
                        <p className="text-figtree text-white mb-3" style={{ fontSize: '15px', textAlign: 'left', lineHeight: '1.5' }}>
                            {description}
                        </p>

                        {/* OUR MANTRA MOBILE */}
                        {title === "Our Success Mantra" && Array.isArray(portFolio) && (
                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                <div className="text-tenor text-white font-bold-cls text-start mb-2" style={{ fontSize: '16px' }}>
                                    Benefits of Choosing Yulanto Web Creations
                                </div>
                                {portFolio.map((item, idx) => {
                                    const chosenIcon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
                                    return (
                                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                                            {chosenIcon && (
                                                <FontAwesomeIcon icon={chosenIcon} style={{ width: "16px", height: "16px", marginTop: "3px", flexShrink: 0, color: "#53AE7D" }} />
                                            )}
                                            <span className="text-white text-figtree" style={{ fontSize: '14px' }}>
                                                <strong className="d-block text-white">{item.key}</strong>
                                                <span style={{ color: '#ccc' }}>{item.text}</span>
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {/* FAQ MOBILE */}
                        {title === "FAQ?" && Array.isArray(portFolio) && (
                            <div>
                                {portFolio.map((item, index) => (
                                    <div key={index} style={{ marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,.2)", paddingBottom: "8px" }}>
                                        <div
                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveFaq(activeFaq === index ? -1 : index); }}
                                            style={{ cursor: "pointer", color: "#fff", fontWeight: 600, fontSize: '15px' }}
                                            className="text-tenor"
                                        >
                                             {item.ques}
                                        </div>
                                        {activeFaq === index && (
                                            <div style={{ marginTop: "8px", color: "#fff", fontSize: "14px" }}>
                                                {Object.entries(item).filter(([key]) => key.startsWith("ans")).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => (
                                                    <p key={key} className="text-figtree" style={{ marginBottom: "5px" }}>{value as string}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* INVEST CONTENTS MOBILE */}
                        {title === "Invest in Your Website" && Array.isArray(portFolio) && (
                            <div className="d-flex flex-column gap-3">
                                {portFolio.slice(0, 2).map((item, index) => (
                                    <div key={index} style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', }}>
                                        <h5 className="text-tenor text-white text-center mb-2" style={{ fontSize: '16px' }}>{item.section}</h5>
                                        <ul style={{ margin: 0, paddingLeft: "18px", color: "#fff" }} className="text-figtree">
                                            {item.points.map((point: string, i: number) => (
                                                <li key={i} style={{ marginBottom: "6px", fontSize: "13px", lineHeight: "1.3" }}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <div style={{ background: "rgba(255,255,255,.08)", borderLeft: "4px solid #53AE7D", padding: "10px", }}>
                                    <h5 className="text-tenor text-white mb-1" style={{ fontSize: '15px' }}>{portFolio[2].section}</h5>
                                    <p className="text-figtree text-white m-0" style={{ fontSize: '10px', lineHeight: "1.4" }}>{portFolio[2].description}</p>
                                </div>

                                <div style={{ background: "#53AE7D", color: "#fff", padding: "8px", textAlign: "center", fontWeight: 600, fontSize: "13px" }} className="text-tenor">
                                    💡 {portFolio[3].description}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default PortfolioCard;