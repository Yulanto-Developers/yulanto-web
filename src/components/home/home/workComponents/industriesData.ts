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
    projects: [
      { id: 'klitech', name: 'KL iTech', logo: '/assets/img/all-works/new/klitech.png', location: 'Chennai, India', url: 'https://klitech.in/', borderClass: 'brb' },
      { id: 'typhoonelec', name: 'Typoon Electronic', logo: 'assets/img/all-works/new/typhoonelec.png', location: 'Chennai, India', url: 'https://typhoonelec.com/', borderClass: 'brlb' },
      { id: 'siddharth', name: 'Siddharth Electricals', logo: 'assets/img/all-works/new/siddharthelectricals.png', location: 'Chennai, India', url: 'https://siddharthelectricals.com/', borderClass: 'brlb' },
      { id: 'bioxgreen', name: 'Bioxgreen', logo: 'assets/img/all-works/bg-logo.png', location: 'Chennai, India', url: 'https://www.bioxgreen.com/', borderClass: 'brb' },
      { id: 'ebara', name: 'Ebara Machinery', logo: 'assets/img/all-works/eb-logo.png', location: 'Chennai, India', url: 'https://www.ebara.com/global/emi/index.html', borderClass: 'brlb' },
      { id: 'bmceramics', name: 'BM Ceramics', logo: 'assets/img/all-works/bmc-logo.png', location: 'Chennai, India', url: 'https://www.bmceramics.in/', borderClass: 'brlb' },
      { id: 'myglobalstudies', name: 'My Global Studies', logo: 'assets/img/all-works/mgs-logo.png', location: 'Chennai, India', url: 'https://www.myglobalstudies.com/', borderClass: '' },
      { id: 'grayeyeit', name: 'GrayeyeIT', logo: 'assets/img/all-works/grayit-logo.png', location: 'Chennai, India', url: 'https://grayeyeit.com/', borderClass: 'brl' },
    ],
  },
  realestate: {
    projects: [
      { id: 'harithams', name: 'Harithams', logo: 'assets/img/all-works/2026/harithams.png', location: 'Chennai, India', url: 'https://www.harithams.com/', borderClass: 'brb' },
      { id: 'vakaman', name: 'Vakaman Developers', logo: 'assets/img/all-works/new/vakaman.png', location: 'Coimbatore, India', url: 'https://vakaman.com/', borderClass: 'brlb' },
      { id: 'irishomez', name: 'Iris Homez', logo: 'assets/img/all-works/new/irishomez.png', location: 'Chennai, India', url: 'https://www.irishomez.com/', borderClass: 'brlb' },
      { id: 'srivamanas', name: "Srivamana's Living", logo: 'assets/img/all-works/svl-logo.png', location: 'Chennai, India', url: '#', borderClass: 'brb' },
    ],
  },
};