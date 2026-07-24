'use client';

import TeamGallery from './TeamGallery';

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1024/600/600?grayscale",
    url: "https://example.com/four",
    height: 300,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1027/600/500?grayscale",
    url: "https://example.com/five",
    height: 200,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1035/600/700?grayscale",
    url: "https://example.com/six",
    height: 450,
  },
];

export default function GalleryData() {
  return (
   
          <TeamGallery
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
  );
}