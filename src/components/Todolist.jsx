import styled from "styled-components";
import Todo from "./Todo";

function Todolist({ todos, setEditTodo, onDelete, onDone, onStatus, title }) {
  if (todos.length === 0) return null;
  return (
    <Container>
      <p className="lists">
        {title}
        {todos.length}
      </p>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            setEditTodo={setEditTodo}
            onDelete={onDelete}
            onDone={onDone}
            onStatus={onStatus}
          />
        );
      })}
    </Container>
  );
}

export default Todolist;

const Container = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 30px;
  margin-top: 30px;

  .lists {
    margin-bottom: 20px;
    margin-left: -30px;
  }
`;
