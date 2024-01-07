import Link from "next/link";
import { fetchFilteredPosts } from "@/app/lib/data";
import Post from "@/app/components/Post";
import type { PostType } from "@/app/lib/definitions";

export default async function Page() {
  const posts = await fetchFilteredPosts(3);

  return (
    <section className="p-8 overflow-y-auto block h-[calc(100vh-108px)]">
      <div className="h-full w-full inline-flex flex-col justify-evenly">
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
      </div>
    </section>
  );
}
