'use client';

import React from 'react';
import Image from 'next/image';

export const ShopifyExperience: React.FC = () => {
  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{
        backgroundColor: "#ffffff",
        overflow: 'hidden',
      
      }}
    >
      <div 
        className="container container-1550"
       
      >
        <div 
          className="row align-items-center" 
          data-aos="fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginLeft: 0,
            marginRight: 0,
           
            boxSizing: 'border-box'
          }}
        >
          {/* Left Column: Text Content */}
          <div className="col-xl-7 col-lg-6">
            <div className="px-project-title-box">

              <h4 
                className="px-about-title mb-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="text-blue-about" style={{ color: '#053456' }}>
                  Create an Engaging Shopping Experience
                </span>{' '}
                with Shopify
              </h4>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
               
              >
                Shopify makes it easier for businesses to launch, manage, and grow their online stores. With a secure and flexible ecommerce platform, you can showcase your products, manage inventory, process orders, accept online payments, and provide customers with a seamless shopping experience.
              </p>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
             
              >
                Our Shopify web development approach focuses on creating a store that is attractive, easy to navigate, mobile-friendly, and optimized for conversions.
              </p>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="400"
              
              >
                Whether you are launching a new ecommerce business or looking to improve an existing store, our Shopify website development company in Chennai can help you build a solution that matches your brand and business goals.
              </p>
            </div>
          </div>

          {/* Right Column: Image Container */}
          <div 
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div 
              style={{
                width: '100%',
                height: '520px',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/assets/img/Shopify E-commerce Development/top-1.jpg"
                alt="Create an Engaging Shopping Experience with Shopify"
                fill
                priority
                sizes="(max-width: 991px) 100vw, 45vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyExperience;