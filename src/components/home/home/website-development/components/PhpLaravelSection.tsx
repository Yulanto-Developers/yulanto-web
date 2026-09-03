'use client';

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ==========================================================================
   1. INLINE ANIMATION COMPONENTS
   ========================================================================== */

interface TimelineContentProps {
    as?: React.ElementType;
    animationNum?: number;
    timelineRef?: React.RefObject<HTMLDivElement | null>;
    customVariants?: Variants;
    style?: React.CSSProperties;
    children: React.ReactNode;
    [key: string]: any;
}

const TimelineContent: React.FC<TimelineContentProps> = ({
    as: Component = 'div',
    animationNum = 0,
    customVariants,
    children,
    style,
    ...props
}) => {
    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={animationNum}
            variants={customVariants}
            style={style}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};

interface VerticalCutRevealProps {
    children: string;
    splitBy?: 'words' | 'characters';
    staggerDuration?: number;
    staggerFrom?: 'first' | 'last';
    reverse?: boolean;
    transition?: any;
}

const VerticalCutReveal: React.FC<VerticalCutRevealProps> = ({
    children,
    splitBy = 'words',
    staggerDuration = 0.1,
    transition = { type: 'spring', stiffness: 250, damping: 30, delay: 0.2 },
}) => {
    const elements = splitBy === 'words' ? children.split(' ') : children.split('');

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDuration,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: '100%', opacity: 0 },
        visible: {
            y: '0%',
            opacity: 1,
            transition: transition,
        },
    };

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                overflow: 'hidden',
                columnGap: '0.25em',
                rowGap: '0.1em',
            }}
        >
            {elements.map((el, index) => (
                <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
                    <motion.span variants={itemVariants} style={{ display: 'inline-block' }}>
                        {el}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
};

/* ==========================================================================
   2. MAIN SECTION COMPONENT
   ========================================================================== */

export default function AboutPhpLaravelSection() {
    const heroRef = useRef<HTMLDivElement>(null);

    const revealVariants: Variants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay: i * 0.15,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: 'blur(10px)',
            y: -20,
            opacity: 0,
        },
    };

    const scaleVariants: Variants = {
        visible: (i: number) => ({
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay: i * 0.15,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: 'blur(10px)',
            opacity: 0,
        },
    };

    const styles: { [key: string]: React.CSSProperties } = {
        section: {
            padding: '48px 16px',
            backgroundColor: '#ffffff',
        },
        container: {
            maxWidth: '1152px',
            margin: '0 auto',
        },
        relativeWrapper: {
            position: 'relative',
        },
        figure: {
            position: 'relative',
            margin: 0,
        },
        statsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
            fontSize: '14px',
            borderBottom: '1px solid #e5e7eb',
        },
        statGroup: {
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        statItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '15px',
        },
        boldBrand: {
            color: '#053456',
            fontWeight: 'bold',
            fontSize: '18px',
        },
        grayText: {
            color: '#4b5563',
            fontWeight: 500,
        },
        mainGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginTop: '32px',
        },
        leftCol: {
            gridColumn: 'span 2',
        },
        h1: {
            fontSize: '36px',
            lineHeight: '1.2',
            fontWeight: 600,
            color: '#111827',
            marginBottom: '32px',
        },
        contentGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
        },
        blockTitle: {
            fontSize: '16px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '6px',
        },
        paragraph: {
            fontSize: '14px !important',
            lineHeight: '1.6',
            color: '#4b5563',
            textAlign: 'justify',
            margin: 0,
        },
        rightCol: {
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
        },
        brandTitle: {
            color: '#053456',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '4px',
        },
        brandSub: {
            color: '#4b5563',
            fontSize: '14px',
            marginBottom: '32px',
        },
        callToActionText: {
            color: '#111827',
            fontWeight: 500,
            marginBottom: '16px',
            fontSize: '15px',
        },
        btn: {
            backgroundColor: '#053456',
            border: '1px solid #053456',
            boxShadow: '0 10px 15px -3px rgba(5, 52, 86, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            marginLeft: 'auto',
            transition: 'all 0.3s ease-in-out',
        },
    };

    return (
        <section
            className="px-about-6-area pt-50 pb-80 pb-lg-110"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="container container-1550">
                <div style={styles.relativeWrapper}>
                    {/* Header Bar / Title Section */}
                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-xl-12">
                            <div className="px-project-title-box">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    PHP & Laravel Services in Chennai
                                </span>
                                <h4 className="px-about-title mb-20">
                                    <span style={{ color: '#053456' }}>
                                        PHP & Laravel Development{' '}
                                    </span>
                                    Company in Chennai
                                </h4>
                                <p className="text-figtree text-black mt-2">
                                    As a reliable PHP development company in Chennai, we provide complete PHP consulting, development, testing, deployment, and maintenance services. Our developers understand your business requirements and create solutions that are aligned with your objectives, target audience, and long-term growth.
                                </p>
                                <p className="text-figtree text-black mt-2">
                                    We also provide Laravel development services in Chennai for businesses looking for modern, scalable, and structured web applications. Laravel enables our developers to build secure and feature-rich applications while maintaining clean and manageable code.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Masked Hero Banner */}
                    <TimelineContent
                        as="figure"
                        animationNum={4}
                        timelineRef={heroRef}
                        customVariants={scaleVariants}
                        style={styles.figure}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 40">
                            <defs>
                                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                                    <path
                                        d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                                        fill="#D9D9D9"
                                    />
                                </clipPath>
                            </defs>
                            <image
                                clipPath="url(#clip-inverted)"
                                preserveAspectRatio="xMidYMid slice"
                                width="100%"
                                height="100%"
                                xlinkHref="/assets/images/website-development/php-website-development/one.jpg"
                            />
                        </svg>
                    </TimelineContent>

                    {/* Stats Bar */}
                    <div style={styles.statsContainer}>
                        <TimelineContent
                            as="div"
                            animationNum={5}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={styles.statGroup}
                        >
                            <div style={styles.statItem}>
                                <span style={styles.boldBrand}>11+</span>
                                <span style={styles.grayText}>Years Experience</span>
                                <span style={{ color: '#d1d5db', marginLeft: '12px' }}>|</span>
                            </div>
                            <div style={styles.statItem}>
                                <span style={styles.boldBrand}>100+</span>
                                <span style={styles.grayText}>Web Projects Delivered</span>
                            </div>
                        </TimelineContent>

                        <TimelineContent
                            as="div"
                            animationNum={6}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={styles.statItem}
                        >
                            <span style={styles.boldBrand}>99%</span>
                            <span style={styles.grayText}>Scalable & Secure Delivery</span>
                        </TimelineContent>
                    </div>
                </div>

                {/* Main Grid Content */}
                <div style={styles.mainGrid}>
                    {/* Left Column Content */}
                    <div style={styles.leftCol}>
                        <h1 style={styles.h1}>
                            <VerticalCutReveal splitBy="words" staggerDuration={0.08}>
                                Our PHP & Laravel Development Process
                            </VerticalCutReveal>
                        </h1>

                        <TimelineContent
                            as="div"
                            animationNum={7}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={styles.contentGrid}
                        >
                            <div>
                                <h3 style={styles.blockTitle}>01. Planning</h3>
                                <p style={styles.paragraph}>
                                    We understand your business objectives, target audience, technical requirements, and project scope before starting development.
                                </p>
                            </div>

                            <div>
                                <h3 style={styles.blockTitle}>02. UI/UX Design</h3>
                                <p style={styles.paragraph}>
                                    Our designers create intuitive and responsive website layouts that provide a consistent and engaging user experience across all devices.
                                </p>
                            </div>

                            <div>
                                <h3 style={styles.blockTitle}>03. PHP Development</h3>
                                <p style={styles.paragraph}>
                                    Our experienced PHP developers build the website or web application using clean, efficient, scalable, and maintainable code.
                                </p>
                            </div>

                            <div>
                                <h3 style={styles.blockTitle}>04. Testing & Audit</h3>
                                <p style={styles.paragraph}>
                                    We thoroughly test functionality, responsiveness, compatibility, security, performance, forms, integrations, and other critical website components.
                                </p>
                            </div>

                            <div>
                                <h3 style={styles.blockTitle}>05. Implementation</h3>
                                <p style={styles.paragraph}>
                                    After testing and approval, we deploy the website and ensure that all features and integrations work as expected.
                                </p>
                            </div>

                            <div>
                                <h3 style={styles.blockTitle}>06. Support & Maintenance</h3>
                                <p style={styles.paragraph}>
                                    Our ongoing support and maintenance services help keep your PHP website secure, updated, optimized, and performing efficiently.
                                </p>
                            </div>
                        </TimelineContent>
                    </div>

                    {/* Right Column Call to Action */}
                    <div style={styles.rightCol}>
                        <TimelineContent
                            as="div"
                            animationNum={8}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={styles.brandTitle}
                        >
                            PHP & LARAVEL
                        </TimelineContent>

                        <TimelineContent
                            as="div"
                            animationNum={9}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={styles.brandSub}
                        >
                            End-to-End Web Consulting & Engineering
                        </TimelineContent>

                        <TimelineContent
                            as="div"
                            animationNum={10}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            style={{ marginBottom: '24px' }}
                        >
                            <p style={styles.callToActionText}>
                                Ready to build scalable web applications designed for business growth?
                            </p>
                        </TimelineContent>

                        <TimelineContent
                            as="div"
                            animationNum={11}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                        >
                            <button style={styles.btn}>
                                <span>Get Started</span>
                                <ArrowRight size={16} />
                            </button>
                        </TimelineContent>
                    </div>
                </div>
            </div>
        </section>
    );
}