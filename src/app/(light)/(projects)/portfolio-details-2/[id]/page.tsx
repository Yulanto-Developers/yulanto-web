
import { PortfolioDetailsVarientTwo } from '@/components/portfolio/portfolio-details-2/sections';
import { portfolioProjects } from '@/data/portfolio-projects';
import { PageParamsProps } from '@/types/custom-dt';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const project = portfolioProjects.find((item) => item.id === Number(id));
    return {
        title: project?.title ? project.title : "Portfolio Details Two",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
          <main>
            <PortfolioDetailsVarientTwo id={id}/>
        </main>
    );
}