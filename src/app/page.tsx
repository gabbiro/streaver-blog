import Link from "next/link";
import { fetchPosts } from "@/app/lib/data";
import Post from "@/app/components/Post";
import type { PostType } from "@/app/lib/definitions";

export default async function Page() {
  const posts = await fetchPosts(3);

  return (
    <section className="h-full flex flex-col justify-evenly">
      <h1 className="mx-8 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl">
        Latest posts
      </h1>
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {posts.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
      <Link
        className="flex text-m justify-center mt-4 font-medium text-blue-500 underline hover:text-blue-700"
        href="/posts"
      >
        See more {'>'}
      </Link>
    </section>
  );
}
