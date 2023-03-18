import { useSelector } from "react-redux";
import { selectMovies, selectTitle } from "../../features/Movie/movieSlice";
import { ClasicBackground, StyledBackground } from "./styled";

const Background = ({ children }) => {
  const movie = useSelector(selectMovies);
  const title = useSelector(selectTitle);
  const selectedMovie = movie.filter(element => element.title === title);

  if (title != null)
    return (
      <>
        <ul>
          {selectedMovie.map(movie => (
            <StyledBackground key={movie.id}
              name={movie.name}
              firstBackground={movie.firstBackground}
              firstPositionX={movie.firstPositionX}
              secondBackground={movie.secondBackground}
              secondPositionX={movie.secondPositionX}
              thirdBackground={movie.thirdBackground}
              thirdPositionX={movie.thirdPositionX}
            >
              {children}
            </StyledBackground>
          ))}
        </ul>
      </>
    )
  else return (

    <ClasicBackground>
      {children}
    </ClasicBackground>
  )
};

export default Background;