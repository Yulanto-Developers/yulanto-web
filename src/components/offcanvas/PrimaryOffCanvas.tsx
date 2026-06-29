"use client";
import {
  BehanceIcon,
  CroseIcon,
  DribbleIcon,
  InstragramIcon,
  YoutubeIcon,
} from "@/svg";
import { PhotoProviderWrapper } from "../wrappers";
import useGlobalContext from "@/hooks/useContext";
import { usePathname } from "next/navigation";
import { PhotoView } from "react-photo-view";
import { ImageDT } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";
import MobileMenus from "../layout/headers/subComponents/MobileMenus";

const galleryImages: ImageDT[] = [
  { id: 1, imgSrc: "/assets/img/offcanvas/offcanvas-1.jpg" },
  { id: 2, imgSrc: "/assets/img/offcanvas/offcanvas-2.jpg" },
  { id: 3, imgSrc: "/assets/img/offcanvas/offcanvas-3.jpg" },
  { id: 4, imgSrc: "/assets/img/offcanvas/offcanvas-4.jpg" },
];

const PrimaryOffCanvas = () => {
  const { isMainSidebarOpen, toggleMainSidebar } = useGlobalContext();
  const pathname = usePathname();

  // Detect dark version route
  const isDark = pathname?.startsWith("/dark") ?? false;

  return (
    <>
      <div className={`tp-offcanvas-area ${isMainSidebarOpen ? "opened" : ""}`}>
        <div
          className={`tp-offcanvas-wrapper ${isDark ? "offcanvas-black-bg" : "offcanvas-white-bg"}`}
        >
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/">
                <Image
                  width={150}
                  height={65}
                  className="logo-1"
                  src="/assets/img/logo/Yulanto-logo.png"
                  alt="logo-orange"
                />
                <Image
                  width={120}
                  height={42}
                  className="logo-2"
                  src="/assets/img/logo/Yulanto-logo.png"
                  alt="logo-orange"
                />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                type="button"
                onClick={toggleMainSidebar}
                className="tp-offcanvas-close-btn"
                aria-label="Close sidebar"
              >
                <span aria-hidden="true">
                  <CroseIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content d-none d-xl-block">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="tp-offcanvas-menu d-xl-none">
              <nav>
                <MobileMenus />
              </nav>
            </div>
            <div className="tp-offcanvas-gallery d-none d-xl-block">
              <div className="row gx-2">
                <PhotoProviderWrapper>
                  {galleryImages.map((image: ImageDT) => (
                    <div className="col-md-3 col-3" key={image.id}>
                      <div className="tp-offcanvas-gallery-img fix">
                        <PhotoView src={image.imgSrc}>
                          <Image
                            style={{ width: "auto", height: "auto" }}
                            width={82}
                            height={82}
                            src={image.imgSrc}
                            alt={`gallery image${image.id}`}
                          />
                        </PhotoView>
                      </div>
                    </div>
                  ))}
                </PhotoProviderWrapper>
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <Link href="tel:+919962157250">+91 99621 57250</Link>
                </li>
                <li>
                  <Link href="mailto:info@yulanto.com">info@yulanto.com</Link>
                </li>
                <li>
                  <p className="d-flex flex-column justify-content-start">
                    <span> First Floor, F3, #4/608,</span>
                    <span> VOC St, near Turyaa Hotel, OMR,</span>
                    <span> Kottivakkam, Chennai, Tamil Nadu 600096</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link href="#">
                    <InstragramIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <DribbleIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <BehanceIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <YoutubeIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <button
        type="button"
        onClick={toggleMainSidebar}
        className={`body-overlay ${isMainSidebarOpen ? "opened" : ""}`}
        aria-label="Close sidebar overlay"
      />
    </>
  );
};

export default PrimaryOffCanvas;
