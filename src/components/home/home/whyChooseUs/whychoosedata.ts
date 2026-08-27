export interface WhyChooseItem {
  id: number;
  title: string;
  image?: string;
  badgeText?: string;
  description: string;
  subDesc?: string;
  categories?: string[];
}

const whychoosseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Quality Design",
    badgeText: "High Performance",
    image: "/assets/images/whychoose/quality-design.jpg",
    description: `Quality is at the heart of everything we do. Every website we create reflects our commitment to modern design, usability, performance, and attention to detail.`,
  },
  {
    id: 2,
    title: "Innovative Approach",
    badgeText: "Modern Tech",
    image: "/assets/images/whychoose/innovation-approach.jpg",
    description: `We continuously explore new ideas, technologies, and creative approaches throughout every stage of development. Our innovative mindset helps us create distinctive digital experiences.`,
  },
  {
    id: 3,
    title: "Customized Solutions",
    badgeText: "Tailored Strategy",
    image: "/assets/images/whychoose/customized-solutions.jpg",
    description: `We take the time to understand your business, objectives, and unique requirements. Our customized solutions are thoughtfully designed to deliver meaningful results.`,
  },
  {
    id: 4,
    title: "Professional Team",
    badgeText: "Expert Developers",
    image: "/assets/images/whychoose/team.jpg",
    description: `Our team of skilled and experienced web designers and developers combines creativity, technical expertise, and industry knowledge to build professional websites.`,
  },
  {
    id: 5,
    title: "On-Time Delivery",
    badgeText: "Strict Deadlines",
    image: "/assets/images/whychoose/on-time-delivery.jpg",
    description: `We understand the importance of deadlines in business. Our structured approach to project management helps us maintain timelines and deliver projects efficiently.`,
  },
  {
    id: 6,
    title: "Reliable Support",
    badgeText: "24/7 Assistance",
    image: "/assets/images/whychoose/customer-support.jpg",
    description: `Our relationship with you doesn't end after your website goes live. Our dedicated technical support team is always ready to assist with maintenance and updates.`,
  },
];

export default whychoosseData;