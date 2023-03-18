import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMenu, selectMovies, toggleMenu, toggleMovie } from "../../features/Movie/movieSlice";
import { ReactComponent as NetflixLogo } from "./images/NetflixLogo.svg";
import { Container, Item, Menu, Options, OptionsButton } from "./styled"
import { useEffect } from "react";

export const Header = () => {

  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectMovies);
  const hideMenu = useSelector(selectMenu);

  useEffect(() => {
    dispatch((fetchMovies()));
  }, [dispatch]);

  return (
    <>
      <Container>
        <NetflixLogo alt="" />
      </Container>
      <Options>
        <OptionsButton target="_blank" href="https://www.netflix.com/pl/">
          Home
        </OptionsButton>
        <Menu
          onClick={() => dispatch(toggleMenu())}
        >
          Get movie ⁞⁞
          {selectedMovie.map(movie => (
            <Item hide={hideMenu} key={movie.name} onClick={() => dispatch(toggleMovie(movie.id))}>
              {movie.title}
            </Item>
          ))}
        </Menu>
      </Options>
    </>
  );
};
