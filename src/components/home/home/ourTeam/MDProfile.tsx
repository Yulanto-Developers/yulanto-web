"use client";  

import React from "react";
import MDImg from "@/assets/images/our-team/md-1.png";
import MDImg2 from "@/assets/images/our-team/md-2.png";
import { useAOS } from '@/components/hooks/useAOS';
import '@/assets/css/textAnimations.css';

const MDProfile = () => {
  // Initialize AOS
  useAOS();

  return (
    <section className="md-profile">
      <div className="bg-text">YULANTO</div>

      <div className="container">
        {/* Left Column */}
        <div 
          className="left"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-offset="100"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h3 
            className="px-section-title text-tenor md-desk-title" 
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            From the Managing <br/>
            Director&apos;s Desk
          </h3>
          <h4 
            className="px-about-title text-tenor"
            data-aos="text-reveal"
            data-aos-delay="150"
          >
            AJ Vasanthan
          </h4>
          <p className="text-figtree"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            Yulanto was founded with a vision to deliver cost-effective, high-quality web design and development solutions with customer satisfaction at the heart of everything we do.
          </p>
        </div>

        {/* Center Image */}
        <div 
          className="center"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <img src={MDImg2.src} alt="Aaryan Ningdhalli Profile" />
        </div>

        {/* Right Column */}
        <div 
          className="right"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-offset="100"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <p className="text-figtree"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="400"
          >
            We combine creative thinking, modern technology, and industry expertise to create innovative, user-friendly, and result-driven digital solutions that exceed expectations.
          </p>
          <p className="text-figtree"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            Our commitment to quality, innovation, transparency, and measurable results helps us build lasting client relationships and drive sustainable business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MDProfile;