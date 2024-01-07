import { fetchFilteredPosts } from "@/app/lib/data";
import Post from "@/app/components/Post";
import type { PostType } from "@/app/lib/definitions";
import EmptyResults from "@/app/components/EmptyResults";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const posts = await fetchFilteredPosts(null, query);

  if (posts.length === 0) {
    return <EmptyResults />
  }
  return (
    <section className="overflow-y-auto block h-[calc(100vh-196px)] pb-1">
      <div className="px-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post: PostType) => (
          <Post key={post.id} post={post} hasDelete />
        ))}
      </div>
    </section>
  );
}
