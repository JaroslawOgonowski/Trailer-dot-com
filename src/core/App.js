import { ThemeProvider } from "styled-components";
import { Header } from "../Header";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
    </ThemeProvider>
  );
};
export default App;
