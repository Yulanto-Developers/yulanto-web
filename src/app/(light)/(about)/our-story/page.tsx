import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import {
  AboutCompany,
  TimelineSlider,
  VideoGrid,
} from "@/components/home/home/aboutcomponents";
import GalleryGrid from "@/components/home/home/aboutcomponents/GalleryGrid";
// import "./globals.scss";
import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

import { faqData } from "@/lib/faq-data";

export const metadata = generateSeo({
  title: "Leading Web Design Company in Chennai Since 2015",
  description:
    "Learn about Yulanto Web Creations, a web design and development company in Chennai established in 2015.",

  slug: "our-story",

  image: "/assets/img/sample/gallery/img- (1).jpg",

  imageAlt: "Yulanto Web Creations - Web Design Company in Chennai",
});

const HomePage = () => {
  const faq = faqData["our-story"];

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://yulanto-web.vercel.app/",
          },
          {
            name: "Our Story",
            url: "https://yulanto-web.vercel.app/our-story",
          },
        ]}
      />
      {/* FAQ Schema */}
      {faq && <FAQSchema items={[...faq]} />}
      <Breadcrumbdata />
      <AboutCompany />
      <TimelineSlider />
      <GalleryGrid />
      <VideoGrid columns={2} />
    </>
  );
};

export default HomePage;
