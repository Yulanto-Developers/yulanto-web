"use client";

import React from "react";
import { CardStack, CardStackItem } from "./cardstack";

// Fallback used only if a local client photo fails to load
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=450&fit=crop";

const clientData: CardStackItem[] = [
  { id: 1, title: "Mr. Kassim", tag: "AEC Tech", description: "Nice meeting with Mr. Kassim from AEC Tech in Singapore", imageSrc: "/assets/img/Clients/AecTech.webp" },
  { id: 2, title: "Mr. Anand Reddy", tag: "AEC Pvt. Ltd.", description: "AEC Pvt. Ltd., Owner Mr. Anand Reddy", imageSrc: "/assets/img/Clients/image-2.jpg" },
  { id: 3, title: "Mr. Aaron Ben", tag: "EBITIMI Health Solution", description: "Nice meeting with Mr. Aaron Ben from EBITIMI Health Solution in Africa", imageSrc: "/assets/img/Clients/image-1.jpg" },
  { id: 4, title: "Mr. Sam", tag: "B&F Roofing LLC", description: "Nice meeting with Mr. Sam from B&F Roofing LLC in USA", imageSrc: "/assets/img/Clients/image-3.jpg" },
  { id: 5, title: "Mr. Danny", tag: "My Global Studies", description: "My Global Studies, Owner Mr. Danny", imageSrc: "/assets/img/Clients/danny-globalstudies.jpg" },
  { id: 6, title: "Mr. Kosuke", tag: "EBARA MACHINERY", description: "EBARA MACHINERY's MD Mr. Kosuke", imageSrc: "/assets/img/Clients/ebara.webp" },
  { id: 7, title: "Mr. Mu. Kazhanjiyam", tag: "Tamil Cinema", description: "Mr. Mu. Kazhanjiyam, Tamil Film Director and Producer", imageSrc: "/assets/img/Clients/kalanchiyam.webp" },
  { id: 8, title: "Venkatesan & Joseph", tag: "Aerotech Innovation Pvt Ltd", description: "Venkatesan (CTO) and Joseph (Tech Lead) of Aerotech Innovation Pvt Ltd", imageSrc: "/assets/img/Clients/aerotech-alt.jpg" },
  { id: 9, title: "Mr. Vishupriyan", tag: "Bigbox International", description: "Bigbox International, Owner Mr. Vishupriyan", imageSrc: "/assets/img/Clients/big-box-alt.jpg" },
  { id: 10, title: "Jeba Babu", tag: "Binzn Babz", description: "Binzn Babz, Owner Jeba Babu", imageSrc: "/assets/img/Clients/binz-alt.jpg" },
  { id: 11, title: "Mr. Babu", tag: "Digi Sound Studio", description: "Digi Sound Studio, Owner Mr. Babu", imageSrc: "/assets/img/Clients/digi-alt.jpg" },
  { id: 12, title: "Shagaya Raj", tag: "HCL Technologies", description: "HCL Technologies, Shagaya Raj", imageSrc: "/assets/img/Clients/hcl-alt.jpg" },
  { id: 13, title: "Mr. Paul Sunder Singh", tag: "Karunalaya Child Welfare Trust", description: "Mr. Paul Sunder Singh, Director of Karunalaya Child Welfare Trust", imageSrc: "/assets/img/Clients/karunalaya-alt.jpg" },
  { id: 14, title: "Mr. Kumaran", tag: "Switzerland Client", description: "Nice meeting with Mr. Kumaran from Switzerland", imageSrc: "/assets/img/Clients/kumaran-alt.jpg" },
  { id: 15, title: "Satheesh", tag: "My Pink Bay", description: "My Pink Bay, Owner Satheesh", imageSrc: "/assets/img/Clients/my-pink-alt.jpg" },
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
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.9)",
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
        padding: "140px 24px 80px",
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
              <span className="text-blue-about">Meeting with</span> our Clients
            </h4>
              <p className="text-figtree text-black mt-2 font-paragraph-cls">
              We highly value the chance to engage with our clients, as it ignites our enthusiasm for delivering outstanding projects. Each meeting acts as a gateway to unlocking new levels of success.
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