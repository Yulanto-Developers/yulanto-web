"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import CAStepItem from "../components/CAStepItem";

const STEPS = [
    {
        number: "01",
        title: "Discover \n And define",
        bg: "#FFCF68",
        desc: `We begin with deep 
listening understanding 
your vision`,
    },
    {
        number: "02",
        title: "Structure \n and Strategy",
        bg: "#FF6E4D",
        desc: `We analyze insights 
and build a clear 
strategic roadmap`,
    },
    {
        number: "03",
        title: "Design \n and Refine",
        bg: "#FFBAE3",
        desc: `We craft visuals and 
iterate to achieve 
perfection`,
    },
    {
        number: "04",
        title: "Deliver \n and Support",
        bg: "#A9E6FF",
        desc: `We launch your product 
and provide ongoing 
support`,
    },
];

const CreativeAgencyStep = ({ sectionSpacing = "" }) => {
    const isDarkTheme = useIsDarkRoute();
    const sectionBackground = isDarkTheme ? "#1C1D20" : "#F7F7F7";

    return (
        <div className={`px-step-area p-relative ${sectionSpacing}`}>

            {/* TOP SECTION */}
            <div
                className="px-step-item d-flex flex-column justify-content-end p-relative"
                style={{ backgroundColor: sectionBackground }}
            >
                <div className="px-step-video">
                    <video loop muted autoPlay playsInline>
                        <source
                            src="https://html.aqlova.com/videos/pixora/step-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="px-step-num-box">
                    <div className="px-step-num">
                        <span className="p-relative">Step</span>
                    </div>
                </div>

                <div className="container-fluid">
                    <div
                        className="px-step-bottom z-index-10"
                        style={{ backgroundColor: sectionBackground }}
                    >
                        <div className="row">
                            <div className="col-xl-8 col-lg-6">
                                <div className="px-step-bottom-text">
                                    <span>How we works</span>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="px-step-bottom-text">
                                    <span className="text-2">
                                        Crafting unique stories for brands
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STEP CARDS */}
            <div className="px-step-card-wrap mr-60">
                <div className="container-fluid">
                    <div className="row">
                        {STEPS.map((step) => (
                            <CAStepItem key={step.number}  {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyStep;