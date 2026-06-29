
"use client";
import { contactMeFormValuesDT } from "@/types/contact-dt";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const interests = [
    "Branding",
    "Design Concept",
    "App Design",
    "Android Development",
    "iOS Development",
    "Web Design",
    "Logo",
];

const ContactMeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<contactMeFormValuesDT>();

    watch("interest");

    const onSubmit = (data: contactMeFormValuesDT) => {
        if (!data.interest || data.interest.length === 0) {
            toast.error("Please select at least one interest");
            return;
        }
        toast.success("Message sent successfully");
        reset();
    };
    return (
        <>
            {/* Interest Section */}
            <div className="tp-contact-me-interest-wrapper pb-70">
                <h3 className="tp-contact-me-interest-title">
                    I&apos;m Interested in...
                </h3>
                <div className="tp-contact-me-form-category-list">
                    {interests.map((item) => (
                        <span key={item}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={item}
                                    {...register("interest")}
                                />
                                <span>{item}</span>
                            </label>
                        </span>
                    ))}
                </div>
            </div>

            {/* Form Section */}
            <div className="tp-contact-me-interest-form">
                <h3 className="tp-contact-me-interest-title">
                    Request a Quote
                </h3>

                <div className="tp-contact-me-interest-form-wrap">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="row">

                            {/* Name */}
                            <div className="col-lg-6">
                                <div className="tp-contact-form-input mb-20">
                                    <label>Full name*</label>
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: "Full name is required",
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="form-error">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-lg-6">
                                <div className="tp-contact-form-input mb-20">
                                    <label>Email address*</label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="form-error">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Website */}
                            <div className="col-lg-12">
                                <div className="tp-contact-form-input mb-20">
                                    <label>Website link</label>
                                    <input
                                        type="text"
                                        {...register("website")}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="col-lg-12">
                                <div className="tp-contact-form-input mb-20">
                                    <label>How Can We Help You*</label>
                                    <textarea
                                        {...register("message", {
                                            required: "Message is required",
                                        })}
                                    />
                                    {errors.message && (
                                        <p className="form-error">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <div className="tp-contact-form-btn">
                                    <button
                                        className="w-100"
                                        type="submit"
                                        aria-label="Send contact message"
                                    >
                                        <span>
                                            <span className="text-1">
                                                Send Message
                                            </span>
                                            <span className="text-2">
                                                Send Message
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactMeForm;
