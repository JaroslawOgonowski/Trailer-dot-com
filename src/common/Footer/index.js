import { ReactComponent as SoundOn } from "./images/SoundOn.svg";
import { ReactComponent as SoundOff } from "./images/SoundOff.svg";
import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../features/MuteVideo/muteSlice";

export const Footer = () => {
  const soundOn = useSelector(selectMode);
  const dispatch = useDispatch();

  
          
  return (
  <Button onClick={() => dispatch(toggleMode())}>
    {soundOn ? <SoundOff /> : <SoundOn />}
    </Button>
  )
};