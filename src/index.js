document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  let addUl = document.querySelector('#tasks')

  const buildLi = function(task){
    let li = document.createElement('li')
    li.innerHTML = task
    addUl.appendChild(li)
  }

  const handleSubmit = function(e){
    e.preventDefault()
    buildLi(e.target.querySelector('#new-task-description').value)
  }

  form.addEventListener("submit", handleSubmit);
});
