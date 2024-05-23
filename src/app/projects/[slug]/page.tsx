import { ProjectsBanner } from "@/components/projects";
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
    </div>
  );
};

export default PostPage;
