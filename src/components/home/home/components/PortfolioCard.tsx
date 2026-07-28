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
                        <div className="portfolio-hover-title px-35">
                            <h2 className="text-white text-tenor font-title-cls">{title}</h2>
                            <p className="text-figtree" style={{ fontSize: '17px', textAlign: 'justify' }}>{description}</p>

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
                                                className="text-figtree font-paragraph-cls"
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

                                                <span className="text-white fs-6"></span>

                                                <span className="text-white text-figtree fs-6 d-flex align-items-start">
                                                    <span className="text-nowrap">{item.key}</span>
                                                    <span className="mx-2">:</span>
                                                    <span>{item.text}</span>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
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
                                            className="fs-6 text-tenor"
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
                                                        <p key={key} className="text-figtree" style={{ marginBottom: "5px", textAlign: 'left' }}>
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
                                            className="text-white mb-3 text-figtree"
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
                                                        className="text-tenor"
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
                                                        className="text-figtree text-start"
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

                        {/* intative contents */}
                        {title === "Invest in Your Website – The Difference Between Cheap and Quality Web Design" &&
    Array.isArray(portFolio) && (
        <div>
            {/* Two Comparison Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: "20px",
                    marginBottom: "25px",
                }}
            >
                {portFolio.slice(0, 2).map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "rgba(255,255,255,.10)",
                            border: "1px solid rgba(255,255,255,.15)",
                            borderRadius: "12px",
                            padding: "18px",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <h4
                            className="text-tenor"
                            style={{
                                color: "#fff",
                                marginBottom: "15px",
                                textAlign: "center",
                            }}
                        >
                            {item.section}
                        </h4>

                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "20px",
                                color: "#fff",
                            }}
                            className="text-figtree"
                        >
                            {item.points.map((point: string, i: number) => (
                                <li
                                    key={i}
                                    style={{
                                        marginBottom: "10px",
                                        lineHeight: "1.6",
                                        fontSize: "15px",
                                    }}
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Investment Section */}
            <div
                style={{
                    background: "rgba(255,255,255,.08)",
                    borderLeft: "4px solid #f6b73c",
                    padding: "18px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                }}
            >
                <h4
                    className="text-tenor"
                    style={{ color: "#fff", marginBottom: "10px" }}
                >
                    {portFolio[2].section}
                </h4>

                <p
                    className="text-figtree"
                    style={{
                        color: "#fff",
                        margin: 0,
                        lineHeight: "1.7",
                        textAlign: "justify",
                    }}
                >
                    {portFolio[2].description}
                </p>
            </div>

            {/* Bottom Quote */}
            <div
                style={{
                    background: "#053456",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "18px",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "18px",
                }}
                className="text-tenor"
            >
                💡 {portFolio[3].description}
            </div>
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
