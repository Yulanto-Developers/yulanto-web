import Image from "next/image";

const Hero = () => {
    return (
        <div className="px-about-2-area px-about-3-ptb pt-175 pb-30">
            <div className="container container-1750">
                <div className="row align-items-end">
                    <div className="col-xl-9">
                        <div className="px-about-2-title-box">
                            <h3 className="px-about-2-title fs-300">
                                We are <i>The Creative</i> <br />
                                <em>
                                    <Image width={200} height={200} src="/assets/img/gift-img/title-img-2.gif" alt="gif image" />
                                    design
                                </em> <br />
                                studio
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="px-about-2-subtitle-box p-relative text-end">
                            <Image
                                width={500}
                                height={300}
                                src="/assets/img/gift-img/title-img.gif"
                                alt="gif image"
                                className="px-about-3-gift-img img-fluid w-auto h-auto"
                            />
                            <span className="px-about-2-subtitle p-relative fs-130"><i></i>/ FROM <br /> London</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;