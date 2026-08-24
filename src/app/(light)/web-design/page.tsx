"use client";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Startupwebsitedesgin from "@/components/home/home/web-desgin/Startup-website-desgin";



export default async function page({ params }: { params: Promise<{ pageP: string }> }) {
  const { pageP } = await params;

  console.log(pageP);

  return (
    <>
      {/* <BreadcurmbData />
      <style>{`
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInText 0.35s ease-out forwards;
        }
      `}</style> */}

      {/* <IntroContent leftTitle={'From Vision to Reality'} rightTitle1={'Real Projects.'} rightTitle2={' Creative Solutions. Real Results.'} description={'Explore our successful projects and discover how we transform ideas into engaging, innovative, and impactful digital experiences that help businesses grow and stand out online.'} /> */}




    </>
  );
}

