import { ServiceItemDT } from "@/types";
import Image from "next/image";

interface ServiceItemProps extends ServiceItemDT {
    index: number;
}

const StartupAgencyServiceItem: React.FC<ServiceItemProps> = ({ id, title, image, description, categories, index }) => {
    const collapseId = `collapse-${index}`;
    const isActive = index === 0;

    return (
        <div className="accordion-items" key={id}>
            <div className="accordion-header">
                <div
                    className={`accordion-buttons ${!isActive ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                >
                    <div className="px-service-item">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-2 col-2">
                                <div className="px-service-num">
                                    <span>({id})</span>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 col-10">
                                <div className="px-service-title">
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                        <span className="accordion-icon"></span>
                    </div>
                </div>
            </div>

            <div
                id={collapseId}
                className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <div className="row align-items-center">
                        <div className="offset-xxl-3 col-xxl-9 offset-xl-2 col-xl-10">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-8">
                                    <div className="px-service-content d-flex align-items-center">
                                        <div className="px-service-thumb">
                                            <Image width={260} height={140} src={image} alt={title} />
                                        </div>
                                        <div className="px-service-content">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="px-service-category">
                                        {categories?.map((cat, i) => (
                                            <span key={`${cat}-${i}`} style={{marginLeft:"4px"}}>{cat}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyServiceItem;