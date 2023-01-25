import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";

function Todo({ todo, setEditTodo, onDelete, onDone, onStart }) {
  const leftIcons = () => {
    if (!todo.isStarted && todo.isDone) return <CheckIcon className="icon" />;

    return todo.isStarted ? (
      <RemoveIcon className="icon" onClick={() => onStart(todo.id)} />
    ) : (
      <AddIcon className="icon" onClick={() => onStart(todo.id)} />
    );
  };

  const circleIcons = () => {
    if (!todo.isStarted && !todo.isDone) return null;

    return todo.isDone ? (
      <CheckCircleIcon className="icon" onClick={() => onDone(todo.id)} />
    ) : (
      <CheckCircleOutlineIcon
        className="icon"
        onClick={() => onDone(todo.id)}
      />
    );
  };

  return (
    <Container>
      {leftIcons()}
      <Inner>
        <p className={todo.isDone ? "line-through" : ""}>{todo.title}</p>
        <div>
          {circleIcons()}
          {!todo.isDone && (
            <EditIcon className="icon" onClick={() => setEditTodo(todo)} />
          )}
          {!todo.isStarted && (
            <DeleteOutlineIcon
              className="icon"
              onClick={() => onDelete(todo.id)}
            />
          )}
        </div>
      </Inner>
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  margin-right: 30px;

  .icon {
    font-size: large;
    cursor: pointer;
    margin-left: 4px;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  min-width: 100%;

  p {
    margin-right: 20px;
  }

  .line-through {
    text-decoration: line-through;
  }
`;
