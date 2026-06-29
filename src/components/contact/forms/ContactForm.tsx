"use client";
import { ContactFormValuesDt } from "@/types/contact-dt";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValuesDt>();

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

                {/* Email */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your email *"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your name *"
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Phone */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your phone *"
                            type="text"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9+\-\s()]{7,15}$/,
                                    message: "Enter a valid phone number",
                                },
                            })}
                        />
                        {errors.phone && (
                            <p className="form-error">{errors.phone.message}</p>
                        )}
                    </div>
                </div>

                {/* Company */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Company name"
                            type="text"
                            {...register("company")}
                        />
                    </div>
                </div>

                {/* Budget */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Budget"
                            type="text"
                            {...register("budget")}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <textarea
                            placeholder="Message *"
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="form-error">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button className="w-100" type="submit" aria-label="Send contact message">
                            <span>
                                <span className="text-1">Send Message</span>
                                <span className="text-2">Send Message</span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default ContactForm;
