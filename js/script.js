function addElement(){
  var newElement = document.createElement("div");
  newElement.classList.add("list_element");

  var input = document.createElement("input");
  input.classList.add("element_input");
  input.setAttribute("type","text");
    input.setAttribute("name","line");
  input.setAttribute("disabled","disabled");
  input.setAttribute("value",document.getElementById("main_input").value);

  var deleteButton = document.createElement("a");
  deleteButton.classList.add("detete_button");
  deleteButton.setAttribute("onclick","this.parentNode.remove('')");

  var editButton = document.createElement("a");
  editButton.classList.add("edit_button");
  editButton.setAttribute("onclick","edit(this)");

  document.getElementById("listBody").appendChild(newElement);
  newElement.appendChild(input);
  newElement.appendChild(deleteButton);
  newElement.appendChild(editButton);
}
function edit(element){
  var elements = element.parentNode.getElementsByClassName('element_input');
    elements[0].removeAttribute('disabled');
    elements[0].setAttribute("onmouseout", "this.setAttribute('disabled','disabled'); this.parentNode.style.backgroundColor = '#F0F0F0'");
    element.parentNode.style.backgroundColor  = "#F7F7F7";
}
