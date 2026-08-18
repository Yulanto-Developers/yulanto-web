interface SectionTitleProps {
    subtitle: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    className?: string;
}

const SectionTitle = ({
    subtitle,
    titleFirst,
    titleSecond,
    description,
    className = "",
}: SectionTitleProps) => {
    return (
        <div className={`px-project-area pt-3 ${className}`}>
            <div className="container container-1550">
                <div className="px-project-title-wrap">
                    <div className="row">
                        <div className="col-xl-3">
                            <span className="px-section-subtitle pt-40 blink-ball">
                                {subtitle}
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title text-effect">
                                    <span className="text-blue-about"> {titleFirst}  </span> {" "}
                                    <span> {titleSecond} </span>
                                </h4>

                                <p className="mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;