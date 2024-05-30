import { ChallengeAndSolution, ProjectsBanner } from '@/components/projects';
import { ProjectInteraction } from '@/components/projects/ProjectInteraction';
import { Image } from '@/components/shared/image/Image';
import { SocialMedia } from '@/components/shared/social-media/SocialMedia';
import { projects } from '../../../../projects';
import { notFound } from 'next/navigation';
import AllProjects from '@/components/sections/AllProjects';

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
      {project?.projectViewImageTwo && (
        <div className="mt-[160px] h-[700px] w-full lg:mt-[136px] lg:h-[1440px]">
          <Image
            src={project?.projectViewImageTwo}
            alt="Project Showcase 1"
            wrapperClassNames="w-full h-full"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <ProjectInteraction interactions={secondInteractions} />
      <AllProjects itemsToShow={3} slug={params.slug} random />
      <SocialMedia className="mt-[100px] lg:mt-[200px]" />
    </div>
  );
};

export default PostPage;
