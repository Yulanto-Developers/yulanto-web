"use client";

import { BlogSearchIcon } from "@/svg";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormValues = {
    search: string;
};

type Props = {
    onSearch: (value: string) => void;
};

const BlogSearchForm = ({ onSearch }: Props) => {

    const { register, watch } = useForm<FormValues>();

    // eslint-disable-next-line react-hooks/incompatible-library
    const searchValue = watch("search", "");

    useEffect(() => {
        onSearch(searchValue);
    }, [searchValue, onSearch]);

    return (
        <form>
            <div className="in-blog-list-search-input p-relative">
                <input
                    type="text"
                    placeholder="Search..."
                    {...register("search")}
                />
                <div className="in-blog-list-search-icon">
                    <span>
                        <BlogSearchIcon />
                    </span>
                </div>
            </div>
        </form>
    );
};

export default BlogSearchForm;

