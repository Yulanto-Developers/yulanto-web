'use client';

import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';

interface ClientFlag {
  code: string;
  countryCodes: string[];
  label: string;
  url: string;
}

const GREEN = '#53ae7d';
const NAVY = '#053456';

const flagUrl = (iso: string) => `https://flagcdn.com/w80/${iso}.png`;

const CLIENTS: ClientFlag[] = [
  {
    code: 'US',
    countryCodes: ['us'],
    label: 'USA',
    url: '/clients/usa',
  },
  {
    code: 'SG',
    countryCodes: ['sg'],
    label: 'Singapore & Malaysia',
    url: '/clients/singapore',
  },
  {
    code: 'AE',
    countryCodes: ['ae'],
    label: 'UAE',
    url: '/clients/uae',
  },
  {
    code: 'EU',
    countryCodes: ['eu'],
    label: 'Europe & East Windsor',
    url: '/clients/europe',
  },
  {
    code: 'GB',
    countryCodes: ['gb'],
    label: 'UK - London',
    url: '/clients/uk',
  },
];

interface FlagCardProps {
  item: ClientFlag;
}

function FlagCard({ item }: FlagCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate cursor location relative to center of the card (-1 to 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Rotate up to 22 degrees along axes
    setRotate({
      x: -y * 22,
      y: x * 22,
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Link
      href={item.url}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 200,
            height: 150,
            borderRadius: 20,
            backgroundColor: '#ffffff',
            border: `1px solid ${hovered ? GREEN : `${NAVY}18`}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 12px 14px 12px',
            boxSizing: 'border-box',
            transformStyle: 'preserve-3d',
            transform: hovered
              ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px) scale(1.05)`
              : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
            boxShadow: hovered
              ? `0 20px 30px -10px rgba(5, 52, 86, 0.18), 0 0 0 1px ${GREEN}44`
              : '0 4px 12px rgba(5, 52, 86, 0.05)',
            transition: hovered
              ? 'transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out'
              : 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
          }}
        >
          {/* Flag Graphic Section */}
          <div
            style={{
              transform: 'translateZ(30px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              flex: 1,
              transition: 'transform 0.2s ease-out',
            }}
          >
            {item.countryCodes.map((iso) => (
              <img
                key={iso}
                src={flagUrl(iso)}
                alt={item.label}
                style={{
                  width: 130,
                  height: 'auto',
                  maxHeight: 70,
                  objectFit: 'contain',
                  borderRadius: 6,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                }}
              />
            ))}
          </div>

          {/* Title Label at Card Bottom */}
          <div
            className="text-figtree"
            style={{
              transform: 'translateZ(20px)',
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 600,
              color: hovered ? GREEN : NAVY,
              letterSpacing: '0.01em',
              lineHeight: 1.3,
              transition: 'color 0.2s ease-out, transform 0.2s ease-out',
              wordBreak: 'break-word',
            }}
          >
            {item.label}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function GlobalTrustDock() {
  return (
    <section className="container mb-60">
      {/* Header Section */}
      <div className="row py-5  align-items-center">
        <div className="col-xl-3">
          <span className="tp-section-subtitle text-black blink-ball">
            Global Reach
          </span>
        </div>

        <div className="col-xl-9">
          <div className="px-project-title-box">
            
             <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Trusted by {' '}</span> Clients Across the Globe
            </h4>

            <p className="text-figtree text-black mt-2 font-paragraph-cls">
              We proudly partner with companies and enterprises worldwide, delivering high-impact web design, custom software development, mobile solutions, and digital strategy across key international markets.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Cards Container */}
      <div
        className="pb-5"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 24,
          width: '100%',
        }}
      >
        {CLIENTS.map((item) => (
          <FlagCard key={item.code} item={item} />
        ))}
      </div>
    </section>
  );
}