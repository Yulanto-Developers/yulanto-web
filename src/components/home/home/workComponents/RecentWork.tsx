"use client";

import { useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import Image1 from "@/assets/img/sample/gallery/img- (1).jpg";
import Image2 from "@/assets/img/sample/gallery/img- (2).jpg";
import Image3 from "@/assets/img/sample/gallery/img- (3).jpg";
import Link from "next/link";

export default function RecentProject() {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardObj = [
        {
            title: "Naturographers",
            subTitle: "Tour Booking Platform",
            category: "Web Development",
            // topBarIcon: "dot",
            image: Image1,
            description:
                "Discover our most recent accomplishments—a demonstration of our state-of-the-art websites.",
            location: 'Chennai - India',
            webDate: 'Jan-2026',
            icons: [
                'Html', 'Css', 'Boostrap', 'Php', 'React js', 'Next Js', 'Node JS'
            ], links: 'https://yulanto.com/latest-works'
        },
        {
            title: "In bound",
            subTitle: "Brand Identity",
            category: "UI/UX Design",
            topBarLabel: "Reliable",
            // topBarIcon: "dot",
            image: Image2,
            description:
                "Specialized brand identity design focused on modern visual storytelling.",
            location: 'Chennai - India',
            webDate: 'Jan-2026',
            icons: [
                'Html', 'Css', 'Boostrap', 'Php', 'React js', 'Next Js', 'Node JS'
            ],
            links: 'https://yulanto.com/latest-works'
        },
        {
            title: "Core",
            subTitle: "Mobile Experience",
            category: "App Development",
            topBarLabel: "Scalable",
            // topBarIcon: "dot",
            image: Image3,
            description:
                "End-to-end mobile application architecture built for seamless performance.",
            location: 'Chennai - India',
            webDate: 'Jan - 2026',
            icons: [
                'Html', 'Css', 'Boostrap', 'Php', 'React js', 'Next Js', 'Node JS'
            ],
            links: 'https://yulanto.com/latest-works'
        },
    ];

    const activeCard = cardObj[activeIndex] || cardObj[0];

    return (
        <section className="py-5 overflow-hidden position-relative">
            <style>{`
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInText 0.35s ease-out forwards;
        }
      `}</style>

            <div className="container">
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-lg-12 col-md-10">
                        <h2 className="display-5 text-tenor fw-bold mb-3 text-dark">
                            Featured Work & Recent Projects
                        </h2>
                        <p className="text-muted text-figtree leading-relaxed fs-5">
                            Discover our most recent accomplishments, a demonstration of our steadfast
                            commitment to originality and advancement. From state-of-the-art websites that
                            flawlessly integrate style and functionality to captivating logos that
                            encapsulate the core of your brand, every undertaking showcases our
                            determination to surpassing anticipations.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Left Details Panel */}
                        <div className="col-lg-4 col-md-5">
                            <div key={activeIndex} className="pe-lg-3">
                                {/* <span className="badge bg-primary text-white rounded-pill px-3 py-2 mb-3 fw-normal small d-inline-block">
                                    {activeCard.category}
                                </span> */}
                                <h3 className="h3 fw-bold mb-1 text-tenor text-dark">
                                    {activeCard.title}
                                </h3>
                                <h5 className="h6 text-muted text-figtree fw-semibold mb-3">
                                    {activeCard.subTitle}
                                </h5>
                                <p className="text-secondary mb-4 text-figtree text-left">
                                    {activeCard.description}
                                </p>
                                <div className="d-flex flex-wrap mb-3" aria-hidden>
                                    {activeCard.icons.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="badge bg-light text-figtree border text-dark me-2 mb-2 px-2 py-1"
                                            style={{ fontSize: 12 }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <Link href={activeCard.links ?? "#"} className="fd-btn">
                                    <span className="fd-btn-text text-tenor">Visit Website</span>
                                    <i className="fa-solid fa-arrow-right fd-btn-icon"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Right CardSwap Section */}
                        <div className="col-lg-8 col-md-7">
                            <div
                                className="w-100 position-relative d-flex justify-content-center align-items-center"
                                style={{ height: "600px" }}
                            >
                                <CardSwap
                                    width={880}
                                    height={450}
                                    cardDistance={50}
                                    verticalDistance={60}
                                    delay={5000}
                                    onSwap={(index: number) => setActiveIndex(index)}
                                >
                                    {cardObj.map((item, index) => (
                                        <Card
                                            key={index}
                                            style={{
                                                backgroundImage: `url("${item.image.src}")`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: "12px",
                                            }}
                                        >
                                            {/* Top Bar Header */}
                                            <div className="d-flex justify-content-between align-items-center card-top-bar">
                                                <div className="card-top-bars">
                                                    <span className="top-bar-dot" />

                                                    <span className="top-bar-title text-tenor">{item.title}</span>
                                                </div>
                                                <span className=" text-tenor text-white">{item.webDate}</span>
                                            </div>

                                            {/* Bottom Card Content */}
                                            <div className="card-swap-content">
                                                <h3 className="text-tenor">{item.title}</h3>
                                                <p className="text-figtree fs-6 d-flex justify-content-start align-items-center gap-2 "><i className="fa-solid fa-location-dot"></i>{item.location}</p>
                                            </div>
                                        </Card>
                                    ))}
                                </CardSwap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}