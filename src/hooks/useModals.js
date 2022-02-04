import { useState } from 'react';

export const useModals = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return { modalIsOpen, setModalIsOpen };
}