"use client";
import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

const FUNFACTS = [
	{
		id:1,
		value: 4,
		suffix: "k+",
		label: "Projects completed",
		delay: ".3",
	},
	{
		id:2,
		value: 91,
		suffix: "+",
		label: "Renovation experts",
		delay: ".5",
	},
	{
		id:3,
		value: 42,
		suffix: "+",
		label: "Team members",
		delay: ".7",
	},
	{
		id:4,
		value: 24,
		suffix: "+",
		label: "Awards winning",
		delay: ".8",
	},
];

const CreativeAgencyFunfact = () => {
	const isDarkTheme = useIsDarkRoute();
	const funfactStyles = {
		sectionBackgroundShape: isDarkTheme ? "/assets/img/shape/dot-bg-shape-dark.png" : "/assets/img/shape/dot-bg-shape.png"
	}
	return (
		<div
			className="ar-funfact-area ar-funfact-bg"
			style={{ backgroundImage: `url(${funfactStyles.sectionBackgroundShape})` }}
		>
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
	);
};

export default CreativeAgencyFunfact;