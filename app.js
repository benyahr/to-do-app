function onReady() {
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
}
    // get the text
   let title = newToDoText.value;


   toDos.push(title);

   // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener('click', function(event) {
  let buttonLitext = this.parentElement.childNodes[0].textContent;
  toDoList.removeChild(this.parentElement);
});
  toDos.forEach(function(currentToDo, index) {
    //console.log(currentToDo, index);
    if(currentToDo === buttonLitext){
      toDos.splice(index, 1);
    }
  });
});
   // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

newLi.appendChild(deleteBtn);

   // attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
