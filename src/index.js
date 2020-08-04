document.addEventListener("DOMContentLoaded", () => {

  // target the form
  const wholeForm = document.querySelector('#create-task-form') // whole form
  const taskUl = document.querySelector('#tasks') //ul

  const listenForCreate = () => {
  wholeForm.addEventListener('submit', function(e){
    e.preventDefault()
    // debugger
  const newTask = document.getElementById('new-task-description').value //our target value
  taskUl.innerHTML += `
  <li>${newTask}

  <button data-action="delete">Delete</button>
  <button data-action="edit">Edit</button>
  </li>`
  // alert('created')
  // reset input
  wholeForm.reset()
    })
  }
  listenForCreate()

  const createOrEdit = () =>{
    if (wholeForm[1].value = 'Create New Task'){
      listenForCreate
    }
    else if(wholeForm[1].value = 'Edit Item') {  
      listenForEdit
      }
  }
  createOrEdit()


const listenForEdit = () => {
  taskUl.addEventListener('click', function(e){
    // console.log(e.target)
    if (e.target.dataset.action === 'delete'){
      e.target.parentNode.remove()
      } else if(e.target.dataset.action === 'edit'){
        wholeForm[0].value = e.target.parentElement.innerText.split(' ')[0]
        wholeForm[1].value = 'Edit Item'
        // debugger 
        wholeForm.addEventListener('submit', function(e){
          // alert('hi')
        })
      }
  })
}
listenForEdit()

});
 
  
