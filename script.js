const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
}
