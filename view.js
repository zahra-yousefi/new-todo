var input = document.getElementById('newTask');
var container = document.getElementById('todoListcontainer');
var index = 1;

function addItem() {
    var inputText = input.value;
    if (!inputText) {
        return;
    }
    input.value = '';
    input.focus();
    addTodo(inputText);
}

function render() {
    index = 1;

    clearContainer();
    for (var i = 0; i < todoList.length; i++) {
        var li = createTodoElement(todoList[i]);
        container.appendChild(li);
    }
}

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createTodoElement(todo) {
    var li = document.createElement('li');
    li.className = 'li-task';
    var span = document.createElement('span');
    span.className = todo.isDone ? 'todo-undo-colore' : 'span-input';
    span.textContent = index + '. ' + todo.text;
    index++;
    li.appendChild(span);

    if (todo.isDone) {
        li.style.textDecoration = 'line-through';
    }


    var remove = document.createElement('span');
    remove.className = 'delete-btn';

    var doUndo = document.createElement('span');
    doUndo.className = todo.isDone ? 'undo-btn' : 'do-btn';

    li.appendChild(remove);
    remove.onclick = function () { removeTodo(todo); };
    li.appendChild(doUndo);
    li.onclick = function () { doUndoTodo(todo); };
    return li;
}