const inputBox = document.getElementById('input');
const listContainer = document.getElementById('listContainer');

inputBox.addEventListener('keydown' , (event) => {
    if (event.key === 'Enter') {
        addTask(inputBox.value);
        inputBox.value = "";
    }
});

function addTask(value , completed = false) {
    const task = {value, completed};
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    setTasksFromLocalStorage(tasks);
    drawToDo(task);
}

function drawToDo(value) {

    
    if (value === '') {
    
    } else {

        let li = document.createElement("li");
        console.log(value)
        let listContent = document.createElement("label");
        listContent.innerHTML = value.value;
        
        let button = document.createElement("button");
        let span = document.createElement("span");
        span.innerHTML = "X";

        listContainer.appendChild(li);
        li.appendChild(button);
        li.appendChild(listContent);
        li.appendChild(span);
        

    listContent.addEventListener('click', function (li) { 
        console.log("label clicked")
        value.completed = !value.completed;
        updateTasksFromLocalStorage(value);
        li.target.classList.toggle("clicked");
        button.classList.toggle("clicked");

    }); 

    button.addEventListener('click', function(button) {
        console.log("button clicked")
        value.completed = !value.completed;
        updateTasksFromLocalStorage(value);
        button.target.classList.toggle("clicked");
        listContent.classList.toggle("clicked");
    }); 

    if (value.completed) {
        button.classList.add('clicked');
        listContent.classList.add('clicked');
    }

    span.addEventListener('click',  function(event) {
        console.log("span clicked")
        event.stopPropagation();

       // toDo -- remove element from localStorage
        removeTasksFromLocalStorage(value.value);

        listContainer.removeChild(li);
    });
    }
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
};

function setTasksFromLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function updateTasksFromLocalStorage (updatedTask) {
    const tasks = getTasksFromLocalStorage();
    const taskIndex = tasks.findIndex(task => task.value === updatedTask.value);
    if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask;
    }
    setTasksFromLocalStorage(tasks);
};

function removeTasksFromLocalStorage(taskValue) {
    const tasks = getTasksFromLocalStorage();
    const filteredTasks = tasks.filter(task => task.value !== taskValue);
    setTasksFromLocalStorage(filteredTasks);
};

function  loadTasks () {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(element => {
        drawToDo(element);
    });

}

loadTasks();