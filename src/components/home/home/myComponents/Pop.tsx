"use client";

import { useState } from "react";
import { useQuoteModal } from "./Content/QuoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { socialLinks } from "@/data/footer-data";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    const [phone, setPhone] = useState("");

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

    const handleNameBlur = () => {
        if (formData.name.trim() !== "") {
            setShowRestForm(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
    >
        <FontAwesomeIcon icon={faArrowRight} />
    </button>

    {!showRestForm  && (
        <p className="name-helper">
            Click the arrow button to continue.
        </p>
    )}
</div>

                       
                        {showRestForm && (
                            <div className="quote-rest-form">
                                <h4 className="welcome-text">
                                    {getGreeting()}, <span>{formData.name}</span> 👋
                                </h4>

                              

                                <div className="floating-input phone-input-wrapper">
    <PhoneInput
        country="in"
    //     onlyCountries={[
    //         "in",
    //         "us",
    //         "uk",
    //         "ae",
    //         "ca",
    //         "au",
    //         "nz",
    //         "my",
    //         "sg",
    //         "uae",
    //     ]
    // }
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
                                        <option value="">Select an option</option>
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

                                <button type="submit" className="submit-btn">
                                    Submit Request
                                </button>
                            </div>
                        )}
                    </form>
                </div>

                {/* Right Side: Blue Accent Section (Ready for future content) */}
               
                <div className="quote-modal-right">
    
 <div className="blue-section-content">
        <div className="contact-info py-10">
{
                   showRestForm && (
            <>
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

                {/* <div className="contact-card address-card">
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="contact-details">
                        <span className="text-figtree">Office Address</span>
                        <p>
                            First Floor, F3, #4/608, VOC St,<br />
                            Near Turyaa Hotel, OMR,<br />
                            Kottivakkam, Chennai,<br />
                            Tamil Nadu 600096
                        </p>
                    </div>
                </div> */}
                <p className="text-tenor mb-0">Follow Us</p>
                <div className="social-links mt-5">
                    {
                        socialLinks.map((item:any, index:number) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label={item.label}
                            >
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </>
          )
                }
        </div>
    </div>
                  

    <div className="blue-section-content">
        <div className="badge text-tenor">Let's Get Started</div>
        <h2 className="text-tenor text-white">
            Your Digital Success Starts Here
        </h2>
        <p className="text-figtree">
            Tell us about your project or business requirements. Fill out the
            form, and our team will contact you within 24 hours.
        </p>
        <p className="text-figtree small-desc">
            🔒 Your information is secure and confidential.
        </p>
    </div>
</div>
            </div>
        </div>
    );
}