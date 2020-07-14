document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let todoUL = document.getElementById("tasks");
  let form = document.querySelector("form");

  // handlers
  const handleSubmit = function (e) {
    e.preventDefault();
    let description = e.target.name.value;
    buildLi(description);
    e.target.reset();
  };

  const handleDelete = function (e) {
    e.target.parentElement.remove();
  };

  // event listeners
  form.addEventListener("submit", handleSubmit);
  todoUL.addEventListener("click", handleDelete);

  // build Li with button

  const buildLi = function (item) {
    todoUL.innerHTML += `<li>${item} <button data-description='${item}'>X</button></li>`;
  };
});
