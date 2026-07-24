"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import "./VideoCarousel.css";

export interface VideoItem {
  src: string;
  title: string;
  type?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  autoplayDelay?: number;
  autoplay?: boolean;
  className?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  autoplayDelay = 4000,
  autoplay: autoplayEnabled = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);

  const currentVideo = videos[currentIndex] || videos[0];

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplayTimer();
    if (!autoplayEnabled || videos.length <= 1) return;
    autoplayTimerRef.current = window.setInterval(() => {
      const nextIndex = (currentIndex + 1) % videos.length;
      setCurrentIndex(nextIndex);
    }, autoplayDelay);
  }, [autoplayEnabled, autoplayDelay, currentIndex, videos.length, clearAutoplayTimer]);

  const resetAutoplay = useCallback(() => {
    clearAutoplayTimer();
    startAutoplay();
  }, [clearAutoplayTimer, startAutoplay]);

  const loadVideo = useCallback((index: number) => {
    const video = videoRef.current;
    if (!video) return;
    const data = videos[index];
    if (!data) return;
    if (video.src !== data.src) {
      video.src = data.src;
      video.load();
    }
    video.pause();
    setIsPlaying(false);
    setCurrentIndex(index);
  }, [videos]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    resetAutoplay();
  }, [resetAutoplay]);

  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    loadVideo(nextIndex);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentIndex, videos.length, loadVideo]);

  const handleDotClick = useCallback((index: number) => {
    loadVideo(index);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
    resetAutoplay();
  }, [loadVideo, resetAutoplay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videos[currentIndex]) return;
    const data = videos[currentIndex];
    if (video.src !== data.src) {
      video.src = data.src;
      video.load();
    }
  }, [currentIndex, videos]);

  useEffect(() => {
    if (autoplayEnabled && videos.length > 1) {
      startAutoplay();
    }
    return () => {
      clearAutoplayTimer();
    };
  }, [autoplayEnabled, startAutoplay, clearAutoplayTimer, videos.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => { if (!video.ended) setIsPlaying(false); };
    const handleEnded = () => {
      setIsPlaying(false);
      clearAutoplayTimer();
      goToNextSlide();
      startAutoplay();
    };
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [goToNextSlide, startAutoplay, clearAutoplayTimer]);

  if (!videos || videos.length === 0) {
    return <div className="videocarsole-empty">No videos provided.</div>;
  }

  return (
    <div className="videocarsole-container">
      <div className={`videocarsole-wrapper ${className}`}>
        <div className="videocarsole-badge-wrapper">
          <span className="videocarsole-badge">
            <i className="fas fa-play"></i> {autoplayEnabled ? 'autoplay · dots' : 'dots'}
          </span>
        </div>

        <div className="videocarsole-player" ref={containerRef} onClick={togglePlay}>
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            onClick={(e) => e.stopPropagation()}
            className="videocarsole-video"
          />
          <div className="videocarsole-overlay" style={{ opacity: isPlaying ? 0 : 1 }}>
            <i className="fas fa-circle-play"></i>
          </div>
        </div>

        <div className="videocarsole-dots">
          {videos.map((video, idx) => (
            <button
              key={idx}
              className={`videocarsole-dot ${idx === currentIndex ? 'videocarsole-dot-active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Video ${idx + 1}: ${video.title}`}
            />
          ))}
        </div>

        <div className="videocarsole-title">
          <i className="fas fa-film"></i>
          <span>{currentVideo?.title || 'Untitled'}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;