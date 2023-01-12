import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Todo({ todo, setEditTodo, onDelete, onDone }) {
  return (
    <Container>
      <p className={todo.status ? "lineThrough" : ""}>{todo.title}</p>
      <div>
        {todo.status ? (
          <CheckCircleIcon className="icons" onClick={() => onDone(todo.id)} />
        ) : (
          <CheckCircleOutlineIcon
            className="icons"
            onClick={() => onDone(todo.id)}
          />
        )}
        {todo.status ? null : (
          <EditIcon className="icons" onClick={() => setEditTodo(todo)} />
        )}
        <DeleteOutlineIcon
          className="icons"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;

  p {
    margin-right: 20px;
  }

  .icons {
    font-size: large;
    cursor: pointer;
    margin-left: 4px;
  }

  .lineThrough {
    text-decoration: line-through;
  }
`;
