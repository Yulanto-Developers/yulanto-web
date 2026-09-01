'use client';

import React from 'react';
import { UiFeature } from '../../web-desgin/data/landingData';
// import '@/assets/css/landing-ui-features.css';

interface LandingUiFeaturesProps {
    features: UiFeature[];
}

export default function LandingUiFeatures({
    features,
}: LandingUiFeaturesProps) {
    return (
        <div className="row g-4 mt-1">

            {features.map((feature, index) => {

                const IconComponent = feature.icon;

                return (
                    <div
                        key={index}
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-once={true}
                    >

                        <div className="landing-ui-feature-card">

                            {/* Background Image */}
                            <div
                                className="landing-ui-feature-bg"
                                style={{
                                    backgroundImage: `url("${feature.bgImage}")`,
                                }}
                            />

                            {/* Overlay */}
                            <div className="landing-ui-feature-overlay" />


                            {/* Card Top */}
                            <div className="landing-ui-feature-top">

                                <div className="landing-ui-feature-icon">
                                    <IconComponent />
                                </div>

                                <span className="landing-ui-feature-number">
                                    0{index + 1}
                                </span>

                            </div>


                            {/* Card Content */}
                            <div className="landing-ui-feature-content">

                                <h3 className='text-tenor'>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.description}
                                </p>

                            </div>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}