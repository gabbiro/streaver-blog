"use client"

import { RefObject, useCallback, useEffect } from "react";

export default function useClickOutsideModal({
  pending,
  modalRef,
  toggleModal,
}: {
  pending: boolean;
  modalRef: RefObject<HTMLDivElement>;
  toggleModal: () => void;
}) {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        !pending &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        toggleModal();
      }
    },
    [pending, modalRef, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);
}
