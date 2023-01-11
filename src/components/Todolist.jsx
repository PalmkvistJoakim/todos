import styled from "styled-components";
import Todo from "./Todo";

function Todolist({ todos, setEditTodo, onDelete }) {
  return (
    <Container>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            setEditTodo={setEditTodo}
            onDelete={onDelete}
          />
        );
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
