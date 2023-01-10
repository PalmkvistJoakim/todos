import styled from "styled-components";
import Todolist from "./Todolist";

function Todos() {
  return (
    <Container>
      <Header>
        <p>Todos</p>
      </Header>
      <Input>
        <input></input>
      </Input>
      <List>
        <Todolist />
      </List>
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10rem 2rem 1fr;
  grid-template-areas: "header" "input" "list";
  border: 1px solid black;
  padding: 80px;
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;

  p {
    font-size: 100px;
    font-weight: 600;
  }
`;

const Input = styled.div`
  grid-area: input;
  display: flex;
  justify-content: center;

  input {
    padding: 10px 90px;
  }
`;

const List = styled.div`
  grid-area: list;
  display: flex;
  justify-content: center;
`;
