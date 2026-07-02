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
  whatsappMessage = 'Hello! I would like to know more about your services.',
  onChatClick,
}: FloatingActionsProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div 
      className="floating-actions-container-gold" 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 99999
      }}
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success d-flex align-items-center justify-content-center rounded-circle shadow-lg border-0"
        style={{ width: '56px', height: '56px', backgroundColor: '#25D366', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        title="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" style={{ fontSize: '28px', color: '#fff' }}></i>
      </a>

      {/* Live Chat Button */}
      <button
        onClick={onChatClick}
        type="button"
        className="btn btn-primary d-flex align-items-center justify-content-center rounded-circle shadow-lg border-0"
        style={{ width: '56px', height: '56px', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        title="Open Support Chat"
      >
        <i className="fa-solid fa-comment-dots" style={{ fontSize: '24px', color: '#fff' }}></i>
      </button>
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
      whatsappNumber="9962157250 " 
      onChatClick={handleChatOpen} 
    />
  );
}