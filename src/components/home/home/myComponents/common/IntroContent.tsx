import React from "react";

interface ContentLayout {
  leftTitle: string;
  rightTitle1: string;
  rightTitle2: string;
  description: string;
  css?: string;
}
function IntroContent({ leftTitle, rightTitle1, rightTitle2, description, css }: ContentLayout) {
    return (
      <section  className="px-about-6-area pt-40 pb-lg-110">
        <div className={`container container-1550 ${css }`}>

            <div className="row align-items-center">
                <div className="col-xl-3">
                    <span className="tp-section-subtitle text-black blink-ball">
                        {leftTitle}
                    </span>
                </div>

        <div className="col-xl-9">
          <div className="px-project-title-box">
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">{rightTitle1} </span>
              {rightTitle2}
            </h4>

            {/* <h1
              className="ft-23 mt-0 mb-2  text-tenor"
              data-aos="text-reveal"
              data-aos-delay="100"
            >
              Web Design & Development Case Studies
            </h1> */}

            <p
              className="text-figtree text-dark mt-2 font-paragraph-cls"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default IntroContent;
