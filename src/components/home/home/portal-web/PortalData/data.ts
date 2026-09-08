import {
    Tags,
    Building2,
    House,
    BriefcaseBusiness,
    Utensils,
    Wrench,
    HousePlus,
    ShoppingCart,
    Users,
    Globe,
} from "lucide-react";

export const portalSolutions = [
    "Classified Web Portal Development",
    "Business Directory Portal Development",
    "Real Estate Portal Development",
    "Job Portal Development",
    "Restaurant & Food Listing Portal Development",
    "Service Listing Portals",
    "Property Listing Portals",
    "Vendor & Marketplace Portals",
    "Membership & Community Portals",
    "Custom Business Web Portals",
];

export const portalIcons = [
    Tags,
    Building2,
    House,
    BriefcaseBusiness,
    Utensils,
    Wrench,
    HousePlus,
    ShoppingCart,
    Users,
    Globe,
];

export const classifiedFeatures = [
    "User registration and login",
    "Classified ad posting",
    "Category and subcategory management",
    "Location-based listings",
    "Advanced search and filters",
    "Image and media uploads",
    "Featured and premium advertisements",
    "Seller profiles",
    "Enquiry management",
    "Online payment integration",
    "Admin approval and moderation",
    "Advertisement expiry and renewal",
];


export interface DirectoryFeature {
    id: number;
    title: string;
    icon: string;
}

export const directoryPortalFeatures: DirectoryFeature[] = [
    {
        id: 1,
        title: "Business Registration",
        icon: "business-registration",
    },
    {
        id: 2,
        title: "Business Profiles",
        icon: "business-profile",
    },
    {
        id: 3,
        title: "Category Management",
        icon: "categories",
    },
    {
        id: 4,
        title: "Location-Based Search",
        icon: "location-search",
    },
    {
        id: 5,
        title: "Google Maps Integration",
        icon: "maps",
    },
    {
        id: 6,
        title: "Search and Filtering",
        icon: "search-filter",
    },
    {
        id: 7,
        title: "Customer Reviews and Ratings",
        icon: "reviews",
    },
    {
        id: 8,
        title: "Featured Listings",
        icon: "featured",
    },
    {
        id: 9,
        title: "Subscription Packages",
        icon: "subscription",
    },
    {
        id: 10,
        title: "Lead Enquiry Forms",
        icon: "enquiry",
    },
    {
        id: 11,
        title: "Vendor Dashboards",
        icon: "dashboard",
    },
    {
        id: 12,
        title: "Admin Management",
        icon: "admin",
    },
];




export const realEstatePortalFeatures = [
    {
        id: 1,
        title: "Property Listing Management",
        icon: "listing",
    },
    {
        id: 2,
        title: "Residential & Commercial Properties",
        icon: "property",
    },
    {
        id: 3,
        title: "Property Search and Filters",
        icon: "search",
    },
    {
        id: 4,
        title: "Location-Based Search",
        icon: "location",
    },
    {
        id: 5,
        title: "Price Range Filtering",
        icon: "price",
    },
    {
        id: 6,
        title: "Property Images and Videos",
        icon: "media",
    },
    {
        id: 7,
        title: "Map Integration",
        icon: "map",
    },
    {
        id: 8,
        title: "Agent and Builder Profiles",
        icon: "agent",
    },
    {
        id: 9,
        title: "Property Enquiry Management",
        icon: "enquiry",
    },
    {
        id: 10,
        title: "Featured Properties",
        icon: "featured",
    },
    {
        id: 11,
        title: "Lead Management",
        icon: "lead",
    },
    {
        id: 12,
        title: "Admin Dashboard",
        icon: "dashboard",
    },
];

export const jobPortalFeatures = [
    {
        id: 1,
        title: "Candidate Registration",
        icon: "user",
        image: "/images/job-portal/candidate-registration.jpg",
    },
    {
        id: 2,
        title: "Employer Registration",
        icon: "employer",
        image: "/images/job-portal/employer-registration.jpg",
    },
    {
        id: 3,
        title: "Job Posting",
        icon: "job",
        image: "/images/job-portal/job-posting.jpg",
    },
    {
        id: 4,
        title: "Resume Upload",
        icon: "resume",
        image: "/images/job-portal/resume-upload.jpg",
    },
    {
        id: 5,
        title: "Candidate Profiles",
        icon: "profile",
        image: "/images/job-portal/candidate-profile.jpg",
    },
    {
        id: 6,
        title: "Job Search and Filters",
        icon: "search",
        image: "/images/job-portal/job-search.jpg",
    },
    {
        id: 7,
        title: "Location-Based Job Search",
        icon: "location",
        image: "/images/job-portal/location-search.jpg",
    },
    {
        id: 8,
        title: "Application Management",
        icon: "application",
        image: "/images/job-portal/application-management.jpg",
    },
    {
        id: 9,
        title: "Employer Dashboard",
        icon: "employer-dashboard",
        image: "/images/job-portal/employer-dashboard.jpg",
    },
    {
        id: 10,
        title: "Candidate Dashboard",
        icon: "candidate-dashboard",
        image: "/images/job-portal/candidate-dashboard.jpg",
    },
    {
        id: 11,
        title: "Job Alerts",
        icon: "alert",
        image: "/images/job-portal/job-alerts.jpg",
    },
    {
        id: 12,
        title: "Featured Job Listings",
        icon: "featured",
        image: "/images/job-portal/featured-jobs.jpg",
    },
    {
        id: 13,
        title: "Admin Approval System",
        icon: "admin",
        image: "/images/job-portal/admin-approval.jpg",
    },
];


export const restaurantPortalFeatures = [
    {
        id: 1,
        title: "Restaurant Registration",
        icon: "registration",
    },
    {
        id: 2,
        title: "Restaurant Profiles",
        icon: "profile",
    },
    {
        id: 3,
        title: "Cuisine Categories",
        icon: "cuisine",
    },
    {
        id: 4,
        title: "Location-Based Search",
        icon: "location",
    },
    {
        id: 5,
        title: "Menu Management",
        icon: "menu",
    },
    {
        id: 6,
        title: "Food Images",
        icon: "food",
    },
    {
        id: 7,
        title: "Reviews and Ratings",
        icon: "reviews",
    },
    {
        id: 8,
        title: "Offers and Promotions",
        icon: "offers",
    },
    {
        id: 9,
        title: "Restaurant Enquiry",
        icon: "enquiry",
    },
    {
        id: 10,
        title: "Table Booking Integration",
        icon: "booking",
    },
    {
        id: 11,
        title: "Online Ordering Integration",
        icon: "ordering",
    },
    {
        id: 12,
        title: "Restaurant Dashboard",
        icon: "dashboard",
    },
    {
        id: 13,
        title: "Admin Management",
        icon: "admin",
    },
];


export const webPortalBenefits = [
    {
        id: 1,
        title: "Customized Portal Development",
        description:
            "We develop portal solutions based on your business process instead of forcing your requirements into a standard template.",
        icon: "custom",
    },
    {
        id: 2,
        title: "Mobile-Friendly Design",
        description:
            "Your portal will provide a consistent user experience across smartphones, tablets, laptops, and desktops.",
        icon: "mobile",
    },
    {
        id: 3,
        title: "Scalable Architecture",
        description:
            "We develop portals with future expansion in mind, allowing you to add new features and functionality as your business grows.",
        icon: "scale",
    },
    {
        id: 4,
        title: "User-Friendly Administration",
        description:
            "Manage users, listings, categories, enquiries, subscriptions, content, and other portal activities through an easy-to-use admin panel.",
        icon: "admin",
    },
    {
        id: 5,
        title: "SEO-Friendly Development",
        description:
            "We structure your portal with SEO-friendly URLs, content structures, responsive layouts, and technical foundations that support search engine visibility.",
        icon: "seo",
    },
    {
        id: 6,
        title: "Secure Development",
        description:
            "We implement appropriate security practices for user accounts, forms, databases, payments, and administrative functions.",
        icon: "security",
    },
];