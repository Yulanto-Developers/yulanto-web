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
    year,
    portFolio
}: PortfolioProjectDT) => {
    const [activeFaq, setActiveFaq] = useState(0);
    return (
        <div className="px-portfolio-item px-portfolio-panel p-relative mb-30">
            <Link href={``}>
                {/* <div className="px-portfolio-thumb p-relative ripple-image">
                    <Image width={1820} height={820} className="img-fluid w-100 h-100" src={image} alt={title} />
                </div> */}
                <div className="px-portfolio-thumb p-relative ripple-image">
                    <Image
                        width={1820}
                        height={820}
                        className="img-fluid w-100 h-100"
                        src={image}
                        alt={title}
                    />

                    <div className="portfolio-image-description">
                        <div className="portfolio-hover-title">
                            <h2 className="text-white text-tenor font-title-cls">{title}</h2>
                        </div>
                        {/* OUR MANTRA */}
                        {title === "Our Success Mantra" && Array.isArray(portFolio) && (
                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                {portFolio.map((item, idx) => {
                                    const chosenIcon =
                                        typeof item.icon === "string"
                                            ? iconMap[item.icon]
                                            : item.icon;

                                    return (
                                        <li
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            {chosenIcon && (
                                                <FontAwesomeIcon
                                                    icon={chosenIcon}
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        marginTop: "3px",
                                                        flexShrink: 0,
                                                        color: "#053456",
                                                    }}
                                                />
                                            )}

                                            <span className="text-white fs-6">
                                                {item.text}
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
                                    <div
                                        key={index}
                                        style={{
                                            marginBottom: "15px",
                                            borderBottom: "1px solid rgba(255,255,255,.2)",
                                            paddingBottom: "10px",
                                        }}
                                    >
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setActiveFaq(activeFaq === index ? -1 : index);
                                            }}
                                            style={{
                                                cursor: "pointer",
                                                color: "#fff",
                                                fontWeight: 600,
                                            }}
                                            className="fs-6"
                                        >
                                            {item.ques}
                                        </div>

                                        {activeFaq === index && (
                                            <div
                                                style={{
                                                    marginTop: "10px",
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                    // lineHeight: 1.6,
                                                }}
                                            >
                                                {Object.entries(item)
                                                    .filter(([key]) => key.startsWith("ans"))
                                                    .sort(([a], [b]) => a.localeCompare(b))
                                                    .map(([key, value]) => (
                                                        <p key={key} style={{ marginBottom: "5px", textAlign: 'left' }}>
                                                            {value as string}
                                                        </p>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* WHY CHOOSE US */}
                        {title === "Why Choose Us" && Array.isArray(portFolio) && (
                            <div>
                                {portFolio.map((item, index) => (
                                    <div key={index}>
                                        {/* Paragraph */}
                                        <p
                                            className="text-white mb-3"
                                            style={{
                                                fontSize: "16px",
                                                lineHeight: "1.6",
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.para}
                                        </p>

                                        {/* Cards */}
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(2,1fr)",
                                                gap: "12px",
                                            }}
                                        >
                                            {item.cat?.map((cat: any, i: number) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        background: "rgba(255,255,255,.12)",
                                                        backdropFilter: "blur(5px)",
                                                        border: "1px solid rgba(255,255,255,.15)",
                                                        borderRadius: "10px",
                                                        padding: "12px",
                                                    }}
                                                >
                                                    <h5
                                                        style={{
                                                            color: "#fff",
                                                            fontSize: "18px",
                                                            marginBottom: "8px",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {cat.catTile}
                                                    </h5>

                                                    <p
                                                        style={{
                                                            color: "#fff",
                                                            fontSize: "14px",
                                                            margin: 0,
                                                            lineHeight: "1.5",
                                                        }}
                                                    >
                                                        {cat.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* <div className="px-portfolio-category">
                    {categories.map((cat) => (
                        <span key={`${id}-${cat}`} style={{ marginLeft: "4px" }}>{cat}</span>
                    ))}
                </div>
                <div className="px-portfolio-category portfolio-meta">
                    <span>{year}</span>
                </div> */}
                <div className="px-portfolio-content portfolio-bottom-title">
                    <h2 className="px-portfolio-title">{title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioCard;
