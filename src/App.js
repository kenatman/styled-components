import styled from "styled-components";

function App() {
  return (
    <Container>
      <Button danger>Hello</Button>
      <Button>Hello</Button>
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

export default App;
