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
import Dock from "../layout/footers/Dock";
import { socialLinks } from "@/data/footer-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import M1 from '@/assets/img/map/m1.png'

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

  const dockItems = socialLinks.map((item) => ({
    icon: item.icon,
    label: item.label ?? "",
    onClick: () => window.open(item.href, "_blank"),
  }));

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
          <div className="tp-offcanvas-main mb-30">
            {/* <div className="tp-offcanvas-content d-none d-xl-block">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div> */}
            <div className="mb-20 d-none d-xl-block">
              <a href="https://www.google.com/maps/place/Yulanto+Web+Creations+Pvt+Ltd/@12.9724698,80.2510529,1421m/data=!3m1!1e3!4m6!3m5!1s0x3a525df3d6bf9167:0xc1aae342aa473d1!8m2!3d12.9725177!4d80.2518352!16s%2Fg%2F11b7rnd8vq?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D" target="blank"> <Image src='/assets/img/map/m2.png' alt="map" width={500} height={350} style={{  borderRadius: '20px',  }} /></a>
             
            </div>


            <div className="tp-offcanvas-menu d-xl-none">
              <nav>
                <MobileMenus />
              </nav>
            </div>
            {/* <div className="tp-offcanvas-gallery d-none d-xl-block">
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
            </div> */}
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Reach Us</h3>
              <ul>
                <li className="d-flex justify-content-start align-items-center">
                  <div className="contact-icons" style={{ height: '30px' }}>
                    <FontAwesomeIcon className="" icon={faPhone} />
                  </div>
                  <Link href="tel:+919962157250" className="text-figtree">+91 99621 57250</Link>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <div className="contact-icons">
                    <FontAwesomeIcon className="" icon={faEnvelope} />
                  </div>
                  <Link href="mailto:info@yulanto.com" className="text-figtree">info@yulanto.com</Link>
                </li>
                <li className="d-flex justify-content-start align-items-start ">
                  <div className="contact-icons">
                    <FontAwesomeIcon className="" icon={faLocationDot} />
                  </div>
                  <p className="d-flex flex-column justify-content-center align-items-start text-figtree fs-6">
                    <span> First Floor, F3, #4/608,</span>
                    <span> VOC St, OMR, Kottivakkam,</span>
                    <span> Chennai, Tamil Nadu 600041</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social ">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <Dock items={dockItems}
                page=
                "sidemenu"
                panelHeight={52}
                baseItemSize={38}
                magnification={54}
                distance={120} />
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
