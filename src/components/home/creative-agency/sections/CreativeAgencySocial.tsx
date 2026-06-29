import { SocialShape } from "@/svg/ShapeIcons";
import { MailIcon } from "@/svg/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        label: "Insights",
        icon: "/assets/img/social/social-1.png",
        href: "#",
    },
    {
        label: "Social",
        icon: "/assets/img/social/social-2.png",
        href: "#",
    },
    {
        label: "Design",
        icon: "/assets/img/social/social-3.png",
        href: "#",
    },
    {
        label: "Linkedin",
        icon: "/assets/img/social/social-4.png",
        href: "#",
    },
];

const EMAIL = "inquiry@pixora.com";

const CreativeAgencySocial = () => {
    return (
        <div className="px-social-area p-relative">

            {/* SHAPE */}
            <span className="px-social-shape">
                <SocialShape />
            </span>

            <div className="px-social-bg" style={{ backgroundColor: "#ff471d" }}>
                <div className="container container-1550">
                    <div className="row align-items-center">
                        {/* EMAIL */}
                        <div className="col-md-6">
                            <div className="px-social-mail">
                                <Link className="px-line-lr" href={`mailto:${EMAIL}`}>
                                    <span>
                                        <MailIcon />
                                    </span>
                                    {EMAIL}
                                </Link>
                            </div>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="col-md-6">
                            <div className="px-social-icon text-md-end">
                                {SOCIAL_LINKS.map((item) => (
                                    <Link key={item.label} href={item.href} style={{ marginLeft: "4px" }}>
                                        <Image width={52} height={52} src={item.icon} alt={item.label} />
                                        <span>{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencySocial;