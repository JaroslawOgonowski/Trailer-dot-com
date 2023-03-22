import { useDispatch, useSelector } from "react-redux";
import { selectMenu, selectMovies, toggleMenu, toggleMovie } from "../../features/Movie/movieSlice";
import { Item, Logo, Menu, Options, OptionsButton } from "./styled"
import TrailersLogo from "./images/Logo.png"

export const Header = () => {

  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectMovies);
  const hideMenu = useSelector(selectMenu);

  return (
    <>
      <a href="https://jaroslawogonowski.github.io/Trailer-dot-com/"><Logo src={TrailersLogo} alt="" /></a>
      <Options>
        <OptionsButton target="_blank" href="https://www.netflix.com/pl/">
          TOP Movie
        </OptionsButton>
        <Menu
          onClick={() => dispatch(toggleMenu())}
        >
          Get movie ⁞⁞
          {selectedMovie.map(movie => (
            <Item hide={hideMenu} key={movie.name}
              onClick={() =>
                dispatch(toggleMovie(movie.id))
              }>
              {movie.title}
            </Item>
          ))}
        </Menu>
      </Options>
    </>
  );
};
