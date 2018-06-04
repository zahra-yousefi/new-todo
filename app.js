var input = document.getElementById('newTask');
var container = document.getElementById('container');
var todoList = [];

function render(todos) {
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        li.textContent = todos[i];
        container.appendChild(li);
    }
}

render(['asdasd','sdasda','asdgsdfg','1232342']);


function addItem() {
    var inputText = input.value;
    todoList.push(inputText);
    var listTag = document.createElement('div');
    var textNode = document.createTextNode(index + '. ' + inputText);
    var TextSpan = document.createElement('span');
    TextSpan.appendChild(textNode);
    listTag.appendChild(TextSpan);
    result.appendChild(listTag);
    input.value = '';
    index++;


    var remove = document.createElement('button');
    remove.textContent = 'delete';
    listTag.appendChild(remove);
    remove.onclick = function () {
        result.removeChild(listTag);
    }


    var done = document.createElement('button');
    done.textContent = 'do';
    listTag.appendChild(done);
    done.onclick = function () {
        if (listTag.style.textDecoration) {
            listTag.style.textDecoration = '';
            done.textContent = 'do';
        } else {
            listTag.style.textDecoration = 'line-through';
            done.textContent = 'undo';
        }

    }

}

