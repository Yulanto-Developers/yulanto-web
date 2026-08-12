"use client";

import React from "react";
import { CardStack, CardStackItem } from "./cardstack";
// import { log } from "console";

// Fallback used only if a local client photo fails to load
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=450&fit=crop";
const clientData: CardStackItem[] = [
  {
    id: 1,
    title: "Mr. Kassim",
    tag: "AEC Tech",
    description: "Great meeting with Mr. Kassim from AEC Tech, Singapore.",
    imageSrc: "/assets/img/clients/AecTech.webp",
  },
  {
    id: 2,
    title: "Mr. Anand Reddy",
    tag: "AEC Pvt. Ltd.",
    description: "Pleasure meeting Mr. Anand Reddy, Owner of AEC Pvt. Ltd.",
    imageSrc: "/assets/img/clients/image-2.jpg",
  },
  {
    id: 3,
    title: "Mr. Aaron Ben",
    tag: "EBITIMI Health Solution",
    description:
      "Wonderful meeting with Mr. Aaron Ben from EBITIMI Health Solution, Africa.",
    imageSrc: "/assets/img/clients/image-1.jpg",
  },
  {
    id: 4,
    title: "Jeba Babu",
    tag: "Binzn Babz",
    description: "Great connecting with Jeba Babu, Owner of Binzn Babz.",
    imageSrc: "/assets/img/clients/binz-alt.jpg",
  },
  {
    id: 5,
    title: "Mr. Sam",
    tag: "B&F Roofing LLC",
    description:
      "Honoured to meet Mr. Sam, Founder of B&F Roofing LLC, USA.",
    imageSrc: "/assets/img/clients/image-3.jpg",
  },
  {
    id: 6,
    title: "Mr. Danny",
    tag: "My Global Studies",
    description: "Great meeting with Mr. Danny, Owner of My Global Studies.",
    imageSrc: "/assets/img/clients/danny-globalstudies.jpg",
  },
  {
    id: 7,
    title: "Mr. Babu",
    tag: "Digi Sound Studio",
    description:
      "Pleasure meeting Mr. Babu, Owner of Digi Sound Studio.",
    imageSrc: "/assets/img/clients/digi-alt.jpg",
  },
  {
    id: 8,
    title: "Mr. Kosuke",
    tag: "EBARA MACHINERY",
    description:
      "Wonderful meeting with Mr. Kosuke, Managing Director of EBARA MACHINERY.",
    imageSrc: "/assets/img/clients/ebara.webp",
  },
  {
    id: 9,
    title: "Mr. Mu. Kazhanjiyam",
    tag: "Tamil Cinema",
    description:
      "Great connecting with Mr. Mu. Kazhanjiyam, Film Director and Producer.",
    imageSrc: "/assets/img/clients/kalanchiyam.webp",
  },
  {
    id: 10,
    title: "Venkatesan & Joseph",
    tag: "Aerotech Innovation Pvt Ltd",
    description:
      "Honoured to meet Venkatesan, CTO, and Joseph, Tech Lead, of Aerotech Innovation Pvt Ltd.",
    imageSrc: "/assets/img/clients/aerotech-alt.jpg",
  },
  {
    id: 11,
    title: "Mr. Vishupriyan",
    tag: "Bigbox International",
    description:
      "Great meeting with Mr. Vishupriyan, Owner of Bigbox International.",
    imageSrc: "/assets/img/clients/big-box-alt.jpg",
  },
  {
    id: 12,
    title: "Shagaya Raj",
    tag: "HCL Technologies",
    description:
      "Pleasure meeting Shagaya Raj from HCL Technologies.",
    imageSrc: "/assets/img/clients/hcl-alt.jpg",
  },
  {
    id: 13,
    title: "Mr. Paul Sunder Singh",
    tag: "Karunalaya Child Welfare Trust",
    description:
      "Wonderful meeting with Mr. Paul Sunder Singh, Director of Karunalaya Child Welfare Trust.",
    imageSrc: "/assets/img/clients/karunalaya-alt.jpg",
  },
  {
    id: 14,
    title: "Mr. Kumaran",
    tag: "Switzerland Client",
    description:
      "Great connecting with Mr. Kumaran from Switzerland.",
    imageSrc: "/assets/img/clients/kumaran-alt.jpg",
  },
  {
    id: 15,
    title: "Satheesh",
    tag: "My Pink Bay",
    description:
      "Honoured to meet Satheesh, Owner of My Pink Bay.",
    imageSrc: "/assets/img/clients/my-pink-alt.jpg",
  },
];

/**
 * Custom card renderer: black text panel with company tag / name /
 * description, only shown on the active card. Plain photo otherwise.
 */
function ClientCard(item: CardStackItem, { active }: { active: boolean }) {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden", borderRadius: "12px", background: "#f8fafc" }}>
      <img
        src={item.imageSrc}
        alt={item.title}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        draggable={false}
        onError={(e) => {
          (e.target as HTMLImageElement).src = FALLBACK_IMG;
          console.log(e);
          
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          borderTop: "1px solid rgba(255,255,255,0.1)",
         background: "linear-gradient(60deg, #0a283b 0%, #53ae7d 160%)",
          padding: "16px 20px",
          textAlign: "center",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {item.tag ? (
          <span
            style={{
              display: "block",
              marginBottom: "4px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#50a778",
            }}
          >
            {item.tag}
          </span>
        ) : null}
        <h4 style={{ margin: "0 0 4px", fontSize: "17px", fontWeight: 700, color: "#fff" }}>
          {item.title}
        </h4>
        {item.description ? (
          <p style={{ margin: 0, fontSize: "13px", fontWeight: 500, lineHeight: 1.45, color: "rgba(255,255,255,0.8)" }}>
            {item.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function Client() {
  return (
    <section
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#ffffff",
        // Extra top padding clears the fixed navbar/topbar.
        // If your logos/cards still sit under the nav, increase this value
        // to match your navbar's actual rendered height.
        padding: "40px 24px 40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        
        <div className="row  align-items-center">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              OUR NETWORK

            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
            
                <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Meetings with</span> Our Clients
            </h4>
              <p className="text-figtree text-black mt-2 font-paragraph-cls">
             We highly value the opportunity to engage with our clients, as it inspires us to deliver outstanding projects. Every meeting opens the door to new ideas, stronger collaboration, and greater levels of success.
              </p>
            </div>
          </div>
        </div>

        {/* Card stack */}
        <CardStack
          items={clientData}
          initialIndex={3}
          maxVisible={7}
          cardWidth={460}
          cardHeight={380}
          overlap={0.55}
          spreadDeg={44}
          autoAdvance
          intervalMs={4500}
          pauseOnHover
          showDots
          renderCard={ClientCard}
        />
      </div>
    </section>
  );
}