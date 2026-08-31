"use client";

import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Banner from "@/components/careers/banner";
import Culture from "@/components/careers/culture";
import Job from "@/components/careers/job";
import Hero from "@/components/careers/hero";
const careerImages: string[] = [
  "/assets/img/careers/banner/img-careers-1.jpg",
  "/assets/img/careers/banner/img-careers-2.jpg",
  "/assets/img/careers/banner/img-careers-3.jpg",
  "/assets/img/careers/banner/img-careers-4.jpg",
  "/assets/img/careers/banner/img-careers-5.jpg",
  "/assets/img/careers/banner/img-careers-6.jpg",
  "/assets/img/careers/banner/img-careers-7.jpg",
  "/assets/img/careers/banner/img-careers-8.jpg",
];

export default function CareersPage() {
  return (
    <main>
      <Breadcrumbdata />
      <Hero
        subtitle="Join Our Journey"
        titleBlue="Shape Your Future"
        titleBlack="With Us"
        description="Our aim is to create potential career pathways and foster opportunities for growth. We provide avenues for career advancement through the accumulation of experience, the acquisition of new skills, the assumption of leadership responsibilities, and the continuous update on industry trends and technologies."
        images={careerImages}
      />
      <Banner />
      <Job />
      <Culture />
    </main>
  );
}