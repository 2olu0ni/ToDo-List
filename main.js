let todo = document.querySelector(".addbtn");
let input = document.querySelector(".inp");
let container = document.querySelector(".todo-box");
let clearItem = document.querySelector(".clr");

todo.addEventListener("click", () => {

if (input.value == "") {
  alert("input new task")
}else {
  let paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  let btn1 = document.createElement("button");
  btn1.innerText = "X";
  btn1.style.marginLeft = "20%";
  paragraph.appendChild(btn1);
  container.appendChild(paragraph);
  input.value = "";

  btn1.addEventListener("click", () => {
    container.removeChild(paragraph)
  })
}
});

clearItem.addEventListener("click", () => {
  const list = container;
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});
