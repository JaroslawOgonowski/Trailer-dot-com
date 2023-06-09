import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrailersLogo from "./images/Logo.png"
import {
  getInitialState,
  selectMenu,
  selectMovies,
  toggleMenu,
  toggleMovie
} from "../../features/Movie/movieSlice";
import {
  Box,
  HeaderContainer,
  Item,
  ListOfMoviesComponent,
  Logo,
  Menu,
  MenuElement,
  MenuFrame,
  NoSearchResultMsg,
  SearchMovieInput
} from "./styled"

export const Header = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const hideMenu = useSelector(selectMenu);

  function MoviesList({ movies }) {
    if (movies.length > 0) {
      return (
        <ListOfMoviesComponent>
          {movies.map(movie => (
            <Item key={movie.description}
              onClick={
                () => dispatch(toggleMovie(movie.id))
              }>
              {movie.title}
            </Item>
          ))}
        </ListOfMoviesComponent>
      );
    }
    return <NoSearchResultMsg>
      We couldn't find <br />this video ❗
    </NoSearchResultMsg>;
  };

  function getFilteredMoviesForText(text) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
  };

  function filterMovies(e) {
    const text = e.currentTarget.value;
    const filteredMovies = getFilteredMoviesForText(text);
    setFilteredMovies(filteredMovies)
  };
  const [filteredMovies, setFilteredMovies] = useState("");

  return (
    <>
      <HeaderContainer>
        <Menu>
          <MenuFrame onClick={() => dispatch(toggleMenu())}>
            <MenuElement>Get movie ⁞⁞</MenuElement>
          </MenuFrame>
          <Box hideMenu={hideMenu}>
            <SearchMovieInput placeholder="Search 🎬" onInput={filterMovies} />
            <MoviesList movies={filteredMovies || movies} />
          </Box>
        </Menu>
      </HeaderContainer>
      <Logo width="300px" src={TrailersLogo} alt="" onClick={() => dispatch(getInitialState())} />
    </>
  );
};
