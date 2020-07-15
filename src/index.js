document.addEventListener("DOMContentLoaded", () => {

const buildLi = function(task){
    let li = document.createElement('li')
    li.innerText = task
    guestUL.appendChild(li)
}

let form = document.getElementById('create-task-form')
const handleSubmit = function(e) {
  e.preventDefault()
  console.log ('submit')
  console.log (e.target.desc.value)
  buildLi(e.target.desc.value)
}

form.addEventListener('submit', handleSubmit)

let guestUL = document.querySelector('ul')

let tasks = document.getElementById('tasks')

tasks.forEach(function(task){
  buildLi(task)
})

});