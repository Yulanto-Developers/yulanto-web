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

export default function Page() {
    return (
        <main>
            <Breadcrumbdata />
            <Head
                subtitle="Flyer & Poster Design Company in Chennai"
                titleBlue="Creative Flyers & Posters "
                titleBlack="That Make Your Brand Stand Out"
                description="Looking for professional flyer and poster design in Chennai? We create eye-catching, creative, and purposeful designs that help businesses promote their products, services, offers, events, and brand messages effectively.

As a creative graphic design company in Chennai, we design flyers and posters that combine attractive visuals, clear messaging, strong branding, and compelling layouts to capture attention and encourage action."

                images={heroImages}
            />
            <PackagingServices />
           
            <Whychoose />
            <Poster />
            <CTA />
        </main>
    );
}