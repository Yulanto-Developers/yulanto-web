import DigitalStudioContactForm from "@/components/form/DigitalStudioContactForm";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const DigitalStudioContact = () => {
    return (
        <div className="bf-contact-area fix p-relative z-index-4 pt-160 pb-130 bg-position"
            style={{ backgroundImage: "url(/assets/img/update/contact/bg.jpg)" }}>
            <div className="container container-1350">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="bf-contact-form mb-30">
                            <span className="bf-contact-subtitle">Pixora@</span>
                            <h3 className="bf-contact-title mb-25">Leave a reply</h3>
                            <DigitalStudioContactForm />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bf-contact-content ml-110 mb-30">
                            <h2 className="bf-contact-content-title mb-35">Let&apos;s talk</h2>
                            <p className="bf-contact-content-dec"><span>Tell us about your project</span>—whether<br />
                                it&apos;s a website, SEO, or marketing.</p>
                            <div className="bf-contact-condition-wrap">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="bf-contact-condition mb-20">
                                            <h4 className="mb-15">Quick response</h4>
                                            <p>If you&apos;re ready create & collaborate
                                                we&apos;d love to hear from you.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bf-contact-condition mb-20">
                                            <h4 className="mb-15">Clear next steps</h4>
                                            <p>If you&apos;re ready create & collaborate
                                                we&apos;d love to hear from you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bf-contact-author mt-30">
                                <div className="bf-contact-author-thumb">
                                    <Image className="img-fluid" width={160} height={178} src="/assets/img/update/contact/thumb.jpg" alt="thumb image" />
                                </div>
                                <div className="bf-contact-author-info">
                                    <h6>Team lead</h6>
                                    <span className="d-block mb-15">at Pixora@</span>
                                    <h4 className="mb-15">Belal Mahmud</h4>
                                    <SmartLink href="/contact-me" className="tp-btn d-inline-flex align-items-center justify-content-center">
                                        <span>
                                            <span className="text-1">Let&apos;s Talk</span>
                                            <span className="text-2">Let&apos;s Talk</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioContact;