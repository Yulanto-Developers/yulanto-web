"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = [
  "We", "are", "a", "comprehensive", "company", "that", "provides", "a",
  "wide", "range", "of", "website", "creation", "in", "Chennai.",
  "Yulanto", "web", "creations", "is", "a", "reputable", "web", "design",
  "company", "based", "in", "Chennai,", "known", "for", "its",
  "professionalism,", "uniqueness", "and", "exceptional", "creativity",
  "since", "2015."
];

export default function ScrollRevealParagraph() {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  return (
    <p ref={ref} className="scroll-paragraph">
      {text.map((word, i) => {
        const start = i / text.length;
        const end = start + 0.08;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#b5b5b5", "#000000"]
        );

        const isBrand =
          word === "Yulanto" ||
          word === "web" ||
          word === "creations";

        return (
          <motion.span
            key={i}
            style={{
              color: isBrand
                ? useTransform(
                    scrollYProgress,
                    [start, end],
                    ["#9bb7ca", "#053456"]
                  )
                : color,
            }}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </p>
  );
}