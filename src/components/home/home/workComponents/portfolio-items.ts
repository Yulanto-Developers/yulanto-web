import type { PortfolioItem } from "./portfolio";
import Img1 from '@/assets/img/sample/gallery/img- (1).jpg';
export const portfolioItems: PortfolioItem[] = [
  {
    id: "web-1",
    title: "Naturographer",
    image: Img1.src,
    category: "website",
    description: "A full redesign of a fintech client's customer dashboard.",
  },
  {
    id: "logo-1",
    title: "Core",
    image: Img1.src,
    category: "logo",
    description: "Minimal wordmark and icon system for a specialty roaster.",
  },
  {
    id: "bc-1",
    title: "In Bound",
    image: Img1.src,
    category: "business-card",
    description: "Double-sided business card with spot UV finish.",
  },
  {
    id: "bro-1",
    title: "Rayannya",
    image: Img1.src,
    category: "brochure",
    description: "Tri-fold brochure for a residential property launch.",
  },
  {
    id: "fly-1",
    title: "Lavannya Foundation",
    image: Img1.src,
    category: "flyers",
    description: "Event flyer series across print and social formats.",
  },
  {
    id: "web-2",
    title: "Freight Digital",
    image: Img1.src,
    category: "website",
    description: "A portfolio site for an interior design studio.",
  },
];
