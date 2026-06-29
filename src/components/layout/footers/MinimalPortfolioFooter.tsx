import { getCurrentYear } from "@/utils/getCurrentYear";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {id:1, label: "Twitter", href: "#" },
    {id:2, label: "Instagram", href: "#" },
    {id:3, label: "Behance", href: "#" },
    {id:4, label: "Dribbble", href: "#" },
];

const MinimalPortfolioFooter = () => {
    return (
        <footer>
            <div
                className="des-footer-wrap bg-position"
                style={{
                    backgroundImage: "url(/assets/img/update/footer/bg.jpg)",
                }}
            >
                <div className="container-fluid">
                    <div className="des-footer-area des-footer-bg text-center">

                        {/* TOP */}
                        <div className="des-footer-top d-flex align-items-center justify-content-between">
                            <span>Creative Design Agency</span>

                            <div className="des-footer-logo">
                                <Link href="/">
                                    <Image
                                        width={140}
                                        height={49}
                                        src="/assets/img/logo/logo-white.png"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <span>Based in London</span>
                        </div>

                        {/* MIDDLE */}
                        <div className="des-footer-middle">
                            <span>
                                Contact us and let&apos;s bring your vision to life
                            </span>

                            <h3 className="des-footer-title">
                                <SmartLink href="/contact">Contact Us</SmartLink>
                            </h3>
                        </div>

                        {/* BOTTOM */}
                        <div className="des-footer-bottom d-flex align-items-center justify-content-between">
                            <span>Powered by Aqlova</span>

                            <div className="des-footer-bottom-social text-center">
                                {socialLinks.map((item) => (
                                    <Link key={item.id} href={item.href}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <span>Copyright © {getCurrentYear()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MinimalPortfolioFooter;