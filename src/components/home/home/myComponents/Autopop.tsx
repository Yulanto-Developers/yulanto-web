// components/Autopop.tsx
"use client";


import React, { useState, useEffect } from "react";

export default function Autopop() {
  const [isOpen, setIsOpen] = useState(false);
  const [doNotDisturb, setDoNotDisturb] = useState(false);
 

  useEffect(() => {
    // 1. Check if user already muted pop-ups previously
    const isMuted = localStorage.getItem("autopop_dnd") === "true";
    if (isMuted) return;

    // 2. Set interval to trigger every 6 seconds (6000ms) or 1 minute (60000ms)
    const timer = setInterval(() => {
      const currentDnd = localStorage.getItem("autopop_dnd") === "true";
      if (!currentDnd) {
        setIsOpen(true);
      } else {
        clearInterval(timer);
      }
    }, 6000); // Change to 60000 for 1 minute

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    if (doNotDisturb) {
      localStorage.setItem("autopop_dnd", "true");
    }
    setIsOpen(false);
    setDoNotDisturb(false); // Reset checkbox for next cycle
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.title}>Disclaimer</h3>
        <p style={styles.body}>
          This disclaimer appears periodically. Check "Do Not Disturb" to mute
          it.
        </p>

        {/* Do Not Disturb Checkbox */}
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="dnd"
            checked={doNotDisturb}
            onChange={(e) => setDoNotDisturb(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="dnd" style={styles.label}>
            Do not disturb (don't show again)
          </label>
        </div>

        {/* Action Button */}
        <div style={styles.footer}>
          <button onClick={handleClose} style={styles.button}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "400px",
    width: "100%",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "18px",
    fontWeight: 700,
    color: "#111827",
  },
  body: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: 1.5,
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
    accentColor: "#2563eb",
  },
  label: {
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
    userSelect: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};
