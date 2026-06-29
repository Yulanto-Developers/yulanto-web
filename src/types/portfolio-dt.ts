
export interface PortfolioProjectDT {
  id: number;
  title: string;
  year: number;
  image: string;
  categories: string[];
  client: string;
  role: string;
  duration: string;
  designer: string;
  video?: string; // Optional video field 
  description?: string; // Optional description field 
  large?: boolean; // Optional field to indicate if the project should be displayed larger
  reverse?:boolean;
  customClass?:string;
  type?:string;
  filters?:string[];
}
