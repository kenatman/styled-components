import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
body{padding:0;
  margin:0;}`;

const Card = styled.div`
  background-color: tomato;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightSalmon;

  ${Card} {
    background-color: blue;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Form></Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
