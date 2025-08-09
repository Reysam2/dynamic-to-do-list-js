document.addEventListener('DOMContentLoaded', () => {


  // elements
  const taskInput = document.querySelector('#task-input');
  const addButton = document.querySelector('#add-task-btn');
  const taskList = document.querySelector('#task-list');
  let todoArray = JSON.parse(localStorage.getItem('Todos')) || []


  // create li and remove button logic
  function loadTask(taskText) {

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
      taskList.removeChild(listItem);
      todoArray = todoArray.filter((todo) => todo !== taskText);
      localStorage.setItem('Todos', JSON.stringify(todoArray))

    })
  }

  // function that stores to local storage and retrieves data from memory
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please add a task');

      return

    } else {

      loadTask(taskText)
      taskInput.value = "";


      // function that retrieves from memory
      function toMemory() {
        todoArray.push(taskText);

        // changing to json
        let todoListJson = JSON.stringify(todoArray);

        // storing to memory
        localStorage.setItem('Todos', todoListJson);

      }

      toMemory()


    }



  }



  // loops through the restored data and appends to the page
  for (let todo of todoArray) {
    loadTask(todo)

  }



  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    addTask()

  })

  taskInput.addEventListener('keypress', function (event) {

    if (event.key === 'Enter') {
      event.preventDefault();
      addTask()
    }
  })











})