"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
}

const AnimatedCounterTree = ({
    end,
    duration = 1,
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    const counterRef = useRef<HTMLSpanElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = counterRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated.current) return;

                hasAnimated.current = true;

                let start = 0;

                const totalFrames = Math.round(duration * 60);
                const increment = end / totalFrames;

                const counter = setInterval(() => {
                    start += increment;

                    if (start >= end) {
                        setCount(end);
                        clearInterval(counter);
                    } else {
                        setCount(Math.ceil(start));
                    }
                }, 1000 / 60);
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [end, duration]);

    return <span ref={counterRef}>{count}</span>;
};

export default AnimatedCounterTree;