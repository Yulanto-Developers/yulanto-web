"use client";

import React from "react";

export function SingleImagePackagingSection() {
  return (
    <section  className="px-about-6-area pt-50 pb-80 pb-lg-110"
     
      style={{ 
        backgroundColor: "#ffffff",
       
      }}
    >
      <style jsx>{`
        .content-card {
          background: #ffffff;
          border-left: 4px solid #53ae7d;
          padding: 32px;
        }

        .single-image-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(5, 52, 86, 0.08);
          height: 100%;
          min-height: 480px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .single-image-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(5, 52, 86, 0.12);
        }

        .single-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .btn-custom {
          background-color: #053456;
          color: #ffffff;
          border-radius: 30px;
          padding: 12px 28px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .btn-custom:hover {
          background-color: #53ae7d;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(83, 174, 125, 0.3);
        }
      `}</style>
            <h4 className="px-about-title mb-20 text-center" >
                <span className="text-blue-about">Build a Package That  </span>
               Sells Your Product
              </h4>
      <div className="container container-1550">
        <div className="row g-4 align-items-center">
          
          {/* LEFT SIDE: Your Content */}
          <div className="col-12 col-lg-6">
            <div className="content-card">
           

              <p 
                 className="text-figtree text-black mt-2"
                
              >
                Your product deserves packaging that gets noticed. From the first concept to the final print file, we help transform your product packaging into a powerful brand and marketing asset.
              </p>

              <p   className="text-figtree text-black mt-2"
               
              >
                If you're looking for a packaging design company in Chennai, our creative team can develop professional packaging solutions that combine branding, creativity, functionality, and customer appeal.
              </p>

              <div 
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#e2e8f0",
                  margin: "24px 0"
                }}
              />

              <p   className="text-figtree text-black mt-2"
               
              
              >
                Have a new product to launch or an existing package that needs a fresh look? Talk to our packaging designers in Chennai and turn your product packaging into a memorable brand experience.
              </p>

              <a href="#contact" className="btn-custom">
                Let’s Design Packaging That Gets Noticed
              </a>

            </div>
          </div>

          {/* RIGHT SIDE: Single Showcase Image */}
          <div className="col-12 col-lg-6">
            <div className="single-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop" 
                alt="Package Design Showcase" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SingleImagePackagingSection;