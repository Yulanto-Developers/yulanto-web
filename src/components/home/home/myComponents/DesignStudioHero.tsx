// // "use client";
// // import HeroSlide from "../components/HeroSlide";
// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Autoplay, FreeMode } from "swiper/modules";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { text_slider_params } from "@/constant";
// // import { SLIDER_TEXTS } from "@/data/site-data";
// // import { StarIcon } from "@/svg/StarIcons";

// // const heroContent = [
// //     {
// //         col: "col-lg-2 he-10", img: "/assets/img/banner/bd.jpg",
// //         title: "Boost Website Traffic to Your Business and Generate Revenue.",
// //         subtitle: "You Are In The Right Spot",
// //         spacingCls: "pl-10", alignCls: "justify-content-start"
// //     },
// //     {
// //         col: "col-lg-4", img: "/assets/img/banner/bd.jpg",
// //         title: "Boost Website Traffic to Your Business", subtitle: " ",
// //         spacingCls: "pl-80", alignCls: "justify-content-start"
// //     },
// //     {
// //         col: "col-lg-4", img: "/assets/img/banner/bd.jpg",
// //         title: " ", subtitle: " ",
// //         spacingCls: "pr-10", alignCls: "justify-content-end"
// //     },
// //     {
// //         col: "col-lg-2 he-10", img: "/assets/img/banner/bd.jpg",
// //         title: "A Professional Approach  in Every Aspect of Our Work.", subtitle: "Awesome Website Creation in Chennai For Your Business",
// //         spacingCls: "pl-10", alignCls: "justify-content-end"
// //     },
// //     {
// //         col: "col-lg-3", img: "/assets/img/banner/bd.png",
// //         title: "Cultivate Your Business Brand and Reputation Worldwide.", subtitle: "Handle Your Business With Experienced Web Experts in Chennai",
// //         spacingCls: "pr-10", alignCls: "justify-content-end"
// //     },
// //     {
// //         col: "col-lg-3", img: "/assets/img/banner/bd.jpg",
// //         title: "Enhance Your Business Presence and Reliability Online.", subtitle: "Transform Your Business Into The Next Level",
// //         spacingCls: "pl-10", alignCls: "justify-content-start"
// //     },
// //     {
// //         col: "col-lg-3", img: "/assets/img/banner/bd.jpg",
// //         title: "Our web designers commit to take your business", subtitle: "innovative strategies, dedication and effort",
// //         spacingCls: "pl-10", alignCls: "justify-content-start"
// //     },
// //     {
// //         col: "col-lg-3", img: "/assets/img/banner/bd.jpg",
// //         title: " We specialize in guiding you towards the right path", subtitle: "create websites in Chennai with a multitude features",
// //         spacingCls: "pl-10", alignCls: "justify-content-start"
// //     },
// // ];

// // const Hero = () => {
// //     const defaultActive = 1;
// //     const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

// //     // Auto-run slide interval every 3 seconds
// //     useEffect(() => {
// //         const interval = setInterval(() => {
// //             setActiveIndex((prevIndex) => {
// //                 let nextIndex = (prevIndex + 1) % heroContent.length;

// //                 // Optional: If you want the auto-play to skip index 1 and 2 entirely 
// //                 // because they have empty text, uncomment the lines below:

// //                 while (nextIndex === 1 || nextIndex === 2) {
// //                     nextIndex = (nextIndex + 1) % heroContent.length;
// //                 }


// //                 return nextIndex;
// //             });
// //         }, 3000); // 3 seconds

// //         return () => clearInterval(interval);
// //     }, []);

// //     return (
// //         <div className="px-hero-2-area pt-120 pb-20">
// //             <div className="px-hero-2-main d-none d-xl-block p-relative">
// //                 <div className="container container-1630">
// //                     <div className="row">
// //                         {heroContent.map((item, index) => {
// //                             const isActive = activeIndex === index;
// //                             const shouldHideImage = index === 1 || index === 2;

// //                             return (
// //                                 <div className={item.col} key={`${item.title}-${index}`}>
// //                                     <div
// //                                         className={`px-hero-2-item d-flex ${item.alignCls} mb-50 ${item.spacingCls} ${isActive ? "active" : ""}`}
// //                                     >
// //                                         <div
// //                                             className="px-fade-anim"
// //                                             data-delay=".3"
// //                                             onMouseEnter={() => setActiveIndex(index)}
// //                                         >
// //                                             {!shouldHideImage && (
// //                                                 <div className="px-hero-2-thumb rounded">
// //                                                     <Link href="/portfolio-details-1">
// //                                                         <Image width={130} height={168} src={item.img} alt={item.title}  />
// //                                                     </Link>
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                         <div className="px-hero-2-content text-center z-index-1">
// //                                             <div className="fix">
// //                                                 <span dangerouslySetInnerHTML={{ __html: item.title }} />
// //                                             </div>
// //                                             <div className="fix">
// //                                                 <span className="desc" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             );
// //                         })}
// //                         <div className="text-center btn-partent">
// //                             <Link href='/' className="button-style">Ask Pricing</Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="px-hero-2-slider d-xl-none">
// //                 <div className="container">
// //                     <HeroSlide />
// //                 </div>
// //             </div>
// //             <div
// //                 className="px-text-slider-wrap pt-25 pb-25"
// //                 style={{ backgroundColor: "#053456" }}>
// //                 <div className="px-text-slider-active tp-slider-transtion">
// //                     <Swiper
// //                         modules={[FreeMode, Autoplay]}
// //                         {...text_slider_params}
// //                     >
// //                         {SLIDER_TEXTS.map((item) => (
// //                             <SwiperSlide key={item.id}>
// //                                 <div className="px-text-slider-item d-flex align-items-center">
// //                                     <span>{item.text}</span>
// //                                     <span className="pl-40">
// //                                         <StarIcon />
// //                                     </span>
// //                                 </div>
// //                             </SwiperSlide>
// //                         ))}
// //                     </Swiper>
// //                 </div>

// //             </div>
// //             {/* <div className="container-fluid">
// //                 <div className="row">
// //                     <div className="col-xl-12">
// //                         <div className="px-hero-2-bottom text-center p-relative px-fade-anim" data-delay=".3">
// //                             <h4 className="px-hero-2-text d-flex align-items-end justify-content-center">
// //                                 design <i className="d-none d-xl-block"><span>©Pixora <br /> Live in a World <br /> of creative designs</span></i>Studio
// //                             </h4>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div> */}
// //         </div>
// //     );
// // };

// // export default Hero;



// "use client";
// import HeroSlide from "../components/HeroSlide";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { text_slider_params } from "@/constant";
// import { SLIDER_TEXTS } from "@/data/site-data";
// import { StarIcon } from "@/svg/StarIcons";

// const heroContent = [
//     {
//         col: "col-lg-2 he-10", img: "/assets/img/banner/Image-1.jpg",
//         title: "We start by listening closely to your goals, ensuring you feel understood from day one.",
//         subtitle: "Leading Web Design Company in Chennai for Business Growth.",
//         spacingCls: "pl-10", alignCls: "justify-content-start",
//         head: "Make an inquiry"
//     },
//     {
//         col: "col-lg-4", img: "/assets/img/banner/bd.jpg",
//         title: "We start by listening closely to your goals, ensuring you feel understood from the very beginning.", subtitle: "Awesome Website Creation in Chennai For Your Business",
//         spacingCls: "pl-80", alignCls: "justify-content-start",
//         head: "Boost"
//     },
//     {
//         col: "col-lg-4", img: "/assets/img/banner/bd.jpg",
//         title: " ", subtitle: "Awesome Website Creation in Chennai For Your Business",
//         spacingCls: "pr-10", alignCls: "justify-content-end",
//         head: "Design"
//     },
//     {
//         col: "col-lg-2 he-10", img: "/assets/img/banner/Image-2.jpg",
//         title: "Every detail is noted and aligned with your vision, so nothing important is ever missed.", subtitle: "Website Development Company in Chennai for Startups, SMEs & Corporates.",
//         spacingCls: "pl-10", alignCls: "justify-content-end",
//         head: "Gather Requirements"
//     },
//     {
//         col: "col-lg-3", img: "/assets/img/banner/Image-3.jpg",
//         title: "Our experts turn your ideas into seamless web solutions that drive your business success.", subtitle: "Top-Rated Web Design Company in Chennai for Every Business.",
//         spacingCls: "pr-10", alignCls: "justify-content-end",
//         head: "Write the code"
//     },
//     {
//         col: "col-lg-3", img: "/assets/img/banner/Image-4.jpg",
//         title: "We craft a web presence that reflects your brand’s strength and professionalism.", subtitle: "Build a Powerful Business Website design with Experts in Chennai.",
//         spacingCls: "pl-10", alignCls: "justify-content-start",
//         head: "Design the website"
//     },
//     {
//         col: "col-lg-3", img: "/assets/img/banner/Image-5.jpg",
//         title: "The result is a platform built to attract opportunities and drive your business forward.", subtitle: "Custom Website creations company for Growing Businesses in Chennai",
//         spacingCls: "pl-10", alignCls: "justify-content-start",
//         head: "Increase Sales"
//     },
//     {
//         col: "col-lg-3", img: "/assets/img/banner/Image-6.jpg",
//         title: "Our commitment is to a long-term partnership that supports your business growth.", subtitle: "Elevate Your Business with Chennai's Best Web Design Company",
//         spacingCls: "pl-10", alignCls: "justify-content-start",
//         head: "Continuous Success"
//     },
// ];

// const Hero = () => {
//     const defaultActive = 1;
//     const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

//     // Auto-run slide interval every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) => {
//                 let nextIndex = (prevIndex + 1) % heroContent.length;

//                 while (nextIndex === 1 || nextIndex === 2) {
//                     nextIndex = (nextIndex + 1) % heroContent.length;
//                 }

//                 return nextIndex;
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="px-hero-2-area pt-120 pb-20">
//             <div className="px-hero-2-main d-none d-xl-block p-relative">
//                 <div className="container container-1630">
//                     <div className="row">
//                         {heroContent.map((item, index) => {
//                             const isActive = activeIndex === index;
//                             const shouldHideImage = index === 1 || index === 2;

//                             return (
//                                 <div className={item.col} key={`${item.title}-${index}`}>
//                                     <div
//                                         className={`px-hero-2-item d-flex ${item.alignCls} mb-50 ${item.spacingCls} ${isActive ? "active" : ""}`}
//                                     >
//                                         <div
//                                             className="px-fade-anim"
//                                             data-delay=".3"
//                                             onMouseEnter={() => setActiveIndex(index)}
//                                             style={{ position: 'relative' }}
//                                         >
//                                             {!shouldHideImage && (
//                                                 <div className="px-hero-2-thumb rounded" style={{ position: 'relative', overflow: 'hidden' }}>
//                                                     <Link href="/">
//                                                         <Image
//                                                             width={130}
//                                                             height={168}
//                                                             src={item.img}
//                                                             alt={item.title}
//                                                             style={{
//                                                                 transition: "filter 0.3s ease",
//                                                                 filter: isActive ? "grayscale(100%) brightness(50%)" : "none"
//                                                             }}
//                                                         />
//                                                     </Link>

//                                                     {/* Gray overlay with Head title on the currently hovered/active image */}
//                                                     {isActive && (
//                                                         <div style={{
//                                                             position: 'absolute',
//                                                             top: 0,
//                                                             left: 0,
//                                                             width: '100%',
//                                                             height: '100%',
//                                                             display: 'flex',
//                                                             alignItems: 'center',
//                                                             justifyContent: 'center',
//                                                             pointerEvents: 'none',
//                                                             padding: '4px'
//                                                         }}>
//                                                             <span style={{
//                                                                 color: '#ffffff',
//                                                                 fontSize: '14px',
//                                                                 fontWeight: 'bold',
//                                                                 textTransform: 'uppercase',
//                                                                 letterSpacing: '1px',
//                                                                 textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
//                                                                 textAlign: 'center',
//                                                                 fontFamily: 'var(--font-tenor)'

//                                                             }}>
//                                                                 {item.head}
//                                                             </span>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className="px-hero-2-content text-center z-index-1">
//                                             <div className="fix">
//                                                 <span className="title-cls" dangerouslySetInnerHTML={{ __html: item.title }} />
//                                             </div>
//                                             <div className="fix">
//                                                 <span className="desc desc-cls" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                         <div className="text-center btn-partent">
//                             <Link href='/' className="button-style">Get a Free Quote</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="px-hero-2-slider d-xl-none">
//                 <div className="container">
//                     <HeroSlide />
//                 </div>
//             </div>
//             <div
//                 className="px-text-slider-wrap pt-25 pb-25"
//                 style={{ backgroundColor: "#053456" }}>
//                 <div className="px-text-slider-active tp-slider-transtion">
//                     <Swiper
//                         modules={[FreeMode, Autoplay]}
//                         {...text_slider_params}
//                     >
//                         {SLIDER_TEXTS.map((item) => (
//                             <SwiperSlide key={item.id}>
//                                 <div className="px-text-slider-item d-flex align-items-center">
//                                     <span>{item.text}</span>
//                                     <span className="pl-40">
//                                         <StarIcon />
//                                     </span>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;




"use client";

import HeroSlide from "../components/HeroSlide";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_params } from "@/constant";
import { SLIDER_TEXTS } from "@/data/site-data";
import { StarIcon } from "@/svg/StarIcons";
import { useQuoteModal } from "./Content/QuoteContext";
import BgPattern from '@/assets/img/banner/bgPattern.png'


const heroContent = [
    {
        // 0
        col: "col-lg-2 he-10", img: "/assets/img/banner/hero-img-1.webp",
        title: "We start by listening closely to your goals, ensuring you feel understood from day one.",
        subtitle: "Leading Web Design Company in Chennai for Business Growth.",
        spacingCls: "pl-10", alignCls: "justify-content-start",
        head: "Make an Enquiry"
    },
    {
        //1
        col: "col-lg-4", img: "/assets/img/banner/bd.jpg",
        title: "We start by listening closely to your goals, ensuring you feel understood from the very beginning.", subtitle: "Awesome Website Creation in Chennai For Your Business",
        spacingCls: "pl-80", alignCls: "justify-content-start",
        head: "Boost"
    },
    {
        // 2
        col: "col-lg-4", img: "/assets/img/banner/banner-1.jpg",
        title: " ", subtitle: "Awesome Website Creation in Chennai For Your Business",
        spacingCls: "pr-10", alignCls: "justify-content-end",
        head: "Design"
    },
    {
        //3
        col: "col-lg-2 he-10", img: "/assets/img/banner/hero-img-6.webp",
        title: "Every detail is noted and aligned with your vision, so nothing important is ever missed.", subtitle: "Website Development Company in Chennai for Startups, SMEs & Corporates.",
        spacingCls: "pl-10", alignCls: "justify-content-end",
        head: "Increase Sales"
    },
    {
        //4
        col: "col-lg-3", img: "/assets/img/banner/hero-img-2.webp",
        title: "Our experts turn your ideas into seamless web solutions that drive your business success.", subtitle: "Top-Rated Web Design Company in Chennai for Every Business.",
        spacingCls: "pr-10", alignCls: "justify-content-end",
        head: "Gather Requirements"
    },
    {
        //5
        col: "col-lg-3", img: "/assets/img/banner/hero-img-3.webp",
        title: "We craft a web presence that reflects your brand’s strength and professionalism.", subtitle: "Build a Powerful Business Website design with Experts in Chennai.",
        spacingCls: "pl-10", alignCls: "justify-content-start",
        head: " Write the code"
    },
    {
        //6
        col: "col-lg-3", img: "/assets/img/banner/hero-img-4.webp",
        title: "The result is a platform built to attract opportunities and drive your business forward.", subtitle: "Custom Website creations company for Growing Businesses in Chennai",
        spacingCls: "pl-10", alignCls: "justify-content-start",
        head: "Design the website"
    },
    {
        //7
        col: "col-lg-3", img: "/assets/img/banner/hero-img-5.webp",
        title: "Our commitment is to a long-term partnership that supports your business growth.", subtitle: "Elevate Your Business with Chennai's Best Web Design Company",
        spacingCls: "pl-10", alignCls: "justify-content-start",
        head: "Continuous Success"
    },
];

const ACTIVE_ITEMS = [0,
    4,
    5,
    6,
    7,
    3,];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const activeIndex = ACTIVE_ITEMS[current];

    // function getQuotes() {
    //     setShowModal(true);
    // }
    const { openModal } = useQuoteModal();

    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % ACTIVE_ITEMS.length);
            }, 6000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovered]);

    function getQuotes() {
        alert('Quotes Request')

    }

    return (
        <div className="px-hero-2-area pt-120 bg-white" style={{ backgroundImage: `url(${BgPattern.src})`, backgroundPosition: 'fixed', backgroundRepeat: 'repeat', objectFit: 'cover' }}>
            <div className="px-hero-2-main d-none d-xl-block p-relative">
                <div className="container">
                    <div className="row">
                        {heroContent.map((item, index) => {
                            const shouldHideImage = index === 1 || index === 2;
                            const isActive = activeIndex === index;

                            return (
                                <div className={item.col} key={index}>
                                    <div
                                        className={`px-hero-2-item d-flex ${item.alignCls} mb-50 ${item.spacingCls} ${isActive ? "active" : ""}`}
                                    >
                                        <div
                                            className="px-fade-anim"
                                            data-delay=".3"
                                            style={{ position: "relative" }}
                                            onMouseEnter={() => {
                                                if (!shouldHideImage) {
                                                    setIsHovered(true);
                                                    setCurrent(ACTIVE_ITEMS.indexOf(index));
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovered(false);
                                            }}
                                        >
                                            {!shouldHideImage && (
                                                <div
                                                    className="px-hero-2-thumb rounded"
                                                    style={{
                                                        position: "relative",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <Link href="/">
                                                        <Image
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={0}
                                                            height={0}
                                                            unoptimized
                                                            // style={{
                                                            //     transition:
                                                            //         "0.3s",
                                                            //     filter: isActive
                                                            //         ? "grayscale(100%) brightness(50%)"
                                                            //         : "none",
                                                            //     width: 'auto', height: 'auto'
                                                            // }}

                                                            style={{
                                                                transition: "0.3s",
                                                                width: "auto",
                                                                height: "auto"
                                                            }}

                                                        />
                                                    </Link>

                                                    {isActive && (
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                inset: 0,
                                                                backgroundColor: "#053456",
                                                                opacity: 0.7,
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                pointerEvents: "none",
                                                                padding: "4px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "bold",
                                                                    textTransform:
                                                                        "uppercase",
                                                                    textAlign:
                                                                        "center",
                                                                    letterSpacing:
                                                                        "1px",
                                                                    fontFamily:
                                                                        "var(--font-tenor)",
                                                                    textShadow:
                                                                        "1px 1px 4px rgba(0,0,0,.8)",
                                                                    zIndex: 9999
                                                                }}
                                                            >
                                                                {item.head}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-hero-2-content text-center z-index-1">
                                            <div className="fix">
                                                <span
                                                    className="title-cls"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.title,
                                                    }}
                                                />
                                            </div>

                                            <div className="fix">
                                                <span
                                                    className="desc desc-cls"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.subtitle,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="text-center btn-partent">
                            <button
                                onClick={openModal}
                                className="button-style relative-cls-header"
                            >
                                <span className="text-tenor">
                                    Get a Free Quote
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-hero-2-slider d-xl-none">
                <div className="container">
                    <HeroSlide />
                </div>
            </div>

            <div
                className="px-text-slider-wrap pt-25 pb-25"
                style={{ backgroundColor: "#053456" }}
            >
                <div className="px-text-slider-active tp-slider-transtion">
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        {...text_slider_params}
                    >
                        {SLIDER_TEXTS.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="px-text-slider-item d-flex align-items-center">
                                    <span>{item.text}</span>

                                    <span className="pl-40">
                                        <StarIcon />
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>



        </div>
    );
};

export default Hero;