'use client';

import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';

import '@/assets/css/carousel-gallery.css';

export interface GalleryImageData {
    title?: string;
    url: string;
}

interface ImageGalleryProps {
    images: GalleryImageData[];
}

declare global {
    interface Window {
        gsap: any;
        MotionPathPlugin: any;
    }
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    images,
}) => {
    const [opened, setOpened] = useState(0);
    const [inPlace, setInPlace] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [gsapReady, setGsapReady] = useState(false);

    const autoplayTimer = useRef<number | null>(null);

    /* =========================================
       RESET WHEN IMAGES CHANGE
    ========================================= */

    useEffect(() => {
        setOpened(0);
        setInPlace(0);
    }, [images]);

    /* =========================================
       LOAD GSAP
    ========================================= */

    useEffect(() => {
        if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(
                window.MotionPathPlugin
            );

            setGsapReady(true);
            return;
        }

        const gsapScript = document.createElement('script');

        gsapScript.src =
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';

        gsapScript.onload = () => {
            const motionPathScript =
                document.createElement('script');

            motionPathScript.src =
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js';

            motionPathScript.onload = () => {
                if (
                    window.gsap &&
                    window.MotionPathPlugin
                ) {
                    window.gsap.registerPlugin(
                        window.MotionPathPlugin
                    );

                    setGsapReady(true);
                }
            };

            document.body.appendChild(
                motionPathScript
            );
        };

        document.body.appendChild(gsapScript);

        return () => {
            gsapScript.remove();
        };
    }, []);

    /* =========================================
       NEXT
    ========================================= */

    const next = useCallback(() => {
        if (!images.length) return;

        setOpened((current) => {
            return (current + 1) % images.length;
        });
    }, [images.length]);

    /* =========================================
       PREVIOUS
    ========================================= */

    const prev = useCallback(() => {
        if (!images.length) return;

        setOpened((current) => {
            return (
                (current - 1 + images.length) %
                images.length
            );
        });
    }, [images.length]);

    /* =========================================
       SELECT IMAGE
    ========================================= */

    const onClick = (index: number) => {
        if (!disabled) {
            setOpened(index);
        }
    };

    const onInPlace = (index: number) => {
        setInPlace(index);
    };

    /* =========================================
       AUTOPLAY
    ========================================= */

    useEffect(() => {
        if (!gsapReady || images.length <= 1) {
            return;
        }

        if (autoplayTimer.current) {
            clearInterval(autoplayTimer.current);
        }

        autoplayTimer.current =
            window.setInterval(next, 4500);

        return () => {
            if (autoplayTimer.current) {
                clearInterval(
                    autoplayTimer.current
                );
            }
        };
    }, [
        opened,
        gsapReady,
        next,
        images.length,
    ]);

    /* =========================================
       ANIMATION DISABLED STATE
    ========================================= */

    useEffect(() => {
        setDisabled(true);
    }, [opened]);

    useEffect(() => {
        setDisabled(false);
    }, [inPlace]);

    if (!images.length) {
        return null;
    }

    return (
        <div className="image-gallery">

            {/* =====================================
                GALLERY
            ===================================== */}

            <div className="image-gallery-box">

                {gsapReady &&
                    images.map((image, index) => (
                        <div
                            key={`${image.url}-${index}`}
                            className="gallery-image-layer"
                            style={{
                                zIndex:
                                    inPlace === index
                                        ? index
                                        : images.length + 1,
                            }}
                        >
                            <GalleryImage
                                total={images.length}
                                id={index}
                                url={image.url}
                                title={image.title}
                                open={
                                    opened === index
                                }
                                inPlace={
                                    inPlace === index
                                }
                                onInPlace={
                                    onInPlace
                                }
                            />
                        </div>
                    ))}

                {/* =================================
                    THUMBNAILS
                ================================= */}

                <div className="gallery-tabs">
                    <Tabs
                        images={images}
                        onSelect={onClick}
                    />
                </div>
            </div>

            {/* =====================================
                PREVIOUS BUTTON
            ===================================== */}

            <button
                type="button"
                className="gallery-arrow gallery-prev"
                onClick={prev}
                disabled={disabled}
                aria-label="Previous Image"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* =====================================
                NEXT BUTTON
            ===================================== */}

            <button
                type="button"
                className="gallery-arrow gallery-next"
                onClick={next}
                disabled={disabled}
                aria-label="Next Image"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};


/* =====================================================
   GALLERY IMAGE
===================================================== */

interface GalleryImageProps {
    url: string;
    title?: string;
    open: boolean;
    inPlace: boolean;
    id: number;
    onInPlace: (id: number) => void;
    total: number;
}

function GalleryImage({
    url,
    open,
    inPlace,
    id,
    onInPlace,
    total,
}: GalleryImageProps) {

    const [firstLoad, setLoaded] =
        useState(true);

    const clip =
        useRef<SVGCircleElement>(null);

    const gap = 10;
    const circleRadius = 7;

    const duration = 0.4;

    /*
        IMPORTANT:
        Original image ratio = 800 x 320
    */

    const width = 800;
    const height = 320;

    const scale = 700;

    const bigSize =
        circleRadius * scale;

    const defaults = {
        transformOrigin: 'center center',
    };

    /* =========================================
       POSITIONS
    ========================================= */

    const getPosSmall = () => ({
        cx:
            width / 2 -
            (
                total *
                    (circleRadius * 2 + gap) -
                gap
            ) /
                2 +
            id *
                (circleRadius * 2 + gap),

        cy: height - 30,

        r: circleRadius,
    });

    const getPosSmallAbove = () => ({
        cx:
            width / 2 -
            (
                total *
                    (circleRadius * 2 + gap) -
                gap
            ) /
                2 +
            id *
                (circleRadius * 2 + gap),

        cy: height / 2,

        r: circleRadius * 2,
    });

    const getPosCenter = () => ({
        cx: width / 2,
        cy: height / 2,
        r: circleRadius * 7,
    });

    const getPosEnd = () => ({
        cx: width / 2 - bigSize,
        cy: height / 2,
        r: bigSize,
    });

    const getPosStart = () => ({
        cx: width / 2 + bigSize,
        cy: height / 2,
        r: bigSize,
    });

    /* =========================================
       GSAP ANIMATION
    ========================================= */

    useEffect(() => {
        const gsap = window.gsap;

        if (!gsap || !clip.current) {
            return;
        }

        setLoaded(false);

        const flipDuration =
            firstLoad ? 0 : duration;

        const upDuration =
            firstLoad ? 0 : 0.2;

        const bounceDuration =
            firstLoad ? 0.01 : 1;

        const delay =
            firstLoad
                ? 0
                : flipDuration + upDuration;

        if (open) {

            gsap
                .timeline()
                .set(
                    clip.current,
                    {
                        ...defaults,
                        ...getPosSmall(),
                    }
                )
                .to(
                    clip.current,
                    {
                        ...defaults,
                        ...getPosCenter(),
                        duration: upDuration,
                        ease: 'power3.inOut',
                    }
                )
                .to(
                    clip.current,
                    {
                        ...defaults,
                        ...getPosEnd(),
                        duration: flipDuration,
                        ease: 'power4.in',
                        onComplete: () =>
                            onInPlace(id),
                    }
                );

        } else {

            gsap
                .timeline({
                    overwrite: true,
                })
                .set(
                    clip.current,
                    {
                        ...defaults,
                        ...getPosStart(),
                    }
                )
                .to(
                    clip.current,
                    {
                        ...defaults,
                        ...getPosCenter(),
                        delay,
                        duration: flipDuration,
                        ease: 'power4.out',
                    }
                )
                .to(
                    clip.current,
                    {
                        ...defaults,
                        motionPath: {
                            path: [
                                getPosSmallAbove(),
                                getPosSmall(),
                            ],
                            curviness: 1,
                        },
                        duration: bounceDuration,
                        ease: 'bounce.out',
                    }
                );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            className="gallery-svg"
        >

            <defs>

                <clipPath
                    id={`${id}_circleClip`}
                >
                    <circle
                        ref={clip}
                        cx="0"
                        cy="0"
                        r={circleRadius}
                    />
                </clipPath>

                <clipPath
                    id={`${id}_squareClip`}
                >
                    <rect
                        width={width}
                        height={height}
                    />
                </clipPath>

            </defs>

            <g
                clipPath={`url(#${id}${
                    inPlace
                        ? '_squareClip'
                        : '_circleClip'
                })`}
            >
                <image
                    width={width}
                    height={height}
                    href={url}
                    preserveAspectRatio="xMidYMid slice"
                    className="gallery-image"
                />
            </g>

        </svg>
    );
}


/* =====================================================
   THUMBNAILS
===================================================== */

interface TabsProps {
    images: GalleryImageData[];
    onSelect: (index: number) => void;
}

function Tabs({
    images,
    onSelect,
}: TabsProps) {

    const gap = 10;
    const circleRadius = 7;

    const width = 800;
    const height = 320;

    const getPosX = (i: number) =>
        width / 2 -
        (
            images.length *
                (circleRadius * 2 + gap) -
            gap
        ) /
            2 +
        i *
            (circleRadius * 2 + gap);

    const getPosY = () =>
        height - 30;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            className="gallery-tabs-svg"
        >

            {images.map((image, index) => (

                <g
                    key={`${image.url}-${index}`}
                    className="gallery-tab"
                >

                    <defs>

                        <clipPath
                            id={`tab_${index}_clip`}
                        >
                            <circle
                                cx={getPosX(index)}
                                cy={getPosY()}
                                r={circleRadius}
                            />
                        </clipPath>

                    </defs>

                    <image
                        x={
                            getPosX(index) -
                            circleRadius
                        }
                        y={
                            getPosY() -
                            circleRadius
                        }
                        width={
                            circleRadius * 2
                        }
                        height={
                            circleRadius * 2
                        }
                        href={image.url}
                        clipPath={`url(#tab_${index}_clip)`}
                        preserveAspectRatio="xMidYMid slice"
                        className="gallery-thumbnail"
                    />

                    <circle
                        cx={getPosX(index)}
                        cy={getPosY()}
                        r={circleRadius + 2}
                        onClick={() =>
                            onSelect(index)
                        }
                        className="gallery-tab-circle"
                    />

                </g>

            ))}

        </svg>
    );
}

export default ImageGallery;