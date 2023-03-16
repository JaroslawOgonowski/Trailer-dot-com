import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectLoading } from "../../features/Movie/movieSlice";
import { ReactComponent as NetflixLogo } from "./images/NetflixLogo.svg";
import { Container, Menu, Options, OptionsButton } from "./styled"
export const Header = () => {

  const dispatch = useDispatch();
  const Loading = useSelector(selectLoading);

  return (
    <Container>
      <NetflixLogo alt="" />
      <Options>
        <OptionsButton target="_blank" href="https://www.netflix.com/pl/">
          Home
        </OptionsButton>
        <Menu
          onClick={() => dispatch(fetchMovie())}
          disabled={Loading}
        >
          {Loading ? "Ładowanie..." : "Get movie ⁞⁞⁞"}
        </Menu>
      </Options>
    </Container>
  );
};
