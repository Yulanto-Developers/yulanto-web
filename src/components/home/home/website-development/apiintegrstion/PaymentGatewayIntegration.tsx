'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '@/components/home/home/aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import {
  CreditCard,
  Link2,
  CheckCircle,
  RefreshCw,
  ShieldCheck,
  MessageSquare,
  Key,
  Bell,
  Calendar,
  Truck,
  AlertCircle,
  Users,
  ShoppingCart,
  Globe,
  Database,
  BarChart3,
  Headphones,
  Bot,
  Share2,
  TrendingUp,
  Settings,
  CalendarDays,
  UsersRound,
} from 'lucide-react';

// Replace image imports with your actual asset paths
import image1 from '@/assets/images/website-development/dynamic-website-development/image-1.jpg';
import image2 from '@/assets/images/website-development/dynamic-website-development/image-2.jpg';
import image3 from '@/assets/images/website-development/dynamic-website-development/image-3.jpg';
import image4 from '@/assets/images/website-development/dynamic-website-development/image-4.jpg';

const dynamicImages = [image1, image2, image3, image4];

const PaymentGatewayIntegration = () => {
    useAOS();
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const dataIndex = entry.target.getAttribute('data-index');
                    const index = parseInt(dataIndex || '0', 10);
                    if (!isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const sections = [
        {
            title: 'Payment Gateway Integration',
            description: 'Accept online payments securely and conveniently with professional Payment Gateway Integration services. We integrate popular payment gateways with websites, eCommerce platforms, and custom applications to support smooth and reliable transactions.',
            features: [
                { icon: CreditCard, label: 'Online payment integration' },
                { icon: Link2, label: 'Payment link integration' },
                { icon: CheckCircle, label: 'Transaction status verification' },
                { icon: RefreshCw, label: 'Payment success and failure handling' },
                { icon: Settings, label: 'Automated order and payment updates' },
                { icon: ShieldCheck, label: 'Secure API-based payment processing' },
            ]
        },
        {
            title: 'SMS Gateway Integration',
            description: 'Improve customer communication with SMS Gateway Integration. Connect your website or application with an SMS service provider to automatically send transactional and promotional messages.',
            features: [
                { icon: Key, label: 'OTP and verification messages' },
                { icon: CheckCircle, label: 'Order confirmations' },
                { icon: Bell, label: 'Payment notifications' },
                { icon: Calendar, label: 'Appointment reminders' },
                { icon: Truck, label: 'Delivery updates' },
                { icon: AlertCircle, label: 'Customer alerts' },
            ]
        },
        {
            title: 'WhatsApp Gateway Integration',
            description: 'Connect your business applications with WhatsApp using WhatsApp Gateway Integration. Automate customer notifications, enquiry responses, order updates, reminders, and other business communications through WhatsApp-enabled solutions.',
            features: [
                { icon: MessageSquare, label: 'Automated customer notifications' },
                { icon: Users, label: 'Enquiry responses' },
                { icon: ShoppingCart, label: 'Order updates' },
                { icon: Calendar, label: 'Reminders' },
                { icon: Bell, label: 'Business communications' },
            ]
        },
        {
            title: 'Any Third Party API Integration',
            description: 'Need to connect your website with an external software or service? Our Any Third Party API Integration service helps establish secure communication between your application and external platforms.',
            features: [
                { icon: Users, label: 'CRM and ERP systems' },
                { icon: BarChart3, label: 'Accounting software' },
                { icon: Truck, label: 'Shipping and logistics platforms' },
                { icon: CreditCard, label: 'Payment services' },
                { icon: TrendingUp, label: 'Marketing automation tools' },
                { icon: Share2, label: 'Social media platforms' },
                { icon: UsersRound, label: 'Lead management systems' },
                { icon: CalendarDays, label: 'Booking and reservation platforms' },
                { icon: Settings, label: 'Business automation tools' },
                { icon: Globe, label: 'Custom web applications' },
            ]
        },
        {
            title: 'Zoho CRM Integration',
            description: 'Streamline your sales and customer management processes with Zoho CRM Integration. We can connect your website, enquiry forms, lead generation systems, and other business applications with Zoho CRM. This helps automate lead capture, customer data synchronization, follow-ups, and sales workflows while reducing repetitive manual data entry.',
            features: [
                { icon: Users, label: 'Automate lead capture' },
                { icon: Database, label: 'Customer data synchronization' },
                { icon: CheckCircle, label: 'Automated follow-ups' },
                { icon: Settings, label: 'Sales workflow automation' },
                { icon: RefreshCw, label: 'Reduce manual data entry' },
            ]
        },
        {
            title: 'Chat API Integration',
            description: 'Enhance customer support and engagement with Chat API Integration. Connect your website or application with chat platforms and communication services to provide faster and more interactive customer experiences.',
            features: [
                { icon: Users, label: 'Customer enquiries' },
                { icon: Bot, label: 'Automated responses' },
                { icon: Headphones, label: 'Live chat systems' },
                { icon: MessageSquare, label: 'Support communication' },
                { icon: UsersRound, label: 'Lead qualification' },
                { icon: Bell, label: 'Notifications and alerts' },
                { icon: Settings, label: 'Chat-based business workflows' },
            ]
        }
    ];

    return (
        <section className="dynamic-choose-section py-5">
            <style jsx>{`
                .scroll-container {
                    display: flex;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    gap: 4rem;
                    position: relative;
                }

                .content-side {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .section-block {
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem 0;
                }

                .section-block h2 {
                    font-weight: 700;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    color: #1a1a2e;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .section-block h2 .section-icon {
                    color: #053456;
                    flex-shrink: 0;
                }

                .section-block p {
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }

                .section-block ul {
                    list-style-type: none;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 0.75rem 1rem;
                    margin-top: 1rem;
                    padding-left: 0;
                }

                .section-block li {
                    position: relative;
                    padding-left: 1.75rem;
                    color: #222;
                    font-weight: 500;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .section-block li .feature-icon {
                    color: #053456;
                    flex-shrink: 0;
                    position: absolute;
                    left: 0;
                    top: 0.15rem;
                }

                .image-side {
                    flex: 1;
                    position: sticky;
                    top: 15vh;
                    height: 70vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 480px;
                    overflow: hidden;
                    background-color: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                }

                .dynamic-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .dynamic-img.active {
                    opacity: 1;
                }

                .text-blue-about {
                    color: #053456;
                }

                .px-about-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1a1a2e;
                    margin-bottom: 1rem;
                }

                .subtitle {
                    max-width: 800px;
                    margin: 0 auto 2rem;
                    color: #555;
                    font-size: 1.1rem;
                    text-align: center;
                    line-height: 1.7;
                }

                @media (max-width: 991px) {
                    .scroll-container {
                        flex-direction: column-reverse;
                        gap: 2rem;
                    }

                    .image-side {
                        position: relative;
                        top: 0;
                        height: 350px;
                    }

                    .image-wrapper {
                        height: 350px;
                    }

                    .section-block {
                        min-height: auto;
                        padding: 2rem 0;
                    }

                    .section-block ul {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 576px) {
                    .section-block ul {
                        grid-template-columns: 1fr;
                    }

                    .px-about-title {
                        font-size: 2rem;
                    }
                }
            `}</style>

            <div className="container">
                {/* Title Header */}
                <h4
                    className="px-about-title mb-30 text-center"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Payment Gateway <span className="text-blue-about">Integration</span>
                </h4>

                <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
                    Accept online payments securely and conveniently with professional Payment Gateway Integration services. 
                    We integrate popular payment gateways with websites, eCommerce platforms, and custom applications to support 
                    smooth and reliable transactions.
                </p>

                {/* Dynamic Scroll & Sticky Image Layout */}
                <div className="scroll-container">
                    <div className="content-side">
                        {sections.map((section, index) => (
                            <section
                                key={index}
                                className="section-block"
                                data-index={index}
                                ref={(el) => {
                                    if (el) sectionRefs.current[index] = el;
                                }}
                                data-aos="fade-up"
                                data-aos-delay={200 + index * 50}
                            >
                                <h2>
                                    {section.features[0] && (() => {
                                        const IconComponent = section.features[0].icon;
                                        return <IconComponent className="section-icon" size={28} />;
                                    })()}
                                    {section.title}
                                </h2>
                                <p>{section.description}</p>
                                <ul>
                                    {section.features.map((feature, idx) => {
                                        const FeatureIcon = feature.icon;
                                        return (
                                            <li key={idx}>
                                                <FeatureIcon className="feature-icon" size={18} />
                                                {feature.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        ))}
                    </div>

                    <div className="image-side">
                        <div className="image-wrapper">
                            {dynamicImages.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src}
                                    alt={`Integration feature ${index + 1}`}
                                    className={`dynamic-img ${activeIndex === index ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentGatewayIntegration;