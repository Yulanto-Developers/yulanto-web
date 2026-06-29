import React from "react";

interface CAStepItemProps {
    bg: string;
    number: string;
    desc: string;
    title: string;
}

const CAStepItem: React.FC<CAStepItemProps> = ({ bg, number, desc, title }) => {
    return (
        <div
            className="offset-xxl-8 col-xxl-4 offset-xl-7 col-xl-5 col-lg-6"
        >
            <div
                className="px-step-card"
                style={{ backgroundColor: bg }}
            >
                <div className="px-step-card-badge">
                    <span>Step</span>
                </div>
                <div className="px-step-card-content text-end">
                    <span>{number}</span>
                    <p>
                        {desc.split("\n").map((line, i) => (
                            <React.Fragment key={`${line}-${i}`}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <h4 className="px-step-title">
                    {title.split("\n").map((line, i) => (
                        <span key={`${line}-${i}`}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h4>
            </div>
        </div>
    );
};

export default CAStepItem;