import { OfficeLocationDt } from "@/types/contact-dt";
import Link from "next/link";

const LocationItem = ({
    city,
    address,
    phone,
    email,
    directionsLink,
}: OfficeLocationDt) => {
    return (
        <div className="px-contact-info-item">
            <div className="row align-items-center">

                {/* City */}
                <div className="col-lg-4 col-sm-6">
                    <span className="px-contact-info-item-title">{city}</span>
                </div>

                {/* Address */}
                <div className="col-lg-3 col-sm-6">
                    <div className="px-contact-info-item-content">
                        <Link className="px-line-black" href="#">
                            {address.map((line,index) => (
                                <span key={`${line}-${index}`}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="col-lg-3 col-sm-6">
                    <div className="px-contact-info-item-content">
                        <Link className="px-line-black" href={`tel:${phone}`}>
                            {phone}
                        </Link>
                        <br />
                        <Link className="px-line-black" href={`mailto:${email}`}>
                            {email}
                        </Link>
                    </div>
                </div>
                {/* Directions */}
                <div className="col-lg-2 col-sm-6">
                    <div className="px-contact-info-item-btn text-lg-end">
                        <Link href={directionsLink}>Directions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LocationItem;