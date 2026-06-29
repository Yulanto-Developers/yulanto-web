import { ContactForm, ContactInfoItem, SocialLinkItem } from "../sections/index";

/* =======================
   Data Configuration
======================= */
const contactInfoData = [
    {
        id: 1,
        title: "inquires",
        content: "contact@pixora.com",
        href: "mailto:contact@pixora.com",
        colClass: "col-lg-12 col-md-4 col-sm-6",
    },
    {
        id: 2,
        title: "Raleigh",
        content: `125 N. Harrington Street 
Raleigh, NC 27603 
919-833.6413`,
        href: "#",
        colClass: "col-xl-6 col-lg-12 col-md-4 col-sm-6",
    },
    {
            id: 3,
        title: "Raleigh",
        content: `125 N. Harrington Street 
Raleigh, NC 27603 
919-833.6413`,
        href: "#",
        colClass: "col-xl-6 col-lg-12 col-md-4 col-sm-6",
    },
];

const socialLinks = [
    { id: "linkedin", name: "LinkedIn", href: "#" },
    { id: "instagram", name: "Instagram", href: "#" },
    { id: "twitter", name: "Twitter", href: "#" },
];

const ContactArea = () => {
    return (
        <div className="px-contact-ptb pt-200 pb-140">
            {/* Heading */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="px-contact-heading text-center">
                            <h4 className="px-contact-title">Get in touch</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container container-1550">
                <div className="row align-items-center">

                    {/* Left Info Section */}
                    <div className="col-lg-4">
                        <div className="px-contact-wrap pb-50">
                            <div className="px-contact-inf-box">
                                <div className="row">
                                    {contactInfoData.map((item) => (
                                        <ContactInfoItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="px-contact-inf-social">
                                {socialLinks.map((social) => (
                                    <SocialLinkItem key={social.id} {...social} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className="col-lg-8">
                        <div className="px-contact-wrapper">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
