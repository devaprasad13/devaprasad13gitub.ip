const inputBox = document.getElementById("inputtext");                                                                                                                                                                                                                                                                                           
const List = document.getElementById("list");
function AddTask()
{
  if (inputBox.value === '')
  {
    alert("you should write something");
  }
  else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    List.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputBox.value ="";
  saveData();
}

List.addEventListener("click", function(e)
{
  if(e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN")
    {
      e.target.parentElement.remove();
    }
},false);

function saveData()
{
 localStorage.setItem("data",List.innerHTML);
}
function showTask()
{
  List.innerHTML = localStorage.getItem("data");
}
