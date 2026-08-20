"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./VideoGrid.module.css";
import { useAOS } from "@/components/hooks/useAOS";

interface VideoCardProps {
  title: string;
  year: string;
  youtubeId: string;
  priority?: boolean;
  delay?: number; // Optional delay in ms (0-3000)
}

const VideoCard = ({
  title,
  year,
  youtubeId,
  priority = false,
  delay = 0,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use the AOS hook
  useAOS();

  // High-res YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div 
      ref={cardRef}
      className={styles["our-st-video-card"]}
      data-aos="fade-up"
      data-aos-delay={delay.toString()}
      data-aos-duration="800"
      data-aos-offset="50"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div className={styles["our-st-video-card-head"]}>
        <h3>{title}</h3>
        <span>/ {year}</span>
      </div>

      <div className={styles["our-st-video-box"]}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles["youtube-iframe"]}
          />
        ) : (
          <div
            className={styles["thumbnail-wrapper"]}
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className={styles["thumbnail-img"]}
            />
            <button className={styles["play-button"]} aria-label="Play Video">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="#ffffff" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;