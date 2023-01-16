export const getLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};
