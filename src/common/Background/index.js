import React from "react";
import { useSelector } from "react-redux";
import { selectMovies, selectTitle } from "../../features/Movie/movieSlice";
import { ClasicBackground, Preload, StyledBackground } from "./styled";

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
              <Preload>
                <img src={movie.firstBackground} alt="" />
                <img src={movie.secondBackground} alt="" />
                <img src={movie.thirdBackground} alt="" />
              </Preload>
              {children}
            </StyledBackground>
          ))}
        </ul>
      </>
    )
  else return (
    <ClasicBackground>
      <Preload>
        <img src="https://wallpaperaccess.com/full/2063938.png" alt="" />
        <img src="https://wallpapercave.com/wp/2TrmmSi.jpg" alt="" />
        <img src="https://blog.frame.io/wp-content/uploads/2022/04/B0414-featured-image-atomos-v2-1300x731.jpg" alt="" />
      </Preload>
      {children}
    </ClasicBackground>
  )
};

export default Background;