import Image from "next/image";

const ContactMeTopIntro = () => {
    return (
        <div className="in-team-hero-area px-contact-me-style pt-150 pb-100">
            <div className="container container-1550">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="in-team-hero-content">
                            <span className="px-section-subtitle mb-30">CONTACT ME</span>
                            <h2 className="in-team-hero-title">Let's <span>discuss</span> <br />
                                <Image width={140} height={140} src="/assets/img/team/circle-img.png" alt="circle image" /> your project!</h2>
                            <p>
                                Let's start a conversation! fill out our <br />
                                contact form and we&apos;ll get back to you as <br />
                                soon as possible
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactMeTopIntro;