import { SmartLink } from '@/components/common';
import { ServiceDT } from '@/types';
import Image from 'next/image';

const ServiceItem: React.FC<ServiceDT> = ({ id, href, title, images }) => {
    return (
        <div
            key={id}
            className="px-service-4-item d-flex justify-content-between align-items-center"
        >
            <div className="px-service-4-content d-flex align-items-center">
                <span>[0{id}]</span>

                <SmartLink href={href}>
                    <h4 className="px-service-4-title px-3d-anim">
                        <span>{title}</span>
                        <span>{title}</span>
                    </h4>
                </SmartLink>
            </div>

            <div className="px-service-4-thumb d-none d-md-block px-3d-anim">
                {images.map((img, index) => (
                    <span key={`${img}-${index}`}>
                        <Image
                            src={img}
                            alt={title}
                            width={120}
                            height={70}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ServiceItem;