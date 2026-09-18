"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "@/assets/css/textAnimations.css";

const Disclaimer = () => {

  // Initialize AOS directly
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="privacy-policy container">
      <style>{`
        .privacy-policy {
          margin: 0 auto;
          padding: 40px 20px;
          line-height: 1.6;
        }
        .privacy-policy h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #000;
        }
        .privacy-policy .last-updated {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 24px 0;
          color: #000;
        }
        .privacy-policy p {
          margin: 0 0 16px 0;
        }
        .privacy-policy h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 28px 0 12px 0;
          color: #000;
        }
        .privacy-policy ul {
          margin: 0 0 16px 0;
          padding-left: 24px;
        }
        .privacy-policy li {
          margin-bottom: 5px;
          font-size: 20px !important;
        }
        .privacy-policy a {
          color: #0066cc;
          text-decoration: underline;
        }
        .privacy-policy a:hover {
          color: #004499;
        }
        .privacy-policy strong {
          font-weight: 800;
        }
        .privacy-policy .address-block {
          margin: 0 0 16px 0;
          padding-left: 0;
        }
        .privacy-policy .copyright {
          margin-top: 32px;
          font-size: 15px;
          color: #555;
        }

        /* Fallback: if AOS fails to load, keep text visible */
        .privacy-policy [data-aos]:not(.aos-init):not(.aos-animate) {
          opacity: 1 !important;
          transform: none !important;
        }

        @media (max-width: 768px) {
          .privacy-policy { padding: 24px 16px; }
          .privacy-policy h1 { font-size: 24px; }
          .privacy-policy h2 { font-size: 20px; margin: 24px 0 10px 0; }
          .privacy-policy li { font-size: 16px !important; }
          .privacy-policy p { font-size: 15px; }
        }

        @media (max-width: 480px) {
          .privacy-policy { padding: 20px 12px; }
          .privacy-policy h1 { font-size: 22px; }
          .privacy-policy h2 { font-size: 18px; }
          .privacy-policy li { font-size: 15px !important; }
          .privacy-policy p { font-size: 14px; }
          .privacy-policy ul { padding-left: 20px; }
        }
      `}</style>

      <h1 className="text-tenor" data-aos="fade-up" data-aos-delay="100">
        Disclaimer
      </h1>
      <p className="last-updated" data-aos="fade-up" data-aos-delay="200">
        Last Updated: September 2026
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        The information provided on www.yulanto.com is published by Yulanto Web
        Creations Pvt. Ltd. (&quot;Yulanto&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) for general informational and business purposes.
      </p>

      <p data-aos="fade-up" data-aos-delay="400">
        By accessing or using this Website, you acknowledge and agree to the
        terms of this Disclaimer.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">1. General Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We make reasonable efforts to ensure that the information published on
        this Website is accurate, current, and useful. However, Yulanto does not
        warrant or guarantee that all information is complete, accurate, current,
        or free from errors or omissions.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Information on the Website may be updated, changed, or removed at any
        time without prior notice.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        You should contact Yulanto directly to confirm specific service details,
        pricing, availability, timelines, and project requirements before making
        a business decision.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">2. Services &amp; Pricing</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Information regarding website design, website development, digital
        marketing, SEO, graphic design, hosting, domain registration, AMC, and
        other services is provided for general reference.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Prices, packages, features, deliverables, timelines, and service
        availability may change without prior notice.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        The final scope, pricing, deliverables, and payment terms will be
        determined by the approved quotation, proposal, agreement, or invoice
        issued by Yulanto.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">3. No Guarantee of Results</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto does not guarantee specific business results from its services.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        In particular, we do not guarantee:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Specific Google or search engine rankings</li>
        <li data-aos="fade-up" data-aos-delay="250">A fixed number of website visitors</li>
        <li data-aos="fade-up" data-aos-delay="300">A fixed number of leads</li>
        <li data-aos="fade-up" data-aos-delay="350">A fixed number of enquiries</li>
        <li data-aos="fade-up" data-aos-delay="400">Sales or revenue</li>
        <li data-aos="fade-up" data-aos-delay="450">Conversion rates</li>
        <li data-aos="fade-up" data-aos-delay="500">Social media reach or engagement</li>
        <li data-aos="fade-up" data-aos-delay="550">Advertising performance</li>
        <li data-aos="fade-up" data-aos-delay="600">Search engine indexing</li>
        <li data-aos="fade-up" data-aos-delay="650">
          Specific delivery or performance results from third-party platforms
        </li>
      </ul>
      <p data-aos="fade-up">
        SEO, Google Ads, social media marketing, website performance, and other
        digital marketing results may be affected by competition, market
        conditions, algorithms, advertising budgets, website quality, industry
        factors, customer behaviour, and other circumstances beyond our control.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">4. Website Availability</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We make reasonable efforts to keep www.yulanto.com available and
        functioning properly.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        However, we do not guarantee uninterrupted or error-free availability of
        the Website.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        The Website may occasionally become unavailable due to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="250">Server or hosting issues</li>
        <li data-aos="fade-up" data-aos-delay="300">Maintenance</li>
        <li data-aos="fade-up" data-aos-delay="350">Software updates</li>
        <li data-aos="fade-up" data-aos-delay="400">Technical problems</li>
        <li data-aos="fade-up" data-aos-delay="450">Network failures</li>
        <li data-aos="fade-up" data-aos-delay="500">Cybersecurity incidents</li>
        <li data-aos="fade-up" data-aos-delay="550">Domain/DNS issues</li>
        <li data-aos="fade-up" data-aos-delay="600">Third-party service failures</li>
        <li data-aos="fade-up" data-aos-delay="650">
          Circumstances beyond our reasonable control
        </li>
      </ul>

      <h2 className="text-tenor" data-aos="fade-up">5. Third-Party Services</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        The Website and our services may include or depend upon third-party
        products and services, including hosting providers, domain registrars,
        Google services, Meta/WhatsApp services, payment gateways, APIs, plugins,
        themes, analytics platforms, advertising platforms, and other external
        services.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Yulanto does not control the operation, availability, pricing, policies,
        or performance of third-party services.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Any use of third-party services is subject to the respective
        provider&apos;s terms, conditions, and policies.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">6. External Links</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website may contain links to external websites operated by third
        parties.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        These links are provided for convenience or informational purposes only.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Yulanto does not control or endorse the content, security, availability,
        privacy practices, products, or services provided by external websites.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        We are not responsible for any loss or damage arising from your use of
        third-party websites.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">7. Portfolio &amp; Client Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website may display client names, logos, screenshots, case studies,
        project descriptions, testimonials, or other portfolio materials.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Such materials may be displayed for portfolio and informational purposes
        and may remain the intellectual property of the respective clients or
        third-party owners.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Where applicable, Yulanto obtains appropriate permission or authorization
        to display such materials.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">8. Testimonials &amp; Reviews</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Testimonials, reviews, and client feedback displayed on the Website
        represent the opinions and experiences of the respective individuals or
        organizations.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Individual results may vary, and such testimonials should not be
        interpreted as a guarantee of similar results for every client.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">9. Technical Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Website development and technology-related information provided on the
        Website is intended for general informational purposes.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Technology, software, browser standards, APIs, plugins, hosting
        environments, and third-party platforms may change over time.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Yulanto does not guarantee that information relating to specific
        technologies will remain current indefinitely.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">10. No Professional Advice</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Information provided on this Website should not be considered legal,
        financial, tax, accounting, investment, medical, or other professional
        advice.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        You should obtain appropriate professional advice where required.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">11. Limitation of Liability</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        To the maximum extent permitted by applicable law, Yulanto Web Creations
        Pvt. Ltd. shall not be liable for any direct, indirect, incidental,
        consequential, special, or business losses arising from or related to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Use or inability to use the Website</li>
        <li data-aos="fade-up" data-aos-delay="200">Reliance on information published on the Website</li>
        <li data-aos="fade-up" data-aos-delay="250">Website downtime</li>
        <li data-aos="fade-up" data-aos-delay="300">Third-party service interruptions</li>
        <li data-aos="fade-up" data-aos-delay="350">Loss of data</li>
        <li data-aos="fade-up" data-aos-delay="400">Cybersecurity incidents</li>
        <li data-aos="fade-up" data-aos-delay="450">External website content</li>
        <li data-aos="fade-up" data-aos-delay="500">Business interruption</li>
        <li data-aos="fade-up" data-aos-delay="550">
          Loss of profits, revenue, customers, or opportunities
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          Changes to search engine algorithms or advertising platforms
        </li>
        <li data-aos="fade-up" data-aos-delay="650">
          Other circumstances beyond Yulanto&apos;s reasonable control
        </li>
      </ul>
      <p data-aos="fade-up">
        Nothing in this Disclaimer is intended to exclude or limit any liability
        that cannot legally be excluded or limited under applicable law.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">12. Intellectual Property</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        All original content, designs, graphics, text, branding, and other
        materials published on www.yulanto.com are protected by applicable
        intellectual property and copyright laws unless otherwise stated.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Unauthorized copying, reproduction, modification, distribution, or
        commercial use is prohibited.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Please refer to our License &amp; Copyright policy for further
        information.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">13. Errors &amp; Corrections</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If you identify an error, outdated information, broken link, or incorrect
        information on our Website, please contact us.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Yulanto reserves the right to correct, modify, or remove any content
        without prior notice.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">14. Changes to This Disclaimer</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto Web Creations Pvt. Ltd. reserves the right to modify or update
        this Disclaimer at any time.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Any updated version will be published on this page with a revised
        &quot;Last Updated&quot; date.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Your continued use of the Website after changes are published
        constitutes acceptance of the updated Disclaimer.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">15. Contact Us</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If you have any questions regarding this Disclaimer, please contact:
      </p>

      <p data-aos="fade-up" data-aos-delay="150">
        <strong>Yulanto Web Creations Pvt. Ltd.</strong>
      </p>

      <div className="address-block">
        <p data-aos="fade-up" data-aos-delay="200">
          Website:{' '}
          <a href="http://www.yulanto.com/" target="_blank" rel="noopener noreferrer">
            www.yulanto.com
          </a>
        </p>
        <p data-aos="fade-up" data-aos-delay="250">
          Email: <strong>info@yulanto.com</strong>
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          Phone: <strong>+91 9962157250</strong>
        </p>
        <p data-aos="fade-up" data-aos-delay="350">
          Address: Yulanto Web Creations Pvt Ltd
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          F3, #4/608, First Floor, V.O.C Street,
        </p>
        <p data-aos="fade-up" data-aos-delay="450">
          Kottivakkam, OMR,
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          Chennai - 600 041, Tamilnadu, India.
        </p>
      </div>

      <p className="copyright" data-aos="fade-up" data-aos-delay="100">
        © 2015-2026 Yulanto Web Creations Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
};

export default Disclaimer;