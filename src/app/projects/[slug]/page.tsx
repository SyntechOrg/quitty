import { ChallengeAndSolution, ProjectsBanner } from "@/components/projects";
import { ProjectInteraction } from "@/components/projects/ProjectInteraction";
import { Image } from "@/components/shared/image/Image";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import projectShowCase1 from "@/assets/images/projects/project-1/showcase-1.png";
import projectShowCase2 from "@/assets/images/projects/project-1/showcase-2.png";
import { projects } from "../../../../projects";
import { notFound } from "next/navigation";

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
      <Image
        src={projectShowCase1}
        alt="Project Showcase 1"
        wrapperClassNames="w-full h-[929px]"
      />
      <Image
        src={projectShowCase2}
        alt="Project Showcase 1"
        wrapperClassNames="w-full h-[1440px] mt-[136px]"
      />
      <ProjectInteraction interactions={secondInteractions} />
      <SocialMedia className="mt-[100px] lg:mt-[200px]" />
    </div>
  );
};

export default PostPage;
