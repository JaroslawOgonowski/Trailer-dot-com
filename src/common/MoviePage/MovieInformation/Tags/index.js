import { useSelector } from "react-redux";
import { selectedMovie } from "../../../../features/Movie/movieSlice";
import { ReactComponent as Audio } from "./images/Audio.svg";
import { ReactComponent as SubtitlesIcon } from "./images/SubtitlesIcon.svg";
import {
  AgeGroup,
  AudioStream,
  Episodes,
  HighestStandard,
  Subtitles,
  TagsContainer,
  Year
} from "./styled";

export const Tags = () => {
  const {tagYear, tagGroup, tagEpisodes, tagStandard, tagAudio, tagSubtitles} = useSelector(selectedMovie);
return (
  <TagsContainer>
    <Year>{tagYear}</Year>
    <AgeGroup>{tagGroup}</AgeGroup>
    <Episodes>{tagEpisodes}</Episodes>
    <HighestStandard>{tagStandard}</HighestStandard>
    <AudioStream>{tagAudio ? <Audio width="2.8vmax" height="2.8vmax"/> : null}</AudioStream>
    <Subtitles>{tagSubtitles ? <SubtitlesIcon width="1.6vmax" height="1.6vmax"/> : null}</Subtitles>
  </TagsContainer>
  );
};