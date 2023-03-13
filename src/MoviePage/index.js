import {
  Add,
  Cast,
  Description,
  Genres,
  Like,
  MovieButtons,
  MovieInformation,
  Species,
  StyledPage,
  Subtitle,
  Tags,
  Title,
  Top,
  Watch
} from "./styled";

export const MoviePage = () => {
  return (
    <StyledPage>
      <Title>Wednesday</Title>
      <MovieButtons>
        <Watch></Watch>
        <Add></Add>
        <Like></Like>
      </MovieButtons>
      <MovieInformation>
        <Tags></Tags>
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