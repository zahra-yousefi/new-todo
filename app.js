var todoList = getlocalStorage();
render();

function addTodo(text) {
    todoList.push({ text: text, isDeleted: false });
    setLocalStorage(todoList);
    render();
}

function removeTodo(todo) {
    todo.isDeleted = !todo.isDeleted;
    setLocalStorage(todoList);
    render();
}

function doUndoTodo(todo) {
    if (todo.isDeleted) return;
    todo.isDone = !todo.isDone;
    setLocalStorage(todoList);
    render();
}

function doAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        if(!todoList[i].isDeleted){
            todoList[i].isDone = true;
        }
    }
    setLocalStorage(todoList);
    render();
}

function deleteAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        if(!todoList[i].isDone){
            todoList[i].isDeleted = true;
        }
    }
    setLocalStorage(todoList);
    render();
}

function unDeleteAllTodos() {
    for (var i = 0; i < todoList.length; i++) {
        todoList[i].isDeleted = false;
    }
    setLocalStorage(todoList);
    render();
}

function showDeletedTodos() {
    showDeleted = !showDeleted;
    render();
}