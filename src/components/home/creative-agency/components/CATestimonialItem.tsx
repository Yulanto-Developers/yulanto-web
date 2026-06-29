
interface CATestimonialItemProps {
    text: string;
    name: string;
    role: string;
};

const CATestimonialItem: React.FC<CATestimonialItemProps> = ({ text, name, role }) => {
    return (
        <div className="ar-testimonial-item text-center">
            <p>{text}</p>
            <div className="ar-testimonial-client-info text-center">
                <h4 className="ar-testimonial-client-name">
                    {name}
                </h4>
                <span>{role}</span>
            </div>
        </div>
    );
};

export default CATestimonialItem;