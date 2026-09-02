"use client";

import Image from "next/image";

interface ProcessStep {
    stepNumber: string;
    title: string;
    description: string;
    annotation: string;
    badgeColor: string;
    textColor: string;
    imageSrc: string[];
}

interface ProcessSectionProps {
    sectionTitle?: string;
    steps: ProcessStep[];
}

const ProcessSection = ({
    sectionTitle,
    steps,
}: ProcessSectionProps) => {
    return (
        <section className="">

            <div className="container">

                <div className="process-wrapper">

                    {steps.slice(0, 6).map((step, index) => {

                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                className={`process-box process-box-${index + 1}`}
                                key={index}
                            >

                                {/* Annotation */}
                                <div className="process-annotation">
                                    <span className="text-figtree">
                                        {step.annotation.replace(" ➔", "").replace("➔ ", "")}
                                    </span>

                                    <span
                                        className={`annotation-arrow ${isLeft
                                            ? "arrow-right"
                                            : "arrow-left"
                                            }`}
                                        style={{
                                            color: step.textColor,
                                        }}
                                    >
                                        {isLeft ? "→" : "←"}
                                    </span>
                                </div>

                                {/* Card */}
                                <div className="process-card">

                                    {/* Step number */}
                                    <span className="process-step text-figtree">
                                        {step.stepNumber}
                                    </span>

                                    {/* Image */}
                                    <div className="process-images">

                                        {step.imageSrc.map((image, imageIndex) => (
                                            <div
                                                className={`process-image process-image-${imageIndex + 1}`}
                                                key={imageIndex}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${step.title} ${imageIndex + 1}`}
                                                    fill
                                                    priority={index < 2}
                                                    sizes="180px"
                                                />
                                            </div>
                                        ))}

                                    </div>

                                    {/* Bottom content */}
                                    <div
                                        className="process-card-content"
                                        style={{
                                            backgroundColor: step.badgeColor,
                                        }}
                                    >

                                        <h3
                                            style={{
                                                color: step.textColor,
                                            }}
                                            className="text-tenor"
                                        >
                                            {step.title}
                                        </h3>

                                        <div className="process-divider" />

                                        <p className="text-figtree">
                                            {step.description}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default ProcessSection;