import type { PostType } from "@/app/lib/definitions";

export default function Post({ post }: { post: PostType }) {
  return (
    <article className="flex flex-col justify-between max-w-sm rounded overflow-hidden justify-self-center shadow-lg px-6 py-6">
      <h2 className="font-bold text-xl mb-2">{post.title}</h2>
      {post.body && <p className="text-gray-700 text-base mb-2">{post.body}</p>}
      <p>{post.user.name}</p>
    </article>
  );
}
