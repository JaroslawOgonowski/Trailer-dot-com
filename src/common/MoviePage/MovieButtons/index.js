import React from "react";
import { Button, Icon, StyledButtons } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectHide, selectLike, toggleHide, toggleLike } from "../../../features/Movie/movieSlice";

export const MovieButtons = () => {
  const hideTrailer = useSelector(selectHide);
  const like = useSelector(selectLike);
  const dispatch = useDispatch();

  return (

    <StyledButtons>
      <Button watch onClick={() => dispatch(toggleHide())}>
        {hideTrailer ? "Watch" : "Hide"} Trailer
      </Button>
      <Button><Icon>i</Icon>More</Button>      
    </StyledButtons>
  )
};
export default MovieButtons;