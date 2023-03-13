import { ReactComponent as NetflixLogo } from "./images/NetflixLogo.svg";
import designer from "./images/Designer.png";
import { Container, Designer, Options, OptionsButton } from "./styled"
export const Header = () => {

  return (
    <Container>
      <NetflixLogo />
      <Options>
        <OptionsButton target="_blank" href="https://www.netflix.com/pl/">Home</OptionsButton>
        <OptionsButton href="#">Buy Tickets</OptionsButton>
        <OptionsButton
          target="_blank"
          href="https://www.figma.com/file/d1o1xCmwDEYVOwDvGqEjWI/Wednesday-web-design?node-id=4%3A1246&t=6z9q801MlzbDKSvz-0"
        >
          Aliyan baig <img src={designer} alt="designer photo" />
        </OptionsButton>
      </Options>
    </Container>
  );
};