import styled from "styled-components";
import Todo from "./Todo";

function Todolist({ todos }) {
  return (
    <Container>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </Container>
  );
}

export default Todolist;

const Container = styled.div`
  border: 1px solid black;
  padding: 50px;
  margin-top: 40px;
`;
