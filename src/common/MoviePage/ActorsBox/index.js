import { useSelector } from "react-redux";
import { selectedMovie } from "../../../features/Movie/movieSlice";
import { Carousel } from "./Carousel";
import { Avaible, Box, InfoMarker, StreamingLogo } from "./styled";

export const ActorsBox = () => {
  const { avaible } = useSelector(selectedMovie);
  return (
    <Box>
      <InfoMarker id="infoMarker" />
      <Carousel />
      <Avaible>
        Available on:<StreamingLogo width="180px" height="100px" alt="" src={avaible} />
      </Avaible>
    </Box>
  );
};