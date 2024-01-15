import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState, useContext } from "react";
import { ModalContext } from "@/components/common/Modal/ModalContext";
import { FilmsContext } from "@/components/templates/Films/FilmsContext";

import Loader from "@/components/common/Loader";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";
import Modal from "@/components/common/Modal/Modal"


const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { search, useSearch } = useContext(FilmsContext);
  const { genre, useGenre } = useContext(FilmsContext);
  const { sort, useSort } = useContext(FilmsContext);
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize), String(search), String(genre), String(sort));
  const [film, useFilm] = useState(null);

  const searchHandler = (e) => {
    const input = document.getElementById('searchInput') as HTMLInputElement;
    if (input && (e.key == 'Enter' || e.type == 'click')) {
      useSearch(input.value);
      input.value = "";
    }
  };


  const genreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    useGenre(e.target.value);
  };

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    useSort(e.target.value);
  }

  if (isLoading) {
    return <Loader />;
  };

  return filmList?.data ? (
    <ModalContext.Provider value={{ film, useFilm }}>
      <Style.Films>
        <Style.Content>
          <Style.Title>Films</Style.Title>
          <Style.Search>
            <Style.SearchRow>
              <Style.SearchInput placeholder="Search" id="searchInput" onKeyUp={searchHandler} />
              <Style.SearchButton onClick={searchHandler}>Search</Style.SearchButton>
            </Style.SearchRow>
            <Style.SearchRow>
              <Style.SearchBlock>
                <Style.SearchSelect value={sort} onChange={sortHandler}>
                  <Style.SearchSelectOption value='latest'> Latest </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='featured'> Featured </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='rating'> Rating </Style.SearchSelectOption>
                  <Style.SearchSelectOption value="alphabetical">Alphabetical</Style.SearchSelectOption>
                  <Style.SearchSelectOption value="downloads">Downloads</Style.SearchSelectOption>
                </Style.SearchSelect>
              </Style.SearchBlock>
              <Style.SearchBlock>
                <Style.SearchSelect value={genre} onChange={genreHandler}>
                  <Style.SearchSelectOption value='all'> All genres </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='action'> Action </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='adventure'> Adventure </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='animation'> Animation </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='biography'> Biography </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='comedy'> Comedy </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='crime'> Crime </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='documentary'> Documentary </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='drama'> Drama </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='family'> Family </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='fantasy'> Fantasy </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='film-noir'> Film-Noir </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='game-show'> Game-Show </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='history'> History </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='horror'> Horror </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='music'> Music </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='musical'> Musical </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='mystery'> Mystery </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='news'> News </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='reality-tv'> Reality-TV </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='romance'> Romance </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='sci-fi'> Sci-Fi </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='sport'> Sport </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='talk-show'> Talk-Show </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='thriller'> Thriller </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='war'> War </Style.SearchSelectOption>
                  <Style.SearchSelectOption value='western'> Western </Style.SearchSelectOption>
                </Style.SearchSelect>
              </Style.SearchBlock>

            </Style.SearchRow>
          </Style.Search>
          {
            filmList?.data?.movies ?
              (<Style.List>{
                filmList?.data?.movies?.map((film) => {
                  return <Film key={film.id} {...film}></Film>;
                })}
              </Style.List>) :
              <Style.ListEmpty>
                <Style.EmptyItems>
                  The list of films is empty.
                </Style.EmptyItems>
              </Style.ListEmpty>
          }
          <Pagination
            totalUsersCount={filmList?.data?.movie_count}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={(page) => setPage(page)}
          />
        </Style.Content>
      </Style.Films>
      <Modal />
    </ModalContext.Provider>
  ) : null;
};

export default Films;
