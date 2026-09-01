import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import SeoCoverflowSection, { CoverflowSlide } from "@/components/offpageseo/header";
import Why from "@/components/offpageseo/whydoyou"
import Beneift from"@/components/offpageseo/benefits"
import Back from "@/components/offpageseo/backlink"
import Faq from "@/components/offpageseo/faq"
import Grow from "@/components/offpageseo/Grow"
import Offabout from "@/components/offpageseo/OffseoAbout"


const seoTopText = `Off-Page SEO is an essential part of a successful search engine optimization strategy that focuses on improving your website's authority, credibility, visibility, and reputation outside your own website. While on-page SEO optimizes your website content and technical elements, off-page SEO helps search engines understand how trustworthy and relevant your business is within your industry.`;

const seoBottomText = `As a professional SEO company in Chennai, we provide result-oriented off-page SEO strategies designed to improve search rankings, strengthen your online presence, attract quality traffic, and generate more business opportunities. Our Chennai SEO services include strategic link building, business citations, local SEO, content promotion, brand mentions, social signals, and other ethical off-page optimization techniques. Whether you are a startup, local business, e-commerce company, or established organization, our team develops customized off-page SEO campaigns based on your business goals, competition, target audience, and industry.`;
// Dynamic Data Definition
const seoSlides: CoverflowSlide[] = [
  { src: "/assets/img/offpage/top-1.jpg", alt: "Off-Page Link Building Strategy" },
  { src: "/assets/img/offpage/top-2.jpg", alt: "Local Citation & Directory Submission" },
  { src: "/assets/img/offpage/top-3.jpg", alt: "Content Marketing & Guest Posting" },
  { src: "/assets/img/offpage/top-4.jpg", alt: "Brand Mention & Authority Building" },
  { src: "/assets/img/offpage/top-5.jpg", alt: "Social Signals & Digital PR" },
];
export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <SeoCoverflowSection
        subtitle="Off-Page SEO in Chennai"
        titlePrefix="Build Authority, Rankings & "
        titleSuffix="Online Visibility"
        topDescription={seoTopText}
        bottomDescription={seoBottomText}
        slides={seoSlides}
        autoScrollSpeed={1200}
      />
      <Why />
      <Beneift />
      <Back />
      <Offabout />
      <Faq />
      
      <Grow />
     
    </main>
  );
}