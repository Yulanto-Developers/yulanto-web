import { GeometricFlowerIcon } from "@/svg";

const ServiceTextSlideItem = ({ item }: { item: string }) => {
    return (
        <div className="px-text-slider-item d-flex align-items-center">
            <span>{item}</span>

            <div className="px-btn-zikzak text-center p-relative ml-40">
                <span className="btn-text">
                    let's <br /> talk
                </span>

                <i className="decorative-shape">
                    <GeometricFlowerIcon />
                </i>
            </div>
        </div>
    );
};

export default ServiceTextSlideItem;