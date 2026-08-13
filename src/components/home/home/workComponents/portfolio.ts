export type PortfolioCategory =
  | "website"
  | "logo"
  | "business-card"
  | "brochure"
  | "flyers";

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: PortfolioCategory;
  description?: string;
  date?: string;
}
