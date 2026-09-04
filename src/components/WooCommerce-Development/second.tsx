import React from "react";

export default function WooCommerceTabSection() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}>
      <div className="container container-1550">
         <div className="row align-items-center" data-aos="fade-up">
         

          <div className="col-xl-12">
             <span className="tp-section-subtitle text-black blink-ball">
              Complete WooCommerce Website Development Solutions
            </span>
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                Turn Your WordPress Website into  {" "}
                </span>
                a High-Performing Online Store
              </h4>
               <p className="text-figtree text-black mt-2">
               WooCommerce provides the flexibility to build ecommerce websites for almost every type of business. With the right design, functionality, and optimization, your online store can provide customers with a smooth shopping experience across desktop, tablet, and mobile devices.
              Our WooCommerce development agency focuses on creating websites that are visually appealing, easy to navigate, mobile responsive, and optimized for conversions.
              </p>
        <p className="text-figtree text-black mt-2">Whether you need a new ecommerce website or want to upgrade an existing WordPress store, our WooCommerce website developer can customize the platform according to your business requirements.</p>

             
            </div>
          </div>
        </div>
        <div className="row align-items-center" data-aos="fade-up">
          {/* LEFT SIDE: Realistic WordPress Dashboard Tab Mock-up */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                borderRadius: "16px",
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.12)",
                overflow: "hidden",
              }}
            >
              {/* Browser Window Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  backgroundColor: "#e2e8f0",
                  borderBottom: "1px solid #cbd5e1",
                }}
              >
                {/* Window Control Buttons */}
                <span
                  style={{
                    height: "12px",
                    width: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    height: "12px",
                    width: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    height: "12px",
                    width: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "inline-block",
                  }}
                />

                {/* Browser Address Bar */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    padding: "4px 12px",
                    fontSize: "12px",
                    color: "#475569",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#10b981", fontWeight: "bold" }}>🔒 https://</span>
                  yourstore.com/wp-admin/admin.php?page=wc-admin
                </div>
              </div>

              {/* WordPress Top Admin Bar */}
              <div
                style={{
                  backgroundColor: "#1d2327",
                  color: "#f0f6fc",
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#38bdf8",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8 0-.96.17-1.88.48-2.73l4.7 12.87c.89.55 1.83.86 2.82.86.64 0 1.26-.13 1.84-.36l3.41-9.92 1.34 3.96c-.45.45-.96.83-1.52 1.13L12 20zm7.32-6.52l-2.02-5.95c.57-.35 1.21-.55 1.89-.55.22 0 .43.02.64.06a7.96 7.96 0 01-.51 6.44zM12 4c1.86 0 3.56.63 4.91 1.7l-3.32 9.68-3.14-8.62c.5-.16 1.02-.26 1.55-.26z" />
                    </svg>
                    WordPress
                  </span>
                  <span>My WooCommerce Store</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: "11px" }}>
                  Howdy, Store Admin
                </div>
              </div>

              {/* WordPress Dashboard Body */}
              <div style={{ display: "flex", height: "360px", backgroundColor: "#f0f0f1" }}>
                {/* WP Sidebar Navigation */}
                <div
                  style={{
                    width: "140px",
                    backgroundColor: "#1d2327",
                    color: "#a7aaad",
                    fontSize: "11px",
                    paddingTop: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div style={{ padding: "6px 12px", color: "#f0f6fc" }}>📌 Dashboard</div>
                  <div
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#2271b1",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    🛒 WooCommerce
                  </div>
                  <div style={{ padding: "6px 12px" }}>📦 Products</div>
                  <div style={{ padding: "6px 12px" }}>🎨 Analytics</div>
                  <div style={{ padding: "6px 12px" }}>⚙️ Marketing</div>
                  <div style={{ padding: "6px 12px" }}>🔌 Plugins</div>
                  <div style={{ padding: "6px 12px" }}>🛠️ Settings</div>
                </div>

                {/* WP Main Content Area */}
                <div style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <h5 style={{ fontSize: "16px", fontWeight: "bold", margin: 0, color: "#1d2327" }}>
                      WooCommerce Overview
                    </h5>
                    <span
                      style={{
                        fontSize: "10px",
                        backgroundColor: "#dcfce7",
                        color: "#15803d",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Live Store Active
                    </span>
                  </div>

                  {/* Dashboard Stats Cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #c3c4c7",
                      }}
                    >
                      <div style={{ fontSize: "11px", color: "#646970" }}>Total Sales</div>
                      <div style={{ fontSize: "16px", fontWeight: "bold", color: "#2271b1", marginTop: "2px" }}>
                        $12,450.00
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #c3c4c7",
                      }}
                    >
                      <div style={{ fontSize: "11px", color: "#646970" }}>Orders Completed</div>
                      <div style={{ fontSize: "16px", fontWeight: "bold", color: "#10b981", marginTop: "2px" }}>
                        148 Orders
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders Table */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid #c3c4c7",
                      padding: "12px",
                    }}
                  >
                    <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "8px", color: "#1d2327" }}>
                      Recent Orders
                    </div>
                    <div style={{ fontSize: "11px", color: "#646970", display: "flex", justifyContent: "space-between", paddingBottom: "6px", borderBottom: "1px solid #f0f0f1" }}>
                      <span>#1024 John D.</span>
                      <span style={{ color: "#10b981", fontWeight: "bold" }}>Processing</span>
                      <span>$120.00</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#646970", display: "flex", justifyContent: "space-between", paddingTop: "6px" }}>
                      <span>#1023 Sarah M.</span>
                      <span style={{ color: "#2271b1", fontWeight: "bold" }}>Completed</span>
                      <span>$85.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WooCommerce Text Content */}
          <div className="col-lg-6">
            <div className="px-project-title-box ps-lg-4">
             
           <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
Our WooCommerce development services include:</h5>

            <ul 
      style={{ 
        listStyle: "none", 
        padding: 0, 
        margin: 0, 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
        gap: "12px 16px" 
      }}
    >
     {[
        "Custom WooCommerce website design",
        "WooCommerce website development",
        "WordPress ecommerce development services",
        "WooCommerce custom development",
        "Ecommerce UI/UX design",
        "One-page ecommerce website development",
        "Product catalog and category setup",
        "Shopping cart and checkout development",
        "Payment gateway integration",
        "Shipping and delivery integration",
        "Product filtering and search",
        "Coupon and discount functionality",
        "Subscription and membership functionality",
        "Custom WooCommerce plugin integration",
        "Third-party API integration",
        "Website speed optimization",
        "SEO-friendly WooCommerce development",
        "WooCommerce website migration",
        "Existing store customization",
        "Website maintenance and technical support",
      ].map((point, index) => (
        <li 
          key={index} 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            fontSize: "15px", 
            color: "#1f2937",
            fontWeight: "500" ,
            fontFamily: "Figtree, Figtree Fallback",
          }}
        >
          {/* Checkmark Icon */}
          <span 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center", 
              width: "20px", 
              height: "20px", 
              borderRadius: "50%", 
              backgroundColor: "#e0f2fe", 
              color: "#053456", 
              fontSize: "12px",
              fontWeight: "bold",
              flexShrink: 0
            }}
          >
            ✓
          </span>
          {point}
        </li>
      ))}
    </ul>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}