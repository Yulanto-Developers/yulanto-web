'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface BrochureNeedsProps {
  subtitle?: string
  titleMain?: string
  description?: string
}

export function BrochureNeeds({}: Readonly<BrochureNeedsProps>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  const leftList = [
    { title: 'Corporate companies', icon: 'fa-solid fa-building' },
    { title: 'Startups and new businesses', icon: 'fa-solid fa-rocket' },
    { title: 'Real estate and construction companies', icon: 'fa-solid fa-city' },
    { title: 'Industrial and manufacturing businesses', icon: 'fa-solid fa-industry' },
    { title: 'Educational institutions', icon: 'fa-solid fa-graduation-cap' },
  ]

  const rightList = [
    { title: 'Healthcare and service businesses', icon: 'fa-solid fa-hospital-user' },
    { title: 'Product and retail companies', icon: 'fa-solid fa-store' },
    { title: 'Events and promotional campaigns', icon: 'fa-solid fa-bullhorn' },
    { title: 'Architects and interior designers', icon: 'fa-solid fa-compass-drafting' },
    { title: 'B2B marketing and sales teams', icon: 'fa-solid fa-briefcase' },
  ]

  return (
    <section
      className="px-about-6-area pt-80 pb-80"
      style={{
        position: 'relative',
        backgroundColor: '#053456',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container container-1550">
        {/* Section Header */}
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20 text-center">
                <span className="text-blue-about text-light">
                  Brochure Design for Every Business Need
                </span>
              </h4>
              <p className="text-figtree text-light mt-2 text-center">
                We create customized brochure designs for:
              </p>
            </div>
          </div>
        </div>

        {/* Content List Section - 2 Columns */}
        <div className="row g-4 align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {leftList.map((item, index) => (
                <li
                  key={item.title}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: '#53ae7d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={item.icon}
                      style={{ color: '#053456', fontSize: '20px' }}
                    ></i>
                  </div>
                  <h5
                    style={{
                      color: '#ffffff',
                      margin: 0,
                      fontSize: '18px',
                      fontWeight: 400,
                      fontFamily: 'Figtree, Figtree Fallback',
                    }}
                  >
                    {item.title}
                  </h5>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {rightList.map((item, index) => (
                <li
                  key={item.title}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: '#53ae7d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={item.icon}
                      style={{ color: '#053456', fontSize: '20px' }}
                    ></i>
                  </div>
                  <h5
                    style={{
                      color: '#ffffff',
                      margin: 0,
                      fontSize: '18px',
                      fontWeight: 400,
                      fontFamily: 'Figtree, Figtree Fallback',
                    }}
                  >
                    {item.title}
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrochureNeeds