"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const DigitalStudioContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="tp-contact-form-input mb-15">
                <label className="tp-label" htmlFor="name">Name *</label>
                <input
                    className="tp-input"
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                    })}
                />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>

            <div className="tp-contact-form-input mb-15">
                <label className="tp-label" htmlFor="email">Email *</label>
                <input
                    className="tp-input"
                    type="email"
                    id="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div className="tp-contact-form-input mb-15">
                <label className="tp-label" htmlFor="textarea">Message *</label>
                <textarea
                    className="tp-input tp-textarea"
                    id="textarea"
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                ></textarea>
                {errors.message && <p className="form-error">{errors.message.message}</p>}
            </div>

            <div>
                <button
                    type="submit"
                    aria-label="Send contact message"
                    className="tp-btn tp-btn-xl d-inline-flex align-items-center justify-content-center w-100"
                >
                    <span>
                        <span className="text-1">Send Message</span>
                        <span className="text-2">Send Message</span>
                    </span>
                </button>
            </div>
        </form>
    );
};

export default DigitalStudioContactForm;