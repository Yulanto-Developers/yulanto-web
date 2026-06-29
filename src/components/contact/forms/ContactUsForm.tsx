"use client";
import { ContactUsFormValuesDt } from "@/types/contact-dt";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactUsFormValuesDt>();

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Full Name */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Full name*</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Full name is required",
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

                {/* Website */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Website link</label>
                        <input
                            type="text"
                            {...register("website", {
                                pattern: {
                                    value:
                                        /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
                                    message: "Enter a valid website URL",
                                },
                            })}
                        />
                        {errors.website && (
                            <p className="form-error">
                                {errors.website.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>How Can We Help You*</label>
                        <textarea
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

export default ContactUsForm;
