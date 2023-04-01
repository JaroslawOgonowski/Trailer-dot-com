import React from "react";
import MovieButtons from "./MovieButtons";
import { useSelector } from "react-redux";
import { selectTitle } from "../../features/Movie/movieSlice";
import { MovieInformation } from "./MovieInformaiton";
import { ActorsBox } from "./ActorsBox";
import { StyledPage } from "./styled";
import { TitleBox } from "./TitleBox";

export const MoviePage = () => {
  const selectedTitle = useSelector(selectTitle);
  if (selectedTitle != null) {
    return (
      <StyledPage>
        <TitleBox />
        <MovieButtons />
        <MovieInformation />
        <ActorsBox />
      </StyledPage>
    );
  }
  else return;
};
