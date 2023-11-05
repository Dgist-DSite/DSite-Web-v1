import {ModalContainer, ModalBackdrop, ModalView} from "./ModalStyle";

export default function Modal({ isOpen, setIsOpen, content, children }) {
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  };
  return (
    <ModalContainer>
      {children}
      {isOpen ?
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            {content}
          </ModalView>
        </ModalBackdrop>
        : null
      }
    </ModalContainer>
  )
}