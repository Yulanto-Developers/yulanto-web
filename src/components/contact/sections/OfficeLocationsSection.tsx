import { OfficeLocationDt } from "@/types/contact-dt";
import LocationItem from "../items/LocationItem";

const officeLocations: OfficeLocationDt[] = [
    {
        id:1,
        city: "London",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@pixora.com",
        directionsLink: "#",
    },
    {
        id:2,
        city: "New York",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@pixora.com",
        directionsLink: "#",
    },
    {
        id:3,
        city: "Singapore",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@pixora.com",
        directionsLink: "#",
    },
];

interface bgColorProps {
    sectionBgColor?: string;
}

const OfficeLocationsSection: React.FC<bgColorProps> = ({ sectionBgColor }) => {
    return (
        <div
            className="px-contact-info-ptb pt-120 pb-130"
            style={{ backgroundColor: sectionBgColor }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        {/* Heading */}
                        <div className="px-contact-info-heading mb-20">
                            <h4 className="px-contact-info-title">
                                Let&apos;s Work Together
                            </h4>
                        </div>

                        {/* Locations */}
                        <div className="px-contact-info-wrap">
                            {officeLocations.map((location) => (
                                <LocationItem key={location.id} {...location} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocationsSection;
