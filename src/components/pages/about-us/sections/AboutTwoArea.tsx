import { SmartLink } from "@/components/common";

const AboutTwoArea = () => {
    return (
        <div className="px-inner-about-1-style pt-120 pb-80">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="px-inner-about-1-top mb-70 px-fade-anim">
                            <p>
                                Pixora Design Agency delivers{" "}
                                <span>
                                    creative, innovative, and tailored design solutions.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="px-inner-about-1-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/pixora/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="px-inner-about-1-content">
                            <div className="px-fade-anim">
                                <p className="mb-20">
                                    Our approach is simple: we focus on
                                    functionality, speed, and clarity, ensuring that
                                    every project serves aclear purpose without
                                    unnecessary complexity.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <p className="fw-400 mb-40">
                                    Our approach is all about understanding your needs & bringing
                                    your ideas to life without complexity. We thrive turning imaginative
                                    concepts into user friendly digital solutions. Whether it&apos;s a sleek website,
                                    a user-friendly app or a memorable brand identity, we focus on
                                    creating designs that not only.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-btn-black" href="/portfolio-1">Portfolio</SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwoArea;