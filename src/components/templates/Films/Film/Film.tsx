import { MovieList } from "@/lib/api";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";
import { ModalContext } from "@/components/common/Modal/ModalContext";

const Film: React.FC<MovieList> = (props) => {
  const { useFilm } = useContext(ModalContext);
  const [ cover, setCover ] = useState(props.medium_cover_image);

  return (
    <Style.Film>
      <Style.Content>
        <Style.Cards>
          <Style.Card1
            src={
              cover
            }
            alt={props.medium_cover_image}
            onError={ () => { setCover("https://klike.net/uploads/posts/2019-05/1556708032_1.jpg") } }
          ></Style.Card1>

          <Style.Card2>
            <Style.Rating>
              <Style.RatingIcon>
                <VscStarFull />
              </Style.RatingIcon>
              <Style.RatingText> {props.rating} / 10</Style.RatingText>
            </Style.Rating>

            {props.genres ? (
              <Style.Genres>
                {0 in props.genres ? (
                  <Style.GenresText>
                    {props.genres[0].toUpperCase()}
                  </Style.GenresText>
                ) : (
                  ""
                )}
                {1 in props.genres ? (
                  <Style.GenresText>
                    {props.genres[1].toUpperCase()}
                  </Style.GenresText>
                ) : (
                  ""
                )}
                {2 in props.genres ? (
                  <Style.GenresText>
                    {props.genres[2].toUpperCase()}
                  </Style.GenresText>
                ) : (
                  ""
                )}
              </Style.Genres>
            ) : (
              ""
            )}

            <Style.Details onClick={() => {
              useFilm(props.id);
              document.body.style.overflow = 'hidden';
            }}>DETAILS</Style.Details>
          </Style.Card2>
        </Style.Cards>

        <Style.Name>{props.title}</Style.Name>

        <Style.Text>
          {props.year} {props.language}
        </Style.Text>
      </Style.Content>
    </Style.Film>
  );
};

export default Film;
