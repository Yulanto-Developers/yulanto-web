import {
  Building2, Laptop, Building, Paintbrush, Wrench, HeartPulse, Tv,
  ShoppingCart, Ship, Truck, GraduationCap, Plane, Sparkles, Briefcase,
  BookOpen, Sun, Factory, UtensilsCrossed, Trophy, Landmark, Layers, LucideIcon
} from 'lucide-react';

export interface IndustryCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  industryImg?: string;
  industryDesc?: string;
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
    industryImg: '/assets/img/all-works/head-img/corporate.jpg',
    industryDesc: 'Empowering corporate brands with high-performance digital platforms tailored for dynamic enterprise growth.'
  },
  {
    id: 'software',
    label: 'Software & IT',
    icon: Laptop,
    industryImg: '/assets/img/all-works/head-img/software.jpg',
    industryDesc: 'Cutting-edge software and IT solutions designed to scale operations and optimize technical infrastructure.'
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    icon: Building,
    industryImg: '/assets/img/all-works/head-img/realestate.jpg',
    industryDesc: 'Showcasing premium residential and commercial spaces with engaging architectural visuals and seamless lead conversion.'
  },
  {
    id: 'interior',
    label: 'Interior & Architect',
    icon: Paintbrush,
    industryImg: '/assets/img/all-works/head-img/interior.jpg',
    industryDesc: 'Visually stunning design portfolios tailored for architects, interior designers, and creative studios.'
  },
  {
    id: 'engineering',
    label: 'Engineering Company',
    icon: Wrench,
    industryImg: '/assets/img/all-works/head-img/engineering.jpg',
    industryDesc: 'Robust and trustworthy web presence engineered specifically for industrial and technical service providers.'
  },
  {
    id: 'health',
    label: 'Health Care',
    icon: HeartPulse,
    industryImg: '/assets/img/all-works/head-img/health.jpg',
    industryDesc: 'Patient-centric medical and healthcare platforms built with safety, clarity, and trust in mind.'
  },
  {
    id: 'media',
    label: 'Media',
    icon: Tv,
    industryImg: '/assets/img/all-works/head-img/media.jpg',
    industryDesc: 'Dynamic media production hubs and broadcasting web applications designed for rich content delivery.'
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce',
    icon: ShoppingCart,
    industryImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    industryDesc: 'High-converting online store experiences engineered for security, speed, and seamless checkout.'
  },
  { id: 'import', label: 'Import & Exports', icon: Ship },
  { id: 'logistics', label: 'Logistic', icon: Truck },
  { id: 'education', label: 'Education & Institute', icon: GraduationCap },
  { id: 'tour', label: 'Tour & Travels', icon: Plane },
  { id: 'cleaning', label: 'Cleaning & Staffing', icon: Sparkles },
  { id: 'consultancy', label: 'Consultancy', icon: Briefcase },
  { id: 'publisher', label: 'Publisher', icon: BookOpen },
  { id: 'hospitality', label: 'Hospitality & Solar', icon: Sun },
  { id: 'manufacturer', label: 'Manufacturer', icon: Factory },
  { id: 'resorts', label: 'Resorts & Restaurants', icon: UtensilsCrossed },
  { id: 'events', label: 'Event & Sports Management', icon: Trophy },
  { id: 'finance', label: 'Financial', icon: Landmark },
  { id: 'others', label: 'Other Industries', icon: Layers },
];

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  corporate: {
    bannerImg: '/assets/img/all-works/head-img/corporate.jpg',
    projects: [
      {
        id: 'klitech',
        name: 'KL iTech',
        logo: '/assets/img/all-works/new/klitech.png',
        location: 'Chennai, India',
        url: 'https://klitech.in/',
        borderClass: 'brb'
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
      {
        id: 'ebara',
        name: 'Ebara Machinery',
        logo: '/assets/img/all-works/eb-logo.png',
        location: 'Chennai, India',
        url: 'https://www.ebara.com/global/emi/index.html',
        borderClass: 'brlb'
      },
      {
        id: 'bmceramics',
        name: 'BM Ceramics',
        logo: '/assets/img/all-works/bmc-logo.png',
        location: 'Chennai, India',
        url: 'https://www.bmceramics.in/',
        borderClass: 'brlb'
      },
      {
        id: 'myglobalstudies',
        name: 'My Global Studies',
        logo: '/assets/img/all-works/mgs-logo.png',
        location: 'Chennai, India',
        url: 'https://www.myglobalstudies.com/',
        borderClass: ''
      },
      {
        id: 'grayeyeit',
        name: 'GrayeyeIT',
        logo: '/assets/img/all-works/grayit-logo.png',
        location: 'Chennai, India',
        url: 'https://grayeyeit.com/',
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
        id: 'vakaman',
        name: 'Vakaman Developers',
        logo: '/assets/img/all-works/new/vakaman.png',
        location: 'Coimbatore, India',
        url: 'https://vakaman.com/',
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
        id: 'srivamanas',
        name: "Srivamana's Living",
        logo: '/assets/img/all-works/svl-logo.png',
        location: 'Chennai, India',
        url: 'https://www.srivamanasliving.com/',
        borderClass: 'brb'
      },
      {
        id: 'kaaninilam',
        name: 'Kaani Nilam Realty',
        logo: '/assets/img/all-works/kn-logo.png',
        location: 'Chennai, India',
        url: 'https://www.kaaninilamrealty.com/',
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
    ],
  },
  engineering: {
    bannerImg: '/assets/img/all-works/head-img/engineering.jpg',
    projects: [
      {
        id: 'preservemetals',
        name: 'Preserve Metals',
        logo: '/assets/img/all-works/2026/preserved-materials.png',
        location: 'Singapore',
        url: 'https://preservemetals.com/',
        borderClass: 'brb'
      },
      {
        id: 'altisclaserv',
        name: 'Altis Claserv',
        logo: '/assets/img/all-works/2026/Altis-claserv.png',
        location: 'Singapore',
        url: 'https://altiscalserv.com/',
        borderClass: 'brlb'
      },
      {
        id: 'qualtronmicrowave',
        name: 'Qualtron Microwave',
        logo: '/assets/img/all-works/2026/Quantrum-microwave.png',
        location: 'Chennai',
        url: 'https://www.qualtronmicrowave.com/',
        borderClass: 'brlb'
      },
      {
        id: 'parkadelectric',
        name: 'Parkad Electric',
        logo: '/assets/img/all-works/new/parkad.png',
        location: 'Singapore',
        url: 'https://www.parkad.com.sg/',
        borderClass: 'brb'
      },
      {
        id: 'ddcmaritime',
        name: 'DDC Maritime',
        logo: '/assets/img/all-works/new/ddcmaritime.png',
        location: 'India',
        url: 'https://www.ddcmaritime.com/',
        borderClass: 'brlb'
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
        id: 'blackstormenergy',
        name: 'Blackstorm Energy',
        logo: '/assets/img/all-works/blackstorm-logo.png',
        location: 'Sharjah, UAE',
        url: 'http://www.blackstormenergy.com/',
        borderClass: 'brb'
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
        logo: '/assets/img/all-works/gcb-logo.png',
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
      {
        id: 'aezensolutions',
        name: 'Aezen Solutions',
        logo: '/assets/img/all-works/aezen-logo.png',
        location: 'Kanchipuram, India',
        url: 'https://aezensolutions.com/',
        borderClass: 'brl'
      }
    ]
  },
  software: {
    bannerImg: '/assets/img/all-works/head-img/software.jpg',
    projects: [
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
      {
        id: 'quantomstridesllc',
        name: 'Quantom Strides LLC',
        logo: '/assets/img/all-works/quantom-logo.png',
        location: 'United States.',
        url: 'https://www.quantumstrides.com/',
        borderClass: ''
      },
      {
        id: 'qeads',
        name: 'Qeads',
        logo: '/assets/img/all-works/qeads-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.qeads.in/',
        borderClass: 'brl'
      },
      {
        id: 'hamsa',
        name: 'Hamsa',
        logo: '/assets/img/all-works/hamsa-logo.png',
        location: 'Nottingham, England.',
        url: 'https://hamsaitsolution.co.uk/',
        borderClass: 'brl'
      }
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
        id: 'ysventures',
        name: 'YS Ventures',
        logo: '/assets/img/all-works/ys-ventures-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.ysventures.in/',
        borderClass: ''
      },
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
      }
    ]
  },
  ecommerce: {
    bannerImg: '/assets/img/all-works/head-img/ecommerce.jpg',
    projects: [
      {
        id: 'bhcart',
        name: 'BH Cart',
        logo: '/assets/img/all-works/new/bhcart.png',
        location: 'Kingdom Of Bahrain',
        url: 'https://www.bhcart.com/',
        borderClass: 'brb'
      },
      {
        id: 'yourclosetin',
        name: 'Yourcloset.in',
        logo: '/assets/img/all-works/yourcloset-logo.png',
        location: 'Chennai, India.',
        url: 'https://yourcloset.in/',
        borderClass: 'brlb'
      },
      {
        id: 'gokulsantol',
        name: 'Gokul Santol',
        logo: '/assets/img/all-works/new/gokulsantol.png',
        location: 'Chennai, India.',
        url: 'https://gokulsantol.com/',
        borderClass: 'brlb'
      },
      {
        id: 'sriyascollection',
        name: 'Sriyas Collection',
        logo: '/assets/img/all-works/new/sriyascollection.png',
        location: 'Chennai, India.',
        url: 'https://sriyascollection.com/',
        borderClass: ''
      }
    ]
  },
  import: {
    bannerImg: '/assets/img/all-works/head-img/import.jpg',
    projects: [
      {
        id: 'oortecloud',
        name: 'Oorte Cloud',
        logo: '/assets/img/all-works/2026/Oort-e-cloud.png',
        location: 'Bengaluru',
        url: 'https://www.oortecloud.com/',
        borderClass: 'brb'
      },
      {
        id: 'ams',
        name: 'AMS',
        logo: '/assets/img/all-works/new/asianic.png',
        location: 'Singapore',
        url: 'http://asianic.sg/',
        borderClass: 'brlb'
      },
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
      {
        id: 'balkanindiaexports',
        name: 'Balkan India Exports',
        logo: '/assets/img/all-works/bie-logo.png',
        location: 'Chennai, India',
        url: 'http://www.balkanindiaexports.com/',
        borderClass: 'brlb'
      },
      {
        id: 'newshipping',
        name: 'New Shipping',
        logo: '/assets/img/all-works/newship-logo.png',
        location: 'Chennai, India.',
        url: 'http://newshipping.co.jp/',
        borderClass: ''
      }
    ]
  },
  logistics: {
    bannerImg: '/assets/img/all-works/head-img/logistics.jpg',
    projects: [
      {
        id: 'blueanchor',
        name: 'Blue Anchor',
        logo: '/assets/img/all-works/2026/blueanchor.png',
        location: 'Dubai, UAE',
        url: 'https://blueanchor.llc/',
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
        id: 'elshaddai',
        name: 'El Shaddai',
        logo: '/assets/img/all-works/elshaddai-logo.png',
        location: 'Chennai, India.',
        url: 'http://elshaddaiforwarders.com/',
        borderClass: 'brlb'
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
        id: 'aerovonexpress',
        name: 'Aerovon Express',
        logo: '/assets/img/all-works/aerovon-logo.png',
        location: 'Chennai, India.',
        url: 'https://aerovonexpress.com/',
        borderClass: 'brl'
      }
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
        location: 'Chennai, India Emirates',
        url: 'https://cgkgmeenambakkam.co.in/',
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
        id: 'amalametric',
        name: 'Amala Metric',
        logo: '/assets/img/all-works/new/amalimatric.png',
        location: 'Madurai, India.',
        url: 'https://amalimatric.com/',
        borderClass: 'brlb'
      },
      {
        id: 'maverick',
        name: 'Maverick',
        logo: '/assets/img/all-works/maverick-logo.png',
        location: 'United Arab Emirates',
        url: 'https://mbalondon.org.uk/',
        borderClass: 'brb'
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
        id: 'tuteeconnect',
        name: 'Tuteeconnect',
        logo: '/assets/img/all-works/tutee-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.tuteeconnect.com/',
        borderClass: 'brlb'
      },
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
      {
        id: 'halimanagementconsultancies',
        name: 'Hali Management Consultancies',
        logo: '/assets/img/all-works/hali-logo.png',
        location: 'Chennai, India.',
        url: 'https://www.haliconsult.com/',
        borderClass: ''
      }
    ]
  },
  tour: {
    bannerImg: '/assets/img/all-works/head-img/travel.jpg',
    projects: [
      {
        id: 'staride',
        name: 'Staride',
        logo: '/assets/img/all-works/starride-logo.png',
        location: 'San Diego.',
        url: 'http://staride.com',
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
        name: 'Bridgegreenupcycle',
        logo: '/assets/img/all-works/new/bridgegreenupcycle.png',
        location: 'United States.',
        url: 'https://bridgegreenupcycle.com/',
        borderClass: 'brb'
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
        id: 'immertiza',
        name: 'Immertiza',
        logo: '/assets/img/all-works/new/immertiza.png',
        location: 'Chennai, India.',
        url: 'https://immertiza.com/',
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
  publisher: {
    bannerImg: '/assets/img/all-works/head-img/publisher.jpg',
    projects: [
      {
        id: 'chennaipublishing',
        name: 'Chennai Publishing',
        logo: '/assets/img/all-works/cp-logo.png',
        location: 'Chennai, India.',
        url: 'https://chennaipublishing.com/',
        borderClass: ''
      }
    ]
  },
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
      }
    ]
  },
  manufacturer: {
    bannerImg: '/assets/img/all-works/head-img/manufacturer.jpg',
    projects: [
      {
        id: 'ralagoengineering',
        name: 'Ralago ENgineering',
        logo: '/assets/img/all-works/new/ralago.png',
        location: 'Chennai, India.',
        url: 'https://www.ralago.in/',
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
        id: 'callosumtechnologies',
        name: 'Callosum Technologies',
        logo: '/assets/img/all-works/callosum-logo.png',
        location: 'Washington.',
        url: 'https://www.callosumtech.com/',
        borderClass: 'brlb'
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
      }
    ]
  },
  resorts: {
    bannerImg: '/assets/img/all-works/head-img/resort.jpg',
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
        id: 'bqab',
        name: 'BQAB',
        logo: '/assets/img/all-works/new/BQAB.png',
        location: 'Qatar.',
        url: 'https://www.bqab.qa/',
        borderClass: 'brlb'
      },
      {
        id: 'knotsandrings',
        name: 'Knots and Rings',
        logo: '/assets/img/all-works/new/knotsandrings.png',
        location: 'Chennai, India.',
        url: 'https://www.knotsandrings.com/',
        borderClass: ''
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
      }
    ]
  },
  others: {
  bannerImg: '/assets/img/all-works/head-img/other.jpg',
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
      id: 'aiyanaar',
      name: 'Aiyanaar',
      logo: '/assets/img/all-works/2026/Aiyanar.png',
      location: 'Chennai',
      url: 'https://www.aiyanaar.com/',
      borderClass: 'brb'
    },
    {
      id: 'adhelant',
      name: 'Adhelant',
      logo: '/assets/img/all-works/new/adhelant.png',
      location: 'Saudi Arabia',
      url: 'https://www.adhelant.com/',
      borderClass: 'brlb'
    },
    {
      id: 'daforth',
      name: 'Daforth',
      logo: '/assets/img/all-works/new/danforth.png',
      location: 'Canada.',
      url: 'https://danforthdisabilityservices.com/',
      borderClass: 'brlb'
    },
    {
      id: 'arivion',
      name: 'Arivion',
      logo: '/assets/img/all-works/new/arivion.png',
      location: 'Tiruvannamalai, India.',
      url: 'https://arivion.in/',
      borderClass: 'brb'
    },
    {
      id: 'rootvis',
      name: 'Rootvis',
      logo: '/assets/img/all-works/new/rootvis.png',
      location: 'Chennai, India.',
      url: 'https://www.rootvis.com/',
      borderClass: 'brlb'
    },
    {
      id: 'rcsblr',
      name: 'RCSBLR',
      logo: '/assets/img/all-works/new/rcsblr.png',
      location: 'Bangalore, India',
      url: 'https://www.rcsblr.com/',
      borderClass: 'brlb'
    },
    {
      id: 'recyclersplaza',
      name: 'Recyclers Plaza',
      logo: '/assets/img/all-works/recyclers-logo.png',
      location: 'United States.',
      url: 'https://www.recyclersplaza.com/',
      borderClass: 'brb'
    },
    {
      id: 'ecube',
      name: 'Ecube',
      logo: '/assets/img/all-works/ecube-logo.png',
      location: 'Chennai, India',
      url: 'https://www.ecubelive.com/',
      borderClass: 'brlb'
    },
    {
      id: 'riverbridge',
      name: 'River Bridge',
      logo: '/assets/img/all-works/riverbridge-logo.png',
      location: 'India.',
      url: 'https://www.riverbridgecapital.in/',
      borderClass: 'brlb'
    },
    {
      id: 'u2vprints',
      name: 'U2V Prints',
      logo: '/assets/img/all-works/u2v-logo.png',
      location: 'Ambur, India',
      url: 'https://www.u2vprints.com/',
      borderClass: 'brb'
    },
    {
      id: 'spkenterprices',
      name: 'SPK Enterprices',
      logo: '/assets/img/all-works/spk-logo.png',
      location: 'Chennai, India.',
      url: 'http://spkenterprisesgroup.com/',
      borderClass: 'brlb'
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
      id: 'altazbusinesssolution',
      name: 'Altaz Business Solution',
      logo: '/assets/img/all-works/altaz-logo.png',
      location: 'Chennai, India.',
      url: 'http://www.atlaz.in/',
      borderClass: ''
    },
    {
      id: 'alphonsaaqua',
      name: 'Alphonsa Aqua',
      logo: '/assets/img/all-works/alphonsa-logo.png',
      location: 'Chennai, India.',
      url: 'https://alphonsaaqua.com/',
      borderClass: 'brl'
    }
  ]
}
};