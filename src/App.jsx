import styled from "styled-components";
import Todos from "./components/Todos";

function App() {
  return (
    <Container>
      <Todos />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: whitesmoke;
`;
