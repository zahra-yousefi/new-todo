var input = document.getElementById('newTask');
var result = document.getElementById('result');

var index = 1;
function addItem() {
    var inputText = input.value;
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

