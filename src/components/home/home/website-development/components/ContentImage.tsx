import React from 'react';

const ContentImage = () => {
  return (
    <>
      {/* Internal CSS for Blockquote */}
      <style>{`
        .custom-blockquote {
          position: relative;
          margin-top: 1.5rem;
          padding: 1.25rem 1.5rem;
          padding-left: 1.75rem;
          border-left: 4px solid #53ae7d;
          background-color: rgba(83, 174, 125, 0.08);
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
          box-shadow: 0 2px 8px rgba(5, 52, 86, 0.05);
          transition: all 0.3s ease-in-out;
        }

        .custom-blockquote:hover {
          background-color: rgba(83, 174, 125, 0.12);
          box-shadow: 0 4px 12px rgba(5, 52, 86, 0.1);
          transform: translateY(-1px);
        }

        .custom-blockquote-content {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .custom-blockquote-text {
          margin: 0;
          color: #053456;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .custom-quote-mark {
          color: #53ae7d;
          font-family: Georgia, serif;
          font-size: 2.25rem;
          line-height: 1;
          user-select: none;
        }

        .custom-quote-mark.end {
          align-self: flex-end;
        }
      `}</style>

      <div className="container py-4">
        <div className="row align-items-center g-4">
          {/* Content Column */}
          <div className="col-12 col-lg-7">
            <div className="space-y-4">
              <span
                className="tp-section-subtitle text-black blink-ball"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Build a Website That Works for Your Business
              </span>

              <div className="px-project-title-box">
                <h4
                  className="px-about-title mb-20"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Choose a <span className="text-blue-about">Professional Website Development Company in Chennai</span>
                </h4>

                <p
                  className="text-figtree text-black mt-2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Your website is more than an online brochure—it is an important part of your brand, marketing, customer communication, and business growth.
                </p>

                <p
                  className="text-figtree text-black mt-2"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Partner with a professional website development company in Chennai to build a website that combines attractive design, reliable technology, strong performance, security, responsive usability, and SEO-friendly development.
                </p>

                <p
                  className="text-figtree text-black mt-2"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Whether you are launching a new business website, upgrading an existing website, or developing a completely customized web solution, our experienced website developers in Chennai can help turn your ideas into a professional digital experience.
                </p>

                {/* Custom Blockquote using the Internal CSS Classes */}
                <blockquote
                  className="custom-blockquote"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="custom-blockquote-content">
                    <span className="custom-quote-mark">“</span>
                    <p className="custom-blockquote-text">
                      Looking for website development in Chennai? Let us create a secure, customized, and business-focused website designed for your growth.
                    </p>
                    <span className="custom-quote-mark end">”</span>
                  </div>
                </blockquote>

              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-12 col-lg-5">
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Website Development Company in Chennai"
                className="w-full h-auto rounded-lg shadow-md object-cover"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentImage;