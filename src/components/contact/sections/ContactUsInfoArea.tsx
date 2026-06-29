import { contactLocations } from "@/data/contact-locations";
import ContactCard from "../items/ContactCard";

const ContactUsInfoArea = () => {
    return (
        <div className="tp-contact-us-info-area pb-120">
            <div className="container container-1230">
                <div className="row">
                    {contactLocations.map((location) => (
                        <ContactCard key={location.id} {...location} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsInfoArea;