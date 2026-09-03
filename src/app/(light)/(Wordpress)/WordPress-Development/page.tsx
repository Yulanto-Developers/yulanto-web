import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Banner from "@/components/WordPress-Development/Banner";
import Header from "@/components/WordPress-Development/header";
import Services from "@/components/WordPress-Development/Development-Services";
import Features from "@/components/WordPress-Development/Features";
import Why from "@/components/WordPress-Development/whychoose";
import Benifits from "@/components/WordPress-Development/Benefits-WordPress";
import Faq, { FaqSectionData } from "@/components/company-profile/faq";
import Website from "@/components/WordPress-Development/WordPress-Website";
import DevlopmentCompany from "@/components/WordPress-Development/Development-Company";

const wordpressFaqData: FaqSectionData = {
  mainTitleBlue: "Frequently Asked ",
  mainTitleBlack: "Questions",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left",
      faqItems: [
        {
          id: "q1",
          question: "Is WordPress suitable for business websites?",
          answer:
            "Yes. WordPress is suitable for startups, small businesses, corporate organizations, institutions, and many other types of businesses. It provides flexibility to create and manage different types of websites.",
        },
        {
          id: "q2",
          question: "Can you design a completely custom WordPress website?",
          answer:
            "Yes. WordPress websites can be customized according to your brand identity, content structure, design requirements, and business functionality.",
        },
        {
          id: "q3",
          question: "Can WordPress be used for eCommerce?",
          answer:
            "Yes. WordPress can be extended with eCommerce solutions such as WooCommerce to create online stores with product management, shopping carts, payment integration, order management, and other features.",
        },
        {
          id: "q4",
          question: "Is WordPress SEO-friendly?",
          answer:
            "WordPress provides a strong foundation for SEO, but achieving good search visibility requires proper technical SEO, quality content, website performance, mobile optimization, and ongoing SEO efforts.",
        },
      ],
    },
    {
      id: "row2",
      speed: "55s",
      direction: "right",
      faqItems: [
        {
          id: "q5",
          question: "Can an existing WordPress website be redesigned?",
          answer:
            "Yes. We can redesign an existing WordPress website to provide a modern appearance, improved navigation, responsive layouts, better user experience, and updated functionality.",
        },
        {
          id: "q6",
          question: "Can I manage the website myself after development?",
          answer:
            "Yes. One of the key advantages of WordPress is its easy-to-use content management system. You can manage pages, blog posts, images, products, and other content through the WordPress dashboard.",
        },
        {
          id: "q7",
          question: "Do you provide WordPress maintenance and support?",
          answer:
            "Yes. WordPress websites may require regular updates, backups, security checks, performance monitoring, and technical support. Maintenance services can be provided based on your requirements.",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Banner />
      <Header />
      <Services />
      <Features />
      <Why />
      <Benifits />
      <Faq data={wordpressFaqData} />
      <Website />
      <DevlopmentCompany />
    </main>
  );
}