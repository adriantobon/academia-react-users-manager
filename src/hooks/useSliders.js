import { useState } from 'react';

export const useSliders = () => {

  const [rightSlideIsOpen, setRightSlideIsOpen] = useState(false);

  return { rightSlideIsOpen, setRightSlideIsOpen };
}