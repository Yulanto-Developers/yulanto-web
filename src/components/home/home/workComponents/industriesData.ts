import {
  Building2, Laptop, Building, Paintbrush, Wrench, HeartPulse, Tv,
  ShoppingCart, Ship, Truck, GraduationCap, Plane, Sparkles, Briefcase,
  BookOpen, Sun, Factory, Anvil, UtensilsCrossed, Trophy, Landmark, Layers, LucideIcon,
} from 'lucide-react';

export interface IndustryCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  image?: boolean;
  industryImg?: string;
  industryDesc?: string[];
}

export interface IndustryProject {
  id: string;
  name: string;
  logo: string;
  location: string;
  url: string;
  borderClass?: string;
}

export interface IndustryContent {
  bannerImg?: string;
  projects: IndustryProject[];
}

// Sidebar Filter Categories
export const INDUSTRIES: IndustryCategory[] = [
  {
    id: 'corporate',
    label: 'Corporate',
    icon: Building2,
    image: true,
    industryImg: '/assets/img/industry/corproate.jpg',
    industryDesc: [
      "We create professional website design and digital solutions for corporate businesses across diverse industries, helping organizations build a strong online presence and achieve their business goals.",
      "From corporate websites and B2B web development to responsive website design, WordPress development, UI/UX design, and digital marketing solutions, our experienced team delivers customized solutions based on each industry’s unique requirements.",
      "Our portfolio showcases modern, SEO-friendly, mobile-responsive, and conversion-focused websites designed to enhance brand credibility, improve user experience, and generate business opportunities. Whether you are an established enterprise, growing company, or emerging business, we provide reliable web design and website development services that support long-term digital growth and strengthen your competitive presence online."
    ]
  },
  {
    id: 'software',
    label: 'Software & IT',
    icon: Laptop,
    image: false,
    industryImg: '/assets/img/all-works/head-img/software.jpg',
    industryDesc: [
      "We deliver professional web design and website development solutions for Software and IT companies, helping technology businesses build a strong, credible, and competitive online presence.",
      "Our expertise includes IT company website design, software company website development, SaaS website design, technology website development, WordPress development, responsive web design, UI/UX design, and SEO-friendly website development. We create modern, scalable, mobile-responsive, and user-focused websites that clearly communicate complex technology services and solutions while improving user engagement and generating quality business leads.",
      "From software development companies and IT consulting firms to SaaS providers, technology startups, cloud service providers, and digital transformation companies, we develop customized digital experiences aligned with each business's goals and target audience. Our SEO-optimized websites are structured to improve search engine visibility, strengthen brand authority, and support long-term online growth. With a focus on performance, usability, security, and conversion, we help Software and IT businesses establish a powerful digital presence and turn their website into an effective business growth platform."
    ]
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    icon: Building,
    image: false,
    industryImg: '/assets/img/all-works/head-img/realestate.jpg',
    industryDesc: [
      "We create professional real estate website design and development solutions that help property businesses establish a strong online presence, showcase their projects, and generate quality leads.",
      "Our expertise includes real estate website design, property website development, builder and developer websites, residential and commercial property websites, real estate portal development, WordPress development, responsive web design, UI/UX design, and SEO-friendly website development.",
      "We build modern, mobile-responsive, user-friendly websites that effectively present property listings, ongoing projects, floor plans, amenities, locations, galleries, and other essential property information. From real estate developers, builders, construction companies, property consultants, architects, and real estate agencies to commercial and residential property businesses, we provide customized digital solutions aligned with their brand identity and business objectives.",
      "Our SEO-optimized real estate websites are structured to improve search engine visibility, attract potential buyers and investors, and support effective lead generation. With engaging layouts, intuitive navigation, fast performance, and conversion-focused features, we help real estate businesses build credibility, showcase their projects professionally, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'interior',
    label: 'Interior & Architect',
    icon: Paintbrush,
    image: false,
    industryImg: '/assets/img/all-works/head-img/interior.jpg',
    industryDesc: [
      "We deliver  professional website design and development solutions for Interior Design and Architecture businesses, helping creative professionals and firms showcase their expertise, projects, and design capabilities through a powerful online presence.",
      "Our services include  interior design website design, architecture website development, architect portfolio websites, interior designer websites, architectural firm website design, WordPress website development, responsive web design, UI/UX design, and SEO-friendly website development.",
      "We create visually engaging, modern, mobile-responsive websites that highlight completed projects, design portfolios, services, project galleries, client testimonials, and company expertise while providing a seamless user experience. From  interior designers, architects, architecture firms, design studios, residential interior companies, commercial interior designers, and turnkey interior solution providers, we develop customized websites that reflect each brand’s unique creativity and professional identity.",
      "Our  SEO-optimized websites are designed to improve online visibility, attract potential clients, generate quality enquiries, and strengthen brand credibility. By combining creative website design, intuitive navigation, high-quality visual presentation, performance optimization, and conversion-focused strategies, we help Interior and Architecture businesses turn their websites into effective platforms for showcasing their work and driving long-term business growth."
    ]
  },
  {
    id: 'engineering',
    label: 'Engineering & Electronic',
    icon: Wrench,
    image: false,
    industryImg: '/assets/img/all-works/head-img/engineering.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for engineering companies, helping businesses establish a strong digital presence, showcase their technical expertise, and build credibility with clients and industry partners.",
      "Our services include engineering company website design, industrial website development, engineering website development, responsive web design, WordPress development, UI/UX design, corporate website design, and SEO-friendly website development. We create modern, professional, mobile-responsive websites that effectively present engineering services, technical capabilities, projects, products, certifications, industries served, and company expertise in a clear and engaging manner.",
      "From civil engineering, mechanical engineering, electrical engineering, structural engineering, manufacturing, industrial engineering, infrastructure, MEP, EPC, and engineering consultancy companies, we develop customized digital solutions aligned with each organization’s business objectives and target audience.",
      "Our SEO-optimized engineering websites are structured to improve search engine visibility, attract relevant B2B enquiries, and strengthen online brand authority. With a focus on performance, usability, professional design, and lead generation, we help engineering companies showcase their capabilities, connect with potential clients, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'health',
    label: 'Health Care',
    icon: HeartPulse,
    image: false,
    industryImg: '/assets/img/all-works/head-img/health.jpg',
    industryDesc: [
      "We deliver professional healthcare website design and website development solutions that help healthcare organizations establish a trusted digital presence, communicate their services effectively, and connect with patients and healthcare professionals.",
      "Our expertise includes healthcare website design, hospital website development, clinic website design, medical website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. We create modern, mobile-responsive, user-friendly websites that clearly present medical services, departments, doctors, treatments, facilities, health information, appointment options, and other essential details.",
      "From hospitals, multispecialty clinics, diagnostic centers, dental clinics, medical practitioners, healthcare consultants, wellness centers, and specialty healthcare providers, we develop customized websites that reflect their professional identity and meet the needs of their target audience.",
      "Our SEO-optimized healthcare websites are structured to improve online visibility, support local search rankings, attract relevant enquiries, and build patient confidence. By combining clean design, intuitive navigation, fast performance, engaging content, and conversion-focused features, we help healthcare businesses create a credible online presence and achieve sustainable digital growth."
    ]
  },
  {
    id: 'marine',
    label: 'Marine, Oil & Gas',
    icon: Ship,
    image: false,
    industryImg: '/assets/img/all-works/head-img/health.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Marine, Oil & Gas companies, helping businesses establish a strong digital presence, showcase their technical expertise, and communicate their products and services effectively to clients across local and international markets. ",
      "Our expertise includes marine company website design, oil and gas website development, offshore company website design, petroleum company website development, marine engineering website design, energy company website development, industrial website design, B2B website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, professional, mobile-responsive websites that clearly present company capabilities, marine services, offshore operations, oil and gas solutions, engineering expertise, equipment, products, projects, certifications, safety standards, and industry experience. ",
      "From marine engineering companies, ship management companies, offshore service providers, oil and gas contractors, petroleum companies, drilling and exploration businesses, energy companies, marine equipment suppliers, and industrial service providers, we develop customized digital solutions aligned with their brand identity and business objectives. Our SEO-optimized Marine, Oil & Gas websites are structured to improve search engine visibility, attract relevant B2B traffic, generate qualified business enquiries, and strengthen brand credibility in competitive global markets. By combining professional design, clear technical content, intuitive navigation, high performance, mobile compatibility, and conversion-focused features, we help Marine, Oil & Gas businesses showcase their capabilities, build trust with international clients and partners, expand their market reach, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'media',
    label: 'Media & Ads',
    icon: Tv,
    image: true,
    industryImg: '/assets/img/industry/Media.jpg',
    industryDesc:
      [
        "We provide professional website design and website development solutions for media and entertainment businesses, helping organizations build a strong digital presence, showcase their content, and engage their audiences effectively.",
        "Our expertise includes media company website design, entertainment website development, digital media website design, news and magazine website development, publishing website design, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. We create modern, visually engaging, mobile-responsive websites that make it easy to present news, articles, videos, events, publications, portfolios, and multimedia content while delivering a seamless user experience.",
        "From media companies, news portals, digital publishers, advertising agencies, production houses, broadcasting companies, magazines, entertainment businesses, and creative media agencies, we develop customized digital solutions aligned with their brand identity and audience requirements. Our SEO-optimized media websites are structured to improve search engine visibility, increase organic traffic, enhance content discoverability, and encourage audience engagement.",
        "By combining creative design, intuitive navigation, fast performance, content-focused layouts, and conversion-driven strategies, we help media businesses strengthen their online brand, reach wider audiences, and achieve sustainable digital growth."
      ]
  },
  // {
  //   id: 'ecommerce',
  //   label: 'Ecommerce',
  //   icon: ShoppingCart,
  //   image: true,
  //   industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
  //   industryDesc: [
  //     "We deliver professional e-commerce website design and development solutions that help online businesses build powerful digital storefronts, showcase their products, and increase sales through seamless shopping experiences.",
  //     "Our expertise includes e-commerce website design, online store development, Shopify development, WooCommerce development, WordPress e-commerce solutions, custom e-commerce development, responsive web design, UI/UX design, payment gateway integration, and SEO-friendly e-commerce website development. We create modern, mobile-responsive, user-friendly online stores with intuitive product navigation, advanced search and filtering, secure checkout, shopping cart functionality, customer accounts, product galleries, offers, and seamless payment integration.",
  //     "From retail businesses, D2C brands, fashion and lifestyle stores, electronics retailers, wholesalers, manufacturers, and online marketplaces to growing startups and established enterprises, we develop customized e-commerce solutions tailored to specific business requirements and target audiences. Our SEO-optimized e-commerce websites are designed to improve product visibility, attract organic traffic, enhance user engagement, and generate quality leads and online sales.",
  //     "By combining attractive design, high performance, secure technology, conversion-focused UI/UX, and digital marketing best practices, we help e-commerce businesses create a competitive online presence, reach more customers, and achieve sustainable business growth."
  //   ]
  // },
  {
    id: 'import',
    label: 'Import & Exports',
    icon: Ship,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Import and Export companies, helping businesses establish a strong global digital presence, showcase their products and services, and connect with international buyers, suppliers, and business partners.",
      "Our expertise includes import export website design, international trading company website development, export business website design, trading company website development, B2B website development, corporate website design, WordPress development, responsive web design, UI/UX design, and SEO-friendly website development. We create modern, mobile-responsive, and professional websites that effectively present product categories, export destinations, sourcing capabilities, certifications, company information, logistics services, and international trade expertise.",
      "From importers, exporters, trading companies, merchant exporters, sourcing companies, wholesale suppliers, manufacturers, logistics businesses, and international trade consultants, we develop customized digital solutions aligned with their business goals and global target markets. Our SEO-optimized import and export websites are structured to improve search engine visibility, attract international enquiries, strengthen brand credibility, and generate valuable B2B opportunities.",
      "By combining professional design, clear product presentation, intuitive navigation, multilingual-ready structures, performance optimization, and conversion-focused features, we help Import & Export businesses build trust with global customers and achieve sustainable international growth."
    ]
  },
  {
    id: 'logistics',
    label: 'Logistic',
    icon: Truck,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We deliver professional logistics website design and website development solutions that help logistics and supply chain businesses establish a strong digital presence, showcase their services, and connect with customers and business partners.",
      "Our expertise includes logistics company website design, logistics website development, transportation website design, freight forwarding website development, supply chain management website design, courier and delivery website development, warehouse management website design, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. We create modern, mobile-responsive, and user-friendly websites that clearly present logistics services, transportation solutions, freight services, warehousing facilities, shipment management, distribution networks, tracking features, and service locations.",
      "From logistics companies, freight forwarders, shipping companies, transport operators, courier services, warehouse providers, supply chain companies, cargo businesses, and third-party logistics (3PL) providers, we develop customized digital solutions tailored to their business requirements and target markets. Our SEO-optimized logistics websites are designed to improve search engine visibility, attract relevant B2B enquiries, strengthen brand credibility, and generate new business opportunities.",
      "By combining professional design, intuitive navigation, fast performance, clear service presentation, and conversion-focused strategies, we help logistics businesses enhance their online presence, build customer trust, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'education',
    label: 'Education & Institute',
    icon: GraduationCap,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for educational institutions, helping schools, colleges, universities, training centers, coaching institutes, and educational organizations build a strong and engaging digital presence.",
      "Our expertise includes education website design, school website development, college website design, university website development, institute website design, e-learning website development, online course website design, WordPress development, responsive web design, UI/UX design, and SEO-friendly website development. We create modern, mobile-responsive, user-friendly websites that effectively present courses, academic programs, admissions information, faculty profiles, facilities, events, campus details, student resources, and educational services.",
      "From schools, colleges, universities, professional training institutes, coaching centers, vocational institutions, skill development centers, and online education providers, we develop customized digital solutions aligned with their educational goals and target audience. Our SEO-optimized education websites are structured to improve search engine visibility, attract prospective students, increase online enquiries, and strengthen institutional credibility.",
      "By combining engaging design, intuitive navigation, fast performance, clear content presentation, and conversion-focused features, we help educational institutions connect with students and parents, showcase their academic excellence, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'tour',
    label: 'Tour & Travels',
    icon: Plane,
    image: true,
    industryImg: '/assets/img/industry/tour.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Tour and Travel businesses, helping travel companies build a strong online presence, showcase destinations, promote tour packages, and attract more travelers.",
      "Our expertise includes travel website design, tourism website development, tour operator website design, travel agency website development, holiday package website design, hotel and travel booking website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, visually engaging, mobile-responsive websites that effectively present tour packages, destinations, itineraries, travel experiences, accommodation options, transportation services, travel guides, galleries, and booking enquiries. From travel agencies, tour operators, destination management companies, tourism companies, holiday planners, adventure travel businesses, pilgrimage tour operators, and corporate travel companies, we develop customized digital solutions tailored to their services and target audiences. ",
      "Our SEO-optimized travel websites are designed to improve search engine visibility, attract organic traffic, generate quality enquiries, and increase tour and travel bookings. By combining engaging visuals, intuitive navigation, fast performance, user-friendly interfaces, and conversion-focused features, we help Tour and Travel businesses inspire travelers, build brand credibility, reach new markets, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'cleaning',
    label: 'Cleaning & Staffing',
    icon: Sparkles,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We deliver professional website design and website development solutions for Cleaning and Staffing companies, helping service-based businesses establish a strong online presence, showcase their expertise, and connect with potential customers and clients. ",
      "Our expertise includes cleaning company website design, staffing agency website development, recruitment website design, facility management website development, housekeeping service website design, manpower supply website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, mobile-responsive, and user-friendly websites that clearly present cleaning services, staffing solutions, recruitment services, workforce management, facility management, housekeeping, commercial cleaning, residential cleaning, and other professional services. From commercial cleaning companies, residential cleaning services, facility management companies, staffing agencies, recruitment firms, manpower suppliers, housekeeping companies, and workforce management providers, we develop customized websites tailored to their business objectives and target markets.",
      "Our SEO-optimized cleaning and staffing websites are designed to improve search engine visibility, attract local and B2B enquiries, generate qualified leads, and strengthen brand credibility. By combining professional design, clear service presentation, intuitive navigation, fast performance, lead generation features, and conversion-focused strategies, we help Cleaning and Staffing businesses build customer trust, expand their reach, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    icon: Briefcase,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for consultancy businesses, helping consulting firms establish a credible online presence, showcase their expertise, and connect with potential clients across different markets. ",
      "Our expertise includes consultancy website design, consulting firm website development, business consulting website design, management consultancy website development, corporate website design, professional services website development, WordPress development, responsive web design, UI/UX design, and SEO-friendly website development. ",
      "We create modern, professional, mobile-responsive websites that effectively present consulting services, industry expertise, company profiles, case studies, client success stories, team profiles, insights, and business solutions. From business consultants, management consultants, financial consultants, HR consultants, IT consultants, legal and professional advisory firms, marketing consultants, engineering consultants, and corporate advisory companies, we develop customized digital solutions aligned with their brand identity and business objectives.",
      " Our SEO-optimized consultancy websites are structured to improve search engine visibility, attract relevant organic traffic, generate qualified enquiries, and establish authority within the target industry. By combining professional design, clear service communication, intuitive navigation, fast performance, engaging content, and conversion-focused features, we help consultancy businesses build trust, strengthen their online reputation, attract new clients, and achieve sustainable digital growth."
    ]
  },
  // {
  //   id: 'publisher',
  //   label: 'Publisher',
  //   icon: BookOpen,
  //   image: true,
  //   industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
  //   industryDesc: [
  //     "We provide professional website design and website development solutions for publishing businesses, helping publishers, media houses, editorial companies, and content-driven organizations establish a strong digital presence and reach wider audiences. ",
  //     "Our expertise includes publisher website design, publishing website development, online magazine website design, digital publishing website development, news portal development, e-book website design, magazine website development, WordPress publishing solutions, responsive web design, UI/UX design, and SEO-friendly website development. ",
  //     "We create modern, mobile-responsive, content-focused websites that make it easy to showcase books, magazines, articles, authors, publications, news, editorial content, and digital resources in an engaging and organized manner. From book publishers, magazine publishers, newspaper companies, academic publishers, educational publishers, digital publishing platforms, independent publishers, and media publishing houses, we develop customized websites tailored to their content strategy, brand identity, and target audience. ",
  //     "Our SEO-optimized publishing websites are designed to improve search engine visibility, increase organic traffic, enhance content discoverability, and build a loyal online readership. By combining intuitive navigation, engaging layouts, fast performance, structured content, social media integration, and conversion-focused features, we help publishing businesses strengthen their digital brand, expand their audience, showcase their publications effectively, and achieve sustainable online growth."
  //   ]
  // },
  {
    id: 'steel',
    label: 'Steel & TMT',
    icon: Anvil,
    image: true,
    industryImg: '/assets/img/industry/tmt.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Steel and TMT companies, helping manufacturers, suppliers, distributors, and industrial businesses establish a strong digital presence and showcase their products, manufacturing capabilities, and technical expertise. ",
      "Our expertise includes steel company website design, TMT bar website development, steel manufacturer website design, TMT steel website development, structural steel website design, iron and steel industry website development, industrial website design, B2B website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, professional, mobile-responsive websites that effectively present steel products, TMT bars, specifications, grades, sizes, manufacturing facilities, quality standards, certifications, projects, applications, and company capabilities. From steel manufacturers, TMT bar manufacturers, steel suppliers, iron and steel distributors, structural steel companies, rebar manufacturers, metal processing companies, and construction material suppliers, we develop customized digital solutions aligned with their business objectives and target markets. ",
      "Our SEO-optimized Steel and TMT websites are designed to improve search engine visibility, attract relevant B2B traffic, generate qualified enquiries, and strengthen brand credibility in the competitive steel and construction materials market. By combining professional design, clear product presentation, intuitive navigation, fast performance, technical content, and conversion-focused features, we help Steel and TMT businesses showcase their products effectively, connect with builders and contractors, expand their market reach, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'hospitality',
    label: 'Hospitality & Solar',
    icon: Sun,
    image: true,
    industryImg: '/assets/img/industry/solar.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Hospitality and Solar businesses, helping companies in these industries build a strong digital presence, showcase their services, and connect with customers through modern and engaging websites. ",
      "Our expertise includes hospitality website design, hotel website development, resort website design, restaurant website development, tourism website solutions, solar company website design, solar energy website development, renewable energy website design, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "For the hospitality sector, we create visually appealing websites for hotels, resorts, restaurants, serviced apartments, guest houses, event venues, and hospitality businesses, featuring rooms, facilities, dining options, services, galleries, locations, and booking enquiries. For the solar and renewable energy sector, we develop professional websites for solar energy companies, solar panel installers, renewable energy providers, EPC companies, solar consultants, and clean energy businesses, presenting solar solutions, products, projects, services, and technical expertise clearly. ",
      "Our SEO-optimized Hospitality and Solar websites are designed to improve search engine visibility, attract relevant organic traffic, generate quality enquiries, and strengthen brand credibility. By combining creative design, intuitive navigation, mobile responsiveness, fast performance, engaging content, and conversion-focused features, we help businesses across both industries build customer trust, reach wider markets, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'manufacturer',
    label: 'Product Manufacturer',
    icon: Factory,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for manufacturing companies, helping manufacturers establish a strong digital presence, showcase their products and capabilities, and connect with customers, distributors, and business partners. ",
      "Our expertise includes manufacturing company website design, industrial website development, B2B website design, factory website development, engineering website design, product catalogue website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, professional, mobile-responsive websites that effectively present manufacturing capabilities, product ranges, production facilities, machinery, technologies, certifications, quality standards, industries served, and completed projects. From industrial manufacturers, machinery manufacturers, equipment manufacturers, automotive companies, engineering manufacturers, component manufacturers, electrical manufacturers, textile manufacturers, chemical manufacturers, and OEM companies, we develop customized digital solutions tailored to their business objectives and target markets. ",
      "Our SEO-optimized manufacturing websites are structured to improve search engine visibility, attract relevant B2B traffic, generate qualified enquiries, and strengthen brand credibility in competitive industrial markets. By combining professional design, clear product presentation, intuitive navigation, high-performance technology, and conversion-focused features, we help manufacturing businesses showcase their capabilities, build trust with prospective clients, expand their market reach, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'resorts',
    label: 'Resorts & Restaurants',
    icon: UtensilsCrossed,
    image: true,
    industryImg: '/assets/img/industry/resort.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for resorts, restaurants, and hospitality businesses, helping brands create a strong online presence, showcase their unique experiences, and attract more guests and customers. ",
      "Our expertise includes resort website design, hotel and resort website development, restaurant website design, hospitality website development, food and beverage website design, online table reservation solutions, hotel booking website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create visually engaging, mobile-responsive websites that highlight resort accommodations, rooms and suites, amenities, restaurants, menus, dining experiences, event spaces, activities, galleries, special offers, locations, and booking or enquiry options. From luxury resorts, boutique hotels, beach resorts, family resorts, fine-dining restaurants, cafés, multi-cuisine restaurants, cloud kitchens, catering businesses, and hospitality groups, we develop customized digital solutions aligned with each brand’s identity and target audience. ",
      "Our SEO-optimized resort and restaurant websites are designed to improve local search visibility, attract organic traffic, generate reservations and enquiries, and increase customer engagement. By combining stunning visual presentation, intuitive navigation, fast performance, mobile-friendly design, compelling content, and conversion-focused features, we help Resorts & Restaurants build customer trust, showcase memorable experiences, reach new audiences, and achieve sustainable business growth."
    ]
  },
  {
    id: 'events',
    label: 'Event Management',
    icon: Trophy,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for Event and Sports Management companies, helping organizations build a strong digital presence, promote events, engage audiences, and showcase their sports and event management capabilities. ",
      "Our expertise includes event management website design, sports management website development, event company website design, sports event website development, tournament website design, conference and exhibition website development, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, engaging, mobile-responsive websites that effectively present upcoming events, sports tournaments, schedules, venues, registrations, ticketing information, sponsors, participants, galleries, achievements, and event highlights. From event management companies, sports management firms, tournament organizers, sports academies, event planners, conference organizers, exhibition companies, corporate event agencies, and entertainment event businesses, we develop customized digital solutions aligned with their brand identity and audience requirements. ",
      "Our SEO-optimized event and sports websites are structured to improve search engine visibility, attract relevant audiences, increase event registrations, generate enquiries, and strengthen online brand credibility. By combining engaging visual design, intuitive navigation, fast performance, registration and enquiry features, social media integration, and conversion-focused strategies, we help Event & Sports Management businesses promote their events effectively, connect with participants and audiences, and achieve sustainable digital growth."
    ]
  },
  {
    id: 'finance',
    label: 'Financial',
    icon: Landmark,
    image: true,
    industryImg: '/assets/img/industry/financial.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions for financial businesses, helping financial institutions and service providers establish a trustworthy digital presence, communicate their services clearly, and build stronger relationships with customers. ",
      "Our expertise includes financial services website design, finance company website development, banking website design, investment company website development, accounting website design, fintech website development, insurance website design, responsive web design, WordPress development, UI/UX design, and SEO-friendly website development. ",
      "We create modern, professional, mobile-responsive websites that effectively present financial products, investment solutions, accounting services, insurance plans, loan services, wealth management, financial consulting, and other specialized services. From finance companies, investment firms, accounting firms, insurance agencies, fintech companies, financial consultants, wealth management companies, loan providers, and corporate financial service providers, we develop customized digital solutions aligned with their brand identity, business objectives, and target audience. ",
      "Our SEO-optimized financial websites are structured to improve search engine visibility, attract relevant organic traffic, generate qualified enquiries, and strengthen online credibility. By combining clean professional design, intuitive navigation, secure and scalable technology, fast performance, informative content, and conversion-focused features, we help financial businesses build customer confidence, expand their digital reach, generate valuable leads, and achieve sustainable business growth."
    ]
  },
  {
    id: 'others',
    label: 'Other',
    icon: Layers,
    image: false,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: [
      "We provide professional website design and website development solutions across a wide range of industries, helping businesses establish a strong digital presence, showcase their products and services, and connect with their target audiences. ",
      "Our expertise includes custom website design, business website development, corporate website design, WordPress development, responsive web design, UI/UX design, e-commerce website development, SEO-friendly website development, and digital marketing solutions tailored to different business requirements. We work with startups, small businesses, SMEs, service providers, professional firms, local businesses, and established enterprises across diverse sectors, creating modern, mobile-responsive, user-friendly, and conversion-focused websites. Whether you operate in automotive, construction, retail, agriculture, legal services, beauty and wellness, transportation, security, entertainment, hospitality, technology, or other specialized industries, we develop customized digital solutions that reflect your brand identity and business objectives. ",
      "Our SEO-optimized websites are designed to improve search engine visibility, attract relevant organic traffic, generate quality enquiries, and strengthen online brand credibility. By combining creative website design, intuitive navigation, high performance, engaging content, scalable technology, and effective SEO strategies, we help businesses from diverse industries build a professional online presence, reach new customers, increase enquiries, and achieve sustainable digital growth."
    ]
  },
];

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  corporate: {
    bannerImg: '/assets/img/all-works/head-img/corporate.jpg',
    projects: [
      {
        id: 'Core',
        name: 'Core',
        logo: '/assets/img/all-works/new/core.png',
        location: 'Maharashtra, India.',
        url: 'https://core.co.in/',
        borderClass: 'brb'
      },
      {
        id: 'klitech',
        name: 'KL iTech',
        logo: '/assets/img/all-works/new/klitech.png',
        location: 'Chennai, India',
        url: 'https://klitech.in/',
        borderClass: 'brb'
      },
      {
        id: 'Sovereign',
        name: 'Sovereign',
        logo: '/assets/img/all-works/new/Sovereign.png',
        location: 'Bristol, UK',
        url: 'https://www.sovereignfacade.co.uk/',
        borderClass: 'brlb'
      },
      {
        id: 'typhoonelec',
        name: 'Typoon Electronic',
        logo: '/assets/img/all-works/new/typhoonelec.png',
        location: 'Chennai, India',
        url: 'https://typhoonelec.com/',
        borderClass: 'brlb'
      },
      {
        id: 'siddharth',
        name: 'Siddharth Electricals',
        logo: '/assets/img/all-works/new/siddharthelectricals.png',
        location: 'Chennai, India',
        url: 'https://siddharthelectricals.com/',
        borderClass: 'brlb'
      },
      {
        id: 'bioxgreen',
        name: 'Bioxgreen',
        logo: '/assets/img/all-works/bg-logo.png',
        location: 'Chennai, India',
        url: 'https://www.bioxgreen.com/',
        borderClass: 'brb'
      },
      // {
      //   id: 'ebara',
      //   name: 'Ebara Machinery',
      //   logo: '/assets/img/all-works/eb-logo.png',
      //   location: 'Chennai, India',
      //   url: 'https://www.ebara.com/global/emi/index.html',
      //   borderClass: 'brlb'
      // },
      // {
      //   id: 'bmceramics',
      //   name: 'BM Ceramics',
      //   logo: '/assets/img/all-works/bmc-logo.png',
      //   location: 'Chennai, India',
      //   url: 'https://www.bmceramics.in/',
      //   borderClass: 'brlb'
      // },
      // {
      //   id: 'myglobalstudies',
      //   name: 'My Global Studies',
      //   logo: '/assets/img/all-works/mgs-logo.png',
      //   location: 'Chennai, India',
      //   url: 'https://www.myglobalstudies.com/',
      //   borderClass: ''
      // },
      {
        id: 'GrayT',
        name: 'GrayT',
        logo: '/assets/img/all-works/new/grayt.png',
        location: 'New Delhi, India',
        url: 'https://grayt.in/',
        borderClass: 'brl'
      },
      {
        id: 'jpr',
        name: 'JPR Steels',
        logo: '/assets/img/all-works/new/jpr.png',
        location: 'Kancheepuram, India',
        url: 'https://www.jprsteels.com/',
        borderClass: 'brl'
      },
    ],
  },
  realestate: {
    bannerImg: '/assets/img/all-works/head-img/real-estate.jpg',
    projects: [
      {
        id: 'harithams',
        name: 'Harithams',
        logo: '/assets/img/all-works/2026/harithams.png',
        location: 'Chennai, India',
        url: 'https://www.harithams.com/',
        borderClass: 'brb'
      },
      {
        id: 'srivamanas',
        name: "Srivamana's Living",
        logo: '/assets/img/all-works/svl-logo.png',
        location: 'Chennai, India',
        url: 'https://www.srivamanasliving.com/',
        borderClass: 'brb'
      },
      {
        id: 'rayaanyarealty',
        name: 'Rayaanya Realty',
        logo: '/assets/img/all-works/new/rayaanaya.png',
        location: 'Chennai , India',
        url: 'https://www.rayaanyarealty.com/',
        borderClass: 'brlb'
      },
      {
        id: 'irishomez',
        name: 'Iris Homez',
        logo: '/assets/img/all-works/new/irishomez.png',
        location: 'Chennai, India',
        url: 'https://www.irishomez.com/',
        borderClass: 'brlb'
      },

      {
        id: 'vishvahomes',
        name: 'Vishva Homes',
        logo: '/assets/img/all-works/vh-logo.png',
        location: 'Chennai, India',
        url: 'http://vishvahomes.com/',
        borderClass: 'brlb'
      },
      {
        id: 'aldinfoundation',
        name: 'Aldin Foundation',
        logo: '/assets/img/all-works/aldin-logo.ico',
        location: 'Chennai, India',
        url: 'http://www.aldinfoundations.com/',
        borderClass: ''
      },
      {
        id: 'propnext',
        name: 'Prop Next',
        logo: '/assets/img/all-works/new/propnext.png',
        location: 'Chennai, India',
        url: 'https://www.propnextindia.in/',
        borderClass: ''
      },
    ],
  },
  marine: {
    bannerImg: '/assets/img/all-works/head-img/real-estate.jpg',
    projects: [
      {
        id: 'blueanchore',
        name: 'Blue Anchore',
        logo: '/assets/img/all-works/2026/blue-anchor.png',
        location: 'Muscat, Oman',
        url: 'https://blueanchor.llc/',
        borderClass: 'brb'
      },
      {
        id: 'safety',
        name: "Safety Merchant",
        logo: '/assets/img/all-works/2026/safety-merchant.png',
        location: 'Selangor, Malaysia',
        url: 'https://safety-merchant.com/',
        borderClass: 'brb'
      },
      {
        id: 'preservemetals',
        name: 'Preserve Metals',
        logo: '/assets/img/all-works/2026/peserve-Metals.png',
        location: 'Chennai , India',
        url: 'https://preservemetals.com/',
        borderClass: 'brlb'
      },
      {
        id: 'ams',
        name: 'AMS',
        logo: '/assets/img/all-works/2026/ams.png',
        location: 'Singapore',
        url: 'https://www.asianic.sg/',
        borderClass: 'brlb'
      },

      {
        id: 'altis',
        name: 'Altis Calserv PTE LTD',
        logo: '/assets/img/all-works/2026/altis.png',
        location: 'Singapore',
        url: 'https://altiscalserv.com/',
        borderClass: 'brlb'
      },
      {
        id: 'ddc',
        name: 'DDC Maritime',
        logo: '/assets/img/all-works/2026/dcc.png',
        location: 'Chennai, India',
        url: 'https://www.ddcmaritime.com/',
        borderClass: 'brlb'
      },
      {
        id: 'black',
        name: 'Black Strom Energy',
        logo: '/assets/img/all-works/2026/black-storm.png',
        location: 'Sharjah, UAE',
        url: 'http://www.blackstormenergy.com/',
        borderClass: 'brlb'
      },

      {
        id: 'newahipping',
        name: 'New Shipping',
        logo: '/assets/img/all-works/2026/new-shipping.png',
        location: 'Chennai, India',
        url: 'https://www.newshipping.co.jp/',
        borderClass: 'brlb'
      },
    ],
  },
  engineering: {
    bannerImg: '/assets/img/all-works/head-img/engineering.jpg',
    projects: [
      {
        id: 'qualtronmicrowave',
        name: 'Qualtron Microwave',
        logo: '/assets/img/all-works/2026/Quantrum-microwave.png',
        location: 'Chennai, India',
        url: 'https://www.qualtronmicrowave.com/',
        borderClass: 'brlb'
      },
      {
        id: 'Parkad',
        name: 'Parkad',
        logo: '/assets/img/all-works/new/Parkad.png',
        location: 'Singapore',
        url: 'https://www.parkad.com.sg/',
        borderClass: 'brb'
      },
      {
        id: 'hubelectrical',
        name: 'Hub Electrical',
        logo: '/assets/img/all-works/hub-logo.png',
        location: 'Singapore',
        url: 'http://hub-electrical.com/',
        borderClass: 'brlb'
      },
      {
        id: 'vgsengineers',
        name: 'VGS Engineers',
        logo: '/assets/img/all-works/vgs-logo.png',
        location: 'Chennai, India',
        url: 'https://vgsengineers.com/',
        borderClass: 'brb'
      },
      {
        id: 'ssmengineers',
        name: 'SSM Engineers',
        logo: '/assets/img/all-works/smm-logo.png',
        location: 'Chennai, India',
        url: 'http://srishivamaruthiengineering.com/',
        borderClass: 'brlb'
      },
      {
        id: 'srisaippworks',
        name: 'Sri Sai PP Works',
        logo: '/assets/img/all-works/saipp-logo.png',
        location: 'Chennai, India',
        url: 'https://www.srisaippworks.com/',
        borderClass: 'brlb'
      },
      {
        id: 'sriatchayaengineering',
        name: 'Sri Atchaya Engineering',
        logo: '/assets/img/all-works/acharya-log.png',
        location: 'Chennai, India.',
        url: 'http://sriatchayaengineering.com/',
        borderClass: 'brlb'
      },
      {
        id: 'intellectengineeringconsultants',
        name: 'Intellect Engineering Consultants',
        logo: '/assets/img/all-works/intellect-logo.png',
        location: 'Chennai, India.',
        url: 'http://intellectengg.com/',
        borderClass: 'brlb'
      },
      {
        id: 'kanimaindustries',
        name: 'Kanima Industries',
        logo: '/assets/img/all-works/kanimam-logo.png',
        location: 'Tirunelveli, India.',
        url: 'https://www.kanimamindustries.com/',
        borderClass: ''
      },
      {
        id: 'rootvistechnicalsolutions',
        name: 'Rootvis Technical Solutions',
        logo: '/assets/img/all-works/rootvis-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.rootvis.com/',
        borderClass: 'brl'
      },
      {
        id: 'hitco',
        name: 'Hitco',
        logo: '/assets/img/all-works/hitco-logo.png',
        location: 'Kuwait.',
        url: 'http://hitcokuwait.com/',
        borderClass: 'brl'
      }
    ]
  },
  media: {
    bannerImg: '/assets/img/all-works/head-img/media.jpg',
    projects: [
      {
        id: 'jdjerysmediapark',
        name: "Jd Jery's Media Park",
        logo: '/assets/img/all-works/jdjerry-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.jdjery.com/',
        borderClass: 'brb'
      },
      {
        id: 'greenchillibrands',
        name: 'Green Chilli Brands',
        logo: '/assets/img/all-works/2026/gcb.png',
        location: 'Chennai, India',
        url: 'https://www.greenchillibrands.com/',
        borderClass: 'brlb'
      },
      {
        id: 'sparkyanimation',
        name: 'Sparky Animation',
        logo: '/assets/img/all-works/sparky-logo.png',
        location: 'Singapore.',
        url: 'https://sparkyanim.com/',
        borderClass: 'brlb'
      },
      {
        id: 'tuskerglobal',
        name: 'Tusker Global',
        logo: '/assets/img/all-works/tusker-logo.png',
        location: 'Chennai, India.',
        url: 'https://tuskerglobal.com/',
        borderClass: ''
      }
    ]
  },
  health: {
    bannerImg: '/assets/img/all-works/head-img/healthcare.jpg',
    projects: [
      {
        id: 'radolabs',
        name: 'Radolabs',
        logo: '/assets/img/all-works/2026/radolabs.png',
        location: 'Chennai, India.',
        url: 'https://www.radolabs.in/',
        borderClass: 'brb'
      },
      {
        id: 'srird',
        name: 'Sri RD',
        logo: '/assets/img/all-works/2026/srd.png',
        location: 'Kanchipuram, India.',
        url: 'https://www.srirdenterprises.in/',
        borderClass: 'brlb'
      },
      {
        id: 'murandmur',
        name: 'Mur&Mur',
        logo: '/assets/img/all-works/new/murandmur.png',
        location: 'Chennai, India.',
        url: 'http://www.murandmur.in/',
        borderClass: 'brlb'
      },
      {
        id: 'diagnointelligentsystem',
        name: 'Diagno Intelligent System',
        logo: '/assets/img/all-works/diagno-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.diagnointelligent.com/',
        borderClass: ''
      },
      {
        id: 'cholashealthcare',
        name: 'Cholas Health Care',
        logo: '/assets/img/all-works/cholas-logo.png',
        location: 'Hyderabad, India',
        url: 'http://cholashealthcare.com/',
        borderClass: 'brl'
      },
      // {
      //   id: 'aezensolutions',
      //   name: 'Aezen Solutions',
      //   logo: '/assets/img/all-works/aezen-logo.png',
      //   location: 'Kanchipuram, India',
      //   url: 'https://aezensolutions.com/',
      //   borderClass: 'brl'
      // }
    ]
  },
  software: {
    bannerImg: '/assets/img/all-works/head-img/software.jpg',
    projects: [
      {
        id: 'profice',
        name: 'Profice',
        logo: '/assets/img/all-works/2026/Profice.png',
        location: 'Chennai, India.',
        url: 'https://profice.co.uk/',
        borderClass: 'brb'
      },
      {
        id: 'aiyanaar',
        name: 'Aiyanaar',
        logo: '/assets/img/all-works/2026/Aiyanaar.png',
        location: 'Austin, USA.',
        url: 'https://www.aiyanaar.com/',
        borderClass: 'brb'
      },
      {
        id: 'BudsCube',
        name: 'BudsCube',
        logo: '/assets/img/all-works/2026/budscube.png',
        location: 'Chenni, India.',
        url: 'https://www.budscube.com/',
        borderClass: 'brb'
      },
      {
        id: 'jdscarercm',
        name: 'JDS Care RCM',
        logo: '/assets/img/all-works/2026/jds.png',
        location: 'Cincinnati, USA.',
        url: 'https://jdscarercmtechsolutions.com/',
        borderClass: 'brb'
      },
      {
        id: 'sparktechnologies',
        name: 'Spark Technologies',
        logo: '/assets/img/all-works/new/spark10.png',
        location: 'Hartford, USA.',
        url: 'https://spark10.ai/',
        borderClass: 'brlb'
      },
      {
        id: 'grayeyeit',
        name: 'GrayeyeIT',
        logo: '/assets/img/all-works/grayit-logo.png',
        location: 'Chennai, India.',
        url: 'https://grayeyeit.com/',
        borderClass: 'brlb'
      },
      {
        id: 'inctune',
        name: 'Inctune',
        logo: '/assets/img/all-works/new/inctune.png',
        location: 'United States.',
        url: 'https://inctune.com/',
        borderClass: 'brb'
      },
      {
        id: 'ihottechnologies',
        name: 'iHot Technologies',
        logo: '/assets/img/all-works/new/Ihot.png',
        location: 'United States.',
        url: 'https://www.ihottech.com/',
        borderClass: 'brlb'
      },
      {
        id: 'infinityrobotics',
        name: 'Infinity Robotics',
        logo: '/assets/img/all-works/new/infinityrobotics.png',
        location: 'United States',
        url: 'https://www.infinityrobotics.ai/',
        borderClass: 'brlb'
      },
      {
        id: 'intrahop',
        name: 'Intrahop',
        logo: '/assets/img/all-works/new/intrahoptechnologies.png',
        location: 'United States',
        url: 'https://www.intrahoptechnologies.com/',
        borderClass: 'brb'
      },
      {
        id: 'solsticesolutions',
        name: 'Solstice Solutions',
        logo: '/assets/img/all-works/solstice-logo.png',
        location: 'United States',
        url: 'https://solstice6.com/',
        borderClass: 'brlb'
      },
      {
        id: 'sigillieum',
        name: 'Sigillieum',
        logo: '/assets/img/all-works/singellium-logo.png',
        location: 'Chennai, India',
        url: 'https://sigillieum.com/',
        borderClass: 'brlb'
      },
      // {
      //   id: 'quantomstridesllc',
      //   name: 'Quantom Strides LLC',
      //   logo: '/assets/img/all-works/quantom-logo.png',
      //   location: 'United States.',
      //   url: 'https://www.quantumstrides.com/',
      //   borderClass: ''
      // },
      // {
      //   id: 'qeads',
      //   name: 'Qeads',
      //   logo: '/assets/img/all-works/qeads-logo.png',
      //   location: 'Chennai, India.',
      //   url: 'https://www.qeads.in/',
      //   borderClass: 'brl'
      // },
      // {
      //   id: 'hamsa',
      //   name: 'Hamsa',
      //   logo: '/assets/img/all-works/hamsa-logo.png',
      //   location: 'Nottingham, England.',
      //   url: 'https://hamsaitsolution.co.uk/',
      //   borderClass: 'brl'
      // }
    ]
  },
  interior: {
    bannerImg: '/assets/img/all-works/head-img/architect.jpg',
    projects: [
      {
        id: 'inhous',
        name: 'Inhous',
        logo: '/assets/img/all-works/2026/Inhous.png',
        location: 'Chennai, India.',
        url: 'https://www.inhous.in/',
        borderClass: 'brb'
      },
      {
        id: 'utkalbuildmart',
        name: 'Utkal Buildmart',
        logo: '/assets/img/all-works/new/utkalbuildmart.png',
        location: 'Chennai, India.',
        url: 'https://www.utkalbuildmart.com/',
        borderClass: 'brlb'
      },
      {
        id: 'nakshaxstore',
        name: 'NakshaxStore',
        logo: '/assets/img/all-works/new/nakshax.png',
        location: 'Jharkhand, India',
        url: 'https://nakshax.com/',
        borderClass: 'brlb'
      },
      {
        id: 'yshomes',
        name: 'YS Homes',
        logo: '/assets/img/all-works/new/ys-Homes.png',
        location: 'Chennai, India.',
        url: 'https://www.yshomes.in/',
        borderClass: ''
      },
      // {
      //   id: 'ysventures',
      //   name: 'YS Ventures',
      //   logo: '/assets/img/all-works/ys-ventures-logo.png',
      //   location: 'Chennai, India.',
      //   url: 'https://www.ysventures.in/',
      //   borderClass: ''
      // },
      {
        id: 'violetinterior',
        name: 'Violet Interior',
        logo: '/assets/img/all-works/violet-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.violetinterior.com/',
        borderClass: 'brl'
      },
      {
        id: 'bluecubearchitects',
        name: 'Bluecube Architects',
        logo: '/assets/img/all-works/bluecube-logo.png',
        location: 'Chennai, India',
        url: 'https://bluecube.co.in/',
        borderClass: 'brl'
      },
      {
        id: 'pkhomes',
        name: 'PK Homes',
        logo: '/assets/img/all-works/new/pk-homes.png',
        location: 'Chennai, India',
        url: 'https://www.pkhomes.in/',
        borderClass: 'brl'
      },
    ]
  },
  // ecommerce: {
  //   bannerImg: '/assets/img/all-works/head-img/ecommerce.jpg',
  //   projects: [
  //     {
  //       id: 'bhcart',
  //       name: 'BH Cart',
  //       logo: '/assets/img/all-works/new/bhcart.png',
  //       location: 'Kingdom Of Bahrain',
  //       url: 'https://www.bhcart.com/',
  //       borderClass: 'brb'
  //     },
  //     {
  //       id: 'yourclosetin',
  //       name: 'Yourcloset.in',
  //       logo: '/assets/img/all-works/yourcloset-logo.png',
  //       location: 'Chennai, India.',
  //       url: 'https://yourcloset.in/',
  //       borderClass: 'brlb'
  //     },
  //     {
  //       id: 'gokulsantol',
  //       name: 'Gokul Santol',
  //       logo: '/assets/img/all-works/new/gokulsantol.png',
  //       location: 'Chennai, India.',
  //       url: 'https://gokulsantol.com/',
  //       borderClass: 'brlb'
  //     },
  //     {
  //       id: 'sriyascollection',
  //       name: 'Sriyas Collection',
  //       logo: '/assets/img/all-works/new/sriyascollection.png',
  //       location: 'Chennai, India.',
  //       url: 'https://sriyascollection.com/',
  //       borderClass: ''
  //     }
  //   ]
  // },
  import: {
    bannerImg: '/assets/img/all-works/head-img/import.jpg',
    projects: [
      {
        id: 'tmkinternational',
        name: 'TMK International',
        logo: '/assets/img/all-works/2026/tmk.png',
        location: 'Chennai, India',
        url: 'https://www.tmkinternational.org/',
        borderClass: 'brb'
      },
      {
        id: 'brinthatraders',
        name: 'Brintha Traders',
        logo: '/assets/img/all-works/2026/brintha-traders.png',
        location: 'Haryana, India',
        url: 'https://www.brinthatraders.com/',
        borderClass: 'brb'
      },
      {
        id: 'oortecloud',
        name: 'Oorte Cloud',
        logo: '/assets/img/all-works/2026/Oort-e-cloud.png',
        location: 'Bengaluru',
        url: 'https://www.oortecloud.com/',
        borderClass: 'brb'
      },
      // {
      //   id: 'ams',
      //   name: 'AMS',
      //   logo: '/assets/img/all-works/new/asianic.png',
      //   location: 'Singapore',
      //   url: 'http://asianic.sg/',
      //   borderClass: 'brlb'
      // },
      {
        id: 'flavoyageexport',
        name: 'Flavoyage Export',
        logo: '/assets/img/all-works/new/flavoyageexport.png',
        location: 'Tuticorin, India.',
        url: 'https://www.flavoyageexport.in/',
        borderClass: 'brlb'
      },
      {
        id: 'astrobridge',
        name: 'Astro Bridge',
        logo: '/assets/img/all-works/astrobridge-logo.png',
        location: 'Chennai, India.',
        url: 'https://astrobridgeinternational.com/',
        borderClass: 'brb'
      },
      {
        id: 'zaikexports',
        name: 'Zaik Exports',
        logo: '/assets/img/all-works/zaik-logo.png',
        location: 'Thuthipet, Ambur.',
        url: 'https://www.zaikexports.com/',
        borderClass: 'brlb'
      },

    ]
  },
  logistics: {
    bannerImg: '/assets/img/all-works/head-img/logistics.jpg',
    projects: [
      {
        id: 'freightdigital',
        name: 'Freight Digital',
        logo: '/assets/img/all-works/new/freight-digital.png',
        location: 'Sharjah, UAE',
        url: 'https://freightdigitalfzc.com/',
        borderClass: 'brb'
      },
      {
        id: 'conworldlines',
        name: 'Conworld Lines',
        logo: '/assets/img/all-works/new/conworldlines.png',
        location: 'Chennai, India.',
        url: 'https://conworldlines.com/',
        borderClass: 'brlb'
      },
      {
        id: 'aerovonexpress',
        name: 'Aerovon Express',
        logo: '/assets/img/all-works/aerovon-logo.png',
        location: 'Chennai, India.',
        url: 'https://aerovonexpress.com/',
        borderClass: 'brl'
      },
      {
        id: 'lotusil',
        name: 'Lotusil',
        logo: '/assets/img/all-works/lotusil-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.lotusil.com/',
        borderClass: ''
      },
      {
        id: 'elshaddai',
        name: 'El Shaddai',
        logo: '/assets/img/all-works/elshaddai-logo.png',
        location: 'Chennai, India.',
        url: 'http://elshaddaiforwarders.com/',
        borderClass: 'brlb'
      },
      {
        id: 'raycontainer',
        name: 'Ray Container',
        logo: '/assets/img/all-works/new/ray.png',
        location: 'Bangalore, India.',
        url: 'https://www.rcsblr.com/',
        borderClass: 'brlb'
      },




    ]
  },
  education: {
    bannerImg: '/assets/img/all-works/head-img/education.jpg',
    projects: [
      {
        id: 'vedaalayam',
        name: 'Vedaalayam',
        logo: '/assets/img/all-works/2026/Vedaalayam.png',
        location: 'Chennai, India',
        url: 'https://www.vedaalayam.com/',
        borderClass: 'brb'
      },
      {
        id: 'truimphhub',
        name: 'Truimph Hub',
        logo: '/assets/img/all-works/new/triumphhub.png',
        location: 'Coimbatore, India.',
        url: 'https://www.triumphhub.com/',
        borderClass: 'brlb'
      },
      {
        id: 'tuteeconnect',
        name: 'Tuteeconnect',
        logo: '/assets/img/all-works/tutee-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.tuteeconnect.com/',
        borderClass: 'brlb'
      },
      {
        id: 'amalametric',
        name: 'Amala Metric',
        logo: '/assets/img/all-works/new/amalimatric.png',
        location: 'Madurai, India.',
        url: 'https://amalimatric.com/',
        borderClass: 'brlb'
      },
      {
        id: 'margvidhyalaya',
        name: 'Marg Vidhyalaya',
        logo: '/assets/img/all-works/marg-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.margvidhyalaya.com/',
        borderClass: 'brlb'
      },
      {
        id: 'ppti',
        name: 'PPTI',
        logo: '/assets/img/all-works/new/ppti.png',
        location: 'Chennai, India.',
        url: 'https://www.ppti.in/',
        borderClass: 'brlb'
      },
      {
        id: 'cgkgmogappair',
        name: 'CGKG Mogappair',
        logo: '/assets/img/all-works/new/CGKG.png',
        location: 'Chennai, India.',
        url: 'https://cgkgmogappair.co.in/',
        borderClass: 'brlb'
      },
      {
        id: 'cgkgmeenambakkam',
        name: 'CGKG Meenambakkam',
        logo: '/assets/img/all-works/new/CGKG.png',
        location: 'Chennai, India',
        url: 'https://cgkgmeenambakkam.co.in/',
        borderClass: 'brb'
      },


      // {
      //   id: 'maverick',
      //   name: 'Maverick',
      //   logo: '/assets/img/all-works/maverick-logo.png',
      //   location: 'United Arab Emirates',
      //   url: 'https://mbalondon.org.uk/',
      //   borderClass: 'brb'
      // },


      {
        id: 'harshitaacademy',
        name: 'Harshita Academy',
        logo: '/assets/img/all-works/harshita-logo.png',
        location: 'Chennai, India',
        url: 'http://harshitaacademy.com/',
        borderClass: 'brb'
      },
      {
        id: 'childincorp',
        name: 'Childincorp',
        logo: '/assets/img/all-works/child-logo.png',
        location: 'Chennai, India.',
        url: 'http://childincorp.in/',
        borderClass: 'brl'
      },
      {
        id: 'hindionlineclass',
        name: 'Hindi Online Class',
        logo: '/assets/img/all-works/hindi-logo.png',
        location: 'Chennai, India.',
        url: 'https://hindi-online-class.com/',
        borderClass: 'brl'
      },
      // {
      //   id: 'halimanagementconsultancies',
      //   name: 'Hali Management Consultancies',
      //   logo: '/assets/img/all-works/hali-logo.png',
      //   location: 'Chennai, India.',
      //   url: 'https://www.haliconsult.com/',
      //   borderClass: ''
      // }
    ]
  },
  tour: {
    bannerImg: '/assets/img/industry/tour.jpg',
    projects: [
      {
        id: 'natruro Graphers',
        name: 'Naturograhers',
        logo: '/assets/img/all-works/2026/naturo.png',
        location: 'Chennai, India',
        url: 'https://naturographers.com/',
        borderClass: ''
      },
      {
        id: 'staride',
        name: 'Staride',
        logo: '/assets/img/all-works/starride-logo.png',
        location: 'San Diego.',
        url: 'http://staride.com',
        borderClass: ''
      },
      {
        id: 'gsrt',
        name: 'GSRT Adventures',
        logo: '/assets/img/all-works/2026/gsrt.png',
        location: 'Malaysia',
        url: 'https://gsrtadventures.com/',
        borderClass: ''
      },
      {
        id: 'expressautoregistration',
        name: 'Express Auto Registration',
        logo: '/assets/img/all-works/express-logo.png',
        location: 'San Diego.',
        url: 'http://xpressautoregistration.com/',
        borderClass: 'brl'
      }
    ]
  },
  cleaning: {
    bannerImg: '/assets/img/all-works/head-img/cleaning.jpg',
    projects: [
      {
        id: 'bridgegreenupcycle',
        name: 'Bridge Green Upcycle',
        logo: '/assets/img/all-works/new/bridgegreenupcycle.png',
        location: 'United States.',
        url: 'https://bridgegreenupcycle.com/',
        borderClass: 'brb'
      },
      {
        id: 'immertiza',
        name: 'Immertiza',
        logo: '/assets/img/all-works/new/immertiza.png',
        location: 'Chennai, India.',
        url: 'https://immertiza.com/',
        borderClass: 'brlb'
      },
      {
        id: 'shammahalnissi',
        name: 'Shammah Al Nissi',
        logo: '/assets/img/all-works/new/shammahalnissi.png',
        location: 'UAE.',
        url: 'https://www.shammahalnissi.com/',
        borderClass: 'brlb'
      },

      {
        id: 'chennaicleaners',
        name: 'Chennai Cleaners',
        logo: '/assets/img/all-works/chennai-cleaners.png',
        location: 'Chennai, India.',
        url: 'https://www.chennaicleaners.com/',
        borderClass: ''
      },
      {
        id: 'amendrycleaners',
        name: 'Amendrycleaners',
        logo: '/assets/img/all-works/amen-logo.png',
        location: 'London.',
        url: 'https://amendrycleaners.co.uk/',
        borderClass: 'brl'
      },
      {
        id: 'quickbrightcleaning',
        name: 'Quick & Bright Cleaning',
        logo: '/assets/img/all-works/qnb-logo.png',
        location: 'Canada.',
        url: 'https://quickbrightcleaning.com/',
        borderClass: 'brl'
      }
    ]
  },
  consultancy: {
    bannerImg: '/assets/img/all-works/head-img/consultancy.jpg',
    projects: [
      {
        id: 'phanipavan',
        name: 'Phani Pavan',
        logo: '/assets/img/all-works/2026/Phani-Pavan.png',
        location: 'Chennai, India.',
        url: 'https://phanipavan.com/',
        borderClass: 'brb'
      },
      {
        id: 'terrapulse',
        name: 'Terra Pulse',
        logo: '/assets/img/all-works/2026/teraplus.png',
        location: 'Saudi, UAE.',
        url: 'https://www.terrapulse.com.sa/',
        borderClass: 'brb'
      },
      {
        id: 'rithusa',
        name: 'Rithusa',
        logo: '/assets/img/all-works/new/rithusa.png',
        location: 'Chennai, India.',
        url: 'https://www.rithusa.com/',
        borderClass: 'brlb'
      },
      {
        id: 'leadteqz',
        name: 'Leadteqz',
        logo: '/assets/img/all-works/leadteq-logo.png',
        location: 'Chennai, India.',
        url: 'https://leadteqz.com/',
        borderClass: 'brlb'
      },
      {
        id: 'hunet',
        name: 'HuNet',
        logo: '/assets/img/all-works/huenet-logo.png',
        location: 'Chennai, India.',
        url: 'http://hunet.in/',
        borderClass: 'brb'
      },
      {
        id: 'alkyonaconsultancy',
        name: 'Alkyona Consultancy',
        logo: '/assets/img/all-works/alkiyonba-logo.png',
        location: 'Chennai, India',
        url: 'https://alkyonaconsultancy.com/',
        borderClass: 'brlb'
      },
      {
        id: 'yomaenterprices',
        name: 'Yoma Enterprices',
        logo: '/assets/img/all-works/yoma-logo.png',
        location: 'Washington.',
        url: 'https://yomaenterprise.com/',
        borderClass: 'brlb'
      },
      {
        id: 'struentsemiconductors',
        name: 'Struent Semiconductors',
        logo: '/assets/img/all-works/studentsemi-logo.png',
        location: 'Chennai, India.',
        url: 'https://struentsemi.com/',
        borderClass: ''
      },
      {
        id: 'atmarth',
        name: 'Atmarth',
        logo: '/assets/img/all-works/atmarth-logo.png',
        location: 'Trichy, India.',
        url: 'http://atmarth.com/',
        borderClass: 'brl'
      }
    ]
  },
  steel: {
    bannerImg: '/assets/img/all-works/head-img/consultancy.jpg',
    projects: [
      {
        id: 'jpr',
        name: 'JPR TMT Bars',
        logo: '/assets/img/all-works/new/jpr.png',
        location: 'Kancheepuram, India.',
        url: 'https://www.jprsteels.com/',
        borderClass: 'brb'
      },
      {
        id: 'terrapulse',
        name: 'Terra Pulse',
        logo: '/assets/img/all-works/2026/teraplus.png',
        location: 'Saudi, UAE.',
        url: 'https://www.terrapulse.com.sa/',
        borderClass: 'brb'
      },
      {
        id: 'ralago',
        name: 'Ralago Engineering',
        logo: '/assets/img/all-works/new/ralago.png',
        location: 'Chennai, India.',
        url: 'https://www.ralago.in/',
        borderClass: 'brlb'
      },

    ]
  },
  // publisher: {
  //   bannerImg: '/assets/img/all-works/head-img/publisher.jpg',
  //   projects: [
  //     {
  //       id: 'chennaipublishing',
  //       name: 'Chennai Publishing',
  //       logo: '/assets/img/all-works/cp-logo.png',
  //       location: 'Chennai, India.',
  //       url: 'https://chennaipublishing.com/',
  //       borderClass: ''
  //     }
  //   ]
  // },
  hospitality: {
    bannerImg: '/assets/img/all-works/head-img/Hospitality.jpg',
    projects: [
      {
        id: 'guhanpowers',
        name: 'Guhan Powers',
        logo: '/assets/img/all-works/new/guhanpowers.png',
        location: 'Chennai, India.',
        url: 'https://guhanpowers.com/',
        borderClass: ''
      },
      {
        id: 'namosolar',
        name: 'Namo Solar',
        logo: '/assets/img/all-works/namo-logo.png',
        location: 'Chennai, India.',
        url: 'https://namosolar.com/',
        borderClass: 'brl'
      },
      {
        id: 'indianformer',
        name: 'Indian Former',
        logo: '/assets/img/all-works/indian-former.png',
        location: 'Chennai, India.',
        url: 'https://www.indian-farmer.com/',
        borderClass: 'brl'
      },
      {
        id: 'danforth',
        name: 'Danforth Disability',
        logo: '/assets/img/all-works/2026/dan.png',
        location: 'Chennai, India.',
        url: 'https://danforthdisabilityservices.com/',
        borderClass: 'brl'
      }
    ]
  },
  manufacturer: {
    bannerImg: '/assets/img/all-works/head-img/manufacturer.jpg',
    projects: [
      {
        id: 'kormesic',
        name: 'KORMESIC',
        logo: '/assets/img/all-works/2026/ldf.png',
        location: 'Chennai',
        url: 'https://www.ldfkormesic.com/',
        borderClass: 'brb'
      },
      {
        id: 'fusioninternational',
        name: 'Fusion International',
        logo: '/assets/img/all-works/2026/fusionintl.png',
        location: 'Chennai',
        url: 'https://www.fusionintl.net/',
        borderClass: 'brlb'
      },
      {
        id: 'anandasuvai',
        name: 'Anandasuvai',
        logo: '/assets/img/all-works/2026/anandasuvai.png',
        location: 'Chennai',
        url: 'https://www.anandasuvai.com/',
        borderClass: 'brlb'
      },
      {
        id: 'winner',
        name: 'Winner Leather Creation',
        logo: '/assets/img/all-works/2026/winner.png',
        location: 'Chennai, India.',
        url: 'https://www.winnerleather.com/',
        borderClass: 'brb'
      },
      {
        id: 'jayarajtimber',
        name: 'Jayaraj Timber',
        logo: '/assets/img/all-works/new/jayarajtimber.png',
        location: 'Chennai, India.',
        url: 'https://jayarajtimber.com/',
        borderClass: 'brlb'
      },
      {
        id: 'massscomposites',
        name: 'Masss Composites',
        logo: '/assets/img/all-works/zhour-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.massscomposites.com/',
        borderClass: 'brlb'
      },
      {
        id: 'udayamgroups',
        name: 'Udayam Groups',
        logo: '/assets/img/all-works/udhayam-logo.png',
        location: 'Chennai, India.',
        url: 'http://www.udayamgroups.com/',
        borderClass: 'brb'
      },

      {
        id: 'ceconozonators',
        name: 'Cecon Ozonators',
        logo: '/assets/img/all-works/cecon-logo.png',
        location: 'Chennai, India.',
        url: 'http://ceconozonators.com/',
        borderClass: 'brlb'
      },
      {
        id: 'terrabionaturals',
        name: 'Terra Bio Naturals',
        logo: '/assets/img/all-works/terrabio-logo.png',
        location: 'Chennai, India',
        url: 'https://terrabionaturals.com/',
        borderClass: ''
      },
      {
        id: 'arivion',
        name: 'Arivion',
        logo: '/assets/img/all-works/2026/arivom.png',
        location: ' Tiruvannamalai, India',
        url: 'https://arivion.in/',
        borderClass: ''
      }
    ]
  },
  resorts: {
    bannerImg: '/assets/img/resort.jpg',
    projects: [
      {
        id: 'segretodc',
        name: 'Segreto DC',
        logo: '/assets/img/all-works/new/segretodc.png',
        location: 'Washington.',
        url: 'https://www.segretodc.com/',
        borderClass: ''
      },
      {
        id: 'bismillahbutcherydeli',
        name: 'Bismillah Butchery & Deli',
        logo: '/assets/img/all-works/bismillah-logo.png',
        location: 'Canada.',
        url: 'https://bismillahbutcherydeli.com/',
        borderClass: 'brl'
      }
    ]
  },
  events: {
    bannerImg: '/assets/img/all-works/head-img/events-and-sport.jpg',
    projects: [
      {
        id: 'johoreventrental.com.my',
        name: 'johoreventrental.com.my',
        logo: 'assets/img/all-works/2026/jer.png',
        location: 'Toronto',
        url: 'https://johoreventrental.com.my',
        borderClass: 'brb'
      },
      {
        id: 'gtaballoons',
        name: 'GTA Balloons',
        logo: '/assets/img/all-works/2026/gta-balloons.png',
        location: 'Toronto',
        url: 'https://gtaballoonsdesigners.com/',
        borderClass: 'brb'
      },
      {
        id: 'kleventrental',
        name: 'KL Event Rental',
        logo: '/assets/img/all-works/new/navin.png',
        location: 'Kuala Lumpur.',
        url: 'https://www.kleventrental.com.my/',
        borderClass: 'brlb'
      },
      {
        id: 'ecube',
        name: 'ECUBE',
        logo: 'assets/img/all-works/2026/e-cube.png',
        location: 'Chenai, India',
        url: 'https://www.ecubelive.com/',
        borderClass: 'brlb'
      },

      {
        id: 'sgeventrental',
        name: 'SG Event Rental',
        logo: '/assets/img/all-works/new/sgeventrental.png',
        location: 'Singapore.',
        url: 'https://www.sgeventrental.com.sg/',
        borderClass: 'brl'
      }
    ]
  },
  finance: {
    bannerImg: '/assets/img/all-works/head-img/financial.jpg',
    projects: [
      {
        id: 'vmrcapital',
        name: 'VMR Capital',
        logo: '/assets/img/all-works/new/vmrcapital.png',
        location: 'Trichy, India.',
        url: 'https://www.vmrcapital.in/',
        borderClass: ''
      },
      {
        id: 'finsolutions',
        name: 'Fin Solutions',
        logo: '/assets/img/all-works/new/finsolutions.png',
        location: 'Chennai, India.',
        url: 'https://www.finsolutions.live/',
        borderClass: 'brl'
      },
      {
        id: 'uff',
        name: 'UFF',
        logo: '/assets/img/all-works/2026/uff.png',
        location: 'Chennai, India.',
        url: 'https://www.unicfin.com/',
        borderClass: 'brl'
      },
      {
        id: 'riverbrige',
        name: 'River Bridge',
        logo: '/assets/img/all-works/2026/river.png',
        location: 'Chennai, India.',
        url: 'https://www.riverbridgecapital.in/',
        borderClass: 'brl'
      }
    ]
  },
  others: {
    bannerImg: '/assets/img/all-works/head-img/other.jpg',
    projects: [
      {
        id: 'chenddur',
        name: 'Sri Chenddur Infras',
        logo: '/assets/img/all-works/2026/Sri-Chenddur.png',
        location: 'Chennai, India',
        url: 'https://www.srichenddurinfras.com/',
        borderClass: 'brb'
      },
      {
        id: 'spk',
        name: 'SPK Enterpries',
        logo: 'assets/img/all-works/2026/spk.png',
        location: 'Thiruvallur, India',
        url: 'http://spkenterprisesgroup.com/',
        borderClass: 'brb'
      },
      {
        id: 'karunalaya',
        name: 'Karunalaya',
        logo: '/assets/img/all-works/karunalaya-logo.png',
        location: 'Chennai, India.',
        url: 'https://karunalaya.ngo/',
        borderClass: 'brlb'
      },
      {
        id: 'alphonsaaqua',
        name: 'Alphonsa Aqua',
        logo: '/assets/img/all-works/alphonsa-logo.png',
        location: 'Chennai, India.',
        url: 'https://alphonsaaqua.com/',
        borderClass: 'brl'
      },
      {
        id: 'alfafa',
        name: 'Al Safa International',
        logo: 'assets/img/all-works/2026/al-safa.png',
        location: 'Chennai',
        url: 'https://alsafainternational.com',
        borderClass: 'brb'
      },

      {
        id: 'trumed',
        name: 'Trumed In Solutions',
        logo: 'assets/img/all-works/2026/trumed.png',
        location: 'Chennai',
        url: 'http://trumedsolutions.com/',
        borderClass: 'brb'
      },
    ]
  }
};