import PortfolioThreeItem from "../components/PortfolioThreeItem";
import Image from "next/image";

const portfolioItems = [
    {
        id: 1,
        title: "Netrix",
        service: "Design & Development",
        year: "2024",
    },
    {
        id: 2,
        title: "Easy Culi",
        service: "Interaction & Development",
        year: "2024",
    },
    {
        id: 3,
        title: "Space Needle",
        service: "Design & Development",
        year: "2024",
    },
    {
        id: 4,
        title: "Graphic Hunters",
        service: "Web Design, Envato Development",
        year: "2024",
    },
    {
        id: 5,
        title: "Future Goals",
        service: "Interaction & Development",
        year: "2024",
    },
    {
        id: 6,
        title: "Easy Culi",
        service: "Web Design, Envato Development",
        year: "2024",
    },
    {
        id: 7,
        title: "Spanio",
        service: "Design & Development",
        year: "2024",
    },
];

const images = [
    "/assets/img/project/project-6/project-1.jpg",
    "/assets/img/project/project-1.jpg",
    "/assets/img/project/project-2.jpg",
    "/assets/img/project/project-3.jpg",
    "/assets/img/project/project-4.jpg",
    "/assets/img/project/project-5.jpg",
    "/assets/img/project/project-6.jpg",
];

const PortfolioThreeMain = () => {
    return (
        <div className="px-project-6-area px-project-inner-style pt-120 pb-160">

            {/* HEADER */}
            <div className="px-project-inner-top-ptb">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-9">
                            <div className="px-project-inner-top-wrap">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="px-project-inner-header">
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="px-project-inner-header d-flex justify-content-between">
                                            <span>Services</span>
                                            <span>Year</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECT LIST */}
            <div className="px-project-6-wrap projects p-relative">
                <div className="px-project-6-inner">
                    {portfolioItems.map((item, index) => (
                        <PortfolioThreeItem
                            key={item.id}
                            {...item}
                            index={index}
                        />
                    ))}
                </div>

                {/* IMAGES */}
                <div className="px-project-6-img-wrap">
                    <div className="px-project-6-img-slider">
                        {images.map((img) => (
                            <Image className="img-fluid" width={330} height={330} key={img} src={img} alt="portfolio" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeMain;