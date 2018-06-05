var todoList = [];

function addTodo(text) {
    todoList.push({ text: text });
    render();
}

function removeTodo(todo) {
    todoList.splice(todoList.indexOf(todo), 1);
    render();
}

function doUndoTodo(todo) {
    todo.isDone = !todo.isDone;
    render();
}