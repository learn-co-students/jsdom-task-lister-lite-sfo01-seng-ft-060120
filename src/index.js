document.addEventListener("DOMContentLoaded", () => {
  // your code here	  // your code here
  let tasks = document.getElementById("tasks");
  let form = document.querySelector("form");

  // handlers
  const handleSubmit = function (e) {
    e.preventDefault();
    let description = e.target.name.value;
    buildLi(description);
  };

  const handleDelete = function (e) {
    e.target.parentElement.remove();
  };

  // event listeners
  form.addEventListener("submit", handleSubmit);
  tasks.addEventListener("click", handleDelete);

  // build Li with button

  const buildLi = function (description) {
    let li = document.createElement('li')
    li.innerText = description
    tasks.appendChild(li)
  };
}); 