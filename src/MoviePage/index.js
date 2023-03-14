import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import {
  Cast,
  Content,
  Description,
  Label,
  MovieData,
  MovieInformation,
  OtherInfo,
  Specification,
  StyledPage,
  Subtitle,
  Title,
  Top,
} from "./styled";
import { Tags } from "./Tags";

export const MoviePage = () => {
  return (
    <StyledPage>
      <Title>Wednesday</Title>
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