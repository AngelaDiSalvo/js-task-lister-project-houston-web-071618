document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements

  const createList = document.querySelector('#create-list-form')
  const newListTitle = document.querySelector('#new-list-title')
  const parentList = document.querySelector('#parent-list')
  const taskDesc = document.querySelector('#new-task-description')
  const taskPriority = document.querySelector('#new-task-priority')
  const createNewTask = document.querySelector('#create-task-form')
  const listsDiv = document.querySelector('#lists')

  createList.addEventListener('submit', function(e){
    e.preventDefault()
    let option = document.createElement("option")
    option.innerText = newListTitle.value
    parentList.add(option)
  })


  createNewTask.addEventListener('submit', function(e){
    e.preventDefault()
    let selectedList = parentList.options[parentList.selectedIndex].text;

    if (document.getElementById(selectedList)){

      let myList = document.getElementById(selectedList)
      myList.children[1].innerHTML += `
      <li>
        Task: ${taskDesc.value}
      <button data-list-title='${selectedList}' data-task-name='${taskDesc.value}' class="delete-task">
            X
        </button>
        <br>
        Priority: ${taskPriority.value}
      </li>
      `

    } else {
    listsDiv.innerHTML += `
    <div id='${selectedList}'>
      <h2>${selectedList}
        <button data-title='${selectedList}' class="delete-list">
          X
        </button>
      </h2>
      <ul>
          <li>
          Task: ${taskDesc.value}
          <button data-list-title='${selectedList}' data-task-name='${taskDesc.value}' class="delete-task">
              X
          </button>
          <br>
          Priority: ${taskPriority.value}
        </li>
      </ul>
    </div>
    `

  }
  })

  listsDiv.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target.className == 'delete-task') {
      event.target.parentElement.remove()
    } else if (event.target.className == 'delete-list') {
      event.target.parentElement.parentElement.remove()
    }
  })
});












//
