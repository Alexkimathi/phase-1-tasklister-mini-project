document.addEventListener("DOMContentLoaded", () => {
  // your code here
   let form =document.querySelector('form')
   form.addEventListener('submit', (e) =>{
    e.preventDefault()

    handleToDo(document.querySelector("#new-task-description").value)
    form.reset()
  })
});

function handleToDo(todo){
  console.log(todo)
  let ul= document.createElement('ul')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X'
  ul.textContent = `${todo} `
  ul.appendChild(btn)
  document.querySelector('#tasks').appendChild(ul)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
