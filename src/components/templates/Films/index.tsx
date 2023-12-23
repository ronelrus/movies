import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";

import Loader from "@/components/common/Loader";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";
import Modal from "@/components/common/Modal/Modal"
import { Context } from "@/components/common/Modal/ModalContext";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));
  const [film, useFilm] = useState(null);
  const [films, useFilms] = useState(filmList);
  const [search, useSearch] = useState("");

  const searchHandler = (e) => {
    useSearch(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  };

  return filmList ? (
    <Context.Provider value={{ film, useFilm }}>
      <Style.Films>
        <Style.Content>
          <Style.Background src="https://uhdwallpapers.org/download/macos-monterey_897687/1920x1080/" />
          <Style.Title>Films</Style.Title>
          <Style.Search onInput={searchHandler} />
          <Style.List>{
            filmList?.data.movies.map((film) => {
              return <Film key={film.id} {...film}></Film>;
            })}
          </Style.List>
          <Pagination
            totalUsersCount={filmList?.data?.movie_count}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={(page) => setPage(page)}
          />
        </Style.Content>
      </Style.Films>
      <Modal />
    </Context.Provider>
  ) : null;
};

export default Films;
