import ServiceItem from "../components/ServiceItem";
import { ServiceDT } from "@/types";

const services: ServiceDT[] = [
    {
        id: 1,
        title: "Branding",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-1.jpg",
            "/assets/img/service/service-4-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Development",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-2.jpg",
            "/assets/img/service/service-4-3.jpg",
        ],
    },
    {
        id: 3,
        title: "Design support",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-3.jpg",
            "/assets/img/service/service-4-4.jpg",
        ],
    },
    {
        id: 4,
        title: "Websites",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-4.jpg",
            "/assets/img/service/service-4-5.jpg",
        ],
    },
];

const Service = () => {
    return (
        <section className="px-service-4-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="px-service-4-subtitle-box pt-50">
                            <span className="px-section-subtitle text-white">
                                OUR SOLUTIONS
                            </span>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="px-service-4-wrap">
                            {services.map((service) => (
                                <ServiceItem key={service.id} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;