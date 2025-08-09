document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#task-input');
    const addButton = document.querySelector('#add-task-btn');
    const taskList = document.querySelector('#task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // Add a task to the list
    function addTask(taskTextFromStorage = null, save = true) {
        // Get and trim the value inside the function
        const taskText = taskTextFromStorage !== null
            ? taskTextFromStorage.trim()
            : taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn') ; // class name

        // Assign onclick event for removal
        removeButton.onclick = () => {
            listItem.remove();
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to li, then li to ul
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field after adding task (only if from input)
        if (taskTextFromStorage === null) {
            taskInput.value = '';
        }
    }

    // Add task on button click
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTask(); // No need to pass value now
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask(); // No need to pass value now
        }
    });

    // Load saved tasks
    loadTasks();
});


