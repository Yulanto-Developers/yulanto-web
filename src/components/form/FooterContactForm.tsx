"use client";
import { FooterSocialArrowIcon } from "@/svg/ArrowIcons";
import NiceSelect from "@/ui/NiceSelect";

const FooterContactForm = () => {
    return (
        <form method="POST">
            <div className="px-footer-3-input-box">
                <div className="row">

                    {/* Select */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-select mb-10">
                            <NiceSelect
                                className="nice-select px-select current"
                                defaultCurrent={0}
                                options={[
                                    { value: "Personal portfolio", text: "Personal portfolio" },
                                    { value: "Digital Agency", text: "Digital Agency" },
                                    { value: "Creative Agency", text: "Creative Agency" },
                                    { value: "New Added", text: "New Added" },
                                    { value: "It Solution", text: "It Solution" }
                                ]}
                                onChange={() => { }}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                            <input type="text" placeholder="Your name" />
                        </div>
                    </div>{" "}

                    {/* Email */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                            <input type="email" placeholder="Your email" />
                        </div>
                    </div>{" "}

                    {/* Message */}
                    <div className="col-xl-12">
                        <div className="px-footer-3-input mb-15 position-relative">
                            <input
                                type="text"
                                placeholder="How may I help you?"
                            />
                            <button
                                type="submit"
                                aria-label="Send contact message"    
                                className="px-footer-3-btn"
                            >
                                <span>
                                    <FooterSocialArrowIcon strokeColor="currentColor" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FooterContactForm;