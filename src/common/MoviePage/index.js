import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import {
  Content,
  Description,
  Label,
  MovieBox,
  MovieData,
  MovieInformation,
  OtherInfo,
  Specification,
  StyledPage,
  Subtitle,
  Title,
  Top,
  Trailer,
} from "./styled";
import { Tags } from "./Tags";
import { useSelector } from "react-redux";
import { selectHide } from "../../features/Movie/movieSlice";

export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);

  return (
    <StyledPage>
      <MovieBox>
        <Title>Wednesday</Title>
        <Trailer hideTrailer={hideTrailer} width="500" height="300"
          id="video"
          src="https://www.youtube.com/embed/Di310WS8zLk?controls=1"
          title="YouTube video player"
          allow="accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
        />
      </MovieBox>
      <MovieButtons />
      <MovieInformation>
        <Specification>
          <Tags />
          <Top><Top10 /><Content>#1 in TV Shows Today</Content></Top>
          <Subtitle>"A Murder of Woes"</Subtitle>
          <Description>
            Wednesday lands in trouble with Principal Weems, but that's just the start of her problems.
            To fight an ancient evil, she'll need all her friends' help.
          </Description>
        </Specification>
        <MovieData>
          <Label>Cast:<OtherInfo>{" "}Jenna Ortega, Gwendoline Christie, Riki Lindhome and more</OtherInfo></Label>
          <Label>Genres:<OtherInfo>{" "}TV Mysteries, Crime TV Shows, Fantasy TV Shows</OtherInfo></Label>
          <Label>This show is:<OtherInfo>{" "}Deadpan</OtherInfo></Label>
        </MovieData>
      </MovieInformation>
    </StyledPage>
  );
};