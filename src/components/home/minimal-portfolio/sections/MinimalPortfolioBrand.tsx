import Image from "next/image";

const brandLogos = [
    "logo.png",
    "logo-2.png",
    "logo-3.png",
    "logo-4.png",
    "logo-5.png",
    "logo-6.png",
];

const MinimalPortfolioBrand = () => {
    return (
        <div className="bf-brands-area">
            <div className="container container-1350">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-brands-wrap">
                            <span className="bf-brands-title mb-30 d-inline-block">
                                Trusted by these amazing companies
                            </span>
                            <div className="bf-brands-item-wrap">
                                <div className="row gx-5">

                                    {brandLogos.map((logo,index) => (
                                        <div
                                            key={logo}
                                            className="col-lg-2 col-md-4 col-sm-4 col-6"
                                        >
                                            <div className="bf-brands-item mb-5">
                                                <Image width={128} height={30} className="img-fluid w-auto h-auto"
                                                    src={`/assets/img/update/brands/${logo}`}
                                                    alt={`brand-${index + 1}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBrand;