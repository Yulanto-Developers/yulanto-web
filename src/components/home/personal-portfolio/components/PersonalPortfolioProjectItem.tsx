import Link from "next/link";

interface Props {
  project: {
    id: number;
    title: string;
    category: string;
    img: string;
  };
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}

const PersonalPortfolioProjectItem: React.FC<Props> = ({
  project,
  index,
  hoverIndex,
  setHoverIndex,
}) => {
  const isActive = hoverIndex === null || hoverIndex === index;

  return (
    <div
      className={`px-project-6-item ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      data-index-number={index} 
    >
      <Link href="/portfolio-details-2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="px-project-6-content d-flex">
                    <span>({String(project.id).padStart(2, "0")})</span>
                    <h4 className="px-project-6-title">{project.title}</h4>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="px-project-6-content text-lg-end">
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonalPortfolioProjectItem;