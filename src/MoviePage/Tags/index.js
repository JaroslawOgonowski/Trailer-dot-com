import { AgeGroup, AudioStream, Episodes, HighestStandard, StyledTags, Subtitles, Year } from "./styled"
import { ReactComponent as Audio } from "./images/Audio.svg";
import { ReactComponent as SubtitlesIcon } from "./images/SubtitlesIcon.svg";
export const Tags = () => {
  return (
  <StyledTags>
    <Year>2022</Year>
    <AgeGroup>18+</AgeGroup>
    <Episodes>8 Episodes</Episodes>
    <HighestStandard>HD</HighestStandard>
    <AudioStream><Audio/></AudioStream>
    <Subtitles><SubtitlesIcon/></Subtitles>
  </StyledTags>
);
};
