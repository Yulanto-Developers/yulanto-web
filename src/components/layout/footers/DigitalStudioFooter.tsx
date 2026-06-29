import { getCurrentYear } from "@/utils/getCurrentYear";
import { ArrowRightIcon } from "@/svg/FooterIcons";
import { ScrollLink } from "@/components/common";
import Link from "next/link";
import Image from "next/image";

/* ------------------ DATA ------------------ */

const socialLinks = [
    { id: "instagram", icon: "fa-instagram", href: "#" },
    { id: "dribbble", icon: "fa-dribbble", href: "#" },
    { id: "behance", icon: "fa-behance", href: "#" },
    { id: "youtube", icon: "fa-youtube", href: "#" },
];

const locations = [
    {
        id:1,
        title: "London",
        address: (
            <>
                Germany 785 15h Street <br /> Office 478 Berlin
            </>
        ),
    },
];

const contacts = [
    { label: "+999 23654 2654", href: "tel:+999236542654" },
    { label: "pixora@help.com", href: "mailto:pixora@help.com" },
];
/* ------------------ COMPONENTS ------------------ */
const FooterTop = () => (
    <div className="row align-items-end">
        <div className="col-lg-7 col-md-8">
            <div className="tp-footer-tittle-wrap p-relative mb-50">
                <Image
                    width={76}
                    height={80}
                    className="tp-footer-shape d-none d-lg-block"
                    src="/assets/img/update/footer/shape.png"
                    alt="shape"
                />
                <h2 className="tp-footer-top-tittle">
                    Let&apos;s create <span>something</span> together special
                </h2>
            </div>
        </div>

        <div className="col-lg-5 col-md-4">
            <div className="tp-footer-social mb-70 d-flex justify-content-md-end">
                {socialLinks.map((item) => (
                    <span key={item.id}>
                        <Link href={item.href}>
                            <i className={`fa-brands ${item.icon}`}></i>
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    </div>
);
const FooterMiddle = () => (
    <div className="tp-footer-middle mb-30">
        <div className="row">

            {/* Location */}
            {locations.map((loc) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={loc.id}>
                    <div className="tp-footer-widget mb-40">
                        <h5 className="tp-footer-tittle mb-15">{loc.title}</h5>
                        <Link className="tp-footer-link" href="#">
                            {loc.address}
                        </Link>
                    </div>
                </div>
            ))}

            {/* Contact */}
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="tp-footer-widget tp-footer-border p-relative mb-40">
                    <h5 className="tp-footer-tittle mb-15">Contact</h5>
                    {contacts.map((item, i) => (
                        <div key={`${item.href}-${i}`}>
                            <Link className="tp-footer-link" href={item.href}>
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscribe */}
            <div className="col-lg-5">
                <div className="tp-footer-widget tp-footer-subscribe-form mb-40">
                    <form action="#" className="p-relative">
                        <input
                            className="tp-input"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <button type="submit" aria-label="Submit email">
                            <ArrowRightIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

const FooterBottom = () => (
    <div className="tp-footer-copyright-wrap">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="tp-footer-copyright">
                    <p>
                        © {getCurrentYear()} <Link href="#">Pixora.</Link> All rights reserved.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-4">
                <div className="tp-footer-scroll text-sm-end mb-15">
                    <ScrollLink target="#hero" aria-label="Back to top">
                        Back to top
                    </ScrollLink>
                </div>
            </div>
        </div>
    </div>
);
/* ------------------ MAIN ------------------ */
const DigitalStudioFooter = () => {
    return (
        <footer className="bf-footer-2-top-spacing pb-30">
            <div className="tp-footer-area bf-footer-topspacing bf-service-3-rounded tp-black-bg pt-110">
                <div className="container container-1350">
                    <FooterTop />
                    <FooterMiddle />
                    <FooterBottom />
                </div>
            </div>
        </footer>
    );
};

export default DigitalStudioFooter;