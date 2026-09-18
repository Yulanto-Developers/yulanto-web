"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "@/assets/css/textAnimations.css";

const LicenseCopyright = () => {

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
        License &amp; Copyright
      </h1>
      <p className="last-updated" data-aos="fade-up" data-aos-delay="200">
        Last Updated: September 2026
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        Unless otherwise stated, all content and materials available on{' '}
        <a href="http://www.yulanto.com/" target="_blank" rel="noopener noreferrer">
          www.yulanto.com
        </a>{' '}
        are the property of{' '}
        <strong>Yulanto Web Creations Pvt. Ltd.</strong> or are used with
        appropriate permission, license, or authorization.
      </p>

      <p data-aos="fade-up" data-aos-delay="400">
        This includes, but is not limited to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="450">Website design and layout</li>
        <li data-aos="fade-up" data-aos-delay="500">Website content and text</li>
        <li data-aos="fade-up" data-aos-delay="550">Logos, trademarks, and brand elements</li>
        <li data-aos="fade-up" data-aos-delay="600">Graphics and illustrations</li>
        <li data-aos="fade-up" data-aos-delay="650">Images and photographs</li>
        <li data-aos="fade-up" data-aos-delay="700">Icons and visual elements</li>
        <li data-aos="fade-up" data-aos-delay="750">Videos and animations</li>
        <li data-aos="fade-up" data-aos-delay="800">Source code and custom code</li>
        <li data-aos="fade-up" data-aos-delay="850">Scripts and functionality</li>
        <li data-aos="fade-up" data-aos-delay="900">UI/UX designs</li>
        <li data-aos="fade-up" data-aos-delay="950">Portfolio presentations</li>
        <li data-aos="fade-up" data-aos-delay="1000">Case studies</li>
        <li data-aos="fade-up" data-aos-delay="1050">
          Proposals, documents, and other original materials
        </li>
        <li data-aos="fade-up" data-aos-delay="1100">
          Other intellectual property displayed on or created for the Website
        </li>
      </ul>

      <h2 className="text-tenor" data-aos="fade-up">1. Copyright Ownership</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        All original content created and published by Yulanto Web Creations Pvt.
        Ltd. is protected by applicable copyright and intellectual property
        laws.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Unless expressly stated otherwise, no part of this Website may be
        copied, reproduced, modified, republished, distributed, transmitted,
        displayed, sold, or commercially exploited without prior written
        permission from Yulanto Web Creations Pvt. Ltd.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">2. Permitted Use</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Visitors may access and view the Website for personal, informational, or
        legitimate business purposes.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        You may not:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">
          Copy or reproduce Website content without permission
        </li>
        <li data-aos="fade-up" data-aos-delay="250">
          Download or reuse designs, graphics, images, or source code for
          commercial purposes
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          Republish Yulanto&apos;s content on another website or platform
        </li>
        <li data-aos="fade-up" data-aos-delay="350">
          Modify or create derivative works from Yulanto&apos;s original materials
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          Use Yulanto&apos;s branding, logo, or trademarks without written
          authorization
        </li>
        <li data-aos="fade-up" data-aos-delay="450">
          Use Website content to create competing services or materials
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          Scrape, systematically download, or reproduce substantial portions of
          the Website
        </li>
        <li data-aos="fade-up" data-aos-delay="550">
          Use Yulanto&apos;s portfolio or client work in a misleading manner
        </li>
      </ul>

      <h2 className="text-tenor" data-aos="fade-up">3. Yulanto Logo &amp; Trademarks</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>Yulanto Web Creations</strong>, the Yulanto name, logo, taglines,
        and other brand elements are the property of Yulanto Web Creations Pvt.
        Ltd., unless otherwise stated.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Unauthorized use, reproduction, modification, or representation of
        Yulanto&apos;s trademarks or branding is prohibited.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">4. Portfolio &amp; Client Work</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        The portfolio, case studies, screenshots, project descriptions, and other
        work displayed on the Yulanto Website may represent projects completed
        for Yulanto&apos;s clients.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Where applicable, the respective client names, logos, trademarks, images,
        and other materials remain the property of their respective owners.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Yulanto does not claim ownership of a client&apos;s trademarks, logos,
        content, or other materials unless expressly agreed otherwise.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">5. Third-Party Content &amp; Licenses</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Certain content, software, plugins, themes, fonts, images, icons,
        libraries, APIs, or other materials used on the Website may be provided
        by third parties and may be subject to separate copyright, licensing, or
        usage restrictions.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Such materials remain subject to the terms and licenses of their
        respective owners.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Yulanto does not claim ownership of third-party intellectual property.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">6. Website Development Projects</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        For websites and digital products developed by Yulanto for clients,
        ownership and usage rights are governed by the applicable project
        quotation, proposal, agreement, or Terms &amp; Conditions.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        Unless otherwise agreed in writing:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">
          Client-provided content remains the property of the Client.
        </li>
        <li data-aos="fade-up" data-aos-delay="250">
          Third-party software remains subject to its applicable license.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          Custom work specifically developed for the Client may be transferred to
          the Client upon receipt of full payment.
        </li>
        <li data-aos="fade-up" data-aos-delay="350">
          Yulanto retains ownership of its pre-existing tools, frameworks,
          reusable components, development methods, know-how, and proprietary
          resources.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          Unpaid project work remains under Yulanto&apos;s control until all
          applicable payments are settled.
        </li>
      </ul>

      <h2 className="text-tenor" data-aos="fade-up">7. Unauthorized Use</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If any content belonging to Yulanto is found to have been copied,
        reproduced, distributed, or used without authorization, Yulanto reserves
        the right to request removal of the unauthorized material and take any
        other action available under applicable law.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">8. Copyright Infringement</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If you believe that any material displayed on the Yulanto Website
        infringes your copyright or intellectual property rights, please contact
        us with sufficient information to identify:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">
          The copyrighted work or intellectual property concerned
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          The material alleged to be infringing
        </li>
        <li data-aos="fade-up" data-aos-delay="250">
          The location of the material on our Website
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          Your contact information
        </li>
        <li data-aos="fade-up" data-aos-delay="350">
          Any supporting information demonstrating your ownership or
          authorization
        </li>
      </ul>
      <p data-aos="fade-up">
        Yulanto will review legitimate copyright or intellectual property
        complaints and take appropriate action where necessary.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">9. No Unauthorized Commercial Use</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        The Website and its content may not be used for commercial purposes
        without prior written authorization from Yulanto Web Creations Pvt. Ltd.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        This includes copying Yulanto&apos;s website structure, content, designs,
        proposals, service descriptions, marketing materials, or other original
        work for use in a competing business.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">10. Changes to License &amp; Copyright Policy</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto Web Creations Pvt. Ltd. reserves the right to update this License
        &amp; Copyright Policy at any time.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Any updated version will be published on this page with a revised
        &quot;Last Updated&quot; date.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">11. Contact</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        For copyright, licensing, or intellectual property-related enquiries,
        please contact:
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
        © 2015-2026 <strong>Yulanto Web Creations Pvt. Ltd.</strong> All Rights
        Reserved.
      </p>
    </div>
  );
};

export default LicenseCopyright;