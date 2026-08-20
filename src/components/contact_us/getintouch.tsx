"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";

// ==========================================
// COLOR PALETTE & CONSTANTS
// ==========================================
const COLORS = {
  navy: "#053456",
  green: "#53ae7d",
  greenAlt: "#53ae7d",
  darkGreen: "#53ae7d",
  white: "#FFFFFF",
  lightBg: "#f5f5f5",
  softGreen: "#DDF4E8",
  glassWhite: "rgba(255, 255, 255, 0.85)",
  borderGreen: "rgba(105, 180, 129, 0.25)",
};

// ==========================================
// NEARBY LANDMARKS DATA
// ==========================================
const NEARBY_LANDMARKS = [
  {
    name: "Tidel Park",
    type: "IT Park",
    top: "22%",
    left: "28%",
  },
  {
    name: "RMZ Millenia Tech Park",
    type: "Business Park",
    top: "20%",
    left: "72%",
  },
  {
    name: "Ascendas IT Park",
    type: "Tech Hub",
    top: "70%",
    left: "22%",
  },
  {
    name: "Appasamy",
    type: "Appartment",
    top: "78%",
    left: "55%",
  },
];

// ==========================================
// PROPS INTERFACE
// ==========================================
export interface ContactLocationProps {
  phone?: string;
  email?: string;
  address?: string;
  workingHours?: string;
  locationTitle?: string;
  locationAddress?: string;
  className?: string;
  style?: React.CSSProperties;
}

// ==========================================
// HOOK FOR RESPONSIVE MEDIA QUERIES
// ==========================================
function useWindowSize() {
  const [size, setSize] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    isMobile: false,
    isTablet: false,
  });

  React.useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setSize({
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

// ==========================================
// FLOATING BACKGROUND PARTICLES
// ==========================================
const FloatingParticle: React.FC<{ index: number }> = ({ index }) => {
  const randomX = React.useMemo(() => (Math.random() - 0.5) * 60, []);
  const randomY = React.useMemo(() => (Math.random() - 0.5) * 60, []);
  const randomScale = React.useMemo(() => 0.5 + Math.random() * 0.8, []);
  const randomDuration = React.useMemo(() => 6 + Math.random() * 8, []);
  const randomDelay = React.useMemo(() => Math.random() * 4, []);

  const topPos = React.useMemo(() => `${(index * 13) % 90 + 5}%`, [index]);
  const leftPos = React.useMemo(() => `${(index * 23) % 90 + 5}%`, [index]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: topPos,
        left: leftPos,
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: COLORS.green,
        opacity: 0.25,
        filter: "blur(2px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
      animate={{
        x: [0, randomX, 0],
        y: [0, randomY, 0],
        scale: [1, randomScale, 1],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// ==========================================
// CONTACT CARD COMPONENT
// ==========================================
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        x: isHovered ? 8 : 0,
        scale: isHovered ? 1.02 : 1,
        backgroundColor: isHovered ? "rgba(221, 244, 232, 0.85)" : COLORS.glassWhite,
      }}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        borderRadius: "16px",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${isHovered ? COLORS.green : COLORS.borderGreen}`,
        boxShadow: isHovered
          ? `0 12px 30px rgba(105, 180, 129, 0.22), 0 4px 10px rgba(5, 52, 86, 0.05)`
          : `0 8px 20px rgba(5, 52, 86, 0.04), 0 2px 6px rgba(105, 180, 129, 0.06)`,
        cursor: "pointer",
        overflow: "hidden",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.green}, transparent)`,
          opacity: isHovered ? 0.9 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "14px", zIndex: 1 }}>
        <motion.div
          animate={{
            rotate: isHovered ? 12 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.greenAlt}, ${COLORS.darkGreen})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.white,
            boxShadow: isHovered
              ? `0 0 18px rgba(105, 180, 129, 0.6)`
              : `0 4px 12px rgba(22, 139, 104, 0.25)`,
            flexShrink: 0,
          }}
        >
          {icon}
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: COLORS.navy,
              letterSpacing: "0.2px",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "rgba(5, 52, 86, 0.75)",
              marginTop: "2px",
              whiteSpace: "pre-line",
              lineHeight: "1.4",
            }}
          >
            {value}
          </span>
        </div>
      </div>

      <motion.div
        animate={{
          x: isHovered ? 5 : 0,
          backgroundColor: isHovered ? COLORS.navy : "rgba(105, 180, 129, 0.12)",
          color: isHovered ? COLORS.white : COLORS.navy,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// CENTER ANIMATED DIVIDER
// ==========================================
const AnimatedDivider: React.FC = () => {
  const icons = [
    { component: <Send size={16} />, label: "Send" },
    { component: <MessageCircle size={16} />, label: "Message" },
    { component: <Mail size={16} />, label: "Mail" },
    { component: <Headphones size={16} />, label: "Support" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        minHeight: "420px",
        margin: "0 8px",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "50px",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
        preserveAspectRatio="none"
        viewBox="0 0 60 500"
      >
        <path
          d="M30 0 Q 50 125, 30 250 T 30 500"
          fill="none"
          stroke={COLORS.softGreen}
          strokeWidth="3"
        />
        <motion.path
          d="M30 0 Q 50 125, 30 250 T 30 500"
          fill="none"
          stroke={COLORS.green}
          strokeWidth="3"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [-32, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, -8, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 3 + idx,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.4,
          }}
          whileHover={{ scale: 1.25, rotate: 12 }}
          style={{
            position: "relative",
            zIndex: 2,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: "rgb(5, 52, 86)",
            border: `2px solid #053456`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            boxShadow: `0 6px 16px rgba(105, 180, 129, 0.35)`,
            cursor: "pointer",
          }}
        >
          {item.component}
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// MAIN MAP 3D LOCATION PIN (NO RIPPLES, LOGO INSIDE)
// ==========================================
const LocationPin: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -100%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 3, -3],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "relative",
          filter: "drop-shadow(0 14px 12px rgba(5, 52, 86, 0.35))",
        }}
      >
    <div style={{ position: "relative" }}>
  <a
    href="https://www.google.com/maps/place/Yulanto+Web+Creations+Pvt+Ltd/@12.9724698,80.2510529,1504m/data=!3m1!1e3!4m6!3m5!1s0x3a525df3d6bf9167:0xc1aae342aa473d1!8m2!3d12.9725177!4d80.2518352!16s%2Fg%2F11b7rnd8vq?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      textDecoration: "none",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "white",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6px",
        cursor: "pointer",
      }}
    >
      <img
        src="/assets/img/logo/favicon.png"
        alt="Yulanto Web Creations"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          cursor: "pointer",
        }}
      />
    </div>
  </a>
</div>
      </motion.div>
    </div>
  );
};

// ==========================================
// NEARBY LANDMARK PIN COMPONENT
// ==========================================
interface LandmarkPinProps {
  name: string;
  type: string;
  top: string;
  left: string;
}

const LandmarkPin: React.FC<LandmarkPinProps> = ({ name, type, top, left }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "absolute",
        top,
        left,
        transform: "translate(-50%, -50%)",
        zIndex: isHovered ? 15 : 8,
        cursor: "pointer",
      }}
    >
      <motion.div
       
      >
        <div style={{ fontSize: "12px", fontWeight: 800, color: COLORS.navy }}>
          {name}
        </div>
        <div style={{ fontSize: "10px", color: COLORS.darkGreen, fontWeight: 600 }}>
          {type}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// INTERACTIVE MAP WITH NEARBY LOCATIONS
// ==========================================
interface InteractiveMapProps {
  locationTitle?: string;
  locationAddress?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-200, 200], [6, -6]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-200, 200], [-6, 6]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "450px",
        borderRadius: "24px",
        overflow: "hidden",
        perspective: "1200px",
        boxShadow: "0 20px 48px rgba(5, 52, 86, 0.12)",
        border: "4px solid #FFFFFF",
        backgroundColor: "#E8F4EF",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M 50,50 Q 150,20 220,100 T 120,250 Z" fill="#D4EFE3" opacity="0.8" />
          <path d="M 450,80 Q 580,40 650,140 T 520,300 Z" fill="#C9EAD8" opacity="0.7" />
          <path d="M 280,380 Q 400,320 480,480 T 300,580 Z" fill="#D4EFE3" opacity="0.8" />

          <path
            d="M 720,0 C 680,150 780,300 680,450 C 620,540 650,600 650,600"
            fill="none"
            stroke="#A3D9F8"
            strokeWidth="48"
            strokeLinecap="round"
          />
          <path
            d="M 720,0 C 680,150 780,300 680,450 C 620,540 650,600 650,600"
            fill="none"
            stroke="#C0E6FC"
            strokeWidth="32"
            strokeLinecap="round"
          />

          <g stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9">
            <path d="M 0,180 L 800,240" />
            <path d="M 0,380 L 800,320" />
            <path d="M 180,0 L 260,600" />
            <path d="M 520,0 L 440,600" />
            <path d="M 100,500 L 700,100" />
          </g>

          <g stroke="#FFFFFF" strokeWidth="20" fill="none" strokeLinecap="round">
            <path d="M 0,280 Q 400,200 800,360" />
            <path d="M 380,0 Q 420,300 360,600" />
          </g>
          <g stroke="#FAFDFB" strokeWidth="14" fill="none" strokeLinecap="round">
            <path d="M 0,280 Q 400,200 800,360" />
            <path d="M 380,0 Q 420,300 360,600" />
          </g>
          <g stroke="#69B481" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4">
            <path d="M 0,280 Q 400,200 800,360" />
            <path d="M 380,0 Q 420,300 360,600" />
          </g>

          <rect x="140" y="120" width="36" height="28" rx="4" fill="#B3DFC8" opacity="0.8" />
          <rect x="220" y="210" width="45" height="32" rx="4" fill="#A1D8BB" opacity="0.8" />
          <rect x="440" y="220" width="40" height="40" rx="6" fill="#B3DFC8" opacity="0.8" />
          <rect x="290" y="320" width="50" height="30" rx="4" fill="#A1D8BB" opacity="0.8" />
          <rect x="480" y="380" width="38" height="28" rx="4" fill="#B3DFC8" opacity="0.8" />
        </svg>

        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "42%",
            color: "rgba(5, 52, 86, 0.65)",
            fontSize: "11px",
            fontWeight: 700,
            transform: "rotate(-8deg)",
            letterSpacing: "0.5px",
          }}
        >
          OMR Road (Rajiv Gandhi Salai)
        </div>

        {NEARBY_LANDMARKS.map((lm, idx) => (
          <LandmarkPin
            key={idx}
            name={lm.name}
            type={lm.type}
            top={lm.top}
            left={lm.left}
          />
        ))}

        <LocationPin />
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN EXPORTED COMPONENT
// ==========================================
export const ContactLocationSection: React.FC<ContactLocationProps> = ({
  phone = "+91 99621 57250",
  email = "info@yulanto.com",
  address = "F3, #4/608, First Floor, V.O.C Street, Kottivakkam, OMR, Chennai - 600 041, India., Chennai, Tamil Nadu, 600041",
  workingHours = "Mon - Fri : 10:00 AM - 7:00 PM\nAlternative Saturday : 10:00 AM - 5:30 PM",
  locationTitle = "Yulanto Web Creations",
  locationAddress = "F3, #4/608, First Floor, V.O.C Street, Kottivakkam, OMR, Chennai - 600 041, India., Chennai, Tamil Nadu, 600041",
  className,
  style,
}) => {
  const { isMobile, isTablet } = useWindowSize();

  const contactItems = [
    { icon: <MapPin size={20} />, title: "Address", value: address },
    { icon: <Phone size={20} />, title: "Phone", value: phone },
    { icon: <Mail size={20} />, title: "Email", value: email },
    { icon: <Clock size={20} />, title: "Working Hours", value: workingHours },
  ];

  return (
    <section
      className={className}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: COLORS.lightBg,
        padding: isMobile ? "32px 16px" : "48px 32px",
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h4 className="px-about-title mb-20 text-center" style={{ marginBottom: "32px" }}>
          <span className="text-blue-about">Get In Touch </span> With Us
        </h4>

        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: isMobile ? "24px" : isTablet ? "20px" : "32px",
          }}
        >
          {/* LEFT CONTACT DETAILS */}
          <div
            style={{
              flex: isMobile ? "1 1 100%" : "0 0 44%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {contactItems.map((item, index) => (
                <ContactCard
                  key={index}
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {/* CENTER ANIMATED DIVIDER */}
          {!isMobile && !isTablet && <AnimatedDivider />}

          {/* RIGHT INTERACTIVE MAP WITH NEARBY LANDMARKS */}
          <div
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              minHeight: isMobile ? "360px" : "auto",
            }}
          >
            <InteractiveMap
              locationTitle={locationTitle}
              locationAddress={locationAddress}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationSection;