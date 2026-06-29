import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

interface ServiceItemProps {
    title: string;
    image: string;
    description: string;
    index: number;
    isActive: boolean;
    onHover: () => void;
}

const ServiceCard = ({
    title,
    image,
    description,
    index,
    isActive,
    onHover,
}: ServiceItemProps) => {
    return (
        <div className={`px-service-2-element ${isActive ? "active" : ""}`}>
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <div className="px-service-2-info">
                        <div className="px-service-2-thumb">
                            <Image width={350} height={263} className="w-100 img-fluid" src={image} alt={title} />
                        </div>
                        <div className="px-service-2-content">
                            <span>{title}</span>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="offset-xl-3 col-xl-6 col-lg-8">
                    <div className="px-service-2-wrap">
                        <div className="px-service-2-item">
                            <h4
                                className="px-service-2-title p-relative"
                                onMouseEnter={onHover}
                            >
                                <SmartLink href="/service-1">{title}</SmartLink>
                                <span>{String(index).padStart(2, "0")}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
