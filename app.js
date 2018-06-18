var todoList = [];

function addTodo(text) {
    todoList.push({ text: text, isDeleted: false });
    render();
}

function removeTodo(todo) {
    todo.isDeleted = !todo.isDeleted;
    render();
}

function doUndoTodo(todo) {
    if (todo.isDeleted) return;
    todo.isDone = !todo.isDone;
    render();
}

function doAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        if(!todoList[i].isDeleted){
            todoList[i].isDone = true;
        }
    }
    render();
}

function deleteAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        if(!todoList[i].isDone){
            todoList[i].isDeleted = true;
        }
    }
    render();
}

function unDeleteAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        todoList[i].isDeleted = false;
    }
    render();
}

function showDeletedTodos() {
    showDeleted = !showDeleted;
    render();
}