"use client";

import React, { useState } from "react";

interface UIStep {
    stepNumber: string;
    title: string;
    description: string;
    imageSrc: string;
    icon: React.ElementType;
}

interface UIStepsProps {
    steps: UIStep[];
}

const UISteps = ({ steps }: UIStepsProps) => {
    const [activeStep, setActiveStep] = useState(0);

    if (!steps || steps.length === 0) {
        return null;
    }

    const leftSteps = steps.slice(0, 3);
    const rightSteps = steps.slice(3, 6);

    const active = steps[activeStep];

    return (
        <section className="ui-steps-section">
            <div className="container">

                <div className="ui-steps-wrapper">

                    {/* =========================================
                        BACKGROUND FRAME
                    ========================================= */}

                    <div className="ui-process-frame" />


                    {/* =========================================
                        LEFT SIDE
                    ========================================= */}

                    <div className="ui-steps-column ui-steps-left">

                        {leftSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <button
                                    key={step.stepNumber}
                                    type="button"
                                    className={`ui-step-card ui-left-step-${index + 1} ${
                                        activeStep === index
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveStep(index)}
                                >

                                    <span className="ui-step-icon">
                                        <Icon />
                                    </span>

                                    <span className="ui-step-title text-tenor">
                                        {step.title}
                                    </span>

                                    {/* Connector */}
                                    <span className="ui-step-connector">
                                        <span className="ui-connector-horizontal" />
                                        <span className="ui-connector-vertical" />
                                        <span className="ui-connector-horizontal-center" />
                                        <span className="ui-connector-dot" />
                                    </span>

                                </button>
                            );
                        })}

                    </div>


                    {/* =========================================
                        CENTER
                    ========================================= */}

                    <div className="ui-steps-center">

                        <div className="ui-center-card">

                            <div className="ui-center-image">

                                <img
                                    key={active.imageSrc}
                                    src={active.imageSrc}
                                    alt={active.title}
                                />

                            </div>


                            <div className="ui-center-content">

                                <span className="ui-center-number">
                                    {active.stepNumber}
                                </span>

                                <h3 className="text-tenor">
                                    {active.title}
                                </h3>

                                <p>
                                    {active.description}
                                </p>

                                <div className="ui-center-progress" />

                            </div>

                        </div>

                    </div>


                    {/* =========================================
                        RIGHT SIDE
                    ========================================= */}

                    <div className="ui-steps-column ui-steps-right">

                        {rightSteps.map((step, index) => {
                            const actualIndex = index + 3;

                            const Icon = step.icon;

                            return (
                                <button
                                    key={step.stepNumber}
                                    type="button"
                                    className={`ui-step-card ui-right-step-${index + 1} ${
                                        activeStep === actualIndex
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveStep(actualIndex)
                                    }
                                >

                                    <span className="ui-step-icon">
                                        <Icon />
                                    </span>

                                    <span className="ui-step-title text-tenor">
                                        {step.title}
                                    </span>


                                    {/* Connector */}

                                    <span className="ui-step-connector">
                                        <span className="ui-connector-horizontal" />
                                        <span className="ui-connector-vertical" />
                                        <span className="ui-connector-horizontal-center" />
                                        <span className="ui-connector-dot" />
                                    </span>

                                </button>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default UISteps;