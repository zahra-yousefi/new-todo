var input = document.getElementById('newTask');
var todoListContainer = document.getElementById('todoListcontainer');
var showDeletedButton = document.getElementById('ShowDeleted');
var doAllTodoButton = document.getElementById('doAllTodo');
var deleteAllTodoButton = document.getElementById('deleteAllTodo');
var unDeleteAllTodoButton = document.getElementById('unDeleteAllTodo');
var noItemMassage = document.getElementById('noItemMassage');
var headTitle = document.getElementById('head-title');
var footer = document.getElementById('footer');
var form = document.getElementById('form');

var index;
var showDeleted = false;
var hasItem;

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
    dIndex = index = 0;
    clearContainer();
    hasItem = false;
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].isDeleted == showDeleted) {
            var li = createTodoElement(todoList[i]);
            todoListContainer.appendChild(li);
            hasItem = true;
        }
    }
    handleStaticButtonsVisibility();
}

function handleStaticButtonsVisibility() {
    if (hasItem) {
        footer.style.display = 'block';
        noItemMassage.style.display = 'none';
    } else {
        footer.style.display = 'none';
        noItemMassage.style.display = 'block';
    }

    if (showDeleted) {
        showDeletedButton.className = 'deleted-list-icon';
        unDeleteAllTodoButton.style.display = 'inline';
        doAllTodoButton.style.display = 'none';
        deleteAllTodoButton.style.display = 'none';
        form.style.display = 'none';
        headTitle.innerText = 'Deleted List';
    } else {
        showDeletedButton.className = 'todo-list-icon';
        unDeleteAllTodoButton.style.display = 'none';
        doAllTodoButton.style.display = 'inline';
        deleteAllTodoButton.style.display = 'inline';
        form.style.display = 'inline';
        headTitle.innerText = 'Todo List';

    }
}


function clearContainer() {
    while (todoListContainer.firstChild) {
        todoListContainer.removeChild(todoListContainer.firstChild);
    }
}

function createTodoElement(todo) {
    index++;
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = index + '. ' + todo.text;
    span.className = todo.isDone ? 'todo-undo-colore' : 'span-input';
    li.className = 'li-task';
    li.appendChild(span);

    if (todo.isDone) {
        li.style.textDecoration = 'line-through';
    }


    var remove = document.createElement('span');
    remove.className = todo.isDeleted ? 'undelete-btn' : 'delete-btn';

    var doUndo = document.createElement('span');
    doUndo.className = (todo.isDone && !todo.isDeleted) ? 'undo-btn' : 'do-btn';

    if (!todo.isDone) {
        li.appendChild(remove);
    }
    remove.onclick = function (e) {
        e.stopPropagation();
        removeTodo(todo);
    };
    if(!todo.isDeleted){
        li.appendChild(doUndo);
    }
    li.onclick = function () { doUndoTodo(todo); };
    return li;
}