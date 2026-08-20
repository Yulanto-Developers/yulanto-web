"use client";

import { useState } from "react";
import styles from "./VideoGrid.module.css";

interface VideoCardProps {
  title: string;
  year: string;
  youtubeId: string;
  priority?: boolean;
}

const VideoCard = ({
  title,
  year,
  youtubeId,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // High-res YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className={styles["our-st-video-card"]}>
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