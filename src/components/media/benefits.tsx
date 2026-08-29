'use client';

const benefitsData = [
  {
    title: "Exceptional Brand Development",
    text: "Build a professional and recognizable brand identity across multiple social media channels.",
    author: "Brand Strategy",
    role: "Identity & Design",
    avatar: "assets/img/social/Benefits-icon-1.png",
  
    featured: true,
  },
  {
    title: "Engage Your Target Audience",
    text: "Create relevant and engaging content that attracts your ideal customers and encourages meaningful interactions.",
    author: "Audience Growth",
    role: "Community Management",
    avatar: "assets/img/social/Benefits-icon-2.png",
 
    wide: true,
  },
  {
    title: "Increase Brand Recognition",
    text: "Consistent social media marketing helps customers remember your brand and strengthens your online presence.",
    author: "Visibility Team",
    role: "Market Reach",
    avatar: "assets/img/social/Benefits-icon-3.png",
  
  },
  {
    title: "Gain Real-Time Insights",
    text: "Monitor audience interactions, comments, engagement patterns, and social trends to understand customer expectations.",
    author: "Research Lead",
    role: "Consumer Analytics",
    avatar: "assets/img/social/Benefits-icon-4.png",
 
  },
  {
    title: "Improve Your Marketing Strategy",
    text: "Use campaign performance and genuine customer feedback to continuously improve your social media marketing efforts.",
    author: "Performance Ops",
    role: "Strategy Optimization",
    avatar: "assets/img/social/Benefits-icon-6.png",
   
  },
  {
    title: "Build Customer Relationships",
    text: "Respond to customers, answer questions, encourage conversations, and develop long-term relationships with your audience.",
    author: "Customer Success",
    role: "Relationship Management",
    avatar: "assets/img/social/Benefits-icon-5.png",

  },
];

export default function SocialMediaBenefits() {
  return (
    <section className="px-about-6-area pt-50 pb-40 pb-lg-110" style={{ backgroundColor: "#ffff" }}>
      <div className="container container-1550">
        
          {/* Title Section */}
                <div className="row align-items-center mb-5" data-aos="fade-up">
                   
                    <div className="col-xl-12">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Benefits of </span>
                               Social Media Marketing
                            </h4>
                            <p className="text-figtree text-black mt-2">
                               A well-planned social media strategy can deliver significant benefits for businesses across industries. As an experienced social media agency in Chennai, we create targeted campaigns focused on measurable business outcomes.
                            </p>
                        </div>
                    </div>
                </div>

        {/* Bento Grid Container */}
        <div 
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {benefitsData.map((item, index) => {
            const isFeatured = item.featured;
            const isWide = item.wide;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "1rem",
                  padding: isFeatured ? "2rem" : "1.5rem",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  gridColumn: isFeatured || isWide ? "span 2" : "span 1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ margin: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  
                  {/* Card Content */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "15px !important",
                        fontFamily: "Figtree, Figtree Fallback",
                        fontWeight: 600,
                        color: "#0f172a",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px !important",
                        color: "#475569",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontFamily: "Figtree, Figtree Fallback",
                      paddingTop: "1rem",
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    {/* Avatar Circle */}
                    <div
                      style={{
                        position: "relative",
                        width: "3.50rem",
                        height: "3.50rem",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "#e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={item.avatar}
                        alt={item.author}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#475569",
                          zIndex: 0,
                        }}
                      >
                       
                      </span>
                    </div>

                    {/* Author Info */}
                    <div>
                      <cite
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontFamily: "Figtree, Figtree Fallback",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "#0f172a",
                          lineHeight: 1,
                        }}
                      >
                        {item.author}
                      </cite>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          color: "#64748b",
                          marginTop: "0.25rem",
                        }}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}