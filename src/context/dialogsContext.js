import { createContext } from 'react';
import { useModals, useSliders } from '../hooks';

const contextInit = {
  modalIsOpen: false,
  setModalIsOpen: () => undefined,
  rightSlideIsOpen: false,
  setRightSlideIsOpen: () => undefined,
};

export const dialogsContext = createContext(contextInit);

export const DialogsContextProvider = ({children}) => {
  
  const { modalIsOpen, setModalIsOpen } = useModals();
  const { rightSlideIsOpen, setRightSlideIsOpen } = useSliders();

  const contextValue = {
    modalIsOpen,
    setModalIsOpen,
    rightSlideIsOpen,
    setRightSlideIsOpen
  }
  
  return (
    <dialogsContext.Provider value={contextValue}>
      {children}
    </dialogsContext.Provider>
  )
}