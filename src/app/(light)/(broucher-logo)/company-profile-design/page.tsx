import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/company-profile/header";
import Second from "@/components/company-profile/hero-04";
import BrochureNeeds from "@/components/company-profile/brochure-needs";
import Design from "@/components/company-profile/design-formats";
import Services from "@/components/company-profile/design-services";
import Why from "@/components/company-profile/why-choose";
import Show from "@/components/company-profile/interactive-book-showcase";
import { GraphicDesignSection } from "@/components/company-profile/brochuredesign";
import Faq, { FaqSectionData } from "@/components/company-profile/faq";

const faqData: FaqSectionData = {
  mainTitleBlue: "Frequently Asked ",
  mainTitleBlack: "Questions",
  rows: [
    {
      id: "row1",
      speed: "55s",
      direction: "left",
      faqItems: [
        {
          id: "q1",
          question: "What graphic design services do you provide in Chennai?",
          answer:
            "We provide a range of graphic design services, including brochure design, flyer design, company profile design, catalogue design, presentation design, poster design, social media creatives, advertisement designs, business cards, and other marketing materials.",
        },
        {
          id: "q2",
          question: "Why should I hire a professional graphic design company?",
          answer:
            "A professional graphic design company can help you create visually consistent and strategically designed marketing materials that communicate your business message clearly and create a stronger brand impression.",
        },
        {
          id: "q3",
          question: "Do you provide brochure design services for startups?",
          answer:
            "Yes. We create customized brochure designs for startups, SMEs, corporates, and businesses across different industries. The design can be developed according to your brand identity, content, budget, and marketing requirements.",
        },
        {
          id: "q4",
          question: "What types of brochures can you design?",
          answer:
            "We design bi-fold, tri-fold, gate-fold, single-fold, Z-fold, and other customized brochure formats based on your content and communication requirements.",
        },
        {
          id: "q5",
          question: "How much does brochure design cost?",
          answer:
            "Brochure design pricing depends on factors such as the number of pages or panels, design complexity, content requirements, number of concepts, revisions, and final deliverables. We can provide a customized quotation based on your requirements.",
        },
      ],
    },
    {
      id: "row2",
      speed: "65s",
      direction: "right",
      faqItems: [
        {
          id: "q6",
          question: "What information do you need to start a brochure design?",
          answer:
            "We generally require your company information, logo, brand guidelines, product or service details, images, contact information, target audience, and any specific design preferences you may have.",
        },
        {
          id: "q7",
          question: "Can you design brochures for different industries?",
          answer:
            "Yes. We create customized designs for businesses across industries, including real estate, construction, manufacturing, education, healthcare, technology, professional services, retail, and more.",
        },
        {
          id: "q8",
          question: "Can I request changes to the design?",
          answer:
            "Yes. We consider client feedback as part of the design process and make revisions based on the agreed project scope to ensure the final design meets your expectations.",
        },
        {
          id: "q9",
          question: "Do you provide brochure printing services?",
          answer:
            "We focus on brochure design and provide the final artwork files. Once the design is approved, you can use the print-ready files with your preferred printing partner.",
        },
        {
          id: "q10",
          question: "What file formats will I receive?",
          answer:
            "Depending on your requirement, we can provide suitable final files such as PDF and other commonly required digital or print-ready formats.",
        },
        {
          id: "q11",
          question: "How do I get started with your graphic design services?",
          answer:
            "Simply share your design requirements, business details, content, and any reference materials with us. Our team will understand your requirements and suggest a suitable design approach for your project.",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Second
        primaryImage="assets/img/company-profile/third-img-1.jpg"
        secondaryImage="assets/img/company-profile/third-img-2.jpg"
        animation="subtle"
      />
      <BrochureNeeds />
      <Design />
      <Services />
      <Why />
      <Show />
      <GraphicDesignSection />
      <Faq data={faqData} />
    </main>
  );
}