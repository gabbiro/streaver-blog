"use client"

import { useState } from "react";

export default function useModal(): [boolean, () => void] {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    if (!openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    setOpenModal(!openModal);
  };

  return [openModal, toggleModal];
}
