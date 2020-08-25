document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.getElementById('tasks') 
let form = document.getElementById('create-task-form')
form.addEventListener('submit', (e) => addToDoList(e))

})

const addToDoList = (e) => {
  e.preventDefault()
  let li = document.createElement('li')
  li.innerText = e.target[0].value
  tasks.appendChild(li)


  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'delete'
  li.appendChild(deleteBtn)
  deleteBtn.addEventListener('click', () => tasks.removeChild(li))
  
  // let editBtn = document.createElement('button') 
  // editBtn.innerText = 'edit'
  // li.appendChild(editBtn)
  // editBtn.addEventListener('click', (e) => editTask(e))
}

// const editTask = (e) => {
//   console.log(e)
// }

// const deleteItem = (e) => {
//   console.log(e) 
//   e.target.parentElement.remove() 

// }

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.