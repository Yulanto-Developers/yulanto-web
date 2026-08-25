import React from "react";
import {
  CheckCircle2,
  Smartphone,
  Navigation,
  Search,
  Gauge,
  TrendingUp,
  Layers3,
  LucideIcon,
} from "lucide-react";
import "./status-badge.css";

export type BadgeVariant =
  | "professional"
  | "responsive"
  | "navigation"
  | "seo"
  | "performance"
  | "conversion"
  | "scalable";

interface BadgeProps {
  label: string;
  icon: LucideIcon;
  variant: BadgeVariant;
}

const Badge = ({ label, icon: Icon, variant }: BadgeProps) => {
  return (
    <div className={`custom-badge custom-badge-${variant}`}>
      <Icon className="custom-badge-icon" strokeWidth={2.5} />
      <span className="text-figtree">{label}</span>
    </div>
  );
};

export default Badge;