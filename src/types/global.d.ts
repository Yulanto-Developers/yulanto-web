// Declare module for Bootstrap JS to avoid TypeScript errors
declare module "bootstrap/dist/js/bootstrap.bundle.min";

// globals.d.ts
declare module "splitting" {
  const Splitting: any;
  export default Splitting;
}

// Type declarations for side-effect style imports (CSS/SCSS) used by external libraries
// This prevents TypeScript errors when importing styles like Atropos, Swiper, and global SCSS files
declare module 'atropos/css';
declare module "swiper/css/bundle";
declare module "*.scss";
declare module "*.css";