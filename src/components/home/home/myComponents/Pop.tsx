"use client";

import { useState } from "react";
import { useQuoteModal } from "./Content/QuoteContext";

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

    if (!open) return null;

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
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
                        <div className="floating-input">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                placeholder=" "
                                onChange={handleChange}
                                onBlur={handleNameBlur}
                                required
                            />
                            <label htmlFor="name">Enter Your Name</label>
                        </div>

                        {/* Revealed Form Section */}
                        {showRestForm && (
                            <div className="quote-rest-form">
                                <h4 className="welcome-text">
                                    {getGreeting()}, <span>{formData.name}</span> 👋
                                </h4>

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
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        placeholder=" "
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>

                                <div className="floating-input">
                                    <input
                                        type="text"
                                        id="lookingFor"
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        placeholder=" "
                                        onChange={handleChange}
                                    />
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
                        <div className="badge text-tenor">Partner with us</div>
                        <h2>Transform your digital presence.</h2>
                        <p className="text-figtree">Fill out the form and our team will get back to you within 24 hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}