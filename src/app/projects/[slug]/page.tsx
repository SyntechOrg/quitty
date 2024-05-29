import { ChallengeAndSolution, ProjectsBanner } from "@/components/projects";
import { ProjectInteraction } from "@/components/projects/ProjectInteraction";
import { Image } from "@/components/shared/image/Image";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { projects } from "../../../../projects";
import { notFound } from "next/navigation";
import AllProjects from "@/components/sections/allProjects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const project = projects.find((proj) => proj.slug === params.slug);

  const firstInteractions = project?.interactions.slice(0, 2) ?? [];
  const secondInteractions = project?.interactions.slice(2, 4) ?? [];

  if (!project) {
    notFound();
  }

  return (
    <div>
      <ProjectsBanner {...project} />
      <ProjectInteraction interactions={firstInteractions} />
      <ChallengeAndSolution
        challenge={{
          ...project.mainChallenge,
        }}
        solution={{ ...project.ourSolution }}
      />
      {project?.projectViewImageOne && (
        <div className="w-full h-[460px] lg:h-[929px] relative">
          <Image
            src={project.projectViewImageOne}
            alt="Project Showcase 1"
            wrapperClassNames="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {project?.projectViewImageTwo && (
        <div className="w-full h-[700px] lg:h-[1440px] mt-[60px] lg:mt-[136px]">
          <Image
            src={project?.projectViewImageTwo}
            alt="Project Showcase 1"
            wrapperClassNames="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <ProjectInteraction interactions={secondInteractions} />
      <AllProjects itemsToShow={3} />
      <SocialMedia className="mt-[100px] lg:mt-[200px]" />
    </div>
  );
};

export default PostPage;
