// faqa1data.ts

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  meta: string;
}

const faqa1Data: FAQItem[] = [
  {
    id: 1,
    question: "How does a dynamic website differ from a static website?",
    answer:
      "A static website comprises of unchanging HTML pages that are presented to all users without any personalization. Conversely, a dynamic website employs server-side scripting languages (such as PHP, Python) to generate web pages in a dynamic manner. This enables customization, interactivity, and real-time updates depending on user input or database queries.",
    meta: "Comparison",
  },
  {
    id: 2,
    question: "What are the advantages of a dynamic website?",
    answer:
      "Dynamic websites provide a range of features including customization and personalization, interactivity, regular updates of dynamic content, e-commerce functionality, integration with databases, real-time updates, scalability, responsive design, search engine optimization (SEO) compatibility, and the ability to track analytics.",
    meta: "Benefits",
  },
  {
    id: 3,
    question: "What types of websites can benefit from dynamic functionality?",
    answer:
      "Dynamic functionality offers numerous advantages for a diverse array of websites, encompassing e-commerce stores, news portals, social networking platforms, online forums, blogs, content management systems (CMS), educational platforms, booking systems, and business directories.",
    meta: "Use Cases",
  },
  {
    id: 4,
    question: "How is content managed on a dynamic website?",
    answer:
      "Content on a dynamic website is commonly controlled through a content management system (CMS) or a database-driven platform. Website administrators have the ability to add, modify, or delete content using a user-friendly interface, eliminating the need to make direct edits to HTML files. The content is stored in a database and is dynamically presented on the web pages.",
    meta: "CMS",
  },
  {
    id: 5,
    question:
      "Do you provide post-development maintenance support for a dynamic website?",
    answer:
      "Yes. We provide maintenance support after the project is live for free but for a limited time period. After that, our prices are nominal for extended periods of support post-development. The prices depend on pre-agreed terms and conditions. For more details, talk to our experts and book a free consultation session.",
    meta: "Support",
  },
  //*********************** */
 {
  id: 6,
  question: "What is logo design and why is it important?",
  answer:
    "Logo design is the process of creating a visual symbol that represents a business or brand. A professional logo helps customers recognize your business and creates consistency across your marketing and communication materials.",
  meta: "Logo Design",
},

{
  id: 7,
  question: "How much does logo design in Chennai cost?",
  answer:
    "The cost of logo design depends on factors such as the complexity of the concept, number of design options, revisions, branding requirements, and deliverables. Contact us with your requirements to receive a suitable quotation.",
  meta: "Pricing",
},

{
  id: 8,
  question: "What information should I provide to a logo designer?",
  answer:
    "You can provide information about your business, industry, target audience, preferred colors, competitors, brand personality, existing branding, and any design ideas you may have. This helps the designer create a logo that aligns with your business.",
  meta: "Requirements",
},

{
  id: 9,
  question: "What file formats will I receive?",
  answer:
    "Depending on your project requirements, final logo files can be provided in commonly used formats such as AI, EPS, SVG, PDF, PNG, and JPG. Vector formats are particularly useful for scaling your logo for large-format printing.",
  meta: "File Formats",
},

{
  id: 10,
  question: "Can I request changes to the logo?",
  answer:
    "Yes. Logo projects can include revisions based on the agreed scope of work. Your feedback helps the designer refine the concept and move toward the final design.",
  meta: "Revisions",
},

{
  id: 11,
  question: "Can I use the logo on my website and social media?",
  answer:
    "Yes. A professionally designed logo can be optimized for websites, social media profiles, digital advertising, business cards, brochures, signage, packaging, and other brand communication materials.",
  meta: "Usage",
},

{
  id: 12,
  question: "Can I trademark my logo?",
  answer:
    "A logo may be eligible for trademark protection depending on its originality and applicable legal requirements. If trademark protection is important for your business, it is advisable to consult an intellectual-property professional.",
  meta: "Trademark",
},

{
  id: 13,
  question: "What if I already have a logo but want to improve it?",
  answer:
    "We can help with logo redesign and brand refresh projects. We can retain valuable elements of your existing identity while creating a cleaner, more modern, and professional design.",
  meta: "Logo Redesign",
},
  
  
];

export default faqa1Data;