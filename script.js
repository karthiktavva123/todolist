document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        
        
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        li.appendChild(taskText);

        
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '✓'; 
        toggleButton.className = 'toggle'; 
        li.appendChild(toggleButton);

        
        toggleButton.addEventListener('click', function() {
            taskText.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = ''; 
    } else {
        alert('Please enter a task!');
    }
});
