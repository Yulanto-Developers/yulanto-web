"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealText() {
    const ref = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });

    const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <h4 ref={ref} className="px-about-title reveal-heading">

            {/* Gray Text */}
            <span className="reveal-gray">
                <span className="blue">
                    We are a digital studio
                </span>{" "}
                specializing <br />
                in website development, SEO, <br />
                and marketing.
            </span>

            {/* Animated Color Text */}
            <motion.span
                className="reveal-color blue"
                style={{
                    clipPath: useTransform(
                        progress,
                        [0, 100],
                        [
                            "inset(0 100% 0 0)",
                            "inset(0 0% 0 0)"
                        ]
                    )
                }}
            >
                <span className="blue">
                    We are a digital studio
                </span>{" "}
                specializing <br />
                in website development, SEO, <br />
                and marketing.
            </motion.span>

        </h4>
    );
}