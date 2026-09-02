"use client";
 
import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Building2,
  HardHat,
  Sofa,
  Ruler,
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Hotel,
  BriefcaseBusiness,
  Rocket,
  Store,
  Building,
} from "lucide-react";
 
export interface IconProps {
  id: number;
  name: string;
  icon: React.ElementType;
  position: React.CSSProperties;
}
 
export const FloatingIcon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
 
  const x = useMotionValue(0);
  const y = useMotionValue(0);
 
  const springX = useSpring(x, { stiffness: 250, damping: 22 });
  const springY = useSpring(y, { stiffness: 250, damping: 22 });
 
  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );
 
        if (distance < 160) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
 
          const force = (1 - distance / 160) * 55;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };
 
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);
 
  const IconComponent = iconData.icon;
 
  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        zIndex: 10,
        cursor: "pointer",
        x: springX,
        y: springY,
        ...iconData.position,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 16px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          backgroundColor: isHovered ? "#69b481" : "#053456",
          border: isHovered
            ? "1px solid #69b481"
            : "1px solid rgba(105, 180, 129, 0.4)",
          transition: "all 0.3s ease",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + (index % 3),
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <IconComponent
          style={{
            width: "18px",
            height: "18px",
            color: isHovered ? "#053456" : "#69b481",
            flexShrink: 0,
            transition: "color 0.3s ease",
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: isHovered ? "#053456" : "#ffffff",
            whiteSpace: "nowrap",
            transition: "color 0.3s ease",
          }}
        >
          {iconData.name}
        </span>
      </motion.div>
    </motion.div>
  );
};
 
export const defaultIndustries: IconProps[] = [
  { id: 1, name: "Real Estate", icon: Building2, position: { top: "10%", left: "5%" } },
  { id: 2, name: "Construction", icon: HardHat, position: { top: "8%", right: "8%" } },
  { id: 3, name: "Interior Design", icon: Sofa, position: { top: "22%", left: "18%" } },
  { id: 4, name: "Architecture", icon: Ruler, position: { top: "20%", right: "18%" } },
  { id: 5, name: "Industrial", icon: Factory, position: { top: "42%", left: "4%" } },
  { id: 6, name: "Healthcare", icon: HeartPulse, position: { top: "40%", right: "5%" } },
  { id: 7, name: "Education", icon: GraduationCap, position: { bottom: "35%", left: "12%" } },
  { id: 8, name: "E-commerce", icon: ShoppingCart, position: { bottom: "36%", right: "12%" } },
  { id: 9, name: "Hospitality", icon: Hotel, position: { bottom: "18%", left: "5%" } },
  { id: 10, name: "Professional Services", icon: BriefcaseBusiness, position: { bottom: "18%", right: "6%" } },
  { id: 11, name: "Startups", icon: Rocket, position: { bottom: "8%", left: "22%" } },
  { id: 12, name: "SMEs", icon: Store, position: { bottom: "8%", right: "22%" } },
  { id: 13, name: "Corporate Businesses", icon: Building, position: { top: "6%", left: "42%" } },
];
 
export interface IndustryHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  industries?: IconProps[];
}
 
export const Floatstyle = React.forwardRef<HTMLDivElement, IndustryHeroProps>(
  (
    {
      style,
      title = "Digital Solutions Built for Scale",
      subtitle = "Our digital solutions are suitable for various dynamic sectors. Transform your operations with tailor-made web applications and platforms.",
      industries = defaultIndustries,
      ...props
    },
    ref
  ) => {
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);
 
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };
 
    return (
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "650px",
          padding: "80px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        
          color: "#ffffff",
          boxSizing: "border-box",
          ...style,
        }}
        {...props}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            backgroundColor: "rgba(105, 180, 129, 0.15)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
 
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            pointerEvents: "auto",
          }}
        >
          {industries.map((iconData, index) => (
            <FloatingIcon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
            />
          ))}
        </div>
 
        <div
          style={{
            position: "relative",
            zIndex: 20,
            textAlign: "center",
            maxWidth: "672px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1 className="px-about-title mb-20">{title}</h1>
          <p className="text-figtree text-black">{subtitle}</p>
        </div>
      </section>
    );
  }
);

Floatstyle.displayName = "Floatstyle";