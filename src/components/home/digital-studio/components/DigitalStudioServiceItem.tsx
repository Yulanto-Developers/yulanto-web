import { SmartLink } from "@/components/common";
import { ServiceArrowIcon } from "@/svg";
import { ServiceItemDT } from "@/types";
import Image from "next/image";

const DigitalStudioServiceItem: React.FC<ServiceItemDT> = ({
  image,
  title,
  categories,
  subDesc,
  description,
}) => {
  return (
    <div className="bf-service-item-3 fix">
      <div className="row gx-0">
        <div className="col-lg-4">
          <div className="bf-service-item-3-wrap d-flex align-items-center">
            <div className="bf-service-item-3-thumb">
              <SmartLink href="/service-1">
                <Image
                  className="img-fluid"
                  width={290}
                  height={202}
                  src={image}
                  alt="service image"
                />
              </SmartLink>
            </div>
            <div className="bf-service-item-3-text left-title">
              <h4 className="bf-service-item-3-title">
                <SmartLink className="common-underline" href="/service-1">
                  {title}
                </SmartLink>
              </h4>
            </div>
          </div>
        </div>


        <div className="col-lg-8">
          <div className="bf-service-item-3-wrapper p-relative fix">
            <div className="position-relative">
              <div className="bf-service-item-3-wrap3">
                <div className="bf-service-item-3-text">
                  <p className="text-white">{subDesc}</p>
                </div>
              </div>
              <div className="bf-service-item-3-wrap2 position-absolute top-0">
                <div className="bf-service-item-3-text">
                  <h4 className="bf-service-item-3-title">
                    <SmartLink
                      className="common-underline pointer-event"
                      href=""
                    >
                      {title}{" "}
                      <span className="servicearrow">
                        <ServiceArrowIcon />
                      </span>
                    </SmartLink>
                  </h4>
                  <p className="text-white">{description}</p>
                </div>
              </div>
            </div>

            <div className="bf-service-item-3-slider">
              <div className="bf-service-item-3-tags">
                {[...Array(3)].map((_, idx) =>
                  categories?.map((tag, tIndex) => (
                    <span key={`${idx}-${tIndex}`}>{tag}</span>
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStudioServiceItem;
