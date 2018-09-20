function convertTodoToString(todo) {
    return todo.text + ';' + (todo.isDeleted ? '1' : '0') + ';' + (todo.isDone ? '1' : '0');
}

function convertFromString(str) {
    var splitted = str.split(';');
    var todo = {};
    todo.text = splitted[0];
    todo.isDeleted = splitted[1] === '1';
    todo.isDone = splitted[2] === '1';
    return todo;
}


function setLocalStorage(todolist) {
    var stringArray = todolist.map(convertTodoToString);
    localStorage.setItem('list', stringArray);
}


function getlocalStorage() {
    var str = localStorage.getItem('list');
    if (!str) return [];
    var stringArray = str.split(',');
    return stringArray.map(convertFromString);
}