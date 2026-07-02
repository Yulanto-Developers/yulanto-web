'use client';

import React from 'react';
import FloatingActions from './FloatingIcon'; // Correct local reference

export default function FloatingActionsWrapper() {
  const handleChatOpen = () => {
    console.log('Chat widget initialized');
    // Your chat logic runs here safely on the client side
  };

  return (
    <FloatingActions 
      whatsappNumber="911234567890" 
      onChatClick={handleChatOpen} 
    />
  );
}