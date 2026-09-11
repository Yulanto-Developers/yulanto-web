import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import {
  AboutCompany,
  TimelineSlider,
  VideoGrid,
} from "@/components/home/home/aboutcomponents";
import GalleryGrid from "@/components/home/home/aboutcomponents/GalleryGrid";
// import "./globals.scss";
// seo
import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import { faqData } from "@/lib/faq-data";

export const metadata = generateSeo({
  title: "Our Story | Web Designing Company in Chennai Since 2015",
  description:
    "Yulanto Web Creations is a leading web designing and development company in Chennai since 2015, creating custom web design and SEO-friendly websites.",
});
// end seo

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
