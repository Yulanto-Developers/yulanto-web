import Link from "next/link";
import type { StaticImageData } from "next/image";


interface BreadcrumbBannerProps {
  title: string;
  currentPage: string;
  backgroundImage?: string | StaticImageData;
}

export default function BreadcrumbBanner({
  title,
  currentPage,
  backgroundImage,
}: BreadcrumbBannerProps) {
  const image =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage?.src;
      

  return (
    <section
      className="breadcrumb-banner">
      <div className="breadcrumb-banner-img" style={{
        backgroundImage: `url(${image})`,
      }}></div>
      <div className="overlay"></div>

      <div className="container">
        <div className="breadcrumb-content">
          <h1>{title}</h1>

          <nav>
            <ul className="breadcrumb-list">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>/</li>

              <li className="active">{currentPage}</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}