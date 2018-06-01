function addItem(){
    
    var inputText = document.getElementById("newTask").value;
    var listTag = document.createElement("listTag");
    var textNode = document.createTextNode(inputText);
    var spanTag = document.createElement("span");
    spanTag.appendChild(textNode);
    listTag.appendChild(spanTag);
    var result = document.getElementById("result");
    result.appendChild(listTag);

}