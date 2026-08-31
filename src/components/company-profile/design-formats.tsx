"use client"

import React, { useEffect } from "react"
// Ensure FontAwesome CSS/JS is imported in your main layout or app file, or import the CSS here:
// import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos"
import "aos/dist/aos.css"

interface CardContent {
    title: string
    description: string
    iconClass: string
}

const cardContents: CardContent[] = [
    {
        title: "Bi-Fold Brochure",
        description:
            "A bi-fold brochure is folded once to create four panels. It is a simple and professional option for presenting company information, products, services, and promotional messages.",
        iconClass: "fa-solid fa-book-open",
    },
    {
        title: "Tri-Fold Brochure",
        description:
            "A tri-fold brochure provides six panels and offers more space for organizing detailed information. It is widely used for company profiles, service presentations, product promotions, and marketing campaigns.",
        iconClass: "fa-solid fa-scroll",
    },
    {
        title: "Gate-Fold Brochure",
        description:
            "A gate-fold brochure creates an impressive opening experience by folding the side panels toward the center. It is ideal for premium brands, presentations, product launches, and campaigns that require a visually striking design.",
        iconClass: "fa-solid fa-door-open",
    },
    {
        title: "Single-Fold Brochure",
        description:
            "A single-fold brochure provides a straightforward layout with two main sections. It is suitable for announcements, service information, company introductions, and simple promotional communication.",
        iconClass: "fa-solid fa-file-lines",
    },
    {
        title: "Z-Fold Brochure",
        description:
            "A Z-fold brochure uses a zigzag folding pattern to create multiple connected panels. It provides an engaging way to present information sequentially and is suitable for storytelling, product details, and service explanations.",
        iconClass: "fa-solid fa-layer-group",
    },
]

interface PlusCardProps {
    style?: React.CSSProperties
    title: string
    description: string
    iconClass: string
    delay?: number
}

const PlusCard: React.FC<PlusCardProps> = ({
    style = {},
    title,
    description,
    iconClass,
    delay = 0,
}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-duration="800"
            style={{
                position: "relative",
                border: "1px dashed #a1a1aa",
                borderRadius: "8px",
                padding: "24px",
                backgroundColor: "#ffffff",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ...style,
            }}
        >
            <CornerPlusIcons />
            <div style={{ position: "relative", zIndex: 10 }}>
                <h4 className="px-about-title mb-2 d-flex align-items-center gap-2">
                    <i className={`${iconClass} text-blue-about`} style={{ fontSize: "18px" }}></i>
                    <span className="text-blue-about" style={{ fontSize: "20px" }}>
                        {title}
                    </span>
                </h4>
                <p
                    className="text-figtree text-black mt-2"
                    style={{ fontSize: "15px !important" }}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

const CornerPlusIcons = () => (
    <>
        <i
            className="fa-solid fa-plus"
            style={{
                position: "absolute",
                top: "-8px",
                left: "-8px",
                fontSize: "14px",
                color: "#000000",
                backgroundColor: "#ffffff",
                lineHeight: "1",
            }}
        />
        <i
            className="fa-solid fa-plus"
            style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                fontSize: "14px",
                color: "#000000",
                backgroundColor: "#ffffff",
                lineHeight: "1",
            }}
        />
        <i
            className="fa-solid fa-plus"
            style={{
                position: "absolute",
                bottom: "-8px",
                left: "-8px",
                fontSize: "14px",
                color: "#000000",
                backgroundColor: "#ffffff",
                lineHeight: "1",
            }}
        />
        <i
            className="fa-solid fa-plus"
            style={{
                position: "absolute",
                bottom: "-8px",
                right: "-8px",
                fontSize: "14px",
                color: "#000000",
                backgroundColor: "#ffffff",
                lineHeight: "1",
            }}
        />
    </>
)

export default function RuixenBentoCards() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        })
    }, [])

    return (
        <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
            <div
                className="container container-1550"
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
            >
                {/* Header with AOS animation */}
                <div className="row align-items-center mb-4">
                    <div className="col-xl-12">
                        <div
                            className="px-project-title-box"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Our Brochure{" "}
                                </span>
                                Design Formats
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                As a professional graphic design company in
                                Chennai, we create brochures in different
                                formats based on your content, audience, and
                                marketing purpose.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid with staggered AOS animation on cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "16px",
                        gridAutoRows: "auto",
                    }}
                >
                    {cardContents.map((card, index) => (
                        <PlusCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            iconClass={card.iconClass}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}