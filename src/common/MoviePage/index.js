import React from "react";
import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import { ReactComponent as Audio } from "./images/Audio.svg";
import { ReactComponent as SubtitlesIcon } from "./images/SubtitlesIcon.svg";
import { useSelector } from "react-redux";
import { selectedMovie, selectHide, selectTitle } from "../../features/Movie/movieSlice";
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
  const selectedTitle = useSelector(selectTitle);
  const movie = useSelector(selectedMovie);
  if (selectedTitle != null && movie != null) {
    const { title, iFrame, tagYear, tagGroup, tagEpisodes, tagStandard, tagAudio, tagSubtitles, top10, subtitle, description, topContent, cast, genres, thisShowIs, avaible } = movie;
    return (
      <StyledPage>
        <Marker id="trailer" hideTrailer={hideTrailer} />
        <MovieBox >
          <Title >{title}</Title>
          <Trailer
            hideTrailer={hideTrailer}
            width=""
            height=""
            SameSite="none"
            allow="fullscreen;"
            Secure
            alt="Movie Trailer"
            src={iFrame}
            title="YouTube video player"
          />
        </MovieBox>
        <MovieButtons />
        <MovieInformation>
          <Specification>
            <Tags>
              <Year>{tagYear}</Year>
              <AgeGroup>{tagGroup}</AgeGroup>
              <Episodes>{tagEpisodes}</Episodes>
              <HighestStandard>{tagStandard}</HighestStandard>
              <AudioStream>{tagAudio ? <Audio /> : null}</AudioStream>
              <Subtitles>{tagSubtitles ? <SubtitlesIcon /> : null}</Subtitles>
            </Tags>
            <Top>{top10 ? <Top10 /> : null}{topContent}</Top>
            <Subtitle>{subtitle}</Subtitle>
            <Description>
              {description}
            </Description>
          </Specification>
          <MovieData>
            <Label>Cast:<OtherInfo>{" "}{cast}</OtherInfo></Label>
            <Label>Genres:<OtherInfo>{" "}{genres}</OtherInfo></Label>
            <Label>This show is:<OtherInfo>{" "}{thisShowIs}</OtherInfo></Label>
          </MovieData>
        </MovieInformation>
        <Box>
          <InfoMarker id="infoMarker" />
          <Carousel />
          <Avaible>
            Available on:<StreamingLogo width="180px" height="100px" alt="" src={avaible} />
          </Avaible>
        </Box>


      </StyledPage>
    )
  }
  else return;
};
