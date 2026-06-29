
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface VideoContextType {
  isVideoOpen: boolean;
  videoUrl: string;
  playVideo: (videoId: string, platform?: "youtube" | "vimeo") => void;
  closeVideo: () => void;
}

const VideoContext = createContext<VideoContextType>({
  isVideoOpen: false,
  videoUrl: "",
  playVideo: () => {},
  closeVideo: () => {},
});

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const playVideo = useCallback(
    (videoId: string, platform: "youtube" | "vimeo" = "youtube") => {
      const url =
        platform === "youtube"
          ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
          : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

      setVideoUrl(url);
      setIsVideoOpen(true);
    },
    []
  );

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setVideoUrl("");
  }, []);

  return (
    <VideoContext.Provider
      value={{ isVideoOpen, videoUrl, playVideo, closeVideo }}
    >
      {children}

      {isVideoOpen && (
        <div
          className="video-modal-overlay"
          role="presentation"
        >
          {/* Backdrop button */}
          <button
            type="button"
            className="video-modal-backdrop"
            onClick={closeVideo}
            aria-label="Close video modal"
          />

          {/* Modal */}
          <div
            className="video-modal-container"
            role="dialog"
            aria-modal="true"
            aria-label="Video player modal"
          >
            <button
              type="button"
              onClick={closeVideo}
              className="video-modal-close"
              aria-label="Close video modal"
            >
              ×
            </button>

            <iframe
              title="Video player"
              src={videoUrl}
              className="video-modal-iframe"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);