import { SmartLink } from "@/components/common";
import { HeroArrowIcon } from "@/svg/ArrowIcons";
import Image from "next/image";

const SERVICES = [
	{
		id:1,
		icon: "/assets/img/service/icon/icon-1.png",
		title: "Brand Strategy",
		href: "/service-2",
	},
	{
		id:2,
		icon: "/assets/img/service/icon/icon-2.png",
		title: "Web Development",
		href: "/service-2",
	},
	{
		id:3,
		icon: "/assets/img/service/icon/icon-3.png",
		title: "UI/UX Design",
		href: "/service-2",
	},
	{
		id:4,
		icon: "/assets/img/service/icon/icon-4.png",
		title: "Digital Marketing",
		href: "/service-2",
	},
];

const CreativeAgencyService = () => {
	return (
		<div className="px-service-5-area">
			<div className="container container-1550">
				<div className="row">
					{SERVICES.map((service) => (
						<div className="col-xl-3 col-lg-4 col-md-6" key={service.id}>
							<div className="px-service-5-item mb-25 px-fade-anim">

								{/* ICON */}
								<div className="px-service-5-icon">
									<Image className="img-fluid w-auto h-auto" width={90} height={60} src={service.icon} alt={service.title} />
								</div>

								{/* CONTENT */}
								<div className="px-service-5-content">
									<h4 className="px-service-5-title">
										<SmartLink className="px-line-lr" href={service.href}>
											{service.title}
										</SmartLink>
									</h4>

									<p>
										Brand identity design a the have to success whether you
										breath onfire quanto agency.
									</p>
								</div>
								{/* LINK */}
								<div className="px-service-5-link">
									<SmartLink className="px-doubble-effect" href={service.href}>
										View details
										<i>
											<HeroArrowIcon />
											<HeroArrowIcon />
										</i>
									</SmartLink>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyService;