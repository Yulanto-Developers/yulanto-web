import Image from "next/image";

interface BannerSectionProps {
    src: string;
    alt?: string;
    wrapperClass?: string;
    imageClass?: string;
    speed?: number | string;
    priority?: boolean;
}

const BannerSection = ({
    src,
    alt = "banner-image",
    wrapperClass = "px-banner-wraper fix pb-70",
    imageClass = "",
    speed = 0.1,
    priority = false,
}: BannerSectionProps) => {
    return (
        <div className={wrapperClass}>
            <Image
                style={{ width: "100%", height: "auto" }}
                width={1905}
                height={1078}
                src={src}
                alt={alt}
                className={imageClass}
                data-speed={speed}
                priority={priority}
            />
        </div>
    );
};

export default BannerSection;
