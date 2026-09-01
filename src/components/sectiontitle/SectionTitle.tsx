// components/SectionTitle.tsx
'use client';

import React from 'react';
import '@/assets/css/textAnimations.css';

interface SectionTitleProps {
    subtitle?: string;
    titleFirst: string;
    titleSecond: string;
    description?: string;
    className?: string;
    animated?: boolean;
    animationType?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'text-reveal' | 'text-reveal-lines';
    delay?: string | number;
    triggerOnce?: boolean;
}

const SectionTitle = ({
    subtitle,
    titleFirst,
    titleSecond,
    description,
    className = "",
    animated = true,
    animationType = 'fade-up',
    delay = 400,
    triggerOnce = true,
}: SectionTitleProps) => {
    // Convert string delay to number if needed
    const getDelay = (delayValue: string | number): number => {
        if (typeof delayValue === 'number') return delayValue;
        const delayMap: Record<string, number> = {
            'delay-1': 100, 'delay-2': 200, 'delay-3': 300,
            'delay-4': 400, 'delay-5': 500, 'delay-6': 600,
            'delay-7': 700, 'delay-8': 800, 'delay-9': 900,
            'delay-10': 1000,
        };
        return delayMap[delayValue] || 400;
    };

    const delayMs = getDelay(delay);

    return (
        <div 
            className={`px-project-area pt-3 ${className}`}
            data-aos={animated ? animationType : undefined}
            data-aos-delay={delayMs}
            data-aos-once={triggerOnce}
        >
            <div className="container">
                <div className="px-project-title-wrap">
                    <div className="row">
                        <div className="col-xl-3">
                            <span 
                                className={`px-section-subtitle pt-40 blink-ball`}
                                data-aos={animated ? animationType : undefined}
                                data-aos-delay={delayMs}
                            >
                                {subtitle}
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 
                                    className={`px-about-title text-effect words chars splittin`}
                                    data-aos={animated ? animationType : undefined}
                                    data-aos-delay={delayMs + 100}
                                >
                                    <span className="text-blue-about"> {titleFirst} </span> {" "}
                                    <span> {titleSecond} </span>
                                </h4>

                                {description && (
                                    <p 
                                        className="mt-3"
                                        data-aos={animated ? animationType : undefined}
                                        data-aos-delay={delayMs + 200}
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;