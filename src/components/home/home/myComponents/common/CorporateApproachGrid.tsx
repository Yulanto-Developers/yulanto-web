"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
    AnimatePresence,
    motion,
} from "motion/react";

import "./corporate-approach-grid.css";

interface CorporateApproachItem {
    id: number;
    category: string;
    title: string;
    description: string;
    image: StaticImageData;
    size: "large" | "small";
}

interface CorporateApproachGridProps {
    items: CorporateApproachItem[];
}

function CorporateApproachGrid({
    items,
}: CorporateApproachGridProps) {
    const [selectedItem, setSelectedItem] =
        useState<CorporateApproachItem | null>(null);

    return (
        <>
            <section className="corporate-approach-section">
                <div className="container">
                    {/* ==============================
                        GRID
                    ============================== */}

                    <div className="corporate-approach-grid">

                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`approach-card ${item.size === "large"
                                    ? "approach-card-large"
                                    : "approach-card-small"
                                    }`}
                                layoutId={`approach-card-${item.id}`}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                onClick={() =>
                                    setSelectedItem(item)
                                }
                            >

                                {/* IMAGE */}

                                <div className="approach-image-wrapper">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="approach-image"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                </div>


                                {/* DARK OVERLAY */}

                                <div className="approach-overlay" />


                                {/* CARD CONTENT */}

                                <div className="approach-card-content">

                                    <span className="approach-category text-tenor">
                                        {item.category}
                                    </span>

                                    <h3 className="text-tenor">
                                        {item.title}
                                    </h3>

                                    <span className="approach-view text-figtree">
                                        View Details
                                    </span>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =================================================
                MODAL / EXPANDED CARD
            ================================================= */}

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="approach-modal-backdrop"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={() =>
                            setSelectedItem(null)
                        }
                    >

                        <motion.div
                            className="approach-modal"
                            layoutId={`approach-card-${selectedItem.id}`}
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >

                            {/* CLOSE BUTTON */}

                            <button
                                type="button"
                                className="approach-modal-close"
                                onClick={() =>
                                    setSelectedItem(null)
                                }
                                aria-label="Close"
                            >
                                ×
                            </button>


                            {/* MODAL IMAGE */}

                            <div className="approach-modal-image">

                                <Image
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    fill
                                    priority
                                    className="approach-modal-img"
                                    sizes="(max-width: 768px) 100vw, 700px"
                                />

                            </div>


                            {/* MODAL CONTENT */}

                            <motion.div
                                className="approach-modal-content"
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.35,
                                }}
                            >

                                {/* <span className="approach-modal-category">
                                    {selectedItem.category}
                                </span> */}

                                {/* <h2>
                                    {selectedItem.title}
                                </h2> */}

                                <p>
                                    {selectedItem.description}
                                </p>

                            </motion.div>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default CorporateApproachGrid;