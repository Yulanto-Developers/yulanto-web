"use client";

import VideoCard from "./VideoCard";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

interface VideoItem {
  id: number | string;
  title: string;
  year: string;
  youtubeId: string;
  priority?: boolean;
}

interface VideoGridProps {
  videos?: VideoItem[];
  columns?: 1 | 2 | 3 | 4;
}

// Updated data matching the provided YouTube links
const videoData: VideoItem[] = [
  {
    id: 1,
    title: "Responsive Web Design Company",
    year: "2017",
    youtubeId: "GLHe-zBsh7k",
    priority: true,
  },
  {
    id: 2,
    title: "Web Development Company in Chennai",
    year: "2017",
    youtubeId: "prWzEbXKaCw",
    priority: false,
  },
];

const VideoGrid = ({
  videos = videoData,
  columns = 2,
}: VideoGridProps) => {
  const getColumnClass = () => {
    const colMap: Record<number, string> = {
      1: "col-12",
      2: "col-12 col-md-6",
      3: "col-12 col-md-6 col-lg-4",
      4: "col-12 col-md-6 col-lg-4 col-xl-3",
    };

    return colMap[columns] || colMap[2];
  };

  return (
    <section className="container my-5">
      <SectionTitle
        subtitle="Video"
        titleFirst="How Effective Website Design & Development"
        titleSecond="Can Accelerate Business Growth"
        description=""
      />

      <div className="row g-4 mt-3">
        {videos.map((video, index) => (
          <div
            key={`${video.id}-${video.youtubeId}-${index}`}
            className={getColumnClass()}
          >
            <VideoCard
              title={video.title}
              year={video.year}
              youtubeId={video.youtubeId}
              priority={video.priority ?? false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;