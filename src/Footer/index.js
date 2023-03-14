import { ReactComponent as SoundOn } from "./images/SoundOn.svg";
import { ReactComponent as SoundOff } from "./images/SoundOff.svg";
import { Button } from "./styled";

export const Footer = () => { 
  let soundOn = false;
  return(
  <Button >{soundOn ? <SoundOff/> : <SoundOn/>}</Button>
)
};