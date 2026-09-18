"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "@/assets/css/textAnimations.css";

const TermsConditions = () => {

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
        .privacy-policy p {
          margin: 0 0 16px 0;
        }
        .privacy-policy h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 28px 0 12px 0;
          color: #000;
        }
        .privacy-policy h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0 10px 0;
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

        /* Fallback: if AOS fails to load, keep text visible */
        .privacy-policy [data-aos]:not(.aos-init):not(.aos-animate) {
          opacity: 1 !important;
          transform: none !important;
        }

        @media (max-width: 768px) {
          .privacy-policy { padding: 24px 16px; }
          .privacy-policy h1 { font-size: 24px; }
          .privacy-policy h2 { font-size: 20px; margin: 24px 0 10px 0; }
          .privacy-policy h3 { font-size: 17px; }
          .privacy-policy li { font-size: 16px !important; }
          .privacy-policy p { font-size: 15px; }
        }

        @media (max-width: 480px) {
          .privacy-policy { padding: 20px 12px; }
          .privacy-policy h1 { font-size: 22px; }
          .privacy-policy h2 { font-size: 18px; }
          .privacy-policy h3 { font-size: 16px; }
          .privacy-policy li { font-size: 15px !important; }
          .privacy-policy p { font-size: 14px; }
          .privacy-policy ul { padding-left: 20px; }
        }
      `}</style>

      <h1 className="text-tenor" data-aos="fade-up" data-aos-delay="100">
        Terms &amp; Conditions
      </h1>

      <p data-aos="fade-up" data-aos-delay="200">
        These Terms &amp; Conditions govern the provision of website design,
        website development, digital marketing, graphic design, hosting, domain,
        maintenance, and other digital services provided by Yulanto Web Creations
        (&quot;Yulanto&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to the client
        (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;).
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        By approving a quotation/proposal, making an advance payment, or
        instructing Yulanto to commence the project, the Client agrees to the
        following Terms &amp; Conditions.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">1. Project Scope</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>1.1</strong> The project scope, deliverables, features, number of
        pages, technologies, integrations, and pricing will be as specified in
        the approved quotation/proposal.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>1.2</strong> Any requirement not specifically mentioned in the
        approved quotation/proposal will be considered outside the agreed scope
        and may be charged separately.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>1.3</strong> Yulanto reserves the right to provide a revised
        quotation for additional pages, features, integrations, redesigns,
        third-party services, or other requirements requested after project
        confirmation.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">2. Payment Terms</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>2.1</strong> A <strong>50%</strong> advance payment is required
        to confirm the project and commence design/development work.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>2.2</strong> The remaining <strong>50%</strong> balance payment
        shall be payable upon completion of the project and before the website is
        published live or final files/access credentials are handed over, unless
        otherwise specified in the approved quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>2.3</strong> For large or custom projects, Yulanto may use a
        milestone-based payment schedule as specified in the quotation/proposal.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>2.4</strong> Payments may be made through NEFT, IMPS, UPI/GPay,
        bank transfer, or any other mutually agreed payment method.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>2.5</strong> Work may be paused if the Client fails to make
        payments within the agreed payment period.
      </p>
      <p data-aos="fade-up" data-aos-delay="350">
        <strong>2.6</strong> Yulanto reserves the right to withhold final files,
        source code, administrative access, deployment, or other deliverables
        until all outstanding payments are cleared.
      </p>
      <p data-aos="fade-up" data-aos-delay="400">
        <strong>2.7</strong> Any bank charges, payment gateway charges, currency
        conversion charges, or transaction charges applicable to international
        payments shall be borne by the Client unless otherwise agreed.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">3. GST &amp; Taxes</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>3.1</strong> All prices are exclusive of applicable GST, unless
        specifically stated otherwise in the quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>3.2</strong> Applicable GST and other statutory taxes/levies will
        be charged as required under applicable Indian tax laws.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>3.3</strong> For international clients, taxation and invoicing
        will be handled based on the applicable GST/export rules and the
        Client&apos;s transaction circumstances.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>3.4</strong> Any withholding tax or other statutory deduction
        made by the Client must be supported by the applicable
        certificate/documentation.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">4. Design &amp; Revisions</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>4.1</strong> The project includes the number of design concepts
        and revision rounds specifically mentioned in the approved quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>4.2</strong> Minor revisions within the approved scope will be
        accommodated during the agreed revision period.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>4.3</strong> A revision means a modification to the previously
        presented design or agreed functionality.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>4.4</strong> The following may be treated as additional work:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="300">Complete redesign after design approval</li>
        <li data-aos="fade-up" data-aos-delay="350">New page or section requirements</li>
        <li data-aos="fade-up" data-aos-delay="400">New functionality</li>
        <li data-aos="fade-up" data-aos-delay="450">Changes to the approved website structure</li>
        <li data-aos="fade-up" data-aos-delay="500">New API or third-party integration</li>
        <li data-aos="fade-up" data-aos-delay="550">Changes caused by a change in business requirements</li>
        <li data-aos="fade-up" data-aos-delay="600">Rework resulting from previously approved designs</li>
        <li data-aos="fade-up" data-aos-delay="650">Additional rounds of revisions beyond the agreed limit</li>
      </ul>
      <p data-aos="fade-up">
        <strong>4.5</strong> Additional work will be quoted separately and will
        proceed after Client approval.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>4.6</strong> The Client is requested to provide consolidated
        feedback wherever possible to avoid unnecessary delays.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">5. Client Content &amp; Responsibilities</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>5.1</strong> The Client is responsible for providing all required
        content, including:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="150">Company information</li>
        <li data-aos="fade-up" data-aos-delay="200">Text/content</li>
        <li data-aos="fade-up" data-aos-delay="250">Logo and branding materials</li>
        <li data-aos="fade-up" data-aos-delay="300">Images/videos</li>
        <li data-aos="fade-up" data-aos-delay="350">Product information</li>
        <li data-aos="fade-up" data-aos-delay="400">Contact details</li>
        <li data-aos="fade-up" data-aos-delay="450">Pricing information</li>
        <li data-aos="fade-up" data-aos-delay="500">Legal/policy content</li>
        <li data-aos="fade-up" data-aos-delay="550">Social media links</li>
        <li data-aos="fade-up" data-aos-delay="600">Required login/access credentials</li>
      </ul>
      <p data-aos="fade-up">
        <strong>5.2</strong> Project timelines will depend on the timely
        submission of required content, approvals, and information.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>5.3</strong> Yulanto is not responsible for delays caused by
        incomplete, incorrect, or delayed content supplied by the Client.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>5.4</strong> The Client is responsible for ensuring that all
        content, images, videos, documents, trademarks, logos, and other
        materials supplied to Yulanto are legally permitted for use.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>5.5</strong> Yulanto shall not be responsible for copyright,
        trademark, licensing, or ownership claims arising from materials supplied
        by the Client.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">6. Project Timeline &amp; Delays</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>6.1</strong> The estimated project timeline will be specified in
        the quotation/proposal wherever applicable.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>6.2</strong> The project timeline generally begins after:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Receipt of the required advance payment</li>
        <li data-aos="fade-up" data-aos-delay="250">Confirmation of the project</li>
        <li data-aos="fade-up" data-aos-delay="300">Receipt of required content/materials</li>
        <li data-aos="fade-up" data-aos-delay="350">Receipt of required access credentials</li>
        <li data-aos="fade-up" data-aos-delay="400">Finalization of project requirements</li>
      </ul>
      <p data-aos="fade-up">
        <strong>6.3</strong> The delivery date may be extended due to:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">Delayed Client feedback</li>
        <li data-aos="fade-up" data-aos-delay="150">Delayed content submission</li>
        <li data-aos="fade-up" data-aos-delay="200">Delayed approvals</li>
        <li data-aos="fade-up" data-aos-delay="250">Scope changes</li>
        <li data-aos="fade-up" data-aos-delay="300">Additional requirements</li>
        <li data-aos="fade-up" data-aos-delay="350">Third-party service delays</li>
        <li data-aos="fade-up" data-aos-delay="400">Hosting/server issues</li>
        <li data-aos="fade-up" data-aos-delay="450">Domain/DNS issues</li>
        <li data-aos="fade-up" data-aos-delay="500">Payment gateway/API delays</li>
        <li data-aos="fade-up" data-aos-delay="550">Government or regulatory requirements</li>
        <li data-aos="fade-up" data-aos-delay="600">
          Force majeure or events beyond Yulanto&apos;s reasonable control
        </li>
      </ul>
      <p data-aos="fade-up">
        <strong>6.4</strong> Client-caused delays will not be considered delays
        attributable to Yulanto.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>6.5</strong> If the Client remains inactive or fails to provide
        required information for an extended period, Yulanto may place the
        project on hold and reschedule it based on resource availability.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>6.6</strong> A grace period of up to 1-2 weeks may be allowed
        after the agreed project duration to accommodate reasonable delays or
        pending project activities.
      </p>

      <h3 className="text-tenor" data-aos="fade-up">Hold / Closure of Work</h3>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>6.7</strong> If an extension of more than two (2) weeks is
        required beyond the agreed project duration, the Client shall be required
        to settle the remaining balance payment before the project can be placed
        on hold.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>6.8</strong> If the remaining balance is not paid within the
        applicable period, Yulanto reserves the right to place the project on
        hold or close the project due to non-payment.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">7. Hosting Services</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>7.1</strong> Hosting services are provided separately unless
        hosting is specifically included in the project quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>7.2</strong> Hosting charges are payable in advance for the
        applicable hosting period.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>7.3</strong> Hosting performance may depend on the hosting
        provider, server configuration, traffic, website functionality,
        third-party services, and other external factors.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>7.4</strong> Yulanto shall not be responsible for downtime, data
        loss, server failure, suspension, security incidents, or service
        interruptions caused by third-party hosting providers, unless such issue
        is directly attributable to Yulanto&apos;s actions.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>7.5</strong> If the Client chooses to host the website with
        another hosting provider, Yulanto may provide reasonable technical
        assistance subject to the hosting environment and compatibility.
      </p>
      <p data-aos="fade-up" data-aos-delay="350">
        <strong>7.6</strong> Migration, server configuration, troubleshooting, or
        technical support involving third-party hosting may attract additional
        charges if not included in the agreed scope.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">8. Domain Registration &amp; Renewal</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>8.1</strong> Domain registration and renewal charges are separate
        unless specifically included in the quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>8.2</strong> Where the domain is registered and managed through
        Yulanto Web Creations Pvt. Ltd., the domain ownership/registrant details
        shall be maintained under Yulanto Web Creations Pvt. Ltd., unless
        otherwise agreed in writing.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>8.3</strong> Where the Client has registered the domain
        independently through another registrar or service provider, the Client
        is solely responsible for the domain&apos;s renewal, payment, ownership
        details, and registrar account.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>8.4</strong> Yulanto shall not be responsible for domain
        suspension, expiry, deletion, redemption charges, or loss of a domain
        where the domain has been registered outside Yulanto and the Client has
        failed to make the required renewal payment or take necessary action with
        their domain registrar.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>8.5</strong> Domain renewal charges must be paid before the
        domain expiry date to avoid interruption of services or additional
        restoration/redemption charges.
      </p>
      <p data-aos="fade-up" data-aos-delay="350">
        <strong>8.6</strong> Domain registration, renewal, transfer, and
        ownership are subject to the terms and policies of the respective domain
        registrar/registry.
      </p>

      <h3 className="text-tenor" data-aos="fade-up">Transfer of Domain &amp; Hosting</h3>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>8.7</strong> If the Client wishes to transfer the domain and/or
        hosting services from Yulanto to another service provider, Yulanto has no
        objection to such transfer, subject to the Client completing all
        applicable payment and administrative requirements.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>8.8</strong> The Client acknowledges that applicable domain
        transfer, hosting migration, technical support, configuration, backup, or
        migration charges may be payable to Yulanto for such transfer services.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>8.9</strong> Any outstanding dues payable to Yulanto must be
        cleared before the transfer of domain, hosting, website files, or related
        services is completed, where applicable.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">9. Website Development &amp; Third-Party Services</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>9.1</strong> Websites may use third-party software, plugins,
        themes, libraries, APIs, payment gateways, fonts, stock images, maps,
        email services, SMS services, WhatsApp services, analytics tools, or
        other external services.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>9.2</strong> Third-party charges, subscriptions, licenses, API
        usage fees, premium plugins, themes, hosting, domain, SMS, WhatsApp,
        payment gateway, stock images, and similar costs are payable separately
        unless specifically included in the quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>9.3</strong> Yulanto is not responsible for changes, suspension,
        discontinuation, pricing changes, compatibility issues, or failures of
        third-party services.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>9.4</strong> Third-party software remains subject to its
        respective license and usage terms.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">10. Cancellation &amp; Refund Policy</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>10.1</strong> The Client may request cancellation of a project by
        providing written notice to Yulanto.
      </p>

      <h3 className="text-tenor" data-aos="fade-up">Refund Policy</h3>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>10.2</strong> Once the contract/quotation is signed and the
        project is activated, the Client shall not be eligible for a refund of
        any amount paid to Yulanto, at any stage of the project.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>10.3</strong> Payments made towards project commencement, design,
        development, planning, resource allocation, hosting, domain registration,
        third-party services, licenses, or other project-related services shall
        be treated as committed payments and shall be non-refundable once the
        project has been activated.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>10.4</strong> Domain registration/renewal, hosting, premium
        plugin/theme licenses, API subscriptions, advertising payments, stock
        assets, and other third-party charges are non-refundable where the
        respective provider does not offer a refund.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>10.5</strong> Cancellation of the project by the Client after
        activation does not create any right to claim a refund of amounts already
        paid.
      </p>
      <p data-aos="fade-up" data-aos-delay="300">
        <strong>10.6</strong> If any additional amount remains payable for work
        already completed or services already provided before cancellation, the
        Client shall settle such outstanding amount as applicable.
      </p>
      <p data-aos="fade-up" data-aos-delay="350">
        <strong>10.7</strong> If Yulanto is unable to deliver the agreed project
        due to circumstances attributable solely to Yulanto, the parties will
        mutually determine an appropriate resolution based on the amount of work
        completed and payments received.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">11. Project Abandonment</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>11.1</strong> If the Client does not provide required content,
        feedback, approvals, or instructions for an extended period, Yulanto may
        place the project on hold.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>11.2</strong> If a project remains inactive for 60 days or more
        and the Client has not fully settled the agreed project payment/balance,
        Yulanto may treat the project as abandoned.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>11.3</strong> If the project remains inactive due to pending
        payment, lack of Client response, missing content, or pending approvals
        for an extended period, Yulanto reserves the right to close the project.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>11.4</strong> Re-activation of an abandoned project may require a
        new schedule, revised quotation, or additional charges depending on the
        project status and resource availability.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">12. Website Warranty &amp; Bug-Fix Support</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>12.1</strong> Yulanto will provide a limited post-launch
        warranty/support period as specified in the quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>12.2</strong> Unless otherwise specified, the warranty covers
        correction of functional bugs directly related to the agreed project
        scope.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>12.3</strong> Warranty/support does not include:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="250">New features</li>
        <li data-aos="fade-up" data-aos-delay="300">New pages</li>
        <li data-aos="fade-up" data-aos-delay="350">Design changes</li>
        <li data-aos="fade-up" data-aos-delay="400">Third-party plugin conflicts</li>
        <li data-aos="fade-up" data-aos-delay="450">Hosting/server issues if applicable</li>
        <li data-aos="fade-up" data-aos-delay="500">Domain/DNS issues if applicable</li>
        <li data-aos="fade-up" data-aos-delay="550">Client modifications</li>
        <li data-aos="fade-up" data-aos-delay="600">Changes made by another developer</li>
        <li data-aos="fade-up" data-aos-delay="650">Malware caused after handover</li>
        <li data-aos="fade-up" data-aos-delay="700">Security incidents caused by third-party services</li>
        <li data-aos="fade-up" data-aos-delay="750">Browser/platform changes</li>
        <li data-aos="fade-up" data-aos-delay="800">Changes to third-party APIs or services</li>
      </ul>
      <p data-aos="fade-up">
        <strong>12.4</strong> Any new requirement after project completion will
        be treated as an additional service.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>12.5</strong> The warranty may become void if the website is
        modified by the Client or another third party without Yulanto&apos;s
        approval.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">13. Annual Maintenance Contract (AMC)</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>13.1</strong> AMC is optional unless specifically included in the
        project quotation.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>13.2</strong> AMC services may include, depending on the selected
        package:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">Website maintenance</li>
        <li data-aos="fade-up" data-aos-delay="250">Minor content updates</li>
        <li data-aos="fade-up" data-aos-delay="300">Minor design changes</li>
        <li data-aos="fade-up" data-aos-delay="350">Security updates</li>
        <li data-aos="fade-up" data-aos-delay="400">Plugin/theme updates</li>
        <li data-aos="fade-up" data-aos-delay="450">Website backups</li>
        <li data-aos="fade-up" data-aos-delay="500">Basic troubleshooting</li>
        <li data-aos="fade-up" data-aos-delay="550">Technical monitoring</li>
        <li data-aos="fade-up" data-aos-delay="600">Minor bug fixes</li>
      </ul>
      <p data-aos="fade-up">
        <strong>13.3</strong> AMC does not normally include:
      </p>
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">New website development</li>
        <li data-aos="fade-up" data-aos-delay="150">Complete redesign</li>
        <li data-aos="fade-up" data-aos-delay="200">New modules/features</li>
        <li data-aos="fade-up" data-aos-delay="250">Major functionality changes</li>
        <li data-aos="fade-up" data-aos-delay="300">Ecommerce development</li>
        <li data-aos="fade-up" data-aos-delay="350">Custom API development</li>
        <li data-aos="fade-up" data-aos-delay="400">Major database work</li>
        <li data-aos="fade-up" data-aos-delay="450">Hosting migration</li>
        <li data-aos="fade-up" data-aos-delay="500">Malware recovery</li>
        <li data-aos="fade-up" data-aos-delay="550">Server migration</li>
        <li data-aos="fade-up" data-aos-delay="600">Paid third-party services</li>
        <li data-aos="fade-up" data-aos-delay="650">Premium plugin/theme licenses</li>
        <li data-aos="fade-up" data-aos-delay="700">Domain and hosting renewal charges</li>
      </ul>
      <p data-aos="fade-up">
        <strong>13.4</strong> AMC fees are payable in advance for the agreed
        maintenance period.
      </p>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>13.5</strong> Yulanto may suspend AMC services if the
        renewal/payment is overdue.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>13.6</strong> Any work outside the agreed AMC scope will be
        quoted separately.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">14. Ownership &amp; Intellectual Property</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>14.1</strong> Upon receipt of full payment, ownership of the
        agreed custom website deliverables developed specifically for the Client
        will be transferred to the Client, subject to third-party licenses and
        applicable restrictions.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>14.2</strong> Until full payment is received, all unpaid work and
        deliverables remain under Yulanto&apos;s control and may not be used,
        copied, transferred, or published by the Client.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>14.3</strong> Third-party plugins, themes, libraries, fonts,
        images, APIs, and other licensed materials remain subject to their
        respective license terms.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>14.4</strong> Yulanto may display completed projects in its
        portfolio, website, social media, presentations, or marketing materials
        unless the Client requests confidentiality in writing before project
        completion.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">15. Website Backup &amp; Data</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>15.1</strong> The Client is responsible for maintaining copies of
        important business data and content.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>15.2</strong> Where backup services are included in hosting or
        AMC, backups are intended as a reasonable recovery measure and are not a
        guarantee against every form of data loss.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>15.3</strong> Yulanto shall not be responsible for data loss
        resulting from server failure, hacking, malware, accidental deletion,
        third-party actions, Client actions, or circumstances outside
        Yulanto&apos;s reasonable control.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">16. Security</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>16.1</strong> Yulanto will take reasonable measures to develop
        and maintain websites according to the agreed scope and technical
        environment.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>16.2</strong> No website or online system can be guaranteed to be
        completely free from security vulnerabilities.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>16.3</strong> The Client is responsible for maintaining secure
        passwords and access credentials after handover.
      </p>
      <p data-aos="fade-up" data-aos-delay="250">
        <strong>16.4</strong> Yulanto is not responsible for security incidents
        resulting from weak passwords, compromised third-party accounts, outdated
        external services, unauthorized access, or modifications made by the
        Client or another third party.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">17. Search Engine Optimization &amp; Digital Marketing</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>17.1</strong> SEO, Google Ads, social media marketing, and other
        digital marketing services are performance-based services and do not
        guarantee a specific ranking, traffic level, number of leads, sales, or
        revenue.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>17.2</strong> Search engine rankings and advertising performance
        may be affected by competition, algorithms, market conditions, website
        quality, budget, industry, location, seasonality, and other external
        factors.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>17.3</strong> Advertising spend paid to Google, Meta, or other
        platforms is separate from Yulanto&apos;s professional/service fees
        unless specifically stated otherwise.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">18. Confidentiality</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>18.1</strong> Yulanto will take reasonable measures to protect
        confidential information provided by the Client for the purpose of
        completing the project.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>18.2</strong> The Client agrees not to disclose Yulanto&apos;s
        confidential pricing, internal processes, source materials, or
        proprietary information to third parties without written permission.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>18.3</strong> Confidentiality obligations do not apply to
        information that is publicly available or required to be disclosed by
        law.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">19. Limitation of Liability</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>19.1</strong> Yulanto will provide services with reasonable
        professional care and skill.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>19.2</strong> Yulanto shall not be liable for indirect,
        incidental, consequential, special, or business losses, including loss of
        revenue, profits, customers, data, business opportunities, or reputation
        arising from website downtime, third-party services, cyber incidents, or
        other circumstances beyond Yulanto&apos;s reasonable control.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>19.3</strong> Yulanto&apos;s liability, where legally applicable,
        shall be limited to the amount actually paid by the Client for the
        specific service giving rise to the claim, unless otherwise required by
        applicable law.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">20. Force Majeure</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Yulanto shall not be responsible for delays or inability to perform
        services caused by circumstances beyond reasonable control, including
        natural disasters, fire, flood, power failure, internet/network failure,
        server failure, cyberattacks, government restrictions, strikes, war,
        epidemics, third-party service outages, or other unforeseen events.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">21. Communication &amp; Approvals</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>21.1</strong> Project communication may take place through email,
        WhatsApp, phone calls, online meetings, or other agreed communication
        channels.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>21.2</strong> The Client is responsible for providing timely
        approvals and feedback.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>21.3</strong> Written approvals provided by email, WhatsApp, or
        other agreed communication channels may be treated as Client approval for
        the relevant project stage.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">22. Agreement &amp; Acceptance</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        <strong>22.1</strong> The approved quotation/proposal, project scope,
        payment schedule, and these Terms &amp; Conditions together constitute
        the basis of the engagement unless otherwise agreed in writing.
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        <strong>22.2</strong> In case of any conflict between these Terms &amp;
        Conditions and a specific signed quotation/proposal, the specific written
        agreement shall prevail for that particular project.
      </p>
      <p data-aos="fade-up" data-aos-delay="200">
        <strong>22.3</strong> Yulanto reserves the right to update these Terms
        &amp; Conditions from time to time. The terms applicable to a project
        will generally be those accepted at the time of project confirmation.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">23. Governing Law &amp; Jurisdiction</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        These Terms &amp; Conditions shall be governed by the applicable laws of
        India. Any dispute shall first be attempted to be resolved amicably
        between the Client and Yulanto. If the dispute cannot be resolved
        amicably, it shall be subject to the jurisdiction of the competent courts
        in Chennai, Tamil Nadu, India, unless otherwise agreed in writing.
      </p>

      <h2 className="text-tenor" data-aos="fade-up">Client Acceptance</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        By approving the quotation/proposal, making payment, or instructing
        Yulanto Web Creations to commence work, the Client confirms that they
        have read, understood, and agreed to these Terms &amp; Conditions.
      </p>
    </div>
  );
};

export default TermsConditions;