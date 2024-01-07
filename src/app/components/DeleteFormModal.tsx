import { useFormState } from "react-dom";
import { deletePost } from "@/app/lib/actions";
import Modal from "./Modal";
import { useEffect } from "react";

export default function DeleteFormModal({
  toggleModal,
  postId,
}: {
  toggleModal: () => void;
  postId: number;
}) {
  const deletePostById = deletePost.bind(null, postId);
  const initialState = { errorMessage: "", success: false };
  const [state, dispatch] = useFormState(deletePostById, initialState);

  useEffect(() => {
    if (state.success) toggleModal();
  }, [state, toggleModal]);

  return (
    <form action={dispatch} className="fixed left-0 top-0 bg-black bg-opacity-50 z-50 w-screen h-screen">
      <Modal
        toggleModal={toggleModal}
        errorMessage={state.errorMessage}
      />
    </form>
  );
}
