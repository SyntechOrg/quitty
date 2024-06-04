import { ChallengeAndSolution, ProjectsBanner } from "@/components/projects";
import { ProjectInteraction } from "@/components/projects/ProjectInteraction";
import { Image } from "@/components/shared/image/Image";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { projectsEnglish, projectsDeutsch } from "../../../../../projects";
import { notFound } from "next/navigation";
import AllProjects from "@/components/sections/AllProjects";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { Metadata } from "next";

interface Props {
  params: { slug: string; locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const isEnglish = params.locale === "en";

  const product = isEnglish
    ? projectsEnglish.find((project) => project.slug === slug)
    : projectsDeutsch.find((project) => project.slug === slug);

  return {
    title: `Syntech Solutions AG | ${product?.title}`,
    openGraph: {
      images: product?.heroImage ? [product.heroImage] : [],
    },
  };
}

type PostPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const { locale, slug } = params;
  const projects = locale === "en" ? projectsEnglish : projectsDeutsch;

  const project = projects.find((proj) => proj.slug === slug);

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
        <FadeIn className="mt-[160px] h-[700px] w-full lg:mt-[136px] lg:h-[1440px]">
          <Image
            src={project?.projectViewImageTwo}
            alt="Project Showcase 1"
            wrapperClassNames="w-full h-full"
            className="h-full w-full object-cover"
          />
        </FadeIn>
      )}
      <ProjectInteraction interactions={secondInteractions} />
      <AllProjects itemsToShow={3} slug={params.slug} random />
      <SocialMedia className="mt-[100px] lg:mt-[200px]" />
    </div>
  );
};

export default PostPage;
