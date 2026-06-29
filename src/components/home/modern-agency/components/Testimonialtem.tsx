import { TestimonialItemProps } from '@/types';
import Image from 'next/image';

const Testimonialtem: React.FC<TestimonialItemProps> = ({ quote, avatar, name, designation }) => {
    return (
        <div className="px-testimonial-item">
            <p>
                {quote}
            </p>
            <div className="px-testimonial-client d-flex align-items-center">
                <div className="px-testimonial-avater mr-20">
                    <Image
                        src={avatar}
                        alt={name}
                        width={80}
                        height={80}
                    />
                </div>

                <div className="px-testimonial-client-info">
                    <h4 className="px-testimonial-client-name">
                        {name}
                    </h4>
                    <span>{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonialtem;