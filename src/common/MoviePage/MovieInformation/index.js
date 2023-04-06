import { useSelector } from "react-redux";
import { selectedMovie } from "../../../features/Movie/movieSlice";
import { Tags } from "./Tags";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import {
  Description,
  Label,
  MovieData,
  MovieInformationContainer,
  OtherInfo,
  Specification,
  Subtitle,
  Top
} from "./styled";

export const MovieInformation = () => {
  const {
    top10,
    subtitle,
    description,
    topContent,
    cast,
    genres,
    thisShowIs
  } = useSelector(selectedMovie);

  return (
    <MovieInformationContainer>
      <Specification>
        <Tags />
        <Top>
          {top10 ? <Top10 width="3vw" height="3vw" /> : null}
          {topContent}
        </Top>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Specification>
      <MovieData>
        <Label>Cast:<OtherInfo>{" "}{cast}</OtherInfo></Label>
        <Label>Genres:<OtherInfo>{" "}{genres}</OtherInfo></Label>
        <Label>This show is:<OtherInfo>{" "}{thisShowIs}</OtherInfo></Label>
      </MovieData>
    </MovieInformationContainer>
  );
};