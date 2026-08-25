'use client';

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ==========================================================================
   1. INLINE ANIMATION COMPONENTS
   ========================================================================== */

// Inline Timeline Content Wrapper using Framer Motion
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

// Inline Vertical Cut Reveal Animation Wrapper
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

export default function AboutSection3() {
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

  // Plain CSS Objects with updated brand color #053456
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '48px 16px',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
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
    <section style={styles.section} ref={heroRef}>
      <div style={styles.container}>
        <div style={styles.relativeWrapper}>
          {/* Header Bar / Title Section */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                Off-Page SEO in Chennai
              </span>
            </div>
            <div className="col-xl-9">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span style={{ color: '#053456' }}>Why Choose Us as Your Google </span>
                  Ads Agency in Chennai?
                </h4>
                <p className="text-figtree text-black mt-2">
                  Choosing the right Google Ads management company in Chennai can make a significant difference to your advertising performance. Our approach combines campaign strategy, keyword research, audience targeting, conversion tracking, and continuous optimization.
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
                xlinkHref="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&auto=format&fit=crop"
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
                <span style={styles.grayText}>Brands Scaled</span>
              </div>
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={heroRef}
              customVariants={revealVariants}
              style={styles.statItem}
            >
              <span style={styles.boldBrand}>30%</span>
              <span style={styles.grayText}>Higher ROI & Conversions</span>
            </TimelineContent>
          </div>
        </div>

        {/* Main Grid Content */}
        <div style={styles.mainGrid}>
          {/* Left Column Content */}
          <div style={styles.leftCol}>
            <h1 style={styles.h1}>
              <VerticalCutReveal splitBy="words" staggerDuration={0.08}>
                Driving Growth Through High-Performance Google Ads
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
                <h3 style={styles.blockTitle}>Google Ads Specialists</h3>
                <p style={styles.paragraph}>
                  Our team understands the fundamentals of Google Ads, PPC advertising, keyword targeting, campaign structures, bidding, and conversion optimization.
                </p>
              </div>

              <div>
                <h3 style={styles.blockTitle}>Complete Google Advertising Solutions</h3>
                <p style={styles.paragraph}>
                  From campaign planning and keyword research to ad creation, campaign management, optimization, and reporting, we provide end-to-end Google advertising services.
                </p>
              </div>

              <div>
                <h3 style={styles.blockTitle}>Data-Driven Campaign Strategy</h3>
                <p style={styles.paragraph}>
                  We use campaign performance data to identify opportunities, reduce wasted ad spend, and improve the quality of traffic and conversions.
                </p>
              </div>

              <div>
                <h3 style={styles.blockTitle}>Industry-Focused Approach</h3>
                <p style={styles.paragraph}>
                  We create customized advertising strategies for businesses across industries such as real estate, healthcare, automobile, education, fashion, manufacturing, hospitality, professional services, and eCommerce.
                </p>
              </div>

              <div>
                <h3 style={styles.blockTitle}>Conversion-Focused Advertising</h3>
                <p style={styles.paragraph}>
                  Our goal is not simply to generate clicks. We focus on attracting relevant visitors and converting them into enquiries, customers, or sales.
                </p>
              </div>

              <div>
                <h3 style={styles.blockTitle}>Transparent Reporting</h3>
                <p style={styles.paragraph}>
                  Understand how your Google Ads campaign is performing through key metrics and actionable insights.
                </p>
              </div>
            </TimelineContent>
          </div>

          {/* Right Column Call to Action (Text Content Layout) */}
          <div style={styles.rightCol}>
            <TimelineContent
              as="div"
              animationNum={8}
              timelineRef={heroRef}
              customVariants={revealVariants}
              style={styles.brandTitle}
            >
              GOOGLE ADS
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              style={styles.brandSub}
            >
              PPC Strategy & Conversion Optimization
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={10}
              timelineRef={heroRef}
              customVariants={revealVariants}
              style={{ marginBottom: '24px' }}
            >
              <p style={styles.callToActionText}>
                Ready to transform your brand's message into measurable results?
              </p>
            </TimelineContent>

           
          </div>
        </div>
      </div>
    </section>
  );
}