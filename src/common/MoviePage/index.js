import React from "react";
import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import { ReactComponent as Audio } from "./images/Audio.svg";
import { ReactComponent as SubtitlesIcon } from "./images/SubtitlesIcon.svg";
import { useSelector } from "react-redux";
import { selectHide, selectMovies, selectTitle } from "../../features/Movie/movieSlice";
import { Carousel } from "./Carousel";
import {
  AgeGroup,
  AudioStream,
  Avaible,
  Box,
  Description,
  Episodes,
  HighestStandard,
  InfoMarker,
  Label,
  Marker,
  MovieBox,
  MovieData,
  MovieInformation,
  OtherInfo,
  Specification,
  StreamingLogo,
  StyledPage,
  Subtitle,
  Subtitles,
  Tags,
  Title,
  Top,
  Trailer,
  Year,
} from "./styled";


export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);
  const movie = useSelector(selectMovies);
  const title = useSelector(selectTitle);
  const selectedMovie = movie.filter(element => element.title === title);

  if (title != null)
    return (
      <StyledPage>
        <Marker id="trailer" hideTrailer={hideTrailer} />
        {selectedMovie.map(movie => (
          <li key={movie.name}>
            <MovieBox >
              <Title >{movie.title}</Title>
              <Trailer
                hideTrailer={hideTrailer}
                width=""
                height=""
                SameSite="none"
                allow="fullscreen;"
                Secure
                src={movie.iFrame}
                title="YouTube video player"
              />
            </MovieBox>
            <MovieButtons />
            <MovieInformation>
              <Specification>
                <Tags>
                  <Year>{movie.tagYear}</Year>
                  <AgeGroup>{movie.tagGroup}</AgeGroup>
                  <Episodes>{movie.tagEpisodes}</Episodes>
                  <HighestStandard>{movie.tagStandard}</HighestStandard>
                  <AudioStream>{movie.tagAudio ? <Audio /> : null}</AudioStream>
                  <Subtitles>{movie.tagSubtitles ? <SubtitlesIcon /> : null}</Subtitles>
                </Tags>
                <Top>{movie.top10 ? <Top10 /> : null}{movie.topContent}</Top>
                <Subtitle>{movie.subtitle}</Subtitle>
                <Description>
                  {movie.description}
                </Description>
              </Specification>
              <MovieData>
                <Label>Cast:<OtherInfo>{" "}{movie.cast}</OtherInfo></Label>
                <Label>Genres:<OtherInfo>{" "}{movie.genres}</OtherInfo></Label>
                <Label>This show is:<OtherInfo>{" "}{movie.thisShowIs}</OtherInfo></Label>
              </MovieData>
            </MovieInformation>
            <Box>
              <InfoMarker id="infoMarker" />
              <Carousel />
              <Avaible>
                Available on:<StreamingLogo width="180px" src={movie.avaible} />
              </Avaible>
            </Box>
          </li>
        ))}
      </StyledPage>
    )
  else return;
};
