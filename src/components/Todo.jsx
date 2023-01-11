import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Todo({ todo }) {
  return (
    <Container>
      <p>{todo.title}</p>
      <div>
        <CheckCircleOutlineIcon className="icons" />
        <EditIcon className="icons" />
        <DeleteOutlineIcon className="icons" />
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
`;
