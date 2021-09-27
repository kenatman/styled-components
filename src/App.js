import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{padding:0;
  margin:0;}`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button danger>Hello</Button>
      <Button>Hello</Button>
      <Anchor href="https://google.com">Go To Google</Anchor>
    </Container>
  );
}

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightSalmon;
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
