"use client";
import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

const FUNFACTS = [
	{
		id: 1,
		value: 110,
		suffix: "+",
		label: "Dynamic Websites",
		delay: ".3",
	},
	{
		id: 2,
		value: 100,
		suffix: "+",
		label: "Happy Clients",
		delay: ".5",
	},
	{
		id: 3,
		value: 80,
		suffix: "+",
		label: "Chennai Clients",
		delay: ".7",
	},
	{
		id: 4,
		value: 100,
		suffix: "%",
		label: "Client Satisfaction",
		delay: ".8",
	},
];

const CreativeAgencyFunfact = () => {
	const isDarkTheme = useIsDarkRoute();
	const funfactStyles = {
		sectionBackgroundShape: isDarkTheme ? "/assets/img/shape/dot-bg-shape-dark.png" : "/assets/img/shape/dot-bg-shape.png"
	}
	return (
		<>

			<div
				className="ar-funfact-area ar-funfact-bg"
				style={{ backgroundImage: `url(${funfactStyles.sectionBackgroundShape})`, paddingTop: "20px" }}
			>
				<SectionTitle
					subtitle="Our Achievements"
					titleFirst="Website Creators "
					titleSecond="in Chennai"
					description="Impactful Dynamic Designing Trusted By Enterprises
Dynamic website design provides adaptability, engagement, and expandability, allowing it to be utilized for various purposes, ranging from individual blogs to extensive e-commerce websites." animationType="text-reveal-lines" delay={300} />

				<div className="container container-1330">
					<div className="row">
						{FUNFACTS.map((item) => (
							<div className="col-lg-3 col-md-4" key={item.id}>
								<div
									className="ar-funfact-item text-center mb-45 tp_fade_anim"
									data-delay={item.delay}
								>
									<h4>
										<AnimatedCounterTwo min={0} max={item.value} />
										{item.suffix}
									</h4>
									<span>{item.label}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>

	);
};

export default CreativeAgencyFunfact;