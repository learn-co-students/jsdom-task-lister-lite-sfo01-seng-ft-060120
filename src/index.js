document.addEventListener("DOMContentLoaded", () => {
  // your code here  
  const form = document.getElementById("create-task-form")  

  let toDoUL = document.querySelector('ul')

  const buildLi = function(task){

    let user = document.querySelector('input#user').value
    let li = document.createElement('li')
    li.innerText = `${task} (${user})`
    toDoUL.appendChild(li) 

    let dlte = document.createElement('button')
    dlte.innerText = "x"
    dlte.onclick = function(event) {
      toDoUL.removeChild(li)
    } 
    li.appendChild(dlte)

    switch(document.querySelector('select#priority').value){
      case "1": 
        li.style.color = "red" 
        li.setAttribute("class", "0")
        break
      case "2": 
        li.style.color = "orange"
        li.setAttribute("class", "1")
        break
      case "3":
        li.style.color = "green"
        li.setAttribute("class", "2")
        break
      default: 
        li.style.color = "black"
        li.setAttribute("class", "3")
      }  
    }
  
    const handleSubmit = function(e){
      const taskDescription = document.getElementById("new-task-description")
      e.preventDefault()
      // debugger
      buildLi(taskDescription.value)
    } 
   
    form.addEventListener('submit', handleSubmit)
  
  });
