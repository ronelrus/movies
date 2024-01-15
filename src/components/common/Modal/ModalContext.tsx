import { createContext } from "react";

type ModalType = {
    film: string,
    useFilm: Function,
};

export const ModalContext = createContext({} as ModalType);