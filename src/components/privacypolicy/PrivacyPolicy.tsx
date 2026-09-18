"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "@/assets/css/textAnimations.css";

const PrivacyPolicy = () => {

  // Initialize AOS directly (instead of relying only on the hook)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
      mirror: false,
    });
    // Refresh after mount so elements already in viewport animate correctly
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
        Privacy Policy
      </h1>
      <p className="last-updated" data-aos="fade-up" data-aos-delay="200">
        Last Updated: October 2026
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        Yulanto Web Creations Pvt. Ltd. (&quot;Yulanto&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) respects your privacy and is committed to protecting the
        personal information you provide when using our website{' '}
        <a href="http://www.yulanto.com/" target="_blank" rel="noopener noreferrer">
          www.yulanto.com
        </a>{' '}
        (&quot;Website&quot;).
      </p>

      <p data-aos="fade-up" data-aos-delay="400">
        This Privacy Policy explains how we collect, use, store, protect, and
        disclose information when you visit our Website, contact us, submit an
        enquiry, request a quotation, or use our services.
      </p>

      <p data-aos="fade-up" data-aos-delay="500">
        By accessing or using our Website, you acknowledge that you have read
        and understood this Privacy Policy.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">1. Information We Collect</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We may collect information that you voluntarily provide to us through our Website, including:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Name</li>
        <li data-aos="fade-up" data-aos-delay="200">Company/organization name</li>
        <li data-aos="fade-up" data-aos-delay="250">Email address</li>
        <li data-aos="fade-up" data-aos-delay="300">Phone/mobile number</li>
        <li data-aos="fade-up" data-aos-delay="350">WhatsApp number</li>
        <li data-aos="fade-up" data-aos-delay="400">Business address</li>
        <li data-aos="fade-up" data-aos-delay="450">Website URL</li>
        <li data-aos="fade-up" data-aos-delay="500">Service requirements</li>
        <li data-aos="fade-up" data-aos-delay="550">Project requirements</li>
        <li data-aos="fade-up" data-aos-delay="600">Enquiry details</li>
        <li data-aos="fade-up" data-aos-delay="650">
          Information submitted through contact, enquiry, quotation, or consultation forms
        </li>
        <li data-aos="fade-up" data-aos-delay="700">
          Any other information you choose to provide to us
        </li>
      </ul>

      <p data-aos="fade-up">
        We may also automatically collect limited technical information when you visit our Website, such as:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">IP address</li>
        <li data-aos="fade-up" data-aos-delay="150">Browser type</li>
        <li data-aos="fade-up" data-aos-delay="200">Device type</li>
        <li data-aos="fade-up" data-aos-delay="250">Operating system</li>
        <li data-aos="fade-up" data-aos-delay="300">Pages visited</li>
        <li data-aos="fade-up" data-aos-delay="350">Referring website</li>
        <li data-aos="fade-up" data-aos-delay="400">Date and time of visit</li>
        <li data-aos="fade-up" data-aos-delay="450">General website usage information</li>
      </ul>

      <h2 className="text-tenor" data-aos="fade-up">2. How We Use Your Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">We may use the information collected to:</p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Respond to enquiries and requests</li>
        <li data-aos="fade-up" data-aos-delay="200">Provide quotations and proposals</li>
        <li data-aos="fade-up" data-aos-delay="250">Contact you regarding your project or enquiry</li>
        <li data-aos="fade-up" data-aos-delay="300">
          Provide web design, web development, digital marketing, graphic design, hosting, maintenance, and related services
        </li>
        <li data-aos="fade-up" data-aos-delay="350">Understand your business requirements</li>
        <li data-aos="fade-up" data-aos-delay="400">Improve our Website, services, and customer experience</li>
        <li data-aos="fade-up" data-aos-delay="450">Provide technical support</li>
        <li data-aos="fade-up" data-aos-delay="500">Send service-related communications</li>
        <li data-aos="fade-up" data-aos-delay="550">Follow up on enquiries</li>
        <li data-aos="fade-up" data-aos-delay="600">Process and manage business transactions</li>
        <li data-aos="fade-up" data-aos-delay="650">Prevent fraud, abuse, or unauthorized activity</li>
        <li data-aos="fade-up" data-aos-delay="700">Comply with applicable legal and regulatory requirements</li>
      </ul>

      <p data-aos="fade-up">
        We will not use your personal information for unrelated purposes without a lawful basis or appropriate consent where required.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">3. Enquiry &amp; Contact Forms</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        When you submit information through a contact, enquiry, quotation, or consultation form on our Website, the information may be received by Yulanto through email, CRM systems, communication platforms, or other business tools used for managing enquiries.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        By submitting an enquiry, you consent to Yulanto contacting you regarding your enquiry or requested services.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">4. Phone, Email &amp; WhatsApp Communication</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If you provide your phone number, email address, or WhatsApp number, we may use these details to communicate with you regarding:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Your enquiry</li>
        <li data-aos="fade-up" data-aos-delay="200">Project discussions</li>
        <li data-aos="fade-up" data-aos-delay="250">Quotations</li>
        <li data-aos="fade-up" data-aos-delay="300">Service requirements</li>
        <li data-aos="fade-up" data-aos-delay="350">Support requests</li>
        <li data-aos="fade-up" data-aos-delay="400">Appointments or meetings</li>
        <li data-aos="fade-up" data-aos-delay="450">
          Other communications directly related to your interaction with Yulanto
        </li>
      </ul>
      <p data-aos="fade-up">
        You may request that we stop non-essential marketing communications at any time.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">5. Cookies</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and measure marketing performance.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">Cookies may be used for purposes such as:</p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Website functionality</li>
        <li data-aos="fade-up" data-aos-delay="250">Analytics</li>
        <li data-aos="fade-up" data-aos-delay="300">Visitor measurement</li>
        <li data-aos="fade-up" data-aos-delay="350">Advertising measurement</li>
        <li data-aos="fade-up" data-aos-delay="400">Remarketing</li>
        <li data-aos="fade-up" data-aos-delay="450">Improving user experience</li>
      </ul>
      <p data-aos="fade-up">
        You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some Website functionality.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">6. Google Analytics &amp; Website Analytics</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We may use Google Analytics or similar analytics services to understand how visitors use our Website.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">These services may collect information such as:</p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Pages visited</li>
        <li data-aos="fade-up" data-aos-delay="250">Approximate location</li>
        <li data-aos="fade-up" data-aos-delay="300">Device/browser information</li>
        <li data-aos="fade-up" data-aos-delay="350">Traffic source</li>
        <li data-aos="fade-up" data-aos-delay="400">Website interactions</li>
        <li data-aos="fade-up" data-aos-delay="450">Session information</li>
      </ul>
      <p data-aos="fade-up">
        Analytics information is generally used in aggregated or statistical form to improve our Website and services.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">7. Google Ads &amp; Marketing</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto may use online advertising platforms such as Google Ads and other marketing technologies to promote our services.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        These platforms may use cookies, tags, pixels, or similar technologies to measure advertising performance and, where applicable, provide relevant advertisements or remarketing.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Advertising platforms operate according to their own privacy policies and terms.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">8. Third-Party Services</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website and services may use third-party providers, including but not limited to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Google services</li>
        <li data-aos="fade-up" data-aos-delay="200">Meta services</li>
        <li data-aos="fade-up" data-aos-delay="250">WhatsApp</li>
        <li data-aos="fade-up" data-aos-delay="300">Google Analytics</li>
        <li data-aos="fade-up" data-aos-delay="350">Google Ads</li>
        <li data-aos="fade-up" data-aos-delay="400">Hosting providers</li>
        <li data-aos="fade-up" data-aos-delay="450">Domain registrars</li>
        <li data-aos="fade-up" data-aos-delay="500">Payment gateways</li>
        <li data-aos="fade-up" data-aos-delay="550">CRM platforms</li>
        <li data-aos="fade-up" data-aos-delay="600">Email service providers</li>
        <li data-aos="fade-up" data-aos-delay="650">Chat/communication tools</li>
        <li data-aos="fade-up" data-aos-delay="700">Security and website monitoring services</li>
      </ul>
      <p data-aos="fade-up">
        These third parties may process information according to their own privacy policies and terms.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto does not control the privacy practices of third-party services and recommends reviewing their respective privacy policies.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">9. How We Protect Your Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Therefore, while we make reasonable efforts to protect your information, we cannot guarantee absolute security.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">10. Sharing of Information</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto does not sell or rent your personal information to third parties.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        We may share information where reasonably necessary with:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Employees and authorized personnel</li>
        <li data-aos="fade-up" data-aos-delay="250">Service providers working on our behalf</li>
        <li data-aos="fade-up" data-aos-delay="300">Hosting and technology providers</li>
        <li data-aos="fade-up" data-aos-delay="350">CRM and communication providers</li>
        <li data-aos="fade-up" data-aos-delay="400">Payment service providers</li>
        <li data-aos="fade-up" data-aos-delay="450">Advertising and analytics providers</li>
        <li data-aos="fade-up" data-aos-delay="500">Professional advisors</li>
        <li data-aos="fade-up" data-aos-delay="550">
          Government authorities or law-enforcement agencies where legally required
        </li>
      </ul>
      <p data-aos="fade-up">
        Information will be shared only where reasonably necessary for providing services, operating our business, complying with legal obligations, or protecting our legitimate interests.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">11. Data Retention</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with legal obligations.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        The retention period may vary depending on the type and purpose of the information.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">12. Your Privacy Rights</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Depending on applicable law, you may have rights regarding your personal information, including the right to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Request access to information we hold about you</li>
        <li data-aos="fade-up" data-aos-delay="200">Request correction of inaccurate information</li>
        <li data-aos="fade-up" data-aos-delay="250">Request deletion of information where legally applicable</li>
        <li data-aos="fade-up" data-aos-delay="300">Withdraw consent where processing is based on consent</li>
        <li data-aos="fade-up" data-aos-delay="350">
          Request information about how your personal information is used
        </li>
        <li data-aos="fade-up" data-aos-delay="400">Opt out of certain marketing communications</li>
      </ul>
      <p data-aos="fade-up">
        To exercise applicable rights, please contact us using the details provided below.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">13. Marketing Communications</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We may contact existing customers or individuals who have submitted enquiries regarding Yulanto&apos;s services, offers, updates, or related information where permitted by applicable law.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        You may request to stop receiving promotional communications at any time by contacting us or using an available unsubscribe option.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        Service-related communications may still be sent where necessary to provide an active service or respond to your request.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">14. Children&apos;s Privacy</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website and services are intended primarily for businesses and general audiences.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">15. External Links</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Our Website may contain links to third-party websites, social media platforms, applications, or services.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        Yulanto is not responsible for the privacy practices, security, content, or policies of external websites.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        We recommend reviewing the privacy policy of any third-party website you visit.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">16. International Visitors</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto is based in India and may provide services to clients in India and other countries.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        If you access our Website from outside India, your information may be processed or stored in India or in other locations where Yulanto or its service providers operate.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        By submitting information to us, you acknowledge that such processing may occur, subject to applicable law.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">17. Data Accuracy</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        You are responsible for ensuring that the information you provide to Yulanto is accurate, complete, and up to date.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        If any information changes, you may contact us to request an update where applicable.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">18. Changes to This Privacy Policy</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        The updated Privacy Policy will be published on this page with a revised &quot;Last Updated&quot; date.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        We encourage visitors to review this page periodically.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">19. Contact Us</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:
      </p>

      <p data-aos="fade-up" data-aos-delay="200">
        <strong>Yulanto Web Creations Pvt. Ltd.</strong>
      </p>

      <div className="address-block">
        <p data-aos="fade-up" data-aos-delay="250">
          Website:{' '}
          <a href="http://www.yulanto.com/" target="_blank" rel="noopener noreferrer">
            www.yulanto.com
          </a>
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          Email: <strong>info@yulanto.com</strong>
        </p>
        <p data-aos="fade-up" data-aos-delay="350">
          Phone: <strong>+91 9962157250</strong>
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          Address: Yulanto Web Creations Pvt Ltd
        </p>
        <p data-aos="fade-up" data-aos-delay="450">
          F3, #4/608, First Floor, V.O.C Street,
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          Kottivakkam, OMR,
        </p>
        <p data-aos="fade-up" data-aos-delay="550">
          Chennai - 600 041, Tamilnadu, India.
        </p>
      </div>

      <p data-aos="fade-up" data-aos-delay="100">
        For privacy-related requests, please mention{' '}
        <strong>&quot;Privacy Request&quot;</strong> in the subject line of your communication.
      </p>
    </div>
  );
};

export default PrivacyPolicy;