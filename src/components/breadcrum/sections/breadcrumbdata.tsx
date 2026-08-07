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
    path: "/clients", // Your Our Clients page route
    title: "Our Clients",
    currentPage: "Our Clients",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg", // Change to your image
  },
   {
    path: "/tocontact", // Your Our Clients page route
    title: "Contact Us",
    currentPage: "Contact Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg", // Change to your image
  },
];

export default function BreadcurmbData() {
  const pathname = usePathname();

  const page = data.find((item) => item.path === pathname);

  if (!page) return null;

  return (
    <Breadcrumb
      title={page.title}
      currentPage={page.currentPage}
      backgroundImage={page.backgroundImage}
    />
  );
}