import { fetchPosts } from "@/app/lib/data";
import Post from "@/app/components/Post";
import type { PostType } from "@/app/lib/definitions";

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post: PostType) => (
        <Post key={post.id} post={post} hasDelete />
      ))}
    </section>
  );
}
