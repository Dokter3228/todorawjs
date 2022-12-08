const items = document.querySelector(".items");
const input = document.getElementById("main-input");

input.addEventListener("change", addTodo);

function addTodo(e) {
  todos.push(e.target.value);
  let checked = true;
  const newTodo = document.createElement("div");
  newTodo.classList.add("item");
  const check = document.createElement("div");
  check.classList.add("check-circle");
  check.addEventListener("click", (e) => {
    if (checked === true) {
      newp.style.textDecoration = "line-through";
      newp.style.color = "grey";
      const iconCheck = document.createElement("div");
      iconCheck.classList.add("icon-check");
      check.appendChild(iconCheck);
      checked = false;
    } else {
      newp.style.textDecoration = "none";
      newp.style.color = "white";
      check.innerHTML = "";
      checked = true;
    }
  });
  newTodo.appendChild(check);
  const newp = document.createElement("p");
  newp.classList.add("todoText");
  newp.textContent = e.target.value;
  console.log(newp.textContent);
  newTodo.appendChild(newp);
  items.appendChild(newTodo);
  const iconCross = document.createElement("div");
  iconCross.classList.add("iconCross");
  iconCross.addEventListener("click", (e) => {
    todos.pop();
    newTodo.remove();
    console.log(todos);
  });
  newTodo.appendChild(iconCross);
  e.target.value = "";
}

const todos = ["you can create todos like this"];

function createTodos(todos) {
  todos.map((todo, index) => {
    let checked = true;
    const newTodo = document.createElement("div");
    newTodo.classList.add("item");
    const check = document.createElement("div");
    check.classList.add("check-circle");
    check.addEventListener("click", (e) => {
      if (checked === true) {
        newp.style.textDecoration = "line-through";
        newp.style.color = "grey";
        const iconCheck = document.createElement("div");
        iconCheck.classList.add("icon-check");
        check.appendChild(iconCheck);
        checked = false;
      } else {
        newp.style.textDecoration = "none";
        newp.style.color = "white";
        check.innerHTML = "";
        checked = true;
      }
    });
    newTodo.appendChild(check);
    const newp = document.createElement("p");
    newp.classList.add("todoText");
    newp.textContent = todo;
    newTodo.appendChild(newp);
    items.appendChild(newTodo);
    const iconCross = document.createElement("div");
    iconCross.classList.add("iconCross");
    iconCross.addEventListener("click", (e) => {
      todos.pop();
      newTodo.remove();
      console.log(todos);
    });
    newTodo.appendChild(iconCross);
  });
}
createTodos(todos);
