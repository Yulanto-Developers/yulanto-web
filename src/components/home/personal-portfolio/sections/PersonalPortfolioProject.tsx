"use client";
import PersonalPortfolioProjectItem from "../components/PersonalPortfolioProjectItem";
import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Netrix", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-6/project-1.jpg" },
  { id: 2, title: "Easy Culi", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-1.jpg" },
  { id: 3, title: "Space Needle", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-2.jpg" },
  { id: 4, title: "Fabric", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-3.jpg" },
];

const PersonalPortfolioProject = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="px-project-6-area pt-120">
      <div className="px-project-6-wrap projects p-relative">

        {/* LIST */}
        <div className="px-project-6-inner">
          {projects.map((project, index) => (
            <PersonalPortfolioProjectItem
              key={project.id}
              project={project}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          ))}
        </div>

        {/* IMAGE PREVIEW */}
        <div className="px-project-6-img-wrap">
          <div className="px-project-6-img-slider">
            {projects.map((project) => (
              <Image
                key={project.id}
                src={project.img}
                alt={project.title}
                width={330}
                height={330}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPortfolioProject;