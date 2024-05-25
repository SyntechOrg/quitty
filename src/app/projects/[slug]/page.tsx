import { ProjectsBanner } from "@/components/projects";
import { ProjectInteraction } from "@/components/projects/ProjectInteraction";
import { getAllPosts, getPostBySlug } from "@/lib/helpers/markdown";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug);

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
    </div>
  );
};

export default PostPage;
