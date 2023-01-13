import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";

function Todo({ todo, setEditTodo, onDelete, onDone, onStatus }) {
  const leftIcons = () => {
    if (todo.status === false && todo.isDone === true) {
      return <CheckIcon className="icons" />;
    }
    return todo.status ? (
      <RemoveIcon className="icons" onClick={() => onStatus(todo.id)} />
    ) : (
      <AddIcon className="icons" onClick={() => onStatus(todo.id)} />
    );
  };

  return (
    <Container>
      {leftIcons()}
      <Inner>
        <p className={todo.isDone ? "lineThrough" : ""}>{todo.title}</p>
        <div>
          {todo.isDone ? (
            <CheckCircleIcon
              className="icons"
              onClick={() => onDone(todo.id)}
            />
          ) : (
            <CheckCircleOutlineIcon
              className="icons"
              onClick={() => onDone(todo.id)}
            />
          )}
          {todo.isDone ? null : (
            <EditIcon className="icons" onClick={() => setEditTodo(todo)} />
          )}
          <DeleteOutlineIcon
            className="icons"
            onClick={() => onDelete(todo.id)}
          />
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

  .icons {
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

  .lineThrough {
    text-decoration: line-through;
  }
`;
