import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import { ReactComponent as Audio } from "./images/Audio.svg";
import { ReactComponent as SubtitlesIcon } from "./images/SubtitlesIcon.svg";
import {
  AgeGroup,
  AudioStream,
  Description,
  Episodes,
  HighestStandard,
  Label,
  MovieBox,
  MovieData,
  MovieInformation,
  OtherInfo,
  Specification,
  StyledPage,
  Subtitle,
  Subtitles,
  Tags,
  Title,
  Top,
  Trailer,
  Year,
} from "./styled";
import { useSelector } from "react-redux";
import { selectHide, selectMovies, selectTitle } from "../../features/Movie/movieSlice";

export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);
  const movie = useSelector(selectMovies);
  const title = useSelector(selectTitle);
  const selectedMovie = movie.filter(element => element.title === title);

  if (title != null)
    return (
      <StyledPage>
        {selectedMovie.map(movie => (
          <li key={movie.name}>
            <MovieBox >
              <Title hideTrailer={hideTrailer}>{movie.title}</Title>
              <Trailer
                hideTrailer={hideTrailer}
                width=""
                height=""
                id="video"
                SameSite="none"
                Secure
                src={movie.iFrame}
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
          </li>
        ))}
      </StyledPage>
    )
  else return;
};