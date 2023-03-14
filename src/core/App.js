import { ThemeProvider } from "styled-components";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { MoviePage } from "../common/MoviePage";
import { GlobalStyle } from "./GlobalStyle";
import { PageContainer } from "./styled";
import { theme } from "./theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <MoviePage />
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};
export default App;
