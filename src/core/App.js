import { ThemeProvider } from "styled-components";
import { Header } from "../common/Header";
import { MoviePage } from "../common/MoviePage";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "../common/Footer";
import { theme } from "./theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <MoviePage />
        <Footer/>
      </>
    </ThemeProvider>
  );
};
export default App;
