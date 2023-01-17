import styled from "styled-components";
import Todo from "./Todo";

function Todolist({ todos, setEditTodo, onDelete, onDone, onStart, title }) {
  if (todos.length === 0) return null;
  return (
    <Container>
      <p className="lists">
        {title}
        <span>{todos.length}</span>
      </p>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            setEditTodo={setEditTodo}
            onDelete={onDelete}
            onDone={onDone}
            onStart={onStart}
          />
        );
      })}
    </Container>
  );
}

export default Todolist;

const Container = styled.div`
  border-bottom: 1px solid black;
  padding: 30px;
  margin-top: 30px;

  .lists {
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: -30px;
  }

  span {
    background-color: whitesmoke;
    display: inline-block;
    text-align: center;
    border: 1px solid black;
    border-radius: 50%;
    width: 30px;
    line-height: 30px;
  }
`;
