"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./TimeLine";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
              alt="startup template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
              alt="startup template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="startup template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop"
              alt="startup template"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p>
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p>
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
              alt="hero template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
              alt="feature template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="bento template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop"
              alt="cards template"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p>Deployed 5 new components on Aceternity today</p>
          <div className="checklist">
            <div className="checklist-item">
              <span className="icon">✅</span> Card grid component
            </div>
            <div className="checklist-item">
              <span className="icon">✅</span> Startup template Aceternity
            </div>
            <div className="checklist-item">
              <span className="icon">✅</span> Random file upload lol
            </div>
            <div className="checklist-item">
              <span className="icon">✅</span> Himesh Reshammiya Music CD
            </div>
            <div className="checklist-item">
              <span className="icon">✅</span> Salman Bhai Fan Club registrations
              open
            </div>
          </div>
          <div className="grid">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
              alt="hero template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
              alt="feature template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="bento template"
              width={500}
              height={500}
            />
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop"
              alt="cards template"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ minHeight: "100vh", width: "100%", position: "relative" }}>
      <Timeline data={data} />
    </div>
  );
}