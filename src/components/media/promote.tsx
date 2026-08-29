// app/social-media-marketing/page.tsx
'use client';

import React from 'react';
import FlowArt, { FlowSection } from './story-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faPenNib,
  faCalendarCheck,
  faComments,
  faHandshake,
  faRectangleAd,
  faChartLine,
  faArrowTrendUp,
  faCheckCircle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

// Inline SVG Brand Icons to avoid @fortawesome/free-brands-svg-icons dependency
const BrandIcons = {
  Facebook: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  Pinterest: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.229 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  ),
  XTwitter: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

// Every service/feature card shares this background
const CARD_BG = '#053456';

export default function SocialMediaMarketingDemo() {
  return (
    <FlowArt aria-label="Social Media Marketing Services Chennai">

      {/* SECTION 1: HERO & INTRODUCTION */}
      {/* SECTION 1: HERO & INTRODUCTION */}
<FlowSection
  className="px-about-6-area pt-40 pb-40 pb-lg-110"
  style={{
    backgroundColor: '#f5f5f5',
  }}
>
  <div className="container container-1550">

    {/* Heading + Paragraph */}
    <div>
      <h4 className="px-about-title mb-20">
        <span className="text-blue-about">
          Want to Promote Your
        </span>{' '}
        Business on Social Media?
      </h4>

      <p
        className="text-figtree text-black mt-2"
        style={{
          color: '#333',
          fontSize: '1.15rem',
          maxWidth: '65ch',
          lineHeight: '1.7',
        }}
      >
        Build a stronger online presence with professional social
        media marketing services in Chennai. We maintain a
        consistent brand voice across your social media channels
        while creating platform-specific content that reflects your
        brand identity, values, and business objectives.
      </p>
    </div>

    {/* THREE IMAGE CARDS */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: '3rem',
      }}
    >

      {/* Card 1 */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src="assets/img/social/bottom-1.jpg"
          alt="Social media marketing"
          style={{
            width: '100%',
            height: '260px',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        
      </div>

      {/* Card 2 */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src="assets/img/social/bottom-2.jpg"
          alt="Social media content creation"
          style={{
            width: '100%',
            height: '260px',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        
      </div>

      {/* Card 3 */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src="assets/img/social/bottom-3.jpg"
          alt="Social media advertising"
          style={{
            width: '100%',
            height: '260px',
            objectFit: 'cover',
            display: 'block',
          }}
        />

       
      </div>

    </div>

  </div>
</FlowSection>

      {/* SECTION 2: PLATFORM SELECTION & CONTENT CREATION */}
      <FlowSection
       
        className="px-about-6-area pt-40 pb-40 pb-lg-110"
      
      >
        <div className="container container-1550">
        

          <div>
          
            <h4 className="px-about-title mb-20">
                <span className="text-blue-about"> What We </span>
              Offer
              </h4>

            <p className="text-figtree text-black mt-2">
              As a professional social media marketing company in Chennai, we provide a comprehensive range of SMM solutions designed to increase visibility, engagement, traffic, leads, and conversions.
            </p>
          </div>


          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Item 1 */}
            <div style={{ border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: CARD_BG, color: '#ffffff' }}>
              <div style={{ fontSize: '1.5rem', color: '#53ae7d', marginBottom: '1rem' }}>
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: "Figtree, Figtree Fallback", fontWeight: 'bold', color:'white' }}>1. Social Media Platform Selection</h3>
              <p className="text-figtree mt-2" style={{ fontSize: '15px !important', color: '#e5e7eb' }}>
                Our SMM experts identify the platforms where your target audience is most active. Depending on your business objectives, we can create strategies for:
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: '#e5e7eb' }}>
                <BrandIcons.Facebook />
                <BrandIcons.Instagram />
                <BrandIcons.LinkedIn />
                <BrandIcons.YouTube />
                <BrandIcons.Pinterest />
                <BrandIcons.XTwitter />
              </div>
            </div>

            {/* Item 2 */}
            <div style={{ border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: CARD_BG, color: '#ffffff' }}>
              <div style={{ fontSize: '1.5rem', color: '#53ae7d', marginBottom: '1rem' }}>
                <FontAwesomeIcon icon={faPenNib} />
              </div>
              <h3 style={{ fontSize: '1.25rem',fontFamily: "Figtree, Figtree Fallback", fontWeight: 'bold',color:'white' }}>2. Social Media Content Creation</h3>
              <p className="text-figtree mt-2" style={{ fontSize: '15px !important ', color: '#e5e7eb' }}>
                We create engaging and relevant content based on your brand identity, industry, audience, and marketing objectives. Our content services include posts, graphics, infographics, reels, videos, polls, and educational posts.
              </p>
            </div>
          </div>

          
        </div>
      </FlowSection>

      {/* SECTION 3: MANAGEMENT & ADVERTISING */}
      <FlowSection
       
        className="px-about-6-area pt-40 pb-40 pb-lg-110"
       
      >
        <div className="container container-1550">
        

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: faCalendarCheck, title: '3. Consistent Posting', text: 'Consistency is essential for maintaining audience engagement. We develop content calendars and maintain a regular posting schedule.' },
              { icon: faComments, title: '4. Audience Engagement', text: 'Our team monitors comments, messages, mentions, and interactions to maintain an active relationship with your audience.' },
              { icon: faHandshake, title: '5. Influencer Marketing', text: 'We identify relevant influencers and explore collaboration opportunities that help reach targeted audiences effectively.' },
              { icon: faRectangleAd, title: '6. Paid Social Advertising', text: 'We create targeted paid campaigns on Facebook, Instagram, LinkedIn, and YouTube optimized for high conversion rates.' },
              { icon: faChartLine, title: '7. Analytics & Monitoring', text: 'We monitor reach, impressions, engagement, clicks, leads, and conversions to refine and optimize ongoing strategies.' },
              { icon: faArrowTrendUp, title: '8. Trend-Based Strategy', text: 'We track changing algorithms, content formats, and trend shifts to keep your business visible and competitive.' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: CARD_BG, color: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem' }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ color: '#53ae7d', marginBottom: '0.5rem',fontFamily: "Figtree, Figtree Fallback", fontSize: '1.25rem' }} />
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem',color:'white',fontFamily: "Figtree, Figtree Fallback", }}>{item.title}</h4>
                <p className="text-figtree mt-2" style={{ color: '#e5e7eb',fontSize:"15px !important" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FlowSection>

      {/* SECTION 4: WHY CHOOSE US */}
   {/* SECTION 4: WHY CHOOSE US */}
<FlowSection
  aria-label="Why Choose Us"
  className="px-about-6-area pt-40 pb-40 pb-lg-110"
  style={{
    backgroundColor: '#053456',
    color: '#ffffff',
  }}
>
  <div className="container container-1550">

   

 
    <div>
      <h2
        className="px-about-title mb-20"
        style={{
          color: '#ffffff',
        }}
      >
        Why Choose Us as Your Social Media Marketing Partner?
      </h2>

      <p
        className="text-figtree mt-2"
        style={{
          color: '#f0f9ff',
        }}
      >
        Choosing the right social media agency in Chennai
        can make a significant difference to your digital
        marketing performance. We combine strategy,
        creativity, technology, and performance analysis
        to help businesses achieve sustainable online growth.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      {[
        '11+ Years of Digital Experience',
        'Reliable and Professional Service',
        'Research-Driven Marketing Approach',
        'Experienced Digital Marketing Team',
        'Creative and Engaging Content Strategies',
        'Regular Analytics and Performance Reports',
        'Customized Social Media Marketing Solutions',
        'Targeted Campaigns for Better Reach and Engagement',
        'Focus on Leads, Traffic, and Business Growth',
      ].map((point, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#053456',
            padding: '0.75rem 1rem',
            borderRadius: '0.375rem',
          }}
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
              color: '#53ae7d',
            }}
          />

          <span
            style={{
             fontFamily: "Figtree, Figtree Fallback",
              fontWeight: '500',
              color: '#ffffff',
            
            }}
          >
            {point}
          </span>
        </div>
      ))}
    </div>

    <p
      className="text-figtree mt-2"
      style={{
        marginTop: '2.5rem',
        color: '#f0f9ff',
        
      }}
    >
      Whether you are a startup, small business,
      established company, or enterprise, our social
      media marketing services in Chennai can be
      customized according to your business requirements
      and marketing objectives.
    </p>

  </div>
</FlowSection>

    </FlowArt>
  );
}