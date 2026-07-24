import { services } from "@/data/site-data";

const Service = () => {
	return (
		<div
			className="px-service-area px-service-3-style pt-120 pb-50 z-index-1"
			style={{ backgroundColor: "#000000" }}
		>
			<div className="container container-1750">
				{/* Title */}
				<div className="row">
					<div className="col-xl-12">
						<div
							className="px-service-text text-center mb-50 px-fade-anim"
							data-delay=".3"
						>
							<h2 className="px-about-3-bigtext text-white">
								Our Development Process
							</h2>
						</div>
					</div>
				</div>

				<div className="row align-items-start">
					{/* Video */}
					<div className="col-xl-3 d-none d-xl-block">
						<div className="px-service-3-video">
							<video width={350} loop muted autoPlay playsInline>
								<source
									src="https://html.aqlova.com/videos/pixora/service-video.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>

					{/* Accordion */}
					<div className="col-xl-9">
						<div className="px-service-accordion-wrap">
							<div className="accordion" id="accordionExample1">
								{services.map((service, index) => {
									const collapseId = `collapse${service.id}`;
									const headingId = `heading${service.id}`;
									const isFirst = index === 0;

									return (
										<div key={service.id} className="accordion-items">
											<h2 className="accordion-header" id={headingId}>
												<button
													className={`accordion-buttons ${
														!isFirst ? "collapsed" : ""
													}`}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={`#${collapseId}`}
													aria-expanded={isFirst}
													aria-controls={collapseId}
												>
													<i>
														<service.Icon />
													</i>

													{service.title}

													<span className="accordion-icon"></span>
												</button>
											</h2>

											<div
												id={collapseId}
												className={`accordion-collapse collapse ${
													isFirst ? "show" : ""
												}`}
												data-bs-parent="#accordionExample1"
											>
												<div className="accordion-body">

													{service.description.map((item, i) => (
														<div key={i} className="mb-4">

															{typeof item === "string" ? (
																<p>{item}</p>
															) : (
																<>
																	<h5
																		style={{
																			color: "#fff",
																			marginBottom: "10px",
																			fontWeight: 600,
																		}}
																	>
																		{item.desTitle}
																	</h5>

																	<p>
																		{item.descPara}
																	</p>
																</>
															)}

														</div>
													))}

													{service.categories && (
														<div className="px-service-accordion-category">
															{service.categories.map((cat) => (
																<span key={`${service.id}-${cat}`}>
																	{cat}
																</span>
															))}
														</div>
													)}

												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;