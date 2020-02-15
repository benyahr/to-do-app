function onReady() {
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  let title = newToDoText.value;


  toDos.push(title);

  let newLi = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener('click', function(event){
    let buttonLiText = this.parentElement.childNodes[0].textContent;
    toDoList.removeChild(this.parentElement);

    toDos.forEach(function(currentToDo, index) {
      if(currentToDo === buttonLiText){
        toDos.splice(index, 1);
      }
    });
});

  newLi.textContent = title;
  newLi.appendChild(checkbox);
  newLi.appendChild(deleteBtn);
  toDoList.appendChild(newLi);
  newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
