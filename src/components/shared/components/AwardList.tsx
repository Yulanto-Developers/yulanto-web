import { AwardItemProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const AwardList:React.FC<AwardItemProps> = ({id, image, title, nomination, year}) => {
    return (
        <div
            key={id}
            className="px-award-item px-fade-anim"
            data-delay={""}
        >
            <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-1">
                    <div className="px-award-num">
                        <span>({String(id).padStart(3, "0")})</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-5">
                    <div className="px-award-category d-flex align-items-center gap-2">
                        <Image
                            src={image}
                            alt={title}
                            width={20}
                            height={20}
                        />
                        <span>{title}</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-5">
                    <div className="px-award-nomination">
                        <span>{nomination}</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-2 col-md-1">
                    <div className="px-award-year text-md-end">
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardList;