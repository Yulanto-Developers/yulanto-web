"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
    name: string;
    email: string;
    website: string;
    message: string;
}

const TeamContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async () => {
        try {
            toast.success("Message sent successfully!");
            reset();
        } catch {
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="tp-team-details-input mb-50">
            <h4 className="tp-team-details-more-title mb-35">
                Let&apos;s Work Together
            </h4>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="tp-team-details-input-content"
            >
                <div className="row gx-20">
                    {/* Name */}

                    <div className="col-lg-6">
                        <div className="mb-20">
                            <input
                                type="text"
                                placeholder="Your name"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must be at least 2 characters",
                                    },
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
                        <div className="mb-20">
                            <input
                                type="email"
                                placeholder="Your email"
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
                        <div className="mb-20">
                            <input
                                type="url"
                                placeholder="Your website url"
                                {...register("website", {
                                    required: "Website URL is required",
                                    pattern: {
                                        value:
                                            /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
                                        message: "Enter a valid URL",
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
                        <div className="mb-20">
                            <textarea
                                placeholder="Message"
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message:
                                            "Message must be at least 10 characters",
                                    },
                                })}
                            ></textarea>

                            {errors.message && (
                                <p className="form-error">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="tp-team-details-input-btn">
                    <button type="submit" disabled={isSubmitting} aria-label="Send contact message">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamContactForm;