import StartupAgencyServiceItem from "../components/StartupAgencyServiceItem";
import SmartLink from "@/components/common/SmartLink";
import { servicesData } from "@/data/services-data";
import { bgColorPropsDt } from "@/types/custom-dt";
import { PlusIcon } from "@/svg";

const Service: React.FC<bgColorPropsDt> = () => {
  // display service data
  const displayServiceItem = servicesData.slice(0, 4);

  return (
    <div className="px-service-area service-skew-anim px-service-bg pt-120 pb-140 z-index-2 tp-section-bg">
      <div className="container container-1550">

        {/* title */}
        <div className="px-service-title-wrap mb-60">
          <div className="row">
            <div className="col-xl-3">
              <div className="px-service-subtitle-box pt-40">
                <span className="px-section-subtitle white-style">
                  <i><PlusIcon strokeColor="currentcolor" /></i>
                  What we do
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="px-service-title-box d-flex justify-content-between align-items-center">
                <h3 className="px-section-title white-style mb-0 text-effect">
                  Services.
                </h3>
                <SmartLink className="px-btn-white" href="/service-1">
                  Get started
                </SmartLink>
              </div>
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="px-service-accordion-wrap">
          <div className="accordion" id="accordionExample">
            {displayServiceItem.map((service, index) => (
              <StartupAgencyServiceItem key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
