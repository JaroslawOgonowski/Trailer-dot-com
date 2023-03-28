import React from "react";
import { Box, Button, Icon, StyledButtons } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectHide, toggleHide } from "../../../features/Movie/movieSlice";

export const MovieButtons = () => {
  const hideTrailer = useSelector(selectHide);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      <Box href="#trailer">
        <Button watch onClick={() => dispatch(toggleHide())}>
          {hideTrailer ? "Watch" : "Hide"} Trailer
        </Button>
      </Box>
      <Box href="#infoMarker">
        <Button>
          <Icon>i</Icon>More
        </Button>
      </Box>

    </StyledButtons>
  )
};
export default MovieButtons;