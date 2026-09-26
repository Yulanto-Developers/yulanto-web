import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Head from "@/components/poster-design/header";
import PackagingServices from "@/components/poster-design/FlyerPosterServices";
import Whychoose from "@/components/poster-design/WhyChooseFlyerPoster";
import Poster from "@/components/poster-design/postdesign";
import CTA from "@/components/poster-design/Cta";
const heroImages = [
    "/assets/img/flyerposter/top-1.jpg",
    "/assets/img/flyerposter/top-2.jpg",
    "/assets/img/flyerposter/top-3.jpg",
    "/assets/img/flyerposter/top-4.jpg",
    "/assets/img/flyerposter/top-5.jpg",
    "/assets/img/flyerposter/top-6.jpg",
    "/assets/img/flyerposter/top-7.jpg",
    
];

const heroAlt = [
    'flyers and brochures design',
    'brochure flyer design',
    'catalog flyer',
    'design flyer brochure business card banner design',
    'digital printing flyer',
    'flyers and brochures design company',
    'flyers and brochures design company in chennai',
    
];


import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { posterpageSeo } from "@/lib/seo-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto.com";
const SLUG = "flyer-poster-design";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: posterpageSeo.title,
  description: posterpageSeo.description,
  slug: SLUG,
  image: posterpageSeo.image,
  imageAlt: posterpageSeo.imageAlt,
});

export default function Page() {
    const seo = posterpageSeo;
    return (
        <main>
            {/* Breadcrumb Schema */}
                  <BreadcrumbSchema
                    items={[
                      { name: "Home", url: `${SITE_URL}/` },
                      { name: seo.serviceName, url: pageUrl },
                    ]}
                  />
        
                  {/* Service Schema */}
                  <ServiceSchema
                    name={seo.serviceName}
                    description={seo.serviceDescription}
                    url={pageUrl}
                    image={seo.image}
                  />
            <Breadcrumbdata />
            <Head
                subtitle="Flyer & Poster Design Company in Chennai"
                titleBlue="Creative Flyers & Posters "
                titleBlack="That Make Your Brand Stand Out"
                description="Looking for professional flyer and poster design in Chennai? We create eye-catching, creative, and purposeful designs that help businesses promote their products, services, offers, events, and brand messages effectively.

As a creative graphic design company in Chennai, we design flyers and posters that combine attractive visuals, clear messaging, strong branding, and compelling layouts to capture attention and encourage action."

                images={heroImages} alt={heroAlt}

            />
            <PackagingServices />
           
            <Whychoose />
            <Poster />
            <CTA />
        </main>
    );
}