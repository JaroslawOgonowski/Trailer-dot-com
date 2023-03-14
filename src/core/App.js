import { ThemeProvider } from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { MoviePage } from "../MoviePage";
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
