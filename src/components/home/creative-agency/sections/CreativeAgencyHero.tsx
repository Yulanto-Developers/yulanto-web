"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { HeroArrowIcon } from "@/svg/ArrowIcons";
import { SmartLink } from "@/components/common";
import { PlusIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
	{ src: "/assets/img/hero/hero-5/hero-1.jpg", label: "[01]" },
	{ src: "/assets/img/hero/hero-5/hero-2.jpg", label: "[02]" },
	{ src: "/assets/img/hero/hero-5/hero-3.jpg", label: "[03]" },
];

const SERVICES = [
	"Brand Design",
	"Motion Graphics",
	"Art Direction",
];

const SOCIALS = [
	{ name: "linkedin", href: "#" },
	{ name: "Instagram", href: "#" },
	{ name: "Twitter", href: "#" },
];

const CreativeAgencyHero = () => {
	const currentYear = new Date().getFullYear();
	const isDarkTheme = useIsDarkRoute();

	const heroStyles = {
		sectionBackground: !isDarkTheme ? "#FFF5F3" : null
	}

	return (
		<div
			id="top"
			className="px-hero-5-area px-hero-5-style px-hero-5-pt pb-40"
			style={{ backgroundColor: heroStyles.sectionBackground || undefined }}
		>
			<div className="container container-1870">
				<div className="row align-items-end">

					{/* LEFT IMAGES */}
					<div className="col-xxl-3 col-xl-2 col-lg-3 d-none d-md-block">
						<div className="px-hero-5-thumb-wrap">
							{HERO_IMAGES.map((item) => (
								<div key={item.src} className="px-hero-5-thumb mt-30 d-flex align-items-end">
									<SmartLink href="/portfolio-2">
										<Image width={120} height={100} src={item.src} alt="hero image" />
									</SmartLink>
									<span>{item.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* MAIN CONTENT */}
					<div className="col-xxl-7 col-xl-7 col-lg-9">
						<div className="px-hero-5-content">
							<p>
								Pixora is a creative studio <br />
								based in London. We think like <br />
								an agency and produce like visuals <br />
								for brands & agencies.
							</p>

							<div className="px-hero-5-list">
								<div className="row row-cols-xl-3 row-cols-md-3 row-cols-2">

									{/* YEAR */}
									<div className="col-md-4 col-12 order-md-0 order-1">
										<div className="px-hero-5-content mb-20">
											<span>©{currentYear} Modern Studio</span>
										</div>
									</div>

									{/* SERVICES */}
									<div className="col order-0">
										<div className="px-hero-5-category-wrap mb-20">
											{SERVICES.map((service) => (
												<div key={service} className="px-hero-5-category">
													<SmartLink href="/service-1">
														<span>
															<PlusIcon strokeColor="#6D6868" />
														</span>
														{service}
													</SmartLink>
												</div>
											))}
										</div>
									</div>

									{/* SOCIAL */}
									<div className="col order-0">
										<div className="px-hero-5-social-wrap mb-20">
											{SOCIALS.map((social) => (
												<div key={social.name} className="px-hero-5-social">
													<Link className="px-doubble-effect" href={social.href}>
														{social.name}
														<i>
															<HeroArrowIcon />
															<HeroArrowIcon />
														</i>
													</Link>
												</div>
											))}
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					{/* VIDEO */}
					<div className="col-xxl-2 col-xl-3">
						<div className="px-hero-4-video-wrap d-flex justify-content-end">
							<div className="px-hero-4-video">
								<div className="text-end d-none d-xl-block mb-50">
									<Image className="img-fluid" width={171} height={60} src="/assets/img/shape/shape-1.png" alt="shape" />
								</div>

								<video loop muted autoPlay playsInline>
									<source
										src="https://html.aqlova.com/videos/pixora/banner-4-1.mp4"
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyHero;