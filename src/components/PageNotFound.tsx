"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/Yulanto-logo.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PageNotFound() {
    const [counter, setCounter] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);

                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (counter === 0) {
            router.push("/");
        }
    }, [counter,router])

    return (
        <div className="tp-error-area pt-50">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 text-center pb-20">
                        <Image
                            src={logo}
                            width={200}
                            height={80}
                            alt="Yulanto Logo"
                        />
                    </div>

                    <div className="col-xl-12">
                        <div className="tp-error-wrapper text-center">

                            <Image
                                className="img-fluid"
                                width={600}
                                height={300}
                                src="/assets/img/error/error.png"
                                alt="Error"
                            />

                            <div className="tp-error-content">

                                <h4 className="tp-error-title-sm mt-30">
                                    We Hit a Dead End
                                </h4>

                                <p>
                                    The link you followed might be broken or
                                    the page may have moved. We apologize for
                                    the detour!
                                </p>

                                <p>
                                    Redirecting in{" "}
                                    <strong>{counter}</strong> seconds...
                                </p>

                                <Link
                                    className="px-btn-grey"
                                    href="/"
                                >
                                    Back to Home
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}