var input = document.getElementById('newTask');
var result = document.getElementById('result');
var index = 1;
function addItem() {
    var inputText = input.value;
    var listTag = document.createElement('div');
    var textNode = document.createTextNode(index + '. ' + inputText);
    var spanTag = document.createElement('span');
    spanTag.appendChild(textNode);
    listTag.appendChild(spanTag);
    result.appendChild(listTag);
    input.value = '';
    index++;
}