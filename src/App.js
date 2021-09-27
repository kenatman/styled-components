import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{padding:0;
  margin:0;}`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({ required: true })`
  border: none;
  ${awesomeCard}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightSalmon;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Input placeholder="calm down... plz.." />
    </Container>
  );
}

export default App;
