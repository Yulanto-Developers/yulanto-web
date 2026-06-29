import Image from "next/image";

const ABOUT_IMAGES = [
    "/assets/img/about/about-me/about-1.jpg",
    "/assets/img/about/about-me/about-2.jpg",
    "/assets/img/about/about-me/about-3.jpg",
];

const InlineImage = ({ src }: { src: string }) => (
    <span className="am-inline-img">
        <Image className="img-fluid" width={120} height={80} src={src} alt="about visual" />
    </span>
);

const AboutMeAbout = () => {
    return (
        <div className="am-about-area am-about-inner-ptb pt-70 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="am-about-content text-center px-fade-anim">
                            <p>
                                I'm <InlineImage src={ABOUT_IMAGES[0]} /> passionate about
                                creating seamless digital experiences, and I collaborate with
                                businesses and agencies <InlineImage src={ABOUT_IMAGES[1]} />{" "}
                                worldwide to bring their visions to life through innovative{" "}
                                <InlineImage src={ABOUT_IMAGES[2]} /> web solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeAbout;