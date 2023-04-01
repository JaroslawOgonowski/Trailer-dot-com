import React from "react";
import MovieButtons from "./MovieButtons";
import { useSelector } from "react-redux";
import { selectedMovie, selectHide, selectTitle } from "../../features/Movie/movieSlice";
import { Carousel } from "./Carousel";
import {
  Avaible,
  Box,
  InfoMarker,
  Marker,
  MovieBox,
  StreamingLogo,
  StyledPage,
  Title,
  Trailer
} from "./styled";
import { MovieInformation } from "./MovieInformaiton";

export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);
  const selectedTitle = useSelector(selectTitle);
  const movie = useSelector(selectedMovie);
  if (selectedTitle != null && movie != null) {
    const { title, iFrame, avaible } = movie;
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
        <MovieInformation />
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
