"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BlogSearchIconTwo } from "@/svg";

type FormValues = {
  search: string;
};

const BlogStandardSearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (!data.search.trim()) {
      toast.error("Search field is required");
      return;
    }

    toast.success(`Searching for: ${data.search}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sidebar-search-input">
        <input
          type="text"
          placeholder="Search..."
          {...register("search", {
            required: "Search field is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters required",
            },
          })}
        />

        <button type="submit" className="search-btn" aria-label="Search blog posts">
          <BlogSearchIconTwo />
        </button>
      </div>

      {/* validation error */}
      {errors.search && (
        <p className="form-error">
          {errors.search.message}
        </p>
      )}
    </form>
  );
};

export default BlogStandardSearchForm;