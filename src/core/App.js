import { ThemeProvider } from "styled-components";
import { Header } from "../Header";
import { MoviePage } from "../MoviePage";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <MoviePage/>
    </ThemeProvider>
  );
};
export default App;
