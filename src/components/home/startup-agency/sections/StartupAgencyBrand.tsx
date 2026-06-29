"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { PlusIcon } from "@/svg";
import Image from "next/image";

const brandImages = [
    { img: "/assets/img/brand/brand-1-1.png", width: 85, height: 26 },
    { img: "/assets/img/brand/brand-1-2.png", width: 120, height: 31 },
    { img: "/assets/img/brand/brand-1-3.png", width: 80, height: 18 },
    { img: "/assets/img/brand/brand-1-4.png", width: 132, height: 23 },
    { img: "/assets/img/brand/brand-1-5.png", width: 119, height: 22 },
    { img: "/assets/img/brand/brand-1-6.png", width: 129, height: 14 },
];
const brandDarkImages = [
    { img: "/assets/img/brand/brand-white/brand-1.png", width: 99, height: 30 },
    { img: "/assets/img/brand/brand-white/brand-2.png", width: 114, height: 31 },
    { img: "/assets/img/brand/brand-white/brand-3.png", width: 103, height: 32 },
    { img: "/assets/img/brand/brand-white/brand-4.png", width: 101, height: 54 },
    { img: "/assets/img/brand/brand-white/brand-5.png", width: 99, height: 29 },
    { img: "/assets/img/brand/brand-white/brand-6.png", width: 119, height: 22 },
];

const Brand = () => {
    const isDarkTheme = useIsDarkRoute();
    const brandImagesItems = isDarkTheme ? brandDarkImages : brandImages;

    return (
        <section className="px-brand-area brand-skew-anim pb-160">
            <div className="container container-1550">

                {/* Section Title */}
                <div className="row">
                    <div className="col-xl-3">
                        <div className="px-brand-subtitle-box mb-40">
                            <span className="px-section-subtitle">
                                <i>
                                    <PlusIcon />
                                </i>
                                Our Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brand List */}
                <div className="row gx-5">
                    {brandImagesItems.map((brand, index) => (
                        <div
                            key={`${brand.img}-${index}`}
                            className="col-xl-2 col-lg-4 col-md-6 col-sm-6"
                        >
                            <div className="px-brand-item">
                                <Image
                                    src={brand.img}
                                    width={brand.width}
                                    height={brand.height}
                                    alt={`Brand ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brand;
