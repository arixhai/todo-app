const inputBox = document.getElementById('input');
const listContainer = document.getElementById('listContainer');


inputBox.addEventListener('keydown' , function(event) {
    if (event.key === 'Enter') {
        tasks();
    }
});


function tasks() {

    
    if (inputBox.value === '') {
    
    } else {

        let li = document.createElement("li");
        console.log(inputBox.value)
        let listContent = document.createElement("label");
        listContent.innerHTML = inputBox.value;

        let button = document.createElement("button");
        let span = document.createElement("span");
        span.innerHTML = "X";
        
        listContainer.appendChild(li);
        li.appendChild(button);
        li.appendChild(listContent);
        li.appendChild(span);
        
        
        inputBox.value = '';

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
    });
     
    }
}