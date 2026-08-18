"use client";

import { useState, useEffect } from "react";
import { useQuoteModal } from "./Content/QuoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function QuoteModal() {
    const { open, closeModal } = useQuoteModal();
    const [showRestForm, setShowRestForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: "",
    });

    // Math Captcha States
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [userCaptcha, setUserCaptcha] = useState("");
    const [captchaStatus, setCaptchaStatus] = useState<"idle" | "correct" | "incorrect">("idle");

    // Generate random Math Captcha numbers
    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 9) + 1;
        const n2 = Math.floor(Math.random() * 9) + 1;
        setCaptcha({ num1: n1, num2: n2 });
        setUserCaptcha("");
        setCaptchaStatus("idle");
    };

    useEffect(() => {
        if (showRestForm) {
            generateCaptcha();
        }
    }, [showRestForm]);

    if (!open) return null;

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            phone: value,
        }));
    };

    // Live validation for Captcha input
    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUserCaptcha(val);

        if (val === "") {
            setCaptchaStatus("idle");
            return;
        }

        if (parseInt(val, 10) === captcha.num1 + captcha.num2) {
            setCaptchaStatus("correct");
        } else {
            setCaptchaStatus("incorrect");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (captchaStatus !== "correct") {
            setCaptchaStatus("incorrect");
            return;
        }

        console.log("Quote Request", formData);
        closeModal();
    };

    return (
        <div className="quote-modal-overlay" onClick={closeModal}>
            <div className="quote-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                    ✕
                </button>

                {/* Left Side: Dynamic Form */}
                <div className="quote-modal-left">
                    <div className="form-header">
                        <h3 className="text-tenor">Get a Free Quote</h3>
                        <p className="subheading text-figtree">Tell us a bit about yourself to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="quote-form">
                        {/* Name Input */}
                        <div className="floating-input name-input-wrapper">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                placeholder=" "
                                onChange={handleChange}
                                required
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && formData.name.trim() !== "") {
                                        e.preventDefault();
                                        setShowRestForm(true);
                                    }
                                }}
                            />

                            <label htmlFor="name">Enter Your Name</label>

                            <button
                                type="button"
                                className="name-next-btn"
                                onClick={() => {
                                    if (formData.name.trim() !== "") {
                                        setShowRestForm(true);
                                    }
                                }}
                                style={{
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    padding: "4px 12px",
                                    borderRadius: "6px"
                                }}
                            >
                                Enter
                            </button>
                        </div>

                        {showRestForm && (
                            <div className="quote-rest-form">
                                <h4 className="welcome-text">
                                    {getGreeting()}, <span>{formData.name}</span> 👋
                                </h4>

                                <div className="floating-input phone-input-wrapper">
                                    <PhoneInput
                                        country="in"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        enableSearch
                                        placeholder="Enter Phone Number"
                                        inputStyle={{
                                            width: "100%",
                                            height: "54px",
                                            borderRadius: "10px",
                                            border: "1px solid #ddd",
                                        }}
                                        buttonStyle={{
                                            borderTopLeftRadius: "10px",
                                            borderBottomLeftRadius: "10px",
                                        }}
                                    />
                                </div>

                                <div className="floating-input">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder=" "
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="email">Email Address</label>
                                </div>

                                <div className="floating-input">
                                    <select
                                        id="lookingFor"
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        onChange={handleChange}
                                        className={formData.lookingFor ? "" : "placeholder-select"}
                                    >
                                        <option value=""></option>
                                        <option value="Landing Page">Landing Page</option>
                                        <option value="Website Re-Design">Website Re-Design</option>
                                        <option value="Website Maintenance">Website Maintenance</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="CMS Development">CMS Development</option>
                                        <option value="Ecommerce">Ecommerce</option>
                                        <option value="Logo Design">Logo Design</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                        <option value="Google Ads">Google Ads</option>
                                    </select>
                                    <label htmlFor="lookingFor">Looking For</label>
                                </div>

                                <div className="floating-input">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        placeholder=" "
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="message">Message</label>
                                </div>

                                {/* Math Captcha Block */}
                                <div className="captcha-container" style={{ marginBottom: "10px" }}>
                                    <label
                                        htmlFor="mathCaptcha"
                                        style={{
                                            display: "block",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            color: "#334155",
                                            marginBottom: "6px"
                                        }}
                                    >
                                        Security Check: <span style={{ color: "#2563eb" }}>{captcha.num1} + {captcha.num2} = ?</span>
                                    </label>

                                    <div className="floating-input" style={{ marginBottom: "0" }}>
                                        <input
                                            type="number"
                                            id="mathCaptcha"
                                            name="mathCaptcha"
                                            value={userCaptcha}
                                            placeholder=" "
                                            onChange={handleCaptchaChange}
                                            required
                                            style={{
                                                borderColor:
                                                    captchaStatus === "correct"
                                                        ? "#22c55e"
                                                        : captchaStatus === "incorrect"
                                                            ? "#ef4444"
                                                            : undefined,
                                            }}
                                        />
                                        <label htmlFor="mathCaptcha">Enter Answer</label>
                                    </div>
                                </div>

                                {captchaStatus === "correct" && (
                                    <p className="verify">✓ Verified</p>
                                )}

                                {captchaStatus === "incorrect" && (
                                    <p className="incorrect">✕ Incorrect answer, please try again.</p>
                                )}

                                <button type="submit" className="submit-btn">
                                    Submit Request
                                </button>
                                🔒 Your information is secure and confidential.
                            </div>
                        )}
                    </form>
                </div>

                {/* Right Side: Blue Accent Section */}
                <div className="quote-modal-right">
                    <div className="blue-section-content">
                        <div className="contact-info py-4">
                            {showRestForm ? (
                                <>
                                    <div className="desktop-reach-us">
                                        <p className="text-tenor">Reach Us</p>
                                        <a href="mailto:info@yulanto.com" className="contact-card">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <p>info@yulanto.com</p>
                                        </a>

                                        <a href="tel:+919962157250" className="contact-card">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <p>+91 99621 57250</p>
                                        </a>
                                        <a
                                            href="https://maps.app.goo.gl/sHp8T3KXGXav9GuT9"
                                            target="_blank"
                                            className="contact-card"
                                        >
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <p>F3, #4/608, First Floor,<br /> VOC St, near Turyaa Hotel, Kottivakkam,<br /> OMR, Chennai, Tamil Nadu - 600041</p>
                                        </a>
                                    </div>

                                    {/* Mobile/Tablet View when rest of the form is active */}
                                    <div className="mobile-get-started d-block d-lg-none">
                                        <div className="badge text-tenor">Let's Get Started</div>
                                        <h2 className="text-tenor text-white mt-1">
                                            Your Digital Success Starts Here
                                        </h2>
                                        <p className="text-figtree text-white mt-2 opacity-75 d-md-block hidden">
                                            Tell us about your project or business requirements. Fill out the form, and our team will contact you within 24 hours.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                /* Mobile/Tablet View when initial name step is shown */
                                <div className="initial-get-started d-block d-lg-none">
                                    <div className="badge text-tenor">Let's Get Started</div>
                                    <h2 className="text-tenor text-white">
                                        Your Digital Success Starts Here
                                    </h2>
                                    {/* <p className="text-figtree text-white mt-2 opacity-75">
                                        Tell us about your project or business requirements. Fill out the form, and our team will contact you within 24 hours.
                                    </p> */}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop View Content */}
                    <div className="blue-section-content desktop-only-content d-none d-lg-block">
                        <div className="badge text-tenor">Let's Get Started</div>
                        <h2 className="text-tenor text-white mt-1">
                            Your Digital Success Starts Here
                        </h2>
                        <p className="text-figtree text-white mt-2 opacity-75">
                            Tell us about your project or business requirements. Fill out the form, and our team will contact you within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}