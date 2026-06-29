import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/assets/img/project/portfolio-details-1/portfolio-details-thumb-5.jpg",
    col: "col-lg-12",
  },
  {
    id: 2,
    src: "/assets/img/project/portfolio-details-1/portfolio-details-thumb-6.jpg",
    col: "col-lg-6",
  },
  {
    id: 3,
    src: "/assets/img/project/portfolio-details-1/portfolio-details-thumb-7.jpg",
    col: "col-lg-6",
  },
];

const PortfolioDetailsThumbTwo = () => {
  return (
    <div className="px-pd-2-thumb-ptb pb-100">
      <div className="container container-1230">
        <div className="row gx-20">
          {images.map((item) => (
            <div className={item.col} key={item.id}>
              <div className="px-pd-2-thumb-item mb-20">
                <Image
                  className="img-fluid w-100 h-auto"
                  width={1206}
                  height={905}
                  data-speed=".8"
                  src={item.src}
                  alt="portfolio-thumb"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsThumbTwo;