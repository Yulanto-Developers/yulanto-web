import AboutMeSkillItem from "../components/AboutMeSkillItem";

const SKILLS = [
    {
        id: 1,
        title: "Product Design",
        delay: ".3",
        items: ["UX/UI Design", "Prototyping", "Design System", "Developer Handoff"],
    },
    {
        id: 2,
        title: "Brand Design",
        delay: ".5",
        items: ["Logo Design", "Brand Guidelines", "Presentations", "Digital & Print assets"],
    },
    {
        id: 3,
        title: "Motion Design",
        delay: ".7",
        items: ["UI Animations", "Logo Animations", "Illustration Animations", "Explainer Videos"],
    },
    {
        id: 4,
        title: "Web Development",
        delay: ".9",
        items: ["Front-End Development", "WordPress Theme", "SEO"],
    },
];

const AboutMeSkill = () => {
    return (
        <div className="am-skill-area am-skill-bdr pt-60 pb-40">
            <div className="container">
                <div className="row">
                    {/* Left Title */}
                    <div className="col-lg-5">
                        <div className="am-skill-title-box">
                            <span className="px-section-subtitle text-uppercase pb-30">
                                About
                            </span>
                            <h4 className="px-section-title ff-thunder fs-80">Skills</h4>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="col-lg-7">
                        <div className="row">
                            {SKILLS.map((skill) => (
                                <AboutMeSkillItem
                                    key={skill.id}
                                    title={skill.title}
                                    items={skill.items}
                                    delay={skill.delay}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSkill;