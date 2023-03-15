import { ReactComponent as LikeIcon } from "./images/Like.svg";
import { ReactComponent as AddIcon } from "./images/Add.svg";
import { Button, StyledButtons } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectHide, toggleHide } from "../../../features/Movie/movieSlice";

export const MovieButtons = () => {
  const hideTrailer = useSelector(selectHide);
  const dispatch = useDispatch();
  

  return (

    <StyledButtons>
      <Button watch onClick={() => dispatch(toggleHide())}>
        {hideTrailer ? "Watch" : "Hide"} Trailer
      </Button>
      <Button add><AddIcon /></Button>
      <Button like><LikeIcon /></Button>
    </StyledButtons>
  )
};
export default MovieButtons;