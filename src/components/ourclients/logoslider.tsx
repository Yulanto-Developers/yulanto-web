"use client";

import * as React from "react";
import { motion } from "framer-motion";

export type LogoEntry = {
  logo: string; // image path
  name?: string;
  id?: string | number;
  link?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: React.ReactNode;
  subtitle?: string;
  interval?: number;
  stagger?: number;
};

const WIPE_DURATION = 0.92;
const WIPE_TIMES = [0, 0.4, 1];

const DEFAULT_LOGOS: LogoEntry[] = [
  { id: 1, logo: "/assets/img/partners/AEROVON.png" },
  { id: 2, logo: "/assets/img/partners/AEZEN.png" },
  { id: 3, logo: "/assets/img/partners/ALPHONSA.png" },
  { id: 4, logo: "/assets/img/partners/ASTRO.png" },
  { id: 5, logo: "/assets/img/partners/BBI.png" },
  { id: 6, logo: "/assets/img/partners/bioxgreen.png" },
  { id: 7, logo: "/assets/img/partners/BISHMILLAH.png" },
  { id: 8, logo: "/assets/img/partners/CHENNAI-CLEANERS.png" },
  { id: 9, logo: "/assets/img/partners/CHOLAS.png" },
  { id: 10, logo: "/assets/img/partners/CLOUD-WALK.png" },
  { id: 11, logo: "/assets/img/partners/devior.png" },
  { id: 12, logo: "/assets/img/partners/DI.png" },
  { id: 13, logo: "/assets/img/partners/ebara.png" },
  { id: 14, logo: "/assets/img/partners/ELSH.png" },
  { id: 15, logo: "/assets/img/partners/EPC.png" },
  { id: 16, logo: "/assets/img/partners/EXPRESS.png" },
  { id: 17, logo: "/assets/img/partners/GOLDEN.png" },
  { id: 18, logo: "/assets/img/partners/grayeye.png" },
  { id: 19, logo: "/assets/img/partners/hub.png" },
  { id: 20, logo: "/assets/img/partners/KLEANTERRA.png" },
  { id: 21, logo: "/assets/img/partners/LEADTEQS.png" },
  { id: 22, logo: "/assets/img/partners/LOTUS.png" },
  { id: 23, logo: "/assets/img/partners/MARG.png" },
  { id: 24, logo: "/assets/img/partners/MAVERICK.png" },
  { id: 25, logo: "/assets/img/partners/pest-tech.png" },
];

function LogoItem({
  logo,
  index,
  isWaving,
  stagger,
  totalCount,
  onDone,
}: {
  logo: LogoEntry;
  index: number;
  isWaving: boolean;
  stagger: number;
  totalCount: number;
  onDone: () => void;
}) {
  const content = (
    <motion.div
      aria-label={logo.name ?? "Logo"}
      animate={
        isWaving
          ? {
              clipPath: [
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
              ],
              filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
              opacity: [1, 0.2, 1],
            }
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              opacity: 1,
            }
      }
      transition={
        isWaving
          ? {
              clipPath: {
                duration: WIPE_DURATION,
                times: WIPE_TIMES,
                ease: ["easeIn", [0.16, 1, 0.3, 1]],
                delay: index * stagger,
              },
              filter: {
                duration: WIPE_DURATION * 0.9,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
              opacity: {
                duration: WIPE_DURATION * 0.85,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={() => {
        if (isWaving && index === totalCount - 1) onDone();
      }}
      whileHover={{
        scale: 1.07,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      style={{
        display: "flex",
        width: "150px",
        flexShrink: 0,
        cursor: "default",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          display: "flex",
          height: "100px",
          width: "150px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo.logo}
          alt={logo.name ?? ""}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </span>
      {logo.name && (
        <span
          style={{
            userSelect: "none",
            whiteSpace: "nowrap",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "#6b7280",
          }}
        >
          {logo.name}
        </span>
      )}
    </motion.div>
  );

  if (logo.link) {
    return (
      <a href={logo.link} style={{ textDecoration: "none" }}>
        {content}
      </a>
    );
  }
  return content;
}

export default function LogoCloudSwap({
  logos = DEFAULT_LOGOS,
  title = (
    <>
      <span className="text-blue-about">Trusted by the</span> best companies
    </>
  ),
  subtitle = "The world's most ambitious teams build with our platform.",
  interval = 5000,
  stagger = 0.11,
}: LogoCloudSwapProps) {
  const [waving, setWaving] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => setWaving(true), interval);
    return () => clearInterval(id);
  }, [interval]);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "48px 16px 64px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "640px", textAlign: "center" }}>
        <h4 className="px-about-title mb-20">
          {title}
        </h4>
        {subtitle && (
          <p className="text-figtree text-black font-paragraph-cls">
            {subtitle}
          </p>
        )}
      </div>

      <div style={{ margin: "40px auto 0", maxWidth: "1400px" }}>
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {logos.map((logo, i) => (
              <LogoItem
                key={logo.id ?? i}
                logo={logo}
                index={i}
                isWaving={waving}
                stagger={stagger}
                totalCount={logos.length}
                onDone={() => setWaving(false)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              rowGap: "24px",
            }}
          >
            {logos.map((logo, i) => (
              <LogoItem
                key={logo.id ?? i}
                logo={logo}
                index={i}
                isWaving={waving}
                stagger={stagger}
                totalCount={logos.length}
                onDone={() => setWaving(false)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}