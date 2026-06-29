import Testimonial from "./ModernAgencyTestimonial";
import Service from "./ModernAgencyService";
import About from "./ModernAgencyAbout";
import Brand from "./ModernAgencyBrand";

const MultipleArea = () => {
    return (
        <div id="project" className="px-multiple-section-area">
            <div className="container container-1870">
                <div className="px-wrapper-box pt-120 pb-120 ma-multiple-area-bg">
                    <About />
                    <Service />
                    <Testimonial />
                    <Brand />
                </div>
            </div>
        </div>
    );
};

export default MultipleArea;