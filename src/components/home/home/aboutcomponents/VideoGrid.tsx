"use client";

import VideoCard from "./VideoCard";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

interface VideoItem {
  id: number | string;
  title: string;
  year: string;
  poster?: string;
  src: string;
  priority?: boolean;
}

interface VideoGridProps {
  videos?: VideoItem[];
  columns?: 1 | 2 | 3 | 4;
}

const videoData: VideoItem[] = [
  {
    id: 1,
    title: "Core",
    year: "2026",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    src: "/videos/video.mp4",
    priority: true,
  },
  {
    id: 2,
    title: "360 Abroad",
    year: "2026",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    src: "/videos/video2.mp4",
    priority: false,
  },
];

const VideoGrid = ({
  videos = videoData,
  columns = 3,
}: VideoGridProps) => {
  const getColumnClass = () => {
    const colMap: Record<number, string> = {
      1: "col-12",
      2: "col-12 col-md-6",
      3: "col-12 col-md-6 col-lg-4",
      4: "col-12 col-md-6 col-lg-4 col-xl-3",
    };

    return colMap[columns] || colMap[3];
  };

  return (
    <section className="container my-5">
      <SectionTitle
        subtitle="Video"
        titleFirst="How Effective Website Design & Development Can Accelerate Business Growth"
        titleSecond=""
        description=""
      />

      <div className="row g-4 mt-3">
        {videos.map((video, index) => (
          <div
            key={`${video.id}-${video.src}-${index}`}
            className={getColumnClass()}
          >
            <VideoCard
              title={video.title}
              year={video.year}
              poster={video.poster}
              src={video.src}
              priority={video.priority ?? false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;