"use client";
import React from "react";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import { useAOS } from "@/components/hooks/useAOS";
import "@/assets/css/textAnimations.css";
import "./components/dynamicwebdesign.css";
import SeoCoverflowSection, {
  CoverflowSlide,
} from "@/components/offpageseo/header";
import PaymentGatewayIntegration from "./apiintegrstion/PaymentGatewayIntegration";
import BusinessSelections from "./apiintegrstion/BusinessSelections"
import FAQA1 from './components/FAQA1';

const seoTopText = `Looking for reliable API Integration Services in Chennai to connect your website, applications, CRM, payment systems, and third-party platforms? We provide secure and scalable API integration solutions that help businesses automate processes, improve communication, and create seamless digital experiences.`;

const seoBottomText = `Our API integration services enable your website or application to communicate efficiently with external platforms and services. From Payment Gateway Integration and SMS Gateway Integration to WhatsApp Gateway Integration, Zoho CRM Integration, Chat API Integration, and other third-party APIs, we build integrations tailored to your business requirements.`;

// Dynamic Data Definition
const seoSlides: CoverflowSlide[] = [
  {
    src: "/assets/images/website-development/API-Integration/top-1.jpg",
    alt: "API Integration Services",
  },
  {
    src: "/assets/images/website-development/API-Integration/top-2.jpg",
    alt: "API Integration Solutions",
  },
  {
    src: "/assets/images/website-development/API-Integration/top-3.jpg",
    alt: "Third Party API Integration",
  },
  {
    src: "/assets/images/website-development/API-Integration/top-4.jpg",
    alt: "Business API Integration",
  },
  {
    src: "/assets/images/website-development/API-Integration/top-5.jpg",
    alt: "Custom API Integration",
  },
];

function ApiIntegration() {
  // Use the AOS hook
  useAOS();
  return (
    <div>
      <BreadcurmbData />
      <SeoCoverflowSection
        subtitle="API Integration Services in Chennai"
        titlePrefix="Seamlessly Connect Your Business with  "
        titleSuffix="Powerful API Integrations"
        topDescription={seoTopText}
        bottomDescription={seoBottomText}
        slides={seoSlides}
        autoScrollSpeed={1200}
        className="akone"
      />
      <PaymentGatewayIntegration />
      <BusinessSelections/>
      <FAQA1 num1={42} num2={47}
                highlightedText="Frequently Asked Questions"
                titleSuffix="" />
    </div>
  );
}

export default ApiIntegration;
