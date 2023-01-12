import { useState } from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import RttIcon from "@mui/icons-material/Rtt";
import { v4 as uuidv4 } from "uuid";

const hej = [
  {
    id: "1",
    title: "Go and grab a burger",
    status: true,
    date: Date(),
    isDone: false,
    list: "Done",
  },
  {
    id: "2",
    title: "Shop groceries",
    status: false,
    date: Date(),
    isDone: true,
    list: "Ongoing",
  },
  {
    id: "3",
    title: "Pay the gas bill",
    status: false,
    date: Date(),
    isDone: false,
    list: "List",
  },
];

function Todos() {
  const [todos, setTodos] = useState(hej);
  const [addTodo, setAddTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [click, setClick] = useState(false);

  const handleAdd = () => {
    const todo = { id: uuidv4(), title: addTodo, status: false, date: Date() };
    setTodos([todo, ...todos]);
    setAddTodo("");
  };

  const handleEdit = () => {
    const newTodos = todos.filter((t) => t.id !== editTodo.id);
    setTodos([editTodo, ...newTodos]);
    setEditTodo("");
  };

  const handleDelete = (id) => {
    const todo = todos.filter((t) => t.id !== id);
    setTodos(todo);
  };

  const handleDone = (id) => {
    const todo = todos.map((t) => {
      if (t.id === id) {
        return { ...t, isDone: !t.isDone };
      }

      return t;
    });
    setTodos(todo);
  };

  const toggleButtons = () => {
    setClick(!click);
  };
  return (
    <Container>
      <Header>
        <p>Todos</p>
      </Header>
      <Input>
        <RttIcon className="icon" />
        {editTodo ? (
          <>
            <input
              type="text"
              value={editTodo && editTodo.title}
              onChange={(e) =>
                setEditTodo({ ...editTodo, title: e.target.value })
              }
            />
            <button
              onMouseDown={toggleButtons}
              onMouseUp={toggleButtons}
              onClick={handleEdit}
            >
              {click ? "Editing new Todo" : "Edit"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="odo..."
              value={addTodo}
              onChange={(e) => setAddTodo(e.target.value)}
            />

            <button
              disabled={!addTodo}
              onMouseDown={toggleButtons}
              onMouseUp={toggleButtons}
              onClick={handleAdd}
            >
              {click ? "Adding new Todo" : "Add"}
            </button>
          </>
        )}
      </Input>
      <List>
        <Todolist
          todos={todos.filter((todo) => todo.status === true)}
          setEditTodo={setEditTodo}
          onDelete={handleDelete}
          onDone={handleDone}
        />
        <Todolist
          todos={todos.filter(
            (todo) => todo.isDone === false && todo.status === false
          )}
          setEditTodo={setEditTodo}
          onDelete={handleDelete}
          onDone={handleDone}
        />
        <Todolist
          todos={todos.filter((todo) => todo.isDone === true)}
          setEditTodo={setEditTodo}
          onDelete={handleDelete}
          onDone={handleDone}
        />
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
  background-color: white;
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
  align-items: center;
  position: relative;
  border-bottom: 1px solid black;
  justify-content: space-between;
  min-width: 500px;

  input {
    width: 335px;
    height: 30px;
    margin-right: 20px;
    padding-left: 26px;
    border: none;
    outline: 0;

    :focus {
      border: none;
    }
  }

  .icon {
    position: absolute;
    left: 4px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 3px;
    background-color: white;
    color: black;
    border: none;
    font-weight: bold;

    :hover {
      border-top: 1px solid black;
      cursor: pointer;
    }

    :disabled {
      color: grey;
    }
  }
`;

const List = styled.div`
  grid-area: list;
  display: grid;
  justify-content: center;
`;
