"use client";

import JobListingComponent, { type Job } from "./JobListingComponent";
import {
  Megaphone,
  BriefcaseBusiness,
  Palette,
} from "lucide-react";
const sampleJobs: Job[] = [
  {
    company: "Digital Marketing Executive",
    title: "Experience: Minimum 2 Years Experience",
     logo: <Megaphone size={34} strokeWidth={2} />,
    job_description: "Looking for a skilled Digital Marketing Executive with minimum 2 years of experience in digital marketing strategies, SEO, social media management, and content creation.",
    salary: "₹20,000 – ₹25,000 / Month",
    location: "Work from Office",
    remote: "No",
    job_time: "Full-time",
  },
  {
    company: "Business Development Executive",
    title: "Experience: Freshers - PG / Master Degree",
    logo: <BriefcaseBusiness size={34} strokeWidth={2} />,
    job_description: "Seeking enthusiastic freshers with PG/Master degree for Business Development role. Opportunity to learn and grow in a dynamic environment.",
    salary: "₹12,000 / Month",
    location: "Work from Office",
    remote: "No",
    job_time: "Full-time",
  },
  {
    company: "Graphic Designers",
    title: "Experience: Freshers - Any Degree",
    logo: <Palette size={34} strokeWidth={2} />,
    job_description: "We are looking for creative Graphic Designers. Freshers with any degree can apply. Must have a passion for design and creativity.",
    salary: "₹12,000 / Month",
    location: "Work from Office",
    remote: "No",
    job_time: "Full-time",
  },
];

export default function Job() {
  return (
    <>

      <JobListingComponent jobs={sampleJobs} />
    </>
  );
}