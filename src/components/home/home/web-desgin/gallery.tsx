"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Direction = "left" | "right";

export interface GalleryImage {
    id: number | string;
    src: string;
    alt?: string;
    x: number;
    y: number;
    order: number;
    zIndex: number;
    direction?: Direction;
}

interface PhotoGalleryProps {
    images: GalleryImage[];
    animationDelay?: number;
}

export const PhotoGallery = ({
    images,
    animationDelay = 0.2,
}: PhotoGalleryProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const visibilityTimer = setTimeout(() => {
            setIsVisible(true);
        }, animationDelay * 1000);

        const animationTimer = setTimeout(() => {
            setIsLoaded(true);
        }, (animationDelay + 0.4) * 1000);

        return () => {
            clearTimeout(visibilityTimer);
            clearTimeout(animationTimer);
        };
    }, [animationDelay]);

    return (
        <div className="startup-gallery-section">
            <motion.div
                className="startup-gallery-animation"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <div className="startup-gallery-center">
                    {[...images]
                        .sort((a, b) => b.zIndex - a.zIndex)
                        .map((image) => (
                            <motion.div
                                key={image.id}
                                className="startup-gallery-photo"
                                style={{
                                    zIndex: image.zIndex,
                                }}
                                initial={{
                                    x: 0,
                                    y: 0,
                                    scale: 0.9,
                                    rotate: 0,
                                }}
                                animate={
                                    isLoaded
                                        ? {
                                              x: image.x,
                                              y: image.y,
                                              scale: 1,
                                              rotate:
                                                  image.direction === "left"
                                                      ? -2
                                                      : 2,
                                          }
                                        : {
                                              x: 0,
                                              y: 0,
                                              scale: 0.9,
                                              rotate: 0,
                                          }
                                }
                                transition={{
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 12,
                                    mass: 1,
                                    delay: image.order * 0.15,
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    rotate:
                                        image.direction === "left"
                                            ? -4
                                            : 4,
                                    zIndex: 999,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}
                            >
                                <div className="startup-gallery-image-wrapper">
                                    <Image
                                        src={image.src}
                                        alt={
                                            image.alt ??
                                            "Website design"
                                        }
                                        fill
                                        sizes="220px"
                                        className="startup-gallery-image"
                                        draggable={false}
                                    />
                                </div>
                            </motion.div>
                        ))}
                </div>
            </motion.div>
        </div>
    );
};