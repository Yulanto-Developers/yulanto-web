
import Link from "next/link";
import breadcrumbimg from "../../../../public/assets/images/breadcrumb/Company-Overview.jpg"
interface BreadcrumbBannerProps {
  title: string;
  currentPage: string;
  backgroundImage?: string;
}

export default function BreadcrumbBanner({
  title,
  currentPage,
  backgroundImage = "/images/breadcrumb/banner.jpg",
}: BreadcrumbBannerProps) {
  return (
    <section
      className="breadcrumb-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="container">
        <div className="breadcrumb-content">
          <h1>{title}</h1>

          <nav>
            <ul className="breadcrumb-list">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <span>/</span>
              </li>

              <li className="active">{currentPage}</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
