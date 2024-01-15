import { createContext } from "react";

type FilmsType = {
    search : string,
    useSearch : Function,
    genre : string,
    useGenre : Function,
    sort: string,
    useSort: Function,
}

export const FilmsContext = createContext({} as FilmsType);