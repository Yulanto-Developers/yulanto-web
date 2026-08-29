"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faSmile, faTrophy } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Imported Framer Motion
import { Variants } from 'framer-motion';
import ScrollRevealText from '@/components/ScrollRevealText';

// import en1 from '@/assets/img/website/startup/image-1.jpg'

const TextArrowIcon = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10L10 1M10 1H1M10 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const aboutStats = [
    {
        id: 1,
        value: "11+",
        index: <FontAwesomeIcon icon={faBriefcase} />,
        title: "Years of Experience",
        desc: "Celebrating 11+ Years of Excellence in Creativity, Innovation & Digital Solutions.",
    },
    {
        id: 2,
        value: "10+",
        index: <FontAwesomeIcon icon={faUsers} />,
        title: "Experienced Web Experts",
        desc: "Driven by Experience. Powered by Innovation. Delivered by Experienced Web Design Experts.",
    },
    {
        id: 3,
        value: "450+",
        index: <FontAwesomeIcon icon={faSmile} />,
        title: "Satisfied Clients",
        desc: "Successfully delivered 450 websites, including 50+ international websites, driving real business results.",
        isBrandSlider: false,
    },
    {
        id: 4,
        value: "1",
        index: <FontAwesomeIcon icon={faTrophy} />,
        title: " Design Award",
        desc: "Recognized with design awards for delivering outstanding web design solutions worldwide.",
        isBrandSlider: false,
    },
];

const brandImages = [
    { id: 1, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 2, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 3, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
    { id: 4, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 5, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 6, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
];

const brand_slider_params = {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
};

// Framer Motion Variants for cleaner JSX layout
const leftToRightVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const rightToLeftVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const StartupAgencyAbout = () => {
    // Setup intersection observer hook
    const { ref, inView } = useInView({
        triggerOnce: true, // Animates only the first time it scrolls into view
        threshold: 0.15,   // Starts animation when 15% of the section is visible
    });

    return (
        <section ref={ref} className="px-about-area about-skew-anim pt-lg-120   pb-50 overflow-hidden">
            <div className="container container-1550">


                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={leftToRightVariants}
                    className=""
                >
                    <span className="px-section-subtitle px-about-subtitle-box blink-ball">
                        Welcome to Yulanto Web Creations
                    </span>
                </motion.div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-about-content-wrap">


                            <h4 className="px-about-title mb-55">
                                <span className='text-blue-about'>We are a professional design agency</span> specializing in
                                <Link href={'/website'} > website design</Link>, <Link href={'/development'}>web development</Link>, <Link href={'/e-comerce'}>E-commerce</Link>, <Link href={'/graphic-desgin'}>Graphic Design</Link>, <Link href={'/seo'}>SEO</Link>, and <Link href={'/digital'}>digital marketing</Link>.
                            </h4>

                            <div className="row">
                                <div className="col-12">

                                    <motion.div

                                        className="px-about-content mb-70"
                                    >
                                        <p>
                                            Yulanto Web Creations is recognized as a top web design company in Chennai, <span> offering professional website design and web development services since 2015. </span> We excel in developing unique, creative, and high-performing websites that are customized to support businesses in establishing a solid online presence and achieving long-term growth.

                                        </p>

                                        <Link
                                            href="/about-us"
                                            className="px-about-link px-doubble-effect"
                                        >
                                            <span>Explore Us</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>


                        <motion.div
                            className="px-about-info-wrap"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        // variants={cardContainerVariants}
                        >
                            <div className="row gx-5">
                                {aboutStats.map((item) => {
                                    const rawNumber = parseInt(item.value.replace(/\D/g, ""), 10) || 0;
                                    const suffix = item.value.replace(/\d/g, "");

                                    return (
                                        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                                            <motion.div
                                                // variants={cardItemVariants}
                                                className="px-about-info mb-5 px-fade-anim"
                                            >
                                                <div className="px-about-info-head d-flex justify-content-between">
                                                    <h4>
                                                        <span>
                                                            {inView ? (
                                                                <CountUp start={0} end={rawNumber} duration={2.5} />
                                                            ) : (
                                                                "0"
                                                            )}
                                                        </span>
                                                        {suffix}
                                                    </h4>
                                                    <em className='icon-about'>{item.index}</em>
                                                </div>

                                                <div className="px-about-info-body d-flex flex-column justify-content-between">
                                                    <h4>
                                                        {item.title}
                                                    </h4>


                                                    <p>{item.desc}</p>

                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );



};

export default StartupAgencyAbout;