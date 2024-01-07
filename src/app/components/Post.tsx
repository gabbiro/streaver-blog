"use client";

import type { PostType } from "@/app/lib/definitions";
import useModal from "@/app/hooks/useModal";
import CrossButton from "./CrossButton";
import DeleteFormModal from "./DeleteFormModal";

export default function Post({
  post,
  hasDelete = false,
}: {
  post: PostType;
  hasDelete?: boolean;
}) {
  const [openModal, toggleModal] = useModal();

  return (
    <>
      <article className="flex flex-col justify-between max-w-sm rounded overflow-hidden justify-self-center shadow-lg px-6 py-6">
        {hasDelete && <CrossButton onClick={toggleModal} />}
        <h2 className="font-bold text-xl mb-2">{post.title}</h2>
        {post.body && (
          <p className="text-gray-700 text-base mb-2">{post.body}</p>
        )}
        <p>{post.user.name}</p>
      </article>
      {openModal && (
        <DeleteFormModal toggleModal={toggleModal} postId={post.id} />
      )}
    </>
  );
}
