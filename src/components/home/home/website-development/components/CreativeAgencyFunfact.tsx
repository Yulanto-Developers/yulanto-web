"use client";
import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import creativestats, { DyanmicTitle } from "./creativestatsdata"

interface staticDT extends DyanmicTitle {
	num1: number;
	num2: number;
	className?: string;
}

const CreativeAgencyFunfact = ({ num1, num2, titleFirst, titleHighlight, titleSecond, className }: staticDT) => {

	const data = creativestats.slice(num1, num2);

	const isDarkTheme = useIsDarkRoute();
	// const funfactStyles = {
	// 	sectionBackgroundShape: isDarkTheme ? "/assets/images/patterns/pattern-2.png" : "/assets/images/patterns/pattern-2.png"
	// }
	return (
		<>
			{/* style={{ backgroundImage: `url(${funfactStyles.sectionBackgroundShape})`, paddingTop: "20px" }} */}
			<div
				className={`ar-funfact-area ar-funfact-bg ${className || " "}`}>
				<h4
					className="px-about-title mb-30 text-center"
					data-aos="fade-down"
					data-aos-delay="100"
				>
					{titleFirst}{''}<span className="text-blue-about"> {titleHighlight}{''}  </span> {titleSecond}
				</h4>
				<div className="container container-1330 mt-3">
					<div className="row">
						{data.map((item) => (
							<div className="col-lg-3 col-md-4" key={item?.id}>
								<div
									className="ar-funfact-item text-center mb-45 tp_fade_anim"
									data-delay={item?.delay}
								>
									<h4>
										<AnimatedCounterTwo min={0} max={item?.value || 0} />
										{item?.suffix}
									</h4>
									<span>{item?.label}</span>
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