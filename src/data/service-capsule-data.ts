import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaCode,
  FaDatabase,FaShopify
} from "react-icons/fa6";
import { SiWoocommerce } from "react-icons/si";

export interface toolboxDt {
  id: string;
  label: string;
  width?: number;
  height?: number;
  bg?: string;
  icon?: IconType;
}

export const SERVICE_CAPSULE_ITEMS: toolboxDt[] = [
  {
    id: "development-1",
    label: "Shopify",
    width: 180,
    height: 180,
    bg: "#96588A",
    icon: FaShopify,
  },
  {
    id: "marketing-2",
    label: "CSS",
    width: 180,
    height: 180,
    bg: "#1572B6",
    icon: FaCss3Alt,
  },
  {
    id: "e-commerce-3",
    label: "REACT JS",
    width: 180,
    height: 180,
    bg: "#20232A",
    icon: FaReact,
  },
  {
    id: "marketing-4",
    label: "JS",
    width: 180,
    height: 180,
    bg: "#F7DF1E",
    icon: FaJs,
  },
  {
    id: "branding-5",
    label: "PHP",
    bg: "#777BB4",
    icon: FaPhp,
  },
  {
    id: "smm-6",
    label: "NODE JS",
    bg: "#339933",
    icon: FaNodeJs,
  },
  {
    id: "web-design-7",
    label: "WordPress",
    bg: "#21759B",
    icon: FaWordpress,
  },
  {
    id: "analysis-8",
    label: "CodeIgniter",
    bg: "#EE4323",
    icon: FaCode,
  },
  {
    id: "seo-9",
    label: "HTML",
    bg: "#E34F26",
    icon: FaHtml5,
  },
  {
    id: "seo-11",
    label: "MySQL",
    bg: "#4479A1",
    icon: FaDatabase,
  },
];