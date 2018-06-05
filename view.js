var input = document.getElementById('newTask');
var container = document.getElementById('container');

function addItem() {
    var inputText = input.value;
    if (!inputText) {
        alert('Please enter a task.');
        return;
    }
    input.value = '';
    addTodo(inputText);
}

function render() {
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
    li.textContent = todo.text;
    if (todo.isDone) {
        li.style.textDecoration = 'line-through';
    }

    var remove = document.createElement('button');
    remove.textContent = 'delete';
    li.appendChild(remove);
    remove.onclick = function () { removeTodo(todo); };

    var doUndo = document.createElement('button');
    doUndo.textContent = todo.isDone ? 'undo' : 'do';
    li.appendChild(doUndo);
    doUndo.onclick = function () { doUndoTodo(todo); };

    return li;
}