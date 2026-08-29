import React from 'react'
interface ContentLayout {
    leftTitle: string;
    rightTitle1: string;
    rightTitle2: string;
    description: string;
    css?: string;
}
function IntroContent({ leftTitle, rightTitle1, rightTitle2, description, css }: ContentLayout) {
    return (
        <div className={`container ${css || 'my-5'}`}>

            <div className="row align-items-center">
                <div className="col-xl-3">
                    <span className="tp-section-subtitle text-black blink-ball">
                        {leftTitle}
                    </span>
                </div>

                <div className="col-xl-9">
                    <div className="px-project-title-box">

                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">{rightTitle1} {' '}</span>{rightTitle2}
                        </h4>

                        <p className="text-figtree text-dark mt-2 font-paragraph-cls">
                            {description}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContent;
