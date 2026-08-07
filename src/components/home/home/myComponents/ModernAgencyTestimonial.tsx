"use client";
import { useEffect, useRef } from "react";
import { modernAgencyTestimonials } from "@/data/testimonial-data";
import Testimonialtem from "./Content/TestContent";
import { testimonial_slide_params } from "@/constant";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { OurPartner } from '@/components/home/home/myComponents'

// Counter Animation Component
const AnimatedCounter = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
};

// Reusable Statistic Card Component with Dynamic Hover Colors & Counter Animations
interface StatCardProps {
    icon: React.ReactNode;
    titleBeforeNumber?: string;
    titleAfterNumber?: string;
    targetNumber: number;
    countLabel: string;
    borderColor: string;
    hoverBgColor: string;
    className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    icon,
    titleBeforeNumber,
    titleAfterNumber,
    targetNumber,
    countLabel,
    borderColor,
    hoverBgColor,
    className
}) => {
    return (
        <motion.div
            className={`card mb-3 border-0 p-3 w-100 ${className ?? ""}`}
            whileHover={{
                y: -6,
                scale: 1.02,
                backgroundColor: hoverBgColor,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
                borderLeft: `5px solid ${borderColor}`,
                borderRadius: '0px 30px 0px 30px',
                backgroundColor: '#ffffff',
                maxWidth: '320px',
                marginLeft: 'auto',
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                cursor: "pointer"
            }}
        >
            <div className="d-flex align-items-center justify-content-between px-2">
                <div className="text-start">
                    <h5 className="fw-bold mb-1 text-tenor" style={{ color: '#2b2d42', fontSize: '1.25rem' }}>
                        {titleBeforeNumber}
                        <AnimatedCounter value={targetNumber} />
                        {titleAfterNumber}
                    </h5>
                    <span className="text-muted text-figtree fw-semibold" style={{ fontSize: '0.95rem' }}>
                        {countLabel}
                    </span>
                </div>
                <div style={{ color: '#4a4a4a' }}>
                    {icon}
                </div>
            </div>
        </motion.div>
    );
};

const Testimonial = () => {
    return (
        <section className="px-testimonial-area pt-lg-120  pb-lg-100 pb-80" style={{ backgroundColor: '#F5F5F5', overflow: 'hidden' }}>
            <div className="container">

                {/* Top Animated Header Row */}
                <div className="row align-items-baseline mb-5">
                    <div className="col-xl-3 col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="px-section-subtitle pt-40 blink-ball text-tenor   text-muted" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                                Trusted by Our Clients
                            </span>
                        </motion.div>
                    </div>

                    <div className="col-xl-9 col-md-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            <div className="px-project-title-box">
                                <h3 className="px-section-title mb-25 text-effect" style={{ fontSize: 'clamp(48px, 5vw, 80px)' }}>
                                    <span className="word">Client </span>
                                    <span>Testimonials</span>
                                </h3>

                                <p className="ms-lg-4 font-paragraph-cls">
                                    We've worked with clients globally across various industries and helped them achieve their business goals. Here are some of our recent success stories.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content Row */}
                <div className="row align-items-center pt-lg-50">

                    {/* Left Column: Stat Cards & Review Images */}
                    <div className="col-xl-4  mt-5 mt-xl-0">
                        <div className="d-flex flex-column align-items-center align-items-lg-end">

                            {/* Card 1: Trusted By */}
                            <StatCard
                                className="text-tenor"
                                borderColor="#53AE7D"
                                hoverBgColor="#e8f5e9"
                                titleBeforeNumber="Trusted by "
                                targetNumber={450}
                                titleAfterNumber=" +"
                                countLabel="Satisfied Customers"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233.46.46 0 0 0 .574-.002 10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.492zM8 2c.5 0 1.417.215 2.474.507.947.26 1.894.55 2.44.735a13.6 13.6 0 0 1-1.91 7.744c-1.16 1.516-2.4 2.584-3.004 3.065a12.4 12.4 0 0 1-3.004-3.066 13.6 13.6 0 0 1-1.91-7.744c.546-.185 1.493-.476 2.44-.735C6.583 2.215 7.5 2 8 2z" />
                                    </svg>
                                }
                            />

                            {/* Card 2: Active Clients */}
                            <StatCard
                                className="text-tenor"
                                borderColor="#053456"
                                hoverBgColor="#e0f7fa"
                                targetNumber={350}
                                titleAfterNumber=" +"
                                countLabel="Active Clients"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-heart" viewBox="0 0 16 16">
                                        <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                                    </svg>
                                }
                            />

                            {/* Card 3: Global Clients */}
                            <StatCard
                                className="text-tenor"
                                borderColor="#53AE7D"
                                hoverBgColor="#e8f5e9"
                                targetNumber={50}
                                titleAfterNumber=" +"
                                countLabel="Global Clients"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.424-1.248 1.127-1.62 2.046H7.5V1.077zM6.855 4.23c.37-.856.885-1.498 1.465-1.93V4.23H6.855zm1.79-1.93c.58.432 1.095 1.074 1.465 1.93H8.645V2.3zM9.42 1.077c-.372.919-.95 1.622-1.62 2.046V1.077zM1.077 7.5h3.047a22.947 22.947 0 0 1 .115-1.623H1.243A7.004 7.004 0 0 0 1.077 7.5zm4.13-1.623c.357-.813.812-1.48 1.293-1.954H4.358c-.522.516-.946 1.163-1.213 1.954h2.062zm1.293-1.954c-.488.474-.943 1.141-1.3 1.954h2.6V3.923zM7.5 4.23V7.5H4.243a24.114 24.114 0 0 1 .047-1.623H6.24V4.23h1.26zm.26 0h1.26v1.647h1.95V5.877H8.75V4.23z" />
                                    </svg>
                                }
                            />

                            {/* Ratings Section with 2 Small Images */}
                            <div className="d-flex gap-5 " style={{ maxWidth: '100%' }}>
                                <div className="text-end">
                                    <img
                                        src="/assets/img/brand/review.png"
                                        alt="Google Rating"

                                        className="img-fluid object-contain"
                                        style={{ width: '80%' }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Testimonial Content (Occupies 8 columns) */}
                    <div className="col-xl-8 pb-5">
                        <div className="px-testimonial-slider pb-10">
                            <div className="px-testimonial-active">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    {...testimonial_slide_params}
                                >
                                    {modernAgencyTestimonials.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <Testimonialtem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <OurPartner />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;