"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  website?: string;
  comment: string;
  remember: boolean;
};

const PostboxDetailsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    toast.success("Comment submitted successfully!");
    reset();
  };

  return (
    <div className="postbox-details-form">
      <h3 className="postbox-details-form-title">Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="postbox-details-form-wrapper">
          <div className="postbox-details-form-inner">
            <div className="row">
              
              {/* Name */}
              <div className="col-xl-6">
                <div className="postbox-details-input-box">
                  <div className="postbox-details-input">
                   <div className="mb-25">
                     <label>Name *</label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                     {errors.name && (
                      <span className="form-error">{errors.name.message}</span>
                    )}
                   </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-xl-6">
                <div className="postbox-details-input-box">
                  <div className="postbox-details-input">
                    <div className="mb-25">
                    <label>Email *</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="form-error">{errors.email.message}</span>
                    )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="col-xl-12">
                <div className="postbox-details-input-box">
                  <div className="postbox-details-input">
                    <div className="mb-25">
                    <label>Website</label>
                    <input
                      type="text"
                      {...register("website")}
                    />
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div className="col-xl-12">
                <div className="postbox-details-input-box">
                  <div className="postbox-details-input">
                    <div className="mb-25">
                    <label>Comment *</label>
                    <textarea
                      {...register("comment", {
                        required: "Comment is required",
                        minLength: {
                          value: 10,
                          message: "Minimum 10 characters required",
                        },
                      })}
                    />
                    {errors.comment && (
                      <span className="form-error">
                        {errors.comment.message}
                      </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remember */}
          <div className="postbox-details-suggetions mb-20">
            <div className="postbox-details-remeber">
              <input
                id="remember"
                type="checkbox"
                {...register("remember")}
              />
              <label htmlFor="remember">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="postbox-details-input-box">
            <button
              className="tp-btn-px sidebar-btn-style sidebar-btn"
              type="submit"
              aria-label="Post comment"
            >
              <span>
                <span className="text-1">Post Comment</span>
                <span className="text-2">Post Comment</span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostboxDetailsForm;