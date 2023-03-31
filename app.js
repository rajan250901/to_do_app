var taskinput=document.querySelector(".todo-input");
var buttonty=document.querySelector(".todo-button");
var add=document.querySelector(".todo-list");
var str=document.querySelector(".todo-container");
function addtask(e)
{
    e.preventDefault();
    var li=document.createElement('li');
    li.innerHTML = taskinput.value;
    li.innerHTML += '<button class="complete">Complete</button> <button class="delete">Delete</button>';
    add.appendChild(li);
    taskinput.value="";
}
 function completetask(event) {
  if (event.target.className == 'complete') {
    if (event.target.innerHTML == 'Complete') {
      event.target.innerHTML = 'Undo';
    } else {
      event.target.innerHTML = 'Complete';
    }
    var li = event.target.parentNode;
    li.classList.toggle('completed');
  }
}

function deletetask(e)
{
    if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
}

buttonty.addEventListener('click',addtask);
add.addEventListener('click',deletetask);
str.addEventListener('click',completetask)