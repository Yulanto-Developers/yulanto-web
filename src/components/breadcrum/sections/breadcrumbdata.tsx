"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";


const data = [
  {
    path: "/our-story",
    title: "Our Story",
    currentPage: "Our Story",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/our-team',
    title: "Meet Our Team",
    currentPage: "Meet Our Team",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/our-mission-vision',
    title: "Our Vision & Mission",
    currentPage: "Our Vision & Mission",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  }
  ,
  {
    path: '/our-philosophy',
    title: "Our Philosophy",
    currentPage: "Our Philosophy",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/why-choose-us',
    title: "Why Choose Us",
    currentPage: "Why Choose Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/clients",
    title: "Our Clients",
    currentPage: "Our Clients",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/careers",
    title: "Our Career",
    currentPage: "Our Career",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/tocontact",
    title: "Contact Us",
    currentPage: "Contact Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/recent-project",
    title: "Recent Projects",
    currentPage: "Recent Projects",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg", // Change to your image

  },
  {
    path: "/portfolio",
    title: "Portfolio",
    currentPage: "Portfolio",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/industry-we-serve",
    title: "Industry We Serve",
    currentPage: "Industry We Serve",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/case-studies",
    title: "Case Studies",
    currentPage: "Case Studies",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/seo",
    title: "Search Engine Optimization",
    currentPage: "SEO",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
];

export default function BreadcurmbData() {
  const pathname = usePathname();

  const page = data.find((item) => item.path === pathname);
  // console.log('ez')

  if (!page) return null;

  return (
    <Breadcrumb
      title={page.title}
      currentPage={page.currentPage}
      backgroundImage={page.backgroundImage}
    />
  );
}