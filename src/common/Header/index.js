import { useDispatch, useSelector } from "react-redux";
import { selectMenu, selectMovies, toggleMenu, toggleMovie } from "../../features/Movie/movieSlice";
import { Item, Logo, Menu, Options } from "./styled"
import TrailersLogo from "./images/Logo.png"
import { useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const hideMenu = useSelector(selectMenu);


  function MoviesList({ movies }) {
    if (movies.length > 0) {
      return (
        <ul>
          {movies.map(movie => (
            <Item key={movie.description}
              onClick={() =>
                dispatch(toggleMovie(movie.id))
              }>
              {movie.title}
            </Item>
          ))}
        </ul>
      );
    }
    return <p>Nie mamy filmu, którego szukasz</p>;
  }

  function getFilteredMoviesForText(text) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    )
  }

  function filterMovies(e) {
    const text = e.currentTarget.value;
    const filteredMovies = getFilteredMoviesForText(text);
    setFilteredMovies(filteredMovies)
  }
  const [filteredMovies, setFilteredMovies] = useState("");

  return (
    <>
      <a href="https://jaroslawogonowski.github.io/Trailer-dot-com/"><Logo src={TrailersLogo} alt="" /></a>
      <Options>
        <Menu
          onClick={() => dispatch(toggleMenu())}
        >
          Get movie ⁞⁞
          <div className="wyszukiwarka">
            <input onInput={filterMovies} />
            <MoviesList movies={filteredMovies || movies} />
          </div>
        </Menu>
      </Options>
    </>
  );
};
