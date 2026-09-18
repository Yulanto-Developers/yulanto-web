'use client';

import React from 'react';
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

// Image Imports
import image1 from '@/assets/images/website-development/API-Integration/Payment-Gateway-Integration.jpg';
import image2 from '@/assets/images/website-development/API-Integration/SMS-Gateway-Integration.jpg';
import image3 from '@/assets/images/website-development/API-Integration/WhatsApp-Gateway-Integration.jpg';
import image4 from '@/assets/images/website-development/API-Integration/Any-Third-Party-API-Integration.jpg';
import image5 from '@/assets/images/website-development/API-Integration/Zoho-CRM-Integration.jpg';
import image6 from '@/assets/images/website-development/API-Integration/Chat-API-Integration.jpg';

const sectionsData = [
    {
        title: 'Payment Gateway Integration',
        paragraphs: [
            'Accept online payments securely and conveniently with professional Payment Gateway Integration services. We integrate popular payment gateways with websites, eCommerce platforms, and custom applications to support smooth and reliable transactions.'
        ],
        features: [
            { icon: CreditCard, label: 'Online payment integration' },
            { icon: Link2, label: 'Payment link integration' },
            { icon: CheckCircle, label: 'Transaction status verification' },
            { icon: RefreshCw, label: 'Payment success and failure handling' },
            { icon: Settings, label: 'Automated order and payment updates' },
            { icon: ShieldCheck, label: 'Secure API-based payment processing' },
        ],
        image: image1,
        alt: 'Payment Gateway Integration'
    },
    {
        title: 'SMS Gateway Integration',
        paragraphs: [
            'Improve customer communication with SMS Gateway Integration. Connect your website or application with an SMS service provider to automatically send transactional and promotional messages.'
        ],
        features: [
            { icon: Key, label: 'OTP and verification messages' },
            { icon: CheckCircle, label: 'Order confirmations' },
            { icon: Bell, label: 'Payment notifications' },
            { icon: Calendar, label: 'Appointment reminders' },
            { icon: Truck, label: 'Delivery updates' },
            { icon: AlertCircle, label: 'Customer alerts' },
        ],
        image: image2,
        alt: 'SMS Gateway Integration'
    },
    {
        title: 'WhatsApp Gateway Integration',
        paragraphs: [
            'Connect your business applications with WhatsApp using WhatsApp Gateway Integration. Automate customer notifications, enquiry responses, order updates, reminders, and other business communications through WhatsApp-enabled solutions.'
        ],
        features: [
            { icon: MessageSquare, label: 'Automated customer notifications' },
            { icon: Users, label: 'Enquiry responses' },
            { icon: ShoppingCart, label: 'Order updates' },
            { icon: Calendar, label: 'Reminders' },
            { icon: Bell, label: 'Business communications' },
        ],
        image: image3,
        alt: 'WhatsApp Gateway Integration'
    },
    {
        title: 'Any Third Party API Integration',
        paragraphs: [
            'Need to connect your website with an external software or service? Our Any Third Party API Integration service helps establish secure communication between your application and external platforms.'
        ],
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
        ],
        image: image4,
        alt: 'Any Third Party API Integration'
    },
    {
        title: 'Zoho CRM Integration',
        paragraphs: [
            'Streamline your sales and customer management processes with Zoho CRM Integration. We can connect your website, enquiry forms, lead generation systems, and other business applications with Zoho CRM. This helps automate lead capture, customer data synchronization, follow-ups, and sales workflows while reducing repetitive manual data entry.'
        ],
        features: [
            { icon: Users, label: 'Automate lead capture' },
            { icon: Database, label: 'Customer data synchronization' },
            { icon: CheckCircle, label: 'Automated follow-ups' },
            { icon: Settings, label: 'Sales workflow automation' },
            { icon: RefreshCw, label: 'Reduce manual data entry' },
        ],
        image: image5,
        alt: 'Zoho CRM Integration'
    },
    {
        title: 'Chat API Integration',
        paragraphs: [
            'Enhance customer support and engagement with Chat API Integration. Connect your website or application with chat platforms and communication services to provide faster and more interactive customer experiences.'
        ],
        features: [
            { icon: Users, label: 'Customer enquiries' },
            { icon: Bot, label: 'Automated responses' },
            { icon: Headphones, label: 'Live chat systems' },
            { icon: MessageSquare, label: 'Support communication' },
            { icon: UsersRound, label: 'Lead qualification' },
            { icon: Bell, label: 'Notifications and alerts' },
            { icon: Settings, label: 'Chat-based business workflows' },
        ],
        image: image6,
        alt: 'Chat API Integration'
    }
];

const PaymentGatewayIntegration = () => {
    useAOS();

    return (
        <section className="dynamic-choose-section py-5">
            <style jsx>{`
                .feature-row {
                    margin-bottom: 5rem;
                }

                .feature-row:last-child {
                    margin-bottom: 0;
                }

                .section-block h2 {
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.5rem;
                    font-size: 28px;
                    color: #000000;
                }

                .section-block p {
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                    font-size: 16px;
                }

                .section-block ul {
                    list-style-type: none;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 0.85rem 1rem;
                    margin-top: 1.25rem;
                    padding-left: 0;
                }

                .section-block li {
                    position: relative;
                    padding-left: 1.75rem;
                    color: #222;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 1.4;
                    display: flex;
                    align-items: center;
                }

                .section-block li .feature-icon {
                    position: absolute;
                    left: 0;
                    top: 0.15rem;
                    color: #053456;
                    flex-shrink: 0;
                }

                .feature-img-wrapper {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
                }

                .feature-img-wrapper img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
                    display: block;
                }

                /* Mobile & Tablet Responsive Enhancements */
                @media (max-width: 991px) {
                    .feature-row {
                        margin-bottom: 3.5rem;
                    }

                    .section-block h2 {
                        font-size: 22px;
                        margin-bottom: 0.75rem;
                    }

                    .feature-img-wrapper img {
                        height: 260px;
                    }
                }

                @media (max-width: 575px) {
                    .feature-row {
                        margin-bottom: 2.75rem;
                    }

                    .section-block ul {
                        grid-template-columns: 1fr; /* Single column on small mobile screens */
                        gap: 0.75rem;
                    }

                    .feature-img-wrapper img {
                        height: 220px;
                    }
                }
            `}</style>

            <div className="container px-3 px-sm-4">
                {/* Title Header */}
                <h4
                    className="px-about-title text-tenor mb-5 pb-3 text-center"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    API <span className="text-blue-about"> Integration Services </span>
                </h4>

                {/* Alternating Rows */}
                {sectionsData.map((item, index) => {
                    const isEven = index % 2 === 1;

                    return (
                        <div
                            key={index}
                            className={`row align-items-center gy-4 gy-lg-5 feature-row ${isEven ? 'flex-lg-row-reverse' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {/* Text Content Column */}
                            <div className="col-lg-6 col-12">
                                <div className="section-block">
                                    <h2>{item.title}</h2>
                                    {item.paragraphs.map((para, pIndex) => (
                                        <p key={pIndex}>{para}</p>
                                    ))}

                                    {item.features && (
                                        <ul>
                                            {item.features.map((feature, fIndex) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <li key={fIndex}>
                                                        <Icon className="feature-icon" size={18} />
                                                        {feature.label}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="col-lg-6 col-12">
                                <div className="feature-img-wrapper">
                                    <img
                                        src={typeof item.image === 'string' ? item.image : item.image.src}
                                        alt={item.alt}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PaymentGatewayIntegration;