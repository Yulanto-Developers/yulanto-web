import { PortfolioNextArrowIcon, PortfolioPrevArrowIcon } from "@/svg/ArrowIcons";
import Link from "next/link";

const PortfolioNavigation = () => {
  return (
    <div className="px-pd-2-np-ptb px-pd-style pb-120">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-12">
            <div className="px-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">

              <div
                className="tp_fade_anim"
                data-delay=".3"
                data-fade-from="top"
                data-ease="bounce"
              >
                <Link href="#">
                  <span>
                    <PortfolioPrevArrowIcon />
                  </span>
                  Prev Work
                </Link>
              </div>

              <div
                className="tp_fade_anim"
                data-delay=".5"
                data-fade-from="top"
                data-ease="bounce"
              >
                <Link href="#">
                  Next Work
                  <span>
                    <PortfolioNextArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioNavigation;