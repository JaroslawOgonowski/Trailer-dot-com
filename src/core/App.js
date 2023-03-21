import { ThemeProvider } from "styled-components";
import { Header } from "../common/Header";
import { MoviePage } from "../common/MoviePage";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "../common/Footer";
import { theme } from "./theme";
import Background from "../common/Background";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/Movie/movieSlice";
import React from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((fetchMovies()));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Background>
          <Header />
          <MoviePage />
          <Footer />
        </Background>
      </>
    </ThemeProvider>
  );
};
export default App;
