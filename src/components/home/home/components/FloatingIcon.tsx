'use client';

import React from 'react';

interface FloatingActionsProps {
  whatsappNumber: string;
  whatsappMessage?: string;
  onChatClick?: () => void;
}

// 1. Core Visual Layer Component
function FloatingActions({
  whatsappNumber,
  whatsappMessage = 'New WhatsApp Enquiry from Website',
  onChatClick,
}: FloatingActionsProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Remove spaces, +, -, brackets etc. from the WhatsApp number
  const cleanWhatsappNumber = whatsappNumber.replace(/\D/g, '');

  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${encodedMessage}`;

  return (
    <div
      className="floating-actions-container-gold"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '18px',
        display: 'flex',
        gap: '16px',
        zIndex: 99999,
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .floating-actions-container-gold {
            flex-direction: column-reverse;
          }
        }
      `}</style>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank" rel="noopener"
        className="btn btn-success d-flex align-items-center justify-content-center rounded-circle shadow-lg border-0"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = 'scale(1.1)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = 'scale(1)')
        }
        title="Chat on WhatsApp"
      >
        <i
          className="fa-brands fa-whatsapp"
          style={{
            fontSize: '28px',
            color: '#fff',
          }}
        ></i>
      </a>

      {/* Mobile Phone Button */}
      <a
        href="tel:+919962157250"
        className="btn btn-primary d-flex align-items-center justify-content-center d-block d-md-none rounded-circle shadow-lg border-0"
        style={{
          width: '56px',
          height: '56px',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = 'scale(1.1)')
        }
        onMouseLeave={(e) =>
        (e.currentTarget.style.transform = 'scale(1)'
        )
        }
        title="Connect With Us"
      >
        <i
          className="fa-solid fa-phone"
          style={{
            fontSize: '24px',
            color: '#fff',
          }}
        ></i>
      </a>
    </div>
  );
}

// 2. Exported Interactive Client Wrapper
export default function FloatingActionsWrapper() {
  const handleChatOpen = () => {
    console.log('Chat widget initialized');
  };

  return (
    <FloatingActions
      whatsappNumber="919962157250"
      whatsappMessage="Hello, This is "
      onChatClick={handleChatOpen}
    />
  );
}