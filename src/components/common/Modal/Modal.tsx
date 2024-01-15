import React from "react";
import * as Style from "./index.styled";
import Details from "@/components/templates/Details/index"
import { ModalContext } from "./ModalContext";

const Modal = React.FC<> = () => {
  const { film, useFilm } = React.useContext(ModalContext);

  const closeHandler = (e) => {
    if (e.target?.id) {
        document.body.style.overflow = 'unset';
        useFilm(null);
    }
  }

  return film != null ? (
        <Style.ModalContainer id="Container" onClick={ closeHandler }>
          <Style.ModalBody>
            <Style.Close id="Close" onClick={ closeHandler }>⤫</Style.Close>
            <Details />
          </Style.ModalBody>
        </Style.ModalContainer>
    ) : "";
};
export default Modal;