import React from 'react';
import './OffseoAbout.css';

interface KeywordRank {
  id: number;
  keyword: string;
  position: string;
  change: string;
}

const seoKeywordsData: KeywordRank[] = [
  { id: 1, keyword: 'SEO Services Chennai', position: '#1', change: '+4' },
 
  { id: 2, keyword: 'Organic SEO Expert', position: '#2', change: '+5' },
];

export const SeoAboutSection: React.FC = () => {
  return (
    <section className="seo-about-wrapper">
      <div className="seo-about-container">

        {/* Left Side: Mock Chrome Tab with Google Lens & Visual Images */}
        <div 
          className="seo-visual-column"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="chrome-browser-mockup">
            
            {/* Chrome Window Header */}
            <div className="chrome-tab-header">
              <div className="chrome-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <div className="chrome-tab active-tab">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="tab-title">Google Search & SEO Insights</span>
                <span className="close-tab">×</span>
              </div>
              <div className="chrome-new-tab">+</div>
            </div>

            {/* Chrome Navigation & Address Bar with Google Lens */}
            <div className="chrome-nav-bar">
              <div className="nav-buttons">
                <span className="nav-arrow">‹</span>
                <span className="nav-arrow">›</span>
                <span className="nav-refresh">↻</span>
              </div>
              <div className="chrome-address-bar">
                <div className="url-left">
                  <span className="ssl-lock">🔒</span>
                  <span className="protocol">https://</span>
                  <span className="domain">google.com/search?q=seo+services+chennai</span>
                </div>
                
                {/* Google Lens & Browser Action Icons */}
                <div className="chrome-address-actions">
                  {/* Google Lens Icon */}
                  <svg className="lens-icon" viewBox="0 0 24 24" fill="none" title="Search with Google Lens">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#4285F4"/>
                    <path d="M19 6.5C19 5.12 17.88 4 16.5 4H14.5L13.25 2.5H10.75L9.5 4H7.5C6.12 4 5 5.12 5 6.5V8.5L3.5 9.75V14.25L5 15.5V17.5C5 18.88 6.12 20 7.5 20H16.5C17.88 20 19 18.88 19 17.5V15.5L20.5 14.25V9.75L19 8.5V6.5Z" stroke="#ea4335" strokeWidth="1.5"/>
                  </svg>
                  {/* Mic Icon */}
                  <span className="mic-icon" title="Search by voice">🎙️</span>
                  {/* Bookmark Star */}
                  <span className="star-icon" title="Bookmark page">⭐</span>
                </div>
              </div>
            </div>

            {/* Chrome Content Area: SEO Metrics + Visual Image Previews */}
            <div className="chrome-content-area">
              <div className="seo-dashboard-summary">
                
                {/* Header Banner */}
                <div className="dashboard-top-bar">
                  <div>
                    <h5 className="seo-card-title">Organic Traffic & Keyword Insights</h5>
                    <p className="seo-card-subtitle">Chennai SERP Monitoring</p>
                  </div>
                 
                </div>

                {/* SEO Visual Image Banner */}
                <div 
                  className="seo-visual-banner"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                    alt="SEO Traffic Growth Graph and Search Engine Analytics" 
                    className="seo-preview-image"
                  />
                  <div className="image-overlay-tag">
                    <span>📈 +210% Traffic Surge</span>
                  </div>
                </div>

            

                {/* Keyword Ranking Breakdown Table */}
                <div className="keyword-rankings-panel">
                  <div className="panel-header">
                    <span>Target Keyword</span>
                    <span>Rank</span>
                  </div>
                  {seoKeywordsData.map((item) => (
                    <div key={item.id} className="keyword-row">
                      <span className="kw-text">{item.keyword}</span>
                      <div className="kw-rank-wrap">
                        <span className="kw-pos">{item.position}</span>
                        <span className="kw-change">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="seo-status-bar">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="status-text">Chennai Market Optimization Active</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Structured Content with AOS Animation */}
        <div 
          className="seo-content-column"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h4 className="px-about-title mb-20">
            <span className="text-blue-about">Why Choose Our SEO </span>
            Services in Chennai?
          </h4>

          <p className="text-figtree text-black mt-2">
            Choosing the right SEO partner is important because SEO requires consistent effort, strategic planning, monitoring, and continuous optimization. Our team combines SEO knowledge, content strategy, competitor research, link-building expertise, and local market understanding to create customized campaigns.
          </p>

          <p className="text-figtree text-black mt-2">
            As a best SEO company in Chennai, we focus on sustainable SEO practices rather than shortcuts. Our goal is to build a strong online foundation that can support your website's organic growth over time.
          </p>

          <p className="text-figtree text-black mt-2">
            Whether you are searching for the best SEO agency in Chennai, an experienced SEO service company in Chennai, or a reliable SEO consultant in Chennai, we can create an SEO strategy aligned with your business objectives.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SeoAboutSection;