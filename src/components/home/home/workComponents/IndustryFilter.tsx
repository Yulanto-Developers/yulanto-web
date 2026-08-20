'use client';

import { useState } from 'react';
import { INDUSTRIES, INDUSTRY_CONTENT } from './industriesData';
import './Industry.css';

export default function Industry() {
    const [activeIndustry, setActiveIndustry] = useState<string>('corporate');

    // Get current category configuration
    const activeCategoryObj = INDUSTRIES.find(
        item => item.id === activeIndustry
    );

    // Get current projects list
    const currentIndustryData =
        INDUSTRY_CONTENT[activeIndustry] || { projects: [] };

    // Handle industry click
    const handleIndustryClick = (industryId: string) => {
        // Change the category
        setActiveIndustry(industryId);

        // Wait for React to update the content
        requestAnimationFrame(() => {
            const contentArea = document.querySelector(
                '.content-area'
            ) as HTMLElement | null;

            if (!contentArea) return;

            // Get the content area's position on the page
            const rect = contentArea.getBoundingClientRect();

            // Current scroll position + element position
            const scrollTop =
                window.pageYOffset + rect.top;

            // Scroll slightly above the content
            const offset = 30;

            window.scrollTo({
                top: scrollTop - offset,
                behavior: 'smooth',
            });
        });
    };

    return (
        <section className="industry-section">
            <div className="industry-container">

                {/* Section Header */}
                {/* <div className="industry-header">
                  

                    <h2 className="industry-heading">
                        Filter By Industry
                    </h2>

                    <p className="industry-subheading">
                        Explore our custom web solutions engineered across specialized market sectors.
                    </p>
                </div> */}

                <div className="industry-layout">

                    {/* ======================= */}
                    {/* LEFT SIDEBAR: FILTERS   */}
                    {/* ======================= */}

                    <aside className="filter-sidebar">
                        <div className="filter-card">

                            <nav
                                className="filter-nav"
                                role="tablist"
                            >
                                {INDUSTRIES.map((industry) => {
                                    const IconComponent = industry.icon;

                                    const isActive =
                                        activeIndustry === industry.id;

                                    return (
                                        <button
                                            key={industry.id}
                                            role="tab"
                                            aria-selected={isActive}
                                            onClick={() =>
                                                handleIndustryClick(
                                                    industry.id
                                                )
                                            }
                                            className={`filter-btn ${isActive
                                                ? 'active'
                                                : ''
                                                }`}
                                        >
                                            <span className="filter-icon">
                                                <IconComponent size={18} />
                                            </span>

                                            <span className="filter-label">
                                                {industry.label}
                                            </span>

                                            <span className="active-dot" />
                                        </button>
                                    );
                                })}
                            </nav>

                        </div>
                    </aside>


                    {/* ======================= */}
                    {/* RIGHT CONTENT: PROJECTS */}
                    {/* ======================= */}

                    <main className="content-area">

                        {/* 1. CATEGORY SHOWCASE TITLE */}

                        <div className="category-title-header">
                            <h3 className="category-heading text-tenor">
                                Our Work Across  {" "}
                                {activeCategoryObj?.label || 'Projects'} {" "}Industries
                            </h3>
                            <p className='text-figtree industry-desc-text'>Explore our industry-focused projects and digital solutions designed to help businesses grow and succeed.</p>
                        </div>


                        {/* 4. PROJECTS GRID */}

                        <div className="projects-grid mt-20">

                            {currentIndustryData.projects.length > 0 ? (

                                currentIndustryData.projects.map((project) => (

                                    <div
                                        key={project.id}
                                        className="project-card"
                                    >

                                        <div className="card-top">

                                            {/* Logo & Name */}

                                            <div className="project-meta">

                                                <div className="logo-box">
                                                    <img
                                                        src={project.logo}
                                                        alt={project.name}
                                                        className="project-logo"
                                                    />
                                                </div>

                                                <h3 className="project-title">
                                                    {project.name}
                                                </h3>

                                            </div>


                                            {/* Location Tag */}

                                            <div className="location-badge">

                                                <svg
                                                    className="location-icon"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />

                                                </svg>

                                                <span>
                                                    {project.location}
                                                </span>

                                            </div>

                                        </div>


                                        {/* Action CTA */}

                                        <div className="card-action">

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-view-project"
                                            >

                                                <span>
                                                    View Website
                                                </span>

                                                <svg
                                                    className="btn-arrow"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>

                                ))

                            ) : (

                                /* Empty State */

                                <div className="empty-state">

                                    <div className="empty-icon-wrap">

                                        <svg
                                            className="empty-icon"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>

                                    </div>

                                    <h4>
                                        Projects Coming Soon
                                    </h4>

                                    <p>
                                        We are actively updating our portfolio
                                        with live projects in this sector.
                                    </p>

                                </div>

                            )}

                        </div>


                        {/* 2. IMAGE & 3. DESCRIPTION */}

                        <div>

                            {activeCategoryObj?.image === true && (

                                <div className="banner-frame">

                                    <img
                                        src={activeCategoryObj.industryImg}
                                        alt={`${activeCategoryObj.label} Showcase`}
                                        className="banner-img"
                                    />

                                    <div className="banner-overlay" />

                                </div>

                            )}


                            {activeCategoryObj?.industryDesc && (

                                <div className="industry-description mt-20">
                                    {
                                        activeCategoryObj.industryDesc.map((item: string, index: number) => {
                                            return <p key={index} className='industry-desc-text text-figtree' dangerouslySetInnerHTML={{ __html: item }} />
                                        })
                                    }
                                </div>

                            )}

                        </div>

                    </main>

                </div>

            </div>
        </section>
    );
}