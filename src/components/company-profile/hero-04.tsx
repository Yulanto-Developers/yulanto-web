'use client'

import React, { useEffect } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface Hero04Props {
    subtitle?: string
    titleBlue?: string
    titleMain?: string
    description?: string
    washImage?: string
    primaryImage: string
    secondaryImage: string
    primaryAlt?: string
    secondaryAlt?: string
    animation?: 'none' | 'subtle'
}

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}

function ArtCollage({
    primaryImage,
    secondaryImage,
    primaryAlt = 'best brochure design',
    secondaryAlt = 'brochure design agency',
}: {
    primaryImage: string
    secondaryImage: string
    primaryAlt?: string
    secondaryAlt?: string
}) {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                margin: '0 auto',
            }}
        >
            {/* Primary Image */}
            <motion.div
                style={{
                    position: 'relative',
                    width: '80%',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f8fafc',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src={primaryImage}
                    alt={primaryAlt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-24px',
                    right: '0',
                    width: '55%',
                    aspectRatio: '1 / 1',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    border: '4px solid #ffffff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    backgroundColor: '#f8fafc',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src={secondaryImage}
                    alt={secondaryAlt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </motion.div>
        </div>
    )
}

export function Hero04({
    washImage,
    primaryImage,
    secondaryImage,
    primaryAlt = 'brochure design companies near me',
    secondaryAlt = 'brochure design agency ',
    animation = 'subtle',
}: Readonly<Hero04Props>) {
    const reduce = useReducedMotion()
    const animate = animation === 'subtle' && !reduce

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <section
            className="px-about-6-area pt-30 pb-40 pb-lg-70"
            style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
            }}
        >
            {/* Wash Background Image */}
            {washImage && (
                <div
                    aria-hidden
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        opacity: 0.15,
                        filter: 'blur(40px)',
                        zIndex: 0,
                    }}
                >
                    <img
                        src={washImage}
                        alt="agency brochure design"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}

            <div className="container container-1550" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                    {/* Top Title Row (Preserved Original Methods) */}
                    <div className="row align-items-center mb-30" data-aos="fade-up">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Professional Brochure Design Services in Chennai
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-0">
                                    <span className="text-blue-about">Brochures Designed to </span>Inform, Impress and Convert
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Content & Image Row (6 Columns each using Bootstrap col-lg-6 with reduced gap padding) */}
                    <div className="row align-items-center g-4">
                        {/* Left Side Content */}
                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="100">
                            <div>
                                <p className="text-figtree text-black mt-0" style={{ lineHeight: '1.7', marginBottom: '16px' }}>
                                    A well-designed brochure can be an effective marketing tool for introducing your company, promoting your products, explaining your services, or highlighting your key business advantages.
                                    Our brochure designers in Chennai create clean, professional, and informative brochures that combine compelling content with engaging visuals. We carefully organize information so your customers can understand your offerings quickly while maintaining a strong connection with your brand.
                                </p>
                                <p className="text-figtree text-black mb-0" style={{ lineHeight: '1.7' }}>
                                    Whether you need a brochure for a corporate presentation, product promotion, real estate project, industrial business, educational institution, event, or service company, we create designs according to your requirements.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Image Collage */}
                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
                            <div>
                                <ArtCollage
                                    primaryImage={primaryImage}
                                    secondaryImage={secondaryImage}
                                    primaryAlt={primaryAlt}
                                    secondaryAlt={secondaryAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero04