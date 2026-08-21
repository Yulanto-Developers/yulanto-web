"use client";
import { GradientCard } from "./GradientCard";
import "./pholosophy.css";
import { useAOS } from "@/components/hooks/useAOS";

// Data for the cards with company values
const cardData = [
    {
        badgeColor: "#F59E0B", // Amber
        title: "Customer First",
        description:
            "Our customers are at the heart of everything we do. We follow a customer-first approach by understanding their goals, listening to their needs, and delivering solutions that create real business value.",
        imageUrl:
            "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=400&fit=crop",
        gradient: "orange" as const,
        aosDelay: 100,
    },
    {
        badgeColor: "#4B5563", // Gray
        title: "Humility",
        description:
            "We believe success should always be accompanied by humility. We remain approachable, respectful, and open to learning while maintaining positive and professional relationships with our clients and team.",
        imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
        gradient: "gray" as const,
        aosDelay: 200,
    },
    {
        badgeColor: "#EF4444", // Red
        title: "Passion",
        description:
            "Our passion for design, technology, and innovation drives us to deliver high-quality work. We approach every project with dedication, creativity, and attention to detail.",
        imageUrl:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
        gradient: "purple" as const,
        aosDelay: 300,
    },
    {
        badgeColor: "#10B981", // Green
        title: "Customer Satisfaction",
        description:
            "Customer satisfaction is one of our highest priorities. We strive to create outstanding web and digital solutions that effectively represent our clients' brands and support their growth.",
        imageUrl:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
        gradient: "green" as const,
        aosDelay: 100,
    },
    {
        badgeColor: "#8B5CF6", // Purple
        title: "Pursuit of Excellence",
        description:
            "We are committed to continuous improvement and excellence in everything we do. By embracing emerging technologies, adopting innovative tools, and staying ahead of industry trends, we continuously enhance our services and deliver better results.",
        imageUrl:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
        gradient: "purple" as const,
        aosDelay: 200,
    },
    {
        badgeColor: "#F59E0B", // Amber
        title: "Honest Relationships",
        description:
            "We believe strong businesses are built on trust, transparency, and genuine communication. Since our inception, we have maintained an honest and open approach with our clients, building long-term relationships based on reliability, integrity, and mutual respect.",
        imageUrl:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
        gradient: "orange" as const,
        aosDelay: 300,
    },
];

const GradientCardDemo = () => {
    useAOS();

    return (
        <section className="philosophy-section pt-30 pb-50">
            <div className="container">
                {/* Section Header */}
                <div className="row pb-30">
                    <div className="col-xl-12">
                        <div
                            className="px-service-subtitle-box pt-40"
                            data-aos="fade-up"
                            data-aos-delay="50"
                        >
                            <span className="px-section-subtitle mb-3">
                                Our Philosophy
                            </span>
                        </div>

                        <div
                            className="px-service-title-box"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3
                                className="px-about-title ft-30 text-tenor mb-0 text-effect"
                                style={{ lineHeight: "1.2" }}
                            >
                                Honesty &{" "}
                                <span className="text-blue-about">
                                    Transparency
                                </span>
                            </h3>
                        </div>

                        <p
                            className="mt-3"
                            data-aos="fade-up"
                            data-aos-delay="150"
                            
                        >
                            At Yulanto, honesty and transparency are at the heart of everything we do.
                            We believe in building strong, long-term relationships through open communication,
                            ethical practices, and complete accountability. Our commitment to integrity has
                            earned the trust and confidence of our clients, enabling us to grow together and
                            deliver lasting value with reliability and professionalism.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="row g-4">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="col-12 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={card.aosDelay}
                            data-aos-duration="600"
                        >
                            <GradientCard
                                badgeColor={card.badgeColor}
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                                gradient={card.gradient}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GradientCardDemo;