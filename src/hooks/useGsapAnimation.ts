"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import SplitType from "split-type";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// Skew animation
const skewAnimation = (
	selector: string,
	scrub: number
) => {
	gsap.utils.toArray<HTMLElement>(selector).forEach(section => {
		gsap.set(section, {
			willChange: "transform",
			y: -180,
			scale: 0.95,
			opacity: 0,
		});

		gsap.to(section, {
			y: 0,
			scale: 1,
			opacity: 1,
			transformOrigin: "center top",
			ease: "none",
			scrollTrigger: {
				trigger: section,
				start: "top center",
				end: "bottom 100%",
				scrub,
			},
		});
	});
};
export const aboutSkewAnimation = () => {
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		skewAnimation(".about-skew-anim", 1.2);
	});
};
export const brandSkewAnimation = () => {
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		skewAnimation(".brand-skew-anim", 3);
	});
};
// Skew animation end


//fade animation
export const fadeAnimation = () => {
	gsap.utils.toArray<HTMLElement>(".px-fade-anim").forEach((item) => {
		const offset = parseFloat(item.dataset.fadeOffset || "40");
		const duration = parseFloat(item.dataset.duration || "0.75");
		const direction = item.dataset.fadeFrom || "bottom";
		const onScroll = item.dataset.onScroll !== "0";
		const delay = parseFloat(item.dataset.delay || "0.15");
		const ease = item.dataset.ease || "power2.out";

		const animVars: gsap.TweenVars = {
			opacity: 0,
			ease,
			duration,
			delay,
			x:
				direction === "left"
					? -offset
					: direction === "right"
						? offset
						: 0,
			y:
				direction === "top"
					? -offset
					: direction === "bottom"
						? offset
						: 0,
		};

		if (onScroll) {
			animVars.scrollTrigger = {
				trigger: item,
				start: "top 85%",
				toggleActions: "play none none none",
			};
		}

		gsap.from(item, animVars);
	});
};

//  portfolio panel animation//
export const portfolioPanelAnimation = () => {
	gsap.matchMedia().add("(min-width: 1199px)", () => {
		let portfolio_panel = document.querySelectorAll('.px-portfolio-panel')
		let tl = gsap.timeline();
		portfolio_panel.forEach((section, index) => {
			gsap.set(portfolio_panel, {
				scale: 1,
			});
			tl.to(section, {
				scale: .8,
				scrollTrigger: {
					trigger: section,
					pin: true,
					scrub: 1,
					start: 'top 30px',
					end: "bottom 100%",
					endTrigger: '.px-portfolio-wrap',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});
}

//text effect animation
export class TextEffect {
	elements: NodeListOf<HTMLElement>;

	constructor(selector: string = ".text-effect") {
		// DON'T call Splitting at module-level
		if (typeof window !== "undefined") {
			this.elements = document.querySelectorAll<HTMLElement>(selector);
			this.init();
		} else {
			this.elements = [] as unknown as NodeListOf<HTMLElement>;
		}
	}

	private getScrollTrigger(el: HTMLElement, defaults: any) {
		return {
			trigger: el,
			start: el.dataset.start || defaults.start,
			end: el.dataset.end || defaults.end,
			scrub: el.dataset.scrub === "true" ? true : defaults.scrub,
			pin: el.dataset.pin === "true" ? true : defaults.pin,
		};
	}

	private async applyEffect28(el: HTMLElement) {
		// dynamic import of Splitting
		const Splitting = (await import("splitting")).default;
		const result = Splitting({ target: el, by: "chars" })[0];
		if (!result?.chars) return;

		const chars = result.chars as HTMLElement[];
		const half = Math.ceil(chars.length / 2);
		const tp = parseFloat(el.dataset.onScroll || "1");

		chars.forEach((char, i) => {
			const pos =
				i < half
					? i
					: half - Math.abs(Math.floor(chars.length / 2) - i) - 1;

			gsap.fromTo(
				char,
				{
					transformOrigin: "50% 100%",
					scale: 0.5,
					y: gsap.utils.mapRange(0, half, 0, 60, pos) * tp,
					rotation:
						(i < half
							? gsap.utils.mapRange(0, half, -4, 0, pos)
							: gsap.utils.mapRange(0, half, 0, 4, pos)) * tp,
					filter: "blur(12px) opacity(0)",
				},
				{
					ease: "power2.inOut",
					y: 0,
					rotation: 0,
					scale: 1,
					filter: "blur(0px) opacity(1)",
					scrollTrigger: this.getScrollTrigger(el, {
						start: "top bottom+=40%",
						end: "top top+=15%",
						scrub: true,
						pin: false,
					}),
					stagger: { amount: 0.15, from: "center" },
				}
			);
		});
	}

	private init() {
		this.elements.forEach((el) => this.applyEffect28(el));
	}
}

export const textEffectAnimation = (selector: string = ".text-effect") => {
	if (typeof window !== "undefined") {
		new TextEffect(selector);
	}
};

export const headerLogoAnimAnimation = () => {
	const headers = document.querySelectorAll(".header-fixed");

	if (!headers || headers.length === 0) return;

	headers.forEach((header) => {
		const logo = header.querySelector(".px-header-logo-anim");

		if (!logo) return;

		gsap.timeline({
			scrollTrigger: {
				trigger: header,
				start: "top top",
				end: "bottom top",
				scrub: 1,
				onUpdate: (self) => {
					const currentWidth = 100 - 89 * self.progress;

					if (currentWidth <= 11.5) {
						header.classList.add("sticky-bg");
					} else {
						header.classList.remove("sticky-bg");
					}
				},
			},
		}).fromTo(
			logo,
			{ width: "100%" },
			{ width: "95px", ease: "power2.out" }
		);
	});
};

export const stepScrollPinAnimation = () => {
	let mm = gsap.matchMedia();

	mm.add("(min-width: 1199px)", () => {
		// Common ScrollTrigger options
		const baseOptions = {
			scrub: 1,
			start: 'top 0%',
			end: 'bottom 80%',
			endTrigger: '.px-step-area',
			pinSpacing: false,
			markers: false,
		};

		// For px-step-item
		document.querySelectorAll('.px-step-item').forEach((item, i) => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					pin: item,
					...baseOptions,
				}
			});
		});

		// For px-step-card with left/right rotation
		document.querySelectorAll('.px-step-card').forEach((card, i) => {
			let rotateValue = i % 2 === 0 ? -5 : 5;

			gsap.to(card, {
				rotate: rotateValue,
				scrollTrigger: {
					trigger: card,
					pin: card,
					...baseOptions,
					start: 'top 20%',
					end: 'bottom 80%'
				}
			});
		});
	})
}

//  hover image-wrapper
export const initHoverImageAnimation = () => {
	const imageWrapper = document.querySelector(".px-project-6-img-wrap") as HTMLElement | null;
	const imageSlider = document.querySelector(".px-project-6-img-slider") as HTMLElement | null;
	const projects = gsap.utils.toArray<HTMLElement>(".px-project-6-item");

	if (imageWrapper && imageSlider && projects.length) {
		const projectCount = imageSlider.children.length;
		const movePercent = 100 / projectCount;

		// Hover events for project items
		projects.forEach((el) => {
			el.addEventListener("mouseenter", () => {
				gsap.to(imageWrapper, { opacity: 1, duration: 0.5, ease: "power2.out" });
			});

			el.addEventListener("mouseleave", () => {
				gsap.to(imageWrapper, { opacity: 0, duration: 0.5, ease: "power2.in" });
			});

			el.addEventListener("mousemove", () => {
				const indexNumber = Number(el.dataset.indexNumber);
				gsap.to(imageSlider, {
					y: -(movePercent * indexNumber) + "%",
					duration: 0.6,
					ease: "power2.out",
				});
			});
		});

		// Cursor-follow + ghost trail
		const wrap = document.querySelector(".px-project-6-wrap") as HTMLElement | null;
		if (wrap) {
			wrap.addEventListener("mousemove", (e: MouseEvent) => {
				const rect = wrap.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				// Clone for ghost effect
				const clone = imageWrapper.cloneNode(true) as HTMLElement;
				clone.style.position = "absolute";
				clone.style.pointerEvents = "none";
				clone.style.opacity = "0.4";
				clone.style.top = "0";
				clone.style.left = "0";
				clone.style.transform = `translate(-50%, -50%)`;
				wrap.appendChild(clone);

				gsap.set(clone, { x, y, scale: 0.9 });
				gsap.to(clone, {
					opacity: 0,
					scale: 1.2,
					duration: 0.6,
					ease: "power2.out",
					onComplete: () => clone.remove()
				});

				gsap.to(imageWrapper, {
					x,
					y,
					duration: 0.3,
					ease: "power3.out"
				});
			});
		}
	}
};
//  reveal text animation
export const initRevealTextSplitAnimation = (): void => {
	const textElements = document.querySelectorAll<HTMLElement>(".reveal-text");

	textElements.forEach((element) => {
		const splitText = new SplitType(element, {
			types: "words,chars",
		});

		gsap.fromTo(
			splitText.chars,
			{ className: "char" },
			{
				className: "char revealed",
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					end: "top 20%",
					scrub: true,
					markers: false,
				},
				stagger: 0.1,
			}
		);
	});
};
// project perspective animation
export const initProjectPerspectiveAnimation = (): (() => void) | void => {
	const projects = document.querySelectorAll<HTMLElement>(
		".project-item.project-style-3.hover-play"
	);

	if (!projects.length) return;

	projects.forEach((project) => {
		project.style.perspective = "1500px";
		project.style.transformStyle = "preserve-3d";
		project.style.overflow = "visible";
		project.style.willChange = "transform";
	});

	const clamp = (val: number, min: number, max: number) =>
		Math.min(max, Math.max(min, val));

	let ticking = false;

	const updateTransform = () => {
		const isMobile = window.innerWidth < 1024;

		const windowHeight = window.innerHeight;

		projects.forEach((project) => {
			const inner = project.querySelector<HTMLElement>(
				".project-item-inner"
			);
			if (!inner) return;

			const img = inner.querySelector<HTMLElement>(
				".bf-portfolio-post-thumbnail img"
			);

			if (isMobile) {
				// reset smoothly
				inner.style.transform = "translateZ(0)";
				if (img) img.style.transform = "translateZ(0)";
				return;
			}

			const rect = project.getBoundingClientRect();

			let percent =
				(rect.top + rect.height / 2 - windowHeight / 2) /
				(windowHeight / 2);

			percent = clamp(percent, -1, 1);

			const rotateX = 25 * -percent;
			const scale = 1 - Math.abs(percent) * 0.08;

			inner.style.transform = `
        translateZ(0)
        rotateX(${rotateX.toFixed(2)}deg)
        scale(${scale.toFixed(3)})
      `;

			inner.style.transition =
				"transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";

			if (img) {
				const translateY = 10 * percent;

				img.style.transform = `translateY(${translateY.toFixed(2)}px)`;
				img.style.transition =
					"transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
			}
		});
	};

	const handle = () => {
		if (ticking) return;

		ticking = true;

		requestAnimationFrame(() => {
			updateTransform();
			ticking = false;
		});
	};

	// initial run AFTER paint
	requestAnimationFrame(updateTransform);

	window.addEventListener("scroll", handle, { passive: true });
	window.addEventListener("resize", handle);

	return () => {
		window.removeEventListener("scroll", handle);
		window.removeEventListener("resize", handle);
	};
};

//portfolio sticky animation
export const initPortfolioStickyAnimation = (): (() => void) | void => {
	let device_width = window.innerWidth;

	if (device_width > 767) {
		const portfolioArea = document.querySelector(".bf-portfolio-sticky-area");
		const portfolioText = document.querySelector(".bf-portfolio-text-sticky");

		if (portfolioArea && portfolioText) {
			let portfolioline = gsap.timeline({
				scrollTrigger: {
					trigger: portfolioArea,
					start: "top center-=200",
					pin: portfolioText,
					end: "bottom bottom+=10",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			});

			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
			portfolioline.to(portfolioText, { scale: 0.6, duration: 1 }, "+=2");

			gsap.to(portfolioText, {
				scrollTrigger: {
					trigger: portfolioArea,
					start: "top center-=100",
					end: "bottom bottom+=10",
					scrub: 1
				},
			});
		}
	}
};
// hover reveal for image
export const initRevealImageAnimation = (): void => {
	const hoverItems = document.querySelectorAll<HTMLElement>(".hover-reveal-item");

	function moveImage(e: MouseEvent, hoverItem: HTMLElement) {
		const rect = hoverItem.getBoundingClientRect();
		const x = e.clientX - rect.x;
		const y = e.clientY - rect.y;

		const child = hoverItem.children[1] as HTMLElement | undefined;

		if (child) {
			child.style.transform = `translate(${x}px, ${y}px)`;
		}
	}

	hoverItems.forEach((item) => {
		item.addEventListener("mousemove", (e: MouseEvent) => {
			moveImage(e, item);
		});
	});
};
// award anim
export const initAwardAnimation = (): void => {
	const aw = gsap.matchMedia();
	aw.add("(min-width: 991px)", () => {
		const awardItems = document.querySelectorAll('.design-award-item');
		awardItems.forEach(function (div) {
			div.addEventListener('mouseenter', function () {
				gsap.to(div, {
					width: '100%',
					duration: 2,
					ease: 'expo.out'
				});
			});
			div.addEventListener('mouseleave', function () {
				gsap.to(div, {
					width: '70%',
					duration: 2,
					ease: 'expo.out'
				});
			});
		})
	});
};
// Initialize hero marquee scroll animations
export const initHeroScrollMarqueeAnimation = (): void => {
	const mm = gsap.matchMedia();

	// -------- LARGE --------
	// Check existence
	if (document.querySelectorAll(".bf-item-anime").length > 0) {
		mm.add("(min-width: 1200px)", () => {
			// Target remains: .bf-item-anime.marque
			gsap.set(".bf-item-anime.marque", {
				x: "-23%",
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: ".bf-hero-anime-area",
					start: "-100 10%",
					end: "bottom 20%",
					scrub: true,
					invalidateOnRefresh: true,
				},
			}).to(".bf-item-anime.marque", {
				x: "100%",
			});
		});
	}

	// -------- MEDIUM --------
	if (document.querySelectorAll(".bf-item-anime-md").length > 0) {
		mm.add("(min-width: 1200px)", () => {
			gsap.set(".bf-item-anime-md.marque", {
				x: "40%",
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: ".bf-hero-anime-area",
					start: "-100 20%",
					end: "bottom 20%",
					scrub: true,
					invalidateOnRefresh: true,
				},
			}).to(".bf-item-anime-md.marque", {
				x: "-100%",
			});
		});
	}
};

// tp-text-right-scroll
export const initTextRightScrollAnimation = (): void => {
	gsap.matchMedia().add("(min-width: 991px)", () => {
		document.querySelectorAll(".title-box").forEach((box) => {
			const rightElements = box.querySelectorAll('.tp-text-right-scroll');
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: box,
					start: "top 100%",
					end: "bottom top",
					scrub: true,
					markers: false,
				}
			});
			if (rightElements.length) {
				tl.fromTo(rightElements, { xPercent: 50 }, { xPercent: -20, ease: "power1.out" }, 0);
			}
		});
	})
}
// portfolio animation
export const initPortfolioAnimation = (): void => {
	if (document.querySelector('.bf-portfolio-3-item')) {
		const pw = gsap.matchMedia();
		pw.add("(min-width: 991px)", () => {
			gsap.set('.bf-portfolio-3-thumb.item-1', { x: 400, rotate: 10, });
			gsap.set('.bf-portfolio-3-thumb.item-2', { x: -400, rotate: -10, });
			document.querySelectorAll('.bf-portfolio-3-item').forEach(item => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: 'top 100%',
						end: 'bottom center',
						scrub: 1,
					}
				});
				tl.to(item.querySelector('.bf-portfolio-3-thumb.item-1'), { x: 0, rotate: 0 })
					.to(item.querySelector('.bf-portfolio-3-thumb.item-2'), { x: 0, rotate: 0 }, 0);
			});
		});
	}
}

// tp-instagram-area
export const initInstagramAnimation = (): void => {
	const el = document.querySelector(".bf-instagram-area");
	// null check
	if (!el) return;

	const mm = gsap.matchMedia();

	mm.add("(min-width: 1200px)", () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top 30%",
				pin: true,
				markers: false,
				scrub: 1,
				pinSpacing: false,
				end: "bottom 100%",
			},
		});

		tl.to(".bf-instagram-thumb img", {
			width: "580px",
			height: "580px",
			borderRadius: "10px",
		});
	});
};

// Button Animation Controller
export const initButtonAnimations = (): void => {
	if (typeof window === "undefined") return;

	/* ----------------------------
	 * 1. Rounded Button Hover Dot
	 * ---------------------------- */
	const roundedButtons = document.querySelectorAll(".bf-btn-rounded");

	roundedButtons.forEach((btn) => {
		btn.addEventListener("mouseenter", (e: any) => {
			const target = e.currentTarget as HTMLElement;

			const rect = target.getBoundingClientRect();

			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const dot = target.querySelector(".bf-btn-circle-dot") as HTMLElement;

			if (dot) {
				dot.style.top = `${y}px`;
				dot.style.left = `${x}px`;
			}
		});
	});

	/* ----------------------------
	 * GSAP Parallax Button Move
	 * ---------------------------- */
	const buttons = gsap.utils.toArray<HTMLElement>(".btn_wrapper, #btn_wrapper");
	const circles = gsap.utils.toArray<HTMLElement>(".btn-item");

	if (buttons.length && circles.length) {
		buttons.forEach((btn, i) => {
			const circle = circles[i];

			if (!circle) return;

			// Mouse move
			btn.addEventListener("mousemove", (e: MouseEvent) => {
				const rect = btn.getBoundingClientRect();

				const relX = e.clientX - rect.left;
				const relY = e.clientY - rect.top;

				gsap.to(circle, {
					duration: 0.5,
					x: ((relX - rect.width / 2) / rect.width) * 80,
					y: ((relY - rect.height / 2) / rect.height) * 80,
					ease: "power2.out",
				});
			});

			// Mouse leave reset
			btn.addEventListener("mouseleave", () => {
				gsap.to(circle, {
					duration: 0.5,
					x: 0,
					y: 0,
					ease: "power2.out",
				});
			});
		});
	}
};

// tp-inner-services-anim
export const initInnerServiceAnimation = (): void => {
	gsap.matchMedia().add("(min-width: 992px)", () => {
		let tl_ser = gsap.timeline();
		let panels = document.querySelectorAll('.tp-inner-service-area')
		panels.forEach((section) => {
			tl_ser.to(section, {
				scrollTrigger: {
					trigger: '.tp-inner-service-area',
					pin: '.inner-service-1-left',
					scrub: 1,
					start: 'top 80px',
					end: "bottom 100%",
					endTrigger: '.tp-inner-service-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});
};
// Scroll-based skew + depth parallax effect for hero and service sections
// Applies subtle 3D rotation, scale, and vertical movement on scroll
export const initScrollSkewParallaxSections = (): void => {
	gsap.matchMedia().add("(min-width: 1199px)", () => {

		gsap.utils
			.toArray<HTMLElement>(['.hero-skew-anim', '.service-skew-anim'])
			.forEach((section) => {

				gsap.set(section, {
					willChange: "transform",
					opacity: 1,
					transform: "none",
				});

				gsap.to(section, {
					y: 180,
					scale: 0.95,
					rotateX: -50,
					transformOrigin: "center top",
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: "bottom top",
						scrub: true,
					},
				});
			});
	});
};