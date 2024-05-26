import { ChallengeAndSolution, ProjectsBanner } from "@/components/projects";
import { ProjectInteraction } from "@/components/projects/ProjectInteraction";
import { Image } from "@/components/shared/image/Image";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { getAllPosts, getPostBySlug } from "@/lib/helpers/markdown";
import projectShowCase1 from "@/assets/images/projects/project-1/showcase-1.png";
import projectShowCase2 from "@/assets/images/projects/project-1/showcase-2.png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostBySlug(params.slug);

  console.log(post);

  return (
    <div>
      <ProjectsBanner />
      <ProjectInteraction
        interactions={[
          {
            avatar: null,
            description: `Hi Syntech Team,
We're in a bit of a bind! Our online shop has been running since 2011 without any significant updates. It's high time for a major redesign. To effectively engage with potential clients, we recognize the urgent need for a revamped and impactful webshop presence. Can you assist us in this endeavor?`,
            name: "John Doe",
            title: "Designer",
          },
          {
            avatar: null,
            description: `Hi Timo,
Thanks for reaching out! It's with great pleasure that we assist you and the Spandoekman.nl Team with your vision. Your goal aligns perfectly with what we're great at here at Syntech Team.We've noted your request and wasted no time in executing your webshop vision. We're thrilled to unveil the results below. Brace yourselves for the excitement as we present your brand-new shop...`,
            name: "John Doe 2",
            title: "Designer",
          },
        ]}
      />
      <ChallengeAndSolution
        challenge={{
          title: "We are more than just a team",
          description: `We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of'every project step. We are Ministry`,
          imageUrl: null,
        }}
        solution={{
          title: "We are more than just a team",
          description: `We are listeners, because we hear and listen. We are genies, who will grant more, than 3 wishes. We are a bunch of specialists, who know how to take care of every project step. We are Ministry`,
          imageUrl: null,
        }}
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
      <ProjectInteraction
        interactions={[
          {
            avatar: null,
            description: `Hi Syntech Team,
We're in a bit of a bind! Our online shop has been running since 2011 without any significant updates. It's high time for a major redesign. To effectively engage with potential clients, we recognize the urgent need for a revamped and impactful webshop presence. Can you assist us in this endeavor?`,
            name: "John Doe",
            title: "Designer",
          },
          {
            avatar: null,
            description: `Hi Timo,
Thanks for reaching out! It's with great pleasure that we assist you and the Spandoekman.nl Team with your vision. Your goal aligns perfectly with what we're great at here at Syntech Team.We've noted your request and wasted no time in executing your webshop vision. We're thrilled to unveil the results below. Brace yourselves for the excitement as we present your brand-new shop...`,
            name: "John Doe 2",
            title: "Designer",
          },
        ]}
      />
      <SocialMedia />
    </div>
  );
};

export default PostPage;
