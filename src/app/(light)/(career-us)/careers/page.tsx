"use client";

import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Banner from "@/components/careers/banner";
import Culture from "@/components/careers/culture";
import Job from "@/components/careers/job";
import Hero from "@/components/careers/hero";

const heroImages = [
  "/assets/img/careers/banner/img-careers-1.jpg",
  "/assets/img/careers/banner/img-careers-2.jpg",
  "/assets/img/careers/banner/img-careers-3.jpg",
  "/assets/img/careers/banner/img-careers-4.jpg",
  "/assets/img/careers/banner/img-careers-5.jpg",
  "/assets/img/careers/banner/img-careers-6.jpg",
  "/assets/img/careers/banner/img-careers-7.jpg",
  "/assets/img/careers/banner/img-careers-8.jpg",
];

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Hero images={heroImages} />

      <Banner />

      <Job />

      <Culture />

      
    </main>
  );
}