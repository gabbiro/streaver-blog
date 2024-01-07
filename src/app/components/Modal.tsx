import { useRef } from "react";
import { useFormStatus } from "react-dom";
import useClickOutsideModal from "@/app/hooks/useClickOutsideModal";
import CrossButton from "./CrossButton";

export default function Modal({
  toggleModal,
  errorMessage,
}: {
  toggleModal: () => void;
  errorMessage: string;
}) {
  const modalRef = useRef(null);
  const { pending } = useFormStatus();
  useClickOutsideModal({ toggleModal, pending, modalRef });

  return (
    <div
      ref={modalRef}
      className="bg-white rounded shadow-md p-8 mx-auto my-20 w-1/3"
    >
      <CrossButton disabled={pending} onClick={toggleModal} />
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <h1 className="font-bold text-lg mb-2">
        Are you sure you want to delete this post?
      </h1>
      <p> This action cannot be undone.</p>
      <div className="text-center md:text-right mt-6 md:flex md:justify-end">
        <div className="md:flex items-center">
          <button
            disabled={pending}
            type="button"
            onClick={toggleModal}
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={pending}
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2"
          >
            {pending ? "Deleting..." : "Delete post"}
          </button>
        </div>
      </div>
    </div>
  );
}
