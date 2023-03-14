import MovieButtons from "./MovieButtons";
import {
  Cast,
  Description,
  Genres,
  MovieInformation,
  Species,
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
        <Tags />
        <Top></Top>
        <Subtitle></Subtitle>
        <Description></Description>
        <Cast></Cast>
        <Genres></Genres>
        <Species></Species>
      </MovieInformation>
    </StyledPage>
  );
};