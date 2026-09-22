"use client";

import { useState, useEffect } from "react";
import { useQuoteModal } from "./Content/QuoteContext";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function QuoteModal() {
    const {
        open,
        closeModal,
        openModal,
        openType,
    } = useQuoteModal();

    /* =========================================
       FORM STATE
       ========================================= */

    const [showRestForm, setShowRestForm] =
        useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: "",
    });

    /* =========================================
       DND STATE
       ========================================= */

    const [dnd, setDnd] = useState(false);

    /* =========================================
       CAPTCHA STATE
       ========================================= */

    const [captcha, setCaptcha] = useState({
        num1: 0,
        num2: 0,
    });

    const [userCaptcha, setUserCaptcha] =
        useState("");

    const [captchaStatus, setCaptchaStatus] =
        useState<
            "idle" | "correct" | "incorrect"
        >("idle");

    /* =========================================
       MAIL REQUEST
       ========================================= */

    const mailRequest = async (
        data: typeof formData
    ) => {
        const response = await fetch(
            "/api/contact-mail",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify(data),
            }
        );

        let result;

        try {
            result = await response.json();
        } catch {
            throw new Error(
                "Invalid response from server."
            );
        }

        if (!response.ok) {
            console.error(
                "Contact API Error:",
                result
            );

            throw new Error(
                result?.message ||
                    result?.error ||
                    "Failed to send contact request."
            );
        }

        return result;
    };

    /* =========================================
       MAIL MUTATION
       ========================================= */

    const {
        mutate,
        isPending,
    } = useMutation({
        mutationFn: mailRequest,

        /* =====================================
           SUCCESS
           ===================================== */

        onSuccess: (data) => {
            console.log(
                "Mail sent successfully:",
                data
            );

            toast.success(
                data?.message ||
                    "Email sent successfully.",
                {
                    position: "top-right",
                    autoClose: 3000,
                }
            );

            closeModal();

            setShowRestForm(false);

            setFormData({
                name: "",
                email: "",
                phone: "",
                lookingFor: "",
                message: "",
            });

            setUserCaptcha("");

            setCaptchaStatus("idle");
        },

        /* =====================================
           ERROR
           ===================================== */

        onError: (error) => {
            console.error(
                "Mail Error:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send email. Please try again.",
                {
                    position: "top-right",
                    autoClose: 4000,
                }
            );
        },
    });

    /* =========================================
       GENERATE CAPTCHA
       ========================================= */

    const generateCaptcha = () => {
        const n1 =
            Math.floor(
                Math.random() * 9
            ) + 1;

        const n2 =
            Math.floor(
                Math.random() * 9
            ) + 1;

        setCaptcha({
            num1: n1,
            num2: n2,
        });

        setUserCaptcha("");

        setCaptchaStatus("idle");
    };

    /* =========================================
       GENERATE CAPTCHA WHEN FULL FORM OPENS
       ========================================= */

    useEffect(() => {
        if (showRestForm) {
            generateCaptcha();
        }
    }, [showRestForm]);

    /* =========================================
       LOAD DND + CHECK 2 HOUR EXPIRY
       ========================================= */

    useEffect(() => {
        const savedDnd =
            localStorage.getItem(
                "autopop_dnd"
            );

        const dndTime =
            localStorage.getItem(
                "autopop_dnd_time"
            );

        /*
         * DND IS ENABLED
         */

        if (
            savedDnd === "true" &&
            dndTime
        ) {
            const elapsedTime =
                Date.now() -
                Number(dndTime);

            const twoHours =
                2 *
                60 *
                60 *
                1000;

            /*
             * 2 HOURS COMPLETED
             */

            if (
                elapsedTime >=
                twoHours
            ) {
                localStorage.setItem(
                    "autopop_dnd",
                    "false"
                );

                localStorage.removeItem(
                    "autopop_dnd_time"
                );

                setDnd(false);
            }

            /*
             * STILL INSIDE 2 HOURS
             */

            else {
                setDnd(true);
            }
        }

        /*
         * DND IS NOT ENABLED
         */

        else {
            setDnd(false);
        }
    }, []);

    /* =========================================
       AUTO POPUP
       ========================================= */

    useEffect(() => {
        /*
         * CHECK DND STATUS
         */

        const checkDnd = () => {
            const currentDnd =
                localStorage.getItem(
                    "autopop_dnd"
                );

            const dndTime =
                localStorage.getItem(
                    "autopop_dnd_time"
                );

            /*
             * DND IS ACTIVE
             */

            if (
                currentDnd === "true" &&
                dndTime
            ) {
                const elapsedTime =
                    Date.now() -
                    Number(dndTime);

                const twoHours =
                    2 *
                    60 *
                    60 *
                    1000;

                /*
                 * DND EXPIRED
                 */

                if (
                    elapsedTime >=
                    twoHours
                ) {
                    localStorage.setItem(
                        "autopop_dnd",
                        "false"
                    );

                    localStorage.removeItem(
                        "autopop_dnd_time"
                    );

                    setDnd(false);

                    return false;
                }

                /*
                 * DND STILL ACTIVE
                 */

                return true;
            }

            return false;
        };

        /*
         * IF DND IS ACTIVE,
         * DON'T CREATE POPUP TIMER
         */

        if (checkDnd()) {
            return;
        }

        /*
         * AUTO POPUP AFTER 6 SECONDS
         */

        const timer = setTimeout(() => {
            /*
             * CHECK DND AGAIN
             * BEFORE OPENING
             */

            if (!checkDnd()) {
                openModal("auto");
            }
        }, 6000);

        /*
         * CLEANUP
         */

        return () => {
            clearTimeout(timer);
        };
    }, [openModal]);

    /* =========================================
       GREETING
       ========================================= */

    const getGreeting = () => {
        const hour =
            new Date().getHours();

        if (hour < 12) {
            return "Good Morning";
        }

        if (hour < 17) {
            return "Good Afternoon";
        }

        return "Good Evening";
    };

    /* =========================================
       HANDLE FORM CHANGE
       ========================================= */

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
                HTMLTextAreaElement |
                HTMLSelectElement
        >
    ) => {
        const {
            name,
            value,
        } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* =========================================
       PHONE CHANGE
       ========================================= */

    const handlePhoneChange = (
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            phone: value,
        }));
    };

    /* =========================================
       DND HANDLER
       ========================================= */

    const handleDndChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const checked =
            e.target.checked;

        setDnd(checked);

        /*
         * ENABLE DND
         */

        if (checked) {
            localStorage.setItem(
                "autopop_dnd",
                "true"
            );

            /*
             * SAVE EXACT TIME
             */

            localStorage.setItem(
                "autopop_dnd_time",
                Date.now().toString()
            );
        }

        /*
         * DISABLE DND
         */

        else {
            localStorage.setItem(
                "autopop_dnd",
                "false"
            );

            localStorage.removeItem(
                "autopop_dnd_time"
            );
        }
    };

    /* =========================================
       CAPTCHA CHANGE
       ========================================= */

    const handleCaptchaChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const val =
            e.target.value;

        setUserCaptcha(val);

        if (val === "") {
            setCaptchaStatus("idle");
            return;
        }

        if (
            parseInt(val, 10) ===
            captcha.num1 +
                captcha.num2
        ) {
            setCaptchaStatus(
                "correct"
            );
        } else {
            setCaptchaStatus(
                "incorrect"
            );
        }
    };

    /* =========================================
       FORM SUBMIT
       ========================================= */

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        /*
         * CAPTCHA VALIDATION
         */

        if (
            captchaStatus !==
            "correct"
        ) {
            setCaptchaStatus(
                "incorrect"
            );

            toast.error(
                "Please enter the correct security answer.",
                {
                    position: "top-right",
                    autoClose: 3000,
                }
            );

            return;
        }

        /*
         * SEND EMAIL
         */

        mutate(formData);
    };

    /* =========================================
       DON'T RENDER WHEN CLOSED
       ========================================= */

    if (!open) {
        return null;
    }

    /* =========================================
       UI
       ========================================= */

    return (
        <div
            className="quote-modal-overlay"
            onClick={closeModal}
        >
            <div
                className="quote-modal-container"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                {/* =====================================
                    CLOSE BUTTON
                ===================================== */}

                <button
                    className="close-btn"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {/* =====================================
                    LEFT SIDE
                ===================================== */}

                <div className="quote-modal-left">
                    <div className="form-header">
                        <h3 className="text-tenor">
                            Get a Free Quote
                        </h3>

                        <p className="subheading text-figtree">
                            Tell us a bit about yourself
                            to get started.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="quote-form"
                    >
                        {/* =================================
                            NAME
                        ================================= */}

                        <div className="floating-input name-input-wrapper">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={
                                    formData.name
                                }
                                placeholder=" "
                                onChange={
                                    handleChange
                                }
                                required
                                onKeyDown={(
                                    e
                                ) => {
                                    if (
                                        e.key ===
                                            "Enter" &&
                                        formData.name.trim() !==
                                            ""
                                    ) {
                                        e.preventDefault();

                                        setShowRestForm(
                                            true
                                        );
                                    }
                                }}
                            />

                            <label htmlFor="name">
                                Enter Your Name
                            </label>

                            <button
                                type="button"
                                className="name-next-btn"
                                onClick={() => {
                                    if (
                                        formData.name.trim() !==
                                        ""
                                    ) {
                                        setShowRestForm(
                                            true
                                        );
                                    }
                                }}
                                style={{
                                    fontSize:
                                        "13px",
                                    fontWeight:
                                        "600",
                                    padding:
                                        "4px 12px",
                                    borderRadius:
                                        "6px",
                                }}
                            >
                                Enter
                            </button>
                        </div>

                        {/* =================================
                            DND
                            ONLY AUTO POPUP
                        ================================= */}

                        {!showRestForm &&
                            openType ===
                                "auto" && (
                                <div
                                    style={{
                                        display:
                                            "flex",
                                        alignItems:
                                            "center",
                                        gap: "8px",
                                        marginTop:
                                            "10px",
                                        marginBottom:
                                            "12px",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        id="dnd"
                                        checked={
                                            dnd
                                        }
                                        onChange={
                                            handleDndChange
                                        }
                                        style={{
                                            width:
                                                "16px",
                                            height:
                                                "16px",
                                            margin: 0,
                                            cursor:
                                                "pointer",
                                        }}
                                    />

                                    <label
                                        htmlFor="dnd"
                                        style={{
                                            fontSize:
                                                "13px",
                                            color:
                                                "#475569",
                                            cursor:
                                                "pointer",
                                            margin: 0,
                                            userSelect:
                                                "none",
                                        }}
                                    >
                                        Don't Show
                                        Again
                                    </label>
                                </div>
                            )}

                        {/* =================================
                            REST OF FORM
                        ================================= */}

                        {showRestForm && (
                            <div className="quote-rest-form">
                                {/* Greeting */}

                                <h4 className="welcome-text">
                                    {getGreeting()}
                                    {", "}
                                    <span>
                                        {
                                            formData.name
                                        }
                                    </span>
                                    {" "}👋
                                </h4>

                                {/* =================================
                                    PHONE
                                ================================= */}

                                <div className="floating-input phone-input-wrapper">
                                    <PhoneInput
                                        country="in"
                                        value={
                                            formData.phone
                                        }
                                        onChange={
                                            handlePhoneChange
                                        }
                                        enableSearch
                                        placeholder="Enter Phone Number"
                                        inputStyle={{
                                            width:
                                                "100%",
                                            height:
                                                "54px",
                                            borderRadius:
                                                "10px",
                                            border:
                                                "1px solid #ddd",
                                        }}
                                        buttonStyle={{
                                            borderTopLeftRadius:
                                                "10px",
                                            borderBottomLeftRadius:
                                                "10px",
                                        }}
                                    />
                                </div>

                                {/* =================================
                                    EMAIL
                                ================================= */}

                                <div className="floating-input">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={
                                            formData.email
                                        }
                                        placeholder=" "
                                        onChange={
                                            handleChange
                                        }
                                        required
                                    />

                                    <label htmlFor="email">
                                        Email Address
                                    </label>
                                </div>

                                {/* =================================
                                    LOOKING FOR
                                ================================= */}

                                <div className="floating-input">
                                    <select
                                        id="lookingFor"
                                        name="lookingFor"
                                        value={
                                            formData.lookingFor
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className={
                                            formData.lookingFor
                                                ? ""
                                                : "placeholder-select"
                                        }
                                    >
                                        <option value="">
                                            Select Option
                                        </option>

                                        <option value="Landing Page">
                                            Landing Page
                                        </option>

                                        <option value="Website Re-Design">
                                            Website Re-Design
                                        </option>

                                        <option value="Website Maintenance">
                                            Website Maintenance
                                        </option>

                                        <option value="Web Development">
                                            Web Development
                                        </option>

                                        <option value="CMS Development">
                                            CMS Development
                                        </option>

                                        <option value="Ecommerce">
                                            Ecommerce
                                        </option>

                                        <option value="Logo Design">
                                            Logo Design
                                        </option>

                                        <option value="SEO">
                                            SEO
                                        </option>

                                        <option value="Social Media Marketing">
                                            Social Media Marketing
                                        </option>

                                        <option value="Google Ads">
                                            Google Ads
                                        </option>
                                    </select>

                                    <label htmlFor="lookingFor">
                                        Looking For
                                    </label>
                                </div>

                                {/* =================================
                                    MESSAGE
                                ================================= */}

                                <div className="floating-input">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={
                                            formData.message
                                        }
                                        placeholder=" "
                                        onChange={
                                            handleChange
                                        }
                                    />

                                    <label htmlFor="message">
                                        Message
                                    </label>
                                </div>

                                {/* =================================
                                    CAPTCHA
                                ================================= */}

                                <div
                                    className="captcha-container d-flex justify-content-start gap-4 align-items-center"
                                    style={{
                                        marginBottom:
                                            "10px",
                                    }}
                                >
                                    <label
                                        htmlFor="mathCaptcha"
                                        style={{
                                            display:
                                                "block",
                                            fontSize:
                                                "14px",
                                            fontWeight:
                                                "600",
                                            color:
                                                "#334155",
                                            marginBottom:
                                                "6px",
                                        }}
                                    >
                                        Security Check:{" "}
                                        <span
                                            style={{
                                                color:
                                                    "#2563eb",
                                            }}
                                        >
                                            {
                                                captcha.num1
                                            }{" "}
                                            +{" "}
                                            {
                                                captcha.num2
                                            }{" "}
                                            = ?
                                        </span>
                                    </label>

                                    <div
                                        className="floating-input captcha-input"
                                        style={{
                                            marginBottom:
                                                "0",
                                        }}
                                    >
                                        <input
                                            type="number"
                                            id="mathCaptcha"
                                            name="mathCaptcha"
                                            value={
                                                userCaptcha
                                            }
                                            placeholder=" "
                                            onChange={
                                                handleCaptchaChange
                                            }
                                            required
                                            style={{
                                                borderColor:
                                                    captchaStatus ===
                                                    "correct"
                                                        ? "#22c55e"
                                                        : captchaStatus ===
                                                            "incorrect"
                                                          ? "#ef4444"
                                                          : undefined,
                                            }}
                                        />

                                        <label htmlFor="mathCaptcha">
                                            Enter Answer
                                        </label>
                                    </div>
                                </div>

                                {/* CAPTCHA SUCCESS */}

                                {captchaStatus ===
                                    "correct" && (
                                    <p className="verify">
                                        ✓ Verified
                                    </p>
                                )}

                                {/* CAPTCHA ERROR */}

                                {captchaStatus ===
                                    "incorrect" && (
                                    <p className="incorrect">
                                        ✕ Incorrect answer,
                                        please try again.
                                    </p>
                                )}

                                {/* =================================
                                    SUBMIT
                                ================================= */}

                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={
                                        isPending
                                    }
                                >
                                    {isPending
                                        ? "Submitting..."
                                        : "Submit Request"}
                                </button>

                                <div
                                    style={{
                                        marginTop:
                                            "10px",
                                        fontSize:
                                            "12px",
                                    }}
                                >
                                    🔒 Your information
                                    is secure and
                                    confidential.
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* =========================================
                    RIGHT SIDE
                ========================================= */}

                <div className="quote-modal-right">
                    <div className="blue-section-content">
                        <div className="contact-info py-4">
                            {showRestForm ? (
                                <>
                                    {/* =================================
                                        DESKTOP REACH US
                                    ================================= */}

                                    <div className="desktop-reach-us">
                                        <p className="text-tenor">
                                            Reach Us
                                        </p>

                                        {/* EMAIL */}

                                        <a
                                            href="mailto:info@yulanto.com"
                                            className="contact-card"
                                        >
                                            <div className="contact-icon">
                                                <FontAwesomeIcon
                                                    icon={
                                                        faEnvelope
                                                    }
                                                />
                                            </div>

                                            <p>
                                                info@yulanto.com
                                            </p>
                                        </a>

                                        {/* PHONE */}

                                        <a
                                            href="tel:+919962157250"
                                            className="contact-card"
                                        >
                                            <div className="contact-icon">
                                                <FontAwesomeIcon
                                                    icon={
                                                        faPhone
                                                    }
                                                />
                                            </div>

                                            <p>
                                                +91 99621
                                                57250
                                            </p>
                                        </a>

                                        {/* LOCATION */}

                                        <a
                                            href="https://maps.app.goo.gl/sHp8T3KXGXav9GuT9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-card"
                                        >
                                            <div className="contact-icon">
                                                <FontAwesomeIcon
                                                    icon={
                                                        faLocationDot
                                                    }
                                                />
                                            </div>

                                            <p>
                                                F3, #4/608,
                                                First Floor,
                                                <br />
                                                VOC St,
                                                near Turyaa
                                                Hotel,
                                                <br />
                                                Kottivakkam,
                                                <br />
                                                OMR, Chennai,
                                                Tamil Nadu -
                                                600041
                                            </p>
                                        </a>
                                    </div>

                                    {/* =================================
                                        MOBILE / TABLET
                                    ================================= */}

                                    <div className="mobile-get-started d-block d-lg-none">
                                        <div className="badge text-tenor">
                                            Let's Get
                                            Started
                                        </div>

                                        <h2 className="text-tenor text-white mt-1">
                                            Your Digital
                                            Success
                                            Starts Here
                                        </h2>

                                        <p className="text-figtree text-white mt-2 opacity-75 d-md-block hidden">
                                            Tell us about
                                            your project
                                            or business
                                            requirements.
                                            Fill out the
                                            form, and our
                                            team will
                                            contact you
                                            within 24
                                            hours.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                /* =================================
                                   INITIAL MOBILE / TABLET
                                ================================= */

                                <div className="initial-get-started d-block d-lg-none">
                                    <div className="badge text-tenor">
                                        Let's Get
                                        Started
                                    </div>

                                    <h2 className="text-tenor text-white">
                                        Your Digital
                                        Success
                                        Starts Here
                                    </h2>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* =====================================
                        DESKTOP VIEW
                    ===================================== */}

                    <div className="blue-section-content desktop-only-content d-none d-lg-block">
                        <div className="badge text-tenor">
                            Let's Get Started
                        </div>

                        <h2 className="text-tenor text-white mt-1">
                            Your Digital Success
                            Starts Here
                        </h2>

                        <p className="text-figtree text-white mt-2 opacity-75">
                            Tell us about your project
                            or business requirements.
                            Fill out the form, and our
                            team will contact you
                            within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}