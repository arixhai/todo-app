const inputBox = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

toDoList.forEach(element => {
    drawToDo(element);
});

inputBox.addEventListener('keydown' , (event) => {
    if (event.key === 'Enter') {
        toDoList.push(inputBox.value);
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
        drawToDo(inputBox.value);
        inputBox.value = "";
    }
});
.

function drawToDo(value) {

    
    if (value === '') {
    
    } else {

        let li = document.createElement("li");
        console.log(value)
        let listContent = document.createElement("label");
        listContent.innerHTML = value;

        let button = document.createElement("button");
        let span = document.createElement("span");
        span.innerHTML = "X";
        
        listContainer.appendChild(li);
        li.appendChild(button);
        li.appendChild(listContent);
        li.appendChild(span);


    listContent.addEventListener('click', function (li) { 
        console.log("label clicked")
        li.target.classList.toggle("clicked");
        button.classList.toggle("clicked");
    }); 

    button.addEventListener('click', function(button) {
        console.log("button clicked")
        button.target.classList.toggle("clicked");
        listContent.classList.toggle("clicked");
    }); 

    span.addEventListener('click',  function() {
        console.log("span clicked")
        li.remove();
        // toDo -- remove element from localStorage
        // hello
    });
    }
}