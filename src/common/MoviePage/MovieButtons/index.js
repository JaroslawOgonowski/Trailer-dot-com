import React from "react";
import { Box, Button, Icon, StyledButtons, UnvisibleButton } from "./styled";
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
      <Button><Icon>i</Icon>More</Button>
    </StyledButtons>
  )
};
export default MovieButtons;