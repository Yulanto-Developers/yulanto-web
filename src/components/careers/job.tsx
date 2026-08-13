"use client";

import JobListingComponent, { Job, Resend, Supabase, Turso } from "./JobListingComponent";

const sampleJobs: Job[] = [
  {
    company: "Resend",
    title: "Senior Frontend Engineer",
    logo: <Resend />,
    job_description: "Building email infrastructure for developers using React and TypeScript.",
    salary: "$140k - $180k",
    location: "San Francisco, CA",
    remote: "Yes",
    job_time: "Full-time",
  },
  {
    company: "Turso",
    title: "Database Engineer",
    logo: <Turso />,
    job_description: "Scaling distributed SQLite databases for modern web frameworks.",
    salary: "$150k - $190k",
    location: "New York, NY",
    remote: "Hybrid",
    job_time: "Full-time",
  },
  {
    company: "Supabase",
    title: "DevRel Engineer",
    logo: <Supabase />,
    job_description: "Helping developers build backend services with Postgres.",
    salary: "$130k - $160k",
    location: "Remote",
    remote: "Yes",
    job_time: "Full-time",
  },
];

export default function Job() {
  return <JobListingComponent jobs={sampleJobs} />;
}