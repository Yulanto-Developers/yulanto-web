import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/Yulanto-logo.png';

export const metadata: Metadata = {
    title: "404 Not Found - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <div className="tp-error-area pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Image src={logo} width={200} height={80} alt="Yulanto Logo" />
                    </div>
                    <div className="col-xl-12">
                        <div className="tp-error-wrapper text-center">
                            <Image className="img-fluid" width={600} height={300} src="/assets/img/error/error.png" alt="error image" />
                            <div className="tp-error-content">
                                <h4 className="tp-error-title-sm mt-30">Something went Wrong...</h4>
                                <p>Sorry, we {`couldn't`} find your page.</p>
                                <Link className="tp-btn" href="/">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;