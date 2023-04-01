import React from "react";
import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import { useSelector } from "react-redux";
import { selectedMovie, selectHide, selectTitle } from "../../features/Movie/movieSlice";
import { Carousel } from "./Carousel";
import {
  Avaible,
  Box,
  Description,
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
  Title,
  Top,
  Trailer
} from "./styled";
import { Tags } from "./Tags";

export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);
  const selectedTitle = useSelector(selectTitle);
  const movie = useSelector(selectedMovie);
  if (selectedTitle != null && movie != null) {
    const { 
      title, 
      iFrame, 
      top10, subtitle, description, topContent, cast, genres, thisShowIs, avaible } = movie;
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
            <Tags />
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
    );
  }
  else return;
};
