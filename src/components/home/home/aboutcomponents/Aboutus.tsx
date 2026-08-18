"use client";

const AboutUs = () => {
  // Random image URLs from Unsplash
  const image1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop";
  const image2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop";

  return (
    <section id="about" className="section-bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Content */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor d-block">
              ABOUT US
            </span>
            <h4 className="px-about-title font-title-cls text-effect">
              <span className="text-blue-about"> Who </span> {" "}
              <span> We Are</span>
            </h4>
            <p className="text-figtree text-black mt-2 text-justify">
              Yulanto Web Creations is a comprehensive web design company in Chennai that has been helping businesses build powerful, professional, and results-driven digital identities since 2015. What began as a passion for creativity, technology, and innovative web solutions has grown into a trusted website development company serving startups, small and medium-sized businesses, and established organizations across India and international markets. Over the years, we have built our reputation on quality, creativity, transparency, and a commitment to delivering exceptional results that help our clients achieve sustainable business growth.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img
                src={image1}
                alt="About Yulanto Web Creations"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-3">
          {/* Left Column: Image */}
          <div className="col-lg-6">
            <div className="about-img-wrap">
              <img
                src={image2}
                alt="About Yulanto Web Creations"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="text-figtree text-black mt-2">
              As a comprehensive website design and web development company, we offer a wide range of digital solutions tailored to meet the unique needs of every business. Our team takes the time to understand every client's business goals, target audience, and industry requirements before crafting customized solutions that reflect their unique brand identity. As a full-service web design and website development company in Chennai, we provide a complete range of digital services, including responsive website design, WordPress development, WooCommerce and Shopify e-commerce websites, custom web applications, website redesign, web hosting, domain registration, SSL security, website maintenance, search engine optimization (SEO), Google Ads, social media marketing, and ongoing technical support. We believe that a successful website should not only look impressive but should also be fast, mobile-friendly, secure, easy to manage, and optimized for search engines to attract the right customers.
            </p>
          </div>
        </div>


        <div className="row align-items-center mt-3">
          {/* Left Column: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">

            <p className="text-figtree text-black mt-2">
              Since our inception, we have successfully partnered with businesses from various industries, including real estate, education, healthcare, manufacturing, retail, hospitality, infrastructure, and professional services. Our client-centric approach, attention to detail, and dedication to excellence have enabled us to build long-lasting relationships and earn the trust of organizations worldwide. Whether it is designing a new website, redesigning an existing platform, or implementing a complete digital transformation strategy, we strive to exceed expectations with every project we undertake.
            </p>

            <p className="text-figtree text-black mt-2 text-justify">
              Today, Yulanto Web Creations stands as a leading web design and website development company in Chennai, recognized for professionalism, uniqueness, and exceptional creativity. Our mission is to empower businesses with innovative digital solutions that enhance brand visibility, improve online engagement, and generate measurable results. As technology continues to evolve, we remain committed to staying ahead of industry trends and helping our clients succeed in the ever-changing digital landscape.
            </p>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6">
            <div className="about-img-wrap">
              <img
                src={image2}
                alt="About Yulanto Web Creations"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;