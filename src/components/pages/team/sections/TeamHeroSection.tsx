import Image from "next/image";

const TeamHeroSection = () => {
    return (
        <div className="in-team-hero-area pt-150 pb-120">
            <div className="container container-1550">
                <div className="col-xl-9">
                    <div className="in-team-hero-content">
                        <span className="px-section-subtitle mb-30">OUR TEAM</span>
                        <h2 className="in-team-hero-title">Our <span>Creative</span> <br />
                            <Image width={140} height={140} src="/assets/img/team/circle-img.png" alt="circle image" /> Team members.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamHeroSection;