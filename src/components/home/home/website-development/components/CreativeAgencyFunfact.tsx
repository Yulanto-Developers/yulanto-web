// CreativeAgencyFunfact.jsx
"use client";
import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import creativestats from "./creativestatsdata";

const CreativeAgencyFunfact = ({
	sectionTitle = {
		subtitle: "Our Achievements",
		titleFirst: "Website Creators ",
		titleSecond: "in Chennai",
		description: "Impactful Dynamic Designing Trusted By Enterprises Dynamic website design provides adaptability, engagement, and expandability, allowing it to be utilized for various purposes, ranging from individual blogs to extensive e-commerce websites.",
		animationType: "text-reveal-lines" as const,
		delay: 200
	},
	statsData = creativestats.slice(0, 4),
	customClassName = ""
}) => {
	const isDarkTheme = useIsDarkRoute();
	const funfactStyles = {
		sectionBackgroundShape: isDarkTheme ? "/assets/images/patterns/pattern-2.png" : "/assets/images/patterns/pattern-2.png"
	};

	return (
		<div
			className={`ar-funfact-area ar-funfact-bg ${customClassName}`}
			style={{ backgroundImage: `url(${funfactStyles.sectionBackgroundShape})`, paddingTop: "20px" }}
		>
			<SectionTitle
				subtitle={sectionTitle.subtitle}
				titleFirst={sectionTitle.titleFirst}
				titleSecond={sectionTitle.titleSecond}
				description={sectionTitle.description}
				animationType={sectionTitle.animationType}
				delay={sectionTitle.delay}
			/>

			<div className="container container-1330 mt-3">
				<div className="row">
					{statsData.map((item) => (
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
	);
};

export default CreativeAgencyFunfact;