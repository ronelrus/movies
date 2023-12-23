import React, { useState, useContext } from "react";
import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { AiTwotoneLike } from "react-icons/ai";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { Context } from "@/components/common/Modal/ModalContext";
import useComments from "@/hooks/useComments";
import { Trash } from 'react-bootstrap-icons';

const Details = React.FC<> = () => {
  const router = useRouter();
  const { film } = useContext(Context);
  const filmId = film || router.query.id;
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (filmId as string) || ''
  );

  const { comments, updateComments, deleteComment } = useComments(filmId);
  globalThis.comments = comments;
  const [comment, useComment] = useState({
    name: '',
    text: ''
  });

  const onCommentChange = (e) => {
    useComment((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const onSendComment = (e) => {
    if (comment.name && comment.text) {
      updateComments(filmId, comment);
      useComment({ name: '', text: '' });
    }
    console.log(comments);
  };

  const onDeleteComment = (comment) => {
    deleteComment(comment);
  };

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });

  const torrentsList = filmRetrieve?.data.movie.torrents?.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  return (
    filmRetrieve?.data ?
      <Style.Details>
        <Style.BackgroundImage
          src={filmRetrieve?.data.movie.background_image_original}
        ></Style.BackgroundImage>
        <Style.Content>
          <Style.ContentTitle>
            <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>
          </Style.ContentTitle>

          <Style.Data>
            <Style.Image>
              <Style.Img
                src={filmRetrieve?.data.movie.large_cover_image}
              ></Style.Img>
              <Style.Buttons>
                <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                  Download
                </Style.DownloadButton>
                <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                  Watch Now
                </Style.WatchButton>
              </Style.Buttons>
            </Style.Image>

            <Style.Description>
              <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

              <Style.Year>
                {filmRetrieve?.data.movie.year +
                  " " +
                  filmRetrieve?.data.movie.language}
              </Style.Year>

              <Style.Genres>{genresList}</Style.Genres>

              <Style.DescriptionFull>
                {filmRetrieve?.data.movie.description_full}
              </Style.DescriptionFull>

              <Style.Statistic>
                <StatisticItem
                  icon={<VscStarFull />}
                  text={filmRetrieve?.data.movie.rating}
                ></StatisticItem>
                <StatisticItem
                  icon={<AiTwotoneLike />}
                  text={filmRetrieve?.data.movie.like_count}
                ></StatisticItem>
                <StatisticItem
                  icon={<BiTimeFive />}
                  text={filmRetrieve?.data.movie.runtime}
                ></StatisticItem>
                <StatisticItem
                  icon={<VscDesktopDownload />}
                  text={filmRetrieve?.data.movie.download_count}
                ></StatisticItem>
              </Style.Statistic>

              <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

              <Style.Torrents>{torrentsList}</Style.Torrents>
            </Style.Description>
          </Style.Data>

          <Style.Comments>
            <Style.CommentForm>
              <Style.CommentNameInput name="name" onChange={onCommentChange} value={comment.name} placeholder="Введите имя" />
              <Style.CommentTextInput name="text" onChange={onCommentChange} value={comment.text} placeholder="Комментарий" />
              <Style.CommentSendButton onClick={onSendComment}>Отправить</Style.CommentSendButton>
            </Style.CommentForm>
            <Style.AllComments>
              {comments.toReversed().map(elem => (
                <Style.Comment>
                    <Style.CommentName> {elem.name} </Style.CommentName>
                    <Style.CommentText> {elem.text} </Style.CommentText>
                    <Style.CommentButton onClick={() => {
                    onDeleteComment(elem);
                  }}> Удалить </Style.CommentButton>
                </Style.Comment>
              ))}
            </Style.AllComments>
          </Style.Comments>
        </Style.Content>
      </Style.Details> : null
  );
};

export default Details;
