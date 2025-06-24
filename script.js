const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim()
  if (task) {
    const li = document.createElement('li')
    li.textContent = task
    li.addEventListener('click', () => {
      li.classList.toggle('done')
    })
    taskList.appendChild(li)
    taskInput.value = ''
  }
})
