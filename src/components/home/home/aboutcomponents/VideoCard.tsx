"use client";

import styles from "./VideoGrid.module.css";

interface VideoCardProps {
  title: string;
  year: string;
  poster?: string;
  src: string;
  priority?: boolean;
}

const VideoCard = ({
  title,
  year,
  poster,
  src,
  priority = false,
}: VideoCardProps) => {
  return (
    <div className={styles["our-st-video-card"]}>
      <div className={styles["our-st-video-card-head"]}>
        <h3>{title}</h3>
        <span>/ {year}</span>
      </div>

      <div className={styles["our-st-video-box"]}>
        <video
          controls
          poster={poster || undefined}
          preload={priority ? "auto" : "metadata"}
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoCard;