import { ReactComponent as LikeIcon } from "./images/Like.svg";
import { ReactComponent as AddIcon } from "./images/Add.svg";
import { Box, Button, StyledButtons } from "./styled";
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
      <Box>
        <Button add><AddIcon /></Button>
        <Button likeButton like={like} onClick={() => dispatch(toggleLike())}><LikeIcon /></Button>
      </Box>
    </StyledButtons>
  )
};
export default MovieButtons;