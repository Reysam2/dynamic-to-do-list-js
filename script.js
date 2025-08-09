document.addEventListener('DOMContentLoaded', () => {


  // elements
  const taskInput = document.querySelector('#task-input');
  const addButton = document.querySelector('#add-task-btn');
  const taskList = document.querySelector('#task-list');


  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please add a task');

      return

    } else {


      // create li element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // add class to li
      listItem.classList.add('li');
      taskList.appendChild(listItem);


      // create a remove button 
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      // add class to button
      removeButton.classList.add('remove-btn');

      listItem.appendChild(removeButton);

      // add an event to execute upon click
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem)
      })

      taskInput.value = "";



    }



  }


  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    addTask()

  })

  taskInput.addEventListener('keypress', function(event) {

    if (event.key === 'Enter') {
      event.preventDefault();
      addTask()
    }
  })
 










})