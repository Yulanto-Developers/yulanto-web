// faqa1data.ts

export interface FAQItem {
  id: number;
  question: string;
  answer: string[];
  list?: string[];
  meta?: string;
}

const faqa1Data: FAQItem[] = [
  {
    id: 1,
    question: "How does a dynamic website differ from a static website?",
    answer: [
      "A static website generally consists of fixed HTML pages where the content remains largely unchanged unless the underlying files are manually edited. A dynamic website can generate and display content using server-side technologies and databases.",
      "Dynamic websites are particularly useful when businesses need regular content updates, user interaction, database functionality, e-commerce, booking systems, or other advanced features.",
    ],
    meta: "Comparison",
  },

  {
    id: 2,
    question: "What are the advantages of a dynamic website?",
    answer: [
      "Dynamic websites provide greater flexibility and functionality. Key advantages include easy content management, database integration, interactive features, scalability, personalized functionality, e-commerce capabilities, regular content updates, analytics integration, and compatibility with various digital marketing requirements.",
    ],
    meta: "Benefits",
  },

  {
    id: 3,
    question: "What types of websites can use dynamic functionality?",
    answer: [
      "Almost any business website can benefit from dynamic functionality when its requirements demand it. Common examples include:",
    ],
    list: [
      "Corporate websites",
      "Business websites",
      "E-commerce websites",
      "News and media portals",
      "Blogs",
      "Educational websites",
      "Booking websites",
      "Membership websites",
      "Business directories",
      "Customer portals",
      "Real estate websites",
      "Service-based websites",
      "Custom web applications",
    ],
    meta: "Use Cases",
  },

  {
    id: 4,
    question: "How is content managed on a dynamic website?",
    answer: [
      "Content is generally managed through a CMS or database-driven administration panel. Authorized users can log in and update pages, products, services, images, blogs, testimonials, and other website information through a user-friendly interface.",
      "This eliminates the need to manually edit individual HTML files for every content update.",
    ],
    meta: "CMS",
  },

  {
    id: 5,
    question: "Do you provide post-development maintenance and support?",
    answer: [
      "Yes. We provide post-development support for our websites for a limited period after the project goes live. Extended website maintenance and support can also be provided based on your requirements and mutually agreed terms.",
      "Our support services can include content updates, technical assistance, website maintenance, troubleshooting, security updates, backups, and other website-related requirements.",
    ],
    meta: "Support",
  },
  {
    id: 6,
    question: "How much does website development cost in Chennai?",
    answer: [
      "The cost of website development depends on factors such as the number of pages, design requirements, CMS platform, functionality, integrations, database requirements, e-commerce features, and customization.",
      "Contact our team to discuss your requirements and receive a suitable website development proposal.",
    ],
    meta: "Pricing",
  },

  {
    id: 7,
    question:
      "Why should I choose a professional web development company in Chennai?",
    answer: [
      "A professional development team can help you build a website that is not only visually appealing but also responsive, user-friendly, scalable, secure, and aligned with your business objectives.",
      "By working with experienced web developers in Chennai, you can get a website designed around your specific business requirements rather than relying on a generic template-based solution.",
    ],
    meta: "Web Development",
  },
  //*********************** */
  {
    id: 8,
    question: "What is logo design and why is it important?",
    answer: [
      "Logo design is the process of creating a visual symbol that represents a business or brand. A professional logo helps customers recognize your business and creates consistency across your marketing and communication materials.",
    ],
    meta: "Logo Design",
  },

  {
    id: 9,
    question: "How much does logo design in Chennai cost?",
    answer: [
      "The cost of logo design depends on factors such as the complexity of the concept, number of design options, revisions, branding requirements, and deliverables. Contact us with your requirements to receive a suitable quotation.",
    ],
    meta: "Pricing",
  },

  {
    id: 10,
    question: "What information should I provide to a logo designer?",
    answer: [
      "You can provide information about your business, industry, target audience, preferred colors, competitors, brand personality, existing branding, and any design ideas you may have. This helps the designer create a logo that aligns with your business.",
    ],
    meta: "Requirements",
  },

  {
    id: 11,
    question: "What file formats will I receive?",
    answer: [
      "Depending on your project requirements, final logo files can be provided in commonly used formats such as AI, EPS, SVG, PDF, PNG, and JPG. Vector formats are particularly useful for scaling your logo for large-format printing.",
    ],
    meta: "File Formats",
  },

  {
    id: 12,
    question: "Can I request changes to the logo?",
    answer: [
      "Yes. Logo projects can include revisions based on the agreed scope of work. Your feedback helps the designer refine the concept and move toward the final design.",
    ],
    meta: "Revisions",
  },

  {
    id: 13,
    question: "Can I use the logo on my website and social media?",
    answer: [
      "Yes. A professionally designed logo can be optimized for websites, social media profiles, digital advertising, business cards, brochures, signage, packaging, and other brand communication materials.",
    ],
    meta: "Usage",
  },

  {
    id: 14,
    question: "Can I trademark my logo?",
    answer: [
      "A logo may be eligible for trademark protection depending on its originality and applicable legal requirements. If trademark protection is important for your business, it is advisable to consult an intellectual-property professional.",
    ],
    meta: "Trademark",
  },

  {
    id: 15,
    question: "What if I already have a logo but want to improve it?",
    answer: [
      "We can help with logo redesign and brand refresh projects. We can retain valuable elements of your existing identity while creating a cleaner, more modern, and professional design.",
    ],
    meta: "Logo Redesign",
  },
];

export default faqa1Data;
