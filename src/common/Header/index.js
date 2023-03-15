import { ReactComponent as NetflixLogo } from "./images/NetflixLogo.svg";
import { Container, Options, OptionsButton } from "./styled"
export const Header = () => {

  return (
    <Container>
      <NetflixLogo alt=""/>
      <Options>
        <OptionsButton target="_blank" href="https://www.netflix.com/pl/">Home</OptionsButton>
        <OptionsButton href="#">Buy Tickets</OptionsButton>
      </Options>
    </Container>
  );
};