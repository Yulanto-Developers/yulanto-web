
interface serviceItemProps {
    description: string
    name: string,
    designation: string,
}

const ServiceTestimonialItem: React.FC<serviceItemProps> = ({ description, name, designation }) => {
    return (
        <div className="ar-testimonial-item text-center">
            <p>{description}</p>
            <div className="ar-testimonial-client-info text-center">
                <h4 className="ar-testimonial-client-name">{name}</h4>
                <span>{designation}</span>
            </div>
        </div>
    );
};

export default ServiceTestimonialItem;