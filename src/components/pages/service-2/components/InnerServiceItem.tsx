import AnimatedCounterTree from "@/components/shared/MetricsCounter/AnimatedCounterThree";
import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";

interface InnerServiceItemProps {
    id: number;
    title: string;
    descriptions: string[];
    categories: string[];
    images: string[];
    isLastItem?: boolean;
}

const InnerServiceItem = ({
    id,
    title,
    descriptions,
    categories,
    images,
    isLastItem = false,
}: InnerServiceItemProps) => {
    return (
        <div
            className={`tp-inner-service-item ${!isLastItem ? "mb-200" : ""
                }`}
        >
            <div className="inner-service-1-right">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="inner-service-1-number">
                            <h1>
                                <AnimatedCounterTree
                                    end={id}
                                    duration={0.2}
                                />
                            </h1>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="inner-service-1-text">
                            <span>{title}</span>
                            {descriptions.map((description, index) => (
                                <p key={`desc-${index}`}>{description}</p>
                            ))}
                        </div>

                        <div className="inner-service-1-category">
                            {categories.map((category, index) => (
                                <SmartLink
                                    key={`${category}-${index}`}
                                    href="/service-2"
                                    className="inner-service-1-category-item d-flex justify-content-between align-items-center"
                                >
                                    <span>{category}</span>
                                    <i>
                                        <TextArrowIcon />
                                    </i>
                                </SmartLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-10">
                <div className="inner-service-1-thumb-text">
                    <span>(Our recent Digital work)</span>
                </div>

                {images.map((image, index) => (
                    <div key={`${image}-${index}`} className="col-xl-6">
                        <div className="inner-service-1-thumb">
                            <div className="ripple-image">
                                <Image
                                    className="w-100 img-fluid"
                                    width={643}
                                    height={720}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default InnerServiceItem;