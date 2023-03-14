 import { ReactComponent as LikeIcon } from "./images/Like.svg";
 import { ReactComponent as AddIcon } from "./images/Add.svg";
import { Button, StyledButtons } from "./styled";

 export const MovieButtons = () => {
  return(
  <StyledButtons>
    <Button watch>Watch Now</Button>
    <Button add><AddIcon/></Button>
    <Button like><LikeIcon/></Button>
  </StyledButtons>
)};
export default MovieButtons;