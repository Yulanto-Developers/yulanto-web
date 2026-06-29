
interface skillProps {
    title: string;
    delay: string;
    items: string[]
}
const AboutMeSkillItem: React.FC<skillProps> = ({ title, delay, items }) => {
    return (
        <div className="col-sm-6">
            <div className="am-skill-item mb-45 px-fade-anim" data-delay={delay}>
                <h4>{title}</h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={`${item}-${index}`}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutMeSkillItem;