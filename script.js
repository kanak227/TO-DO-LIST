let inputbox = document.getElementById('task-bar');
let addbutton = document.getElementById('task-button');
let tasks = document.getElementById('items');
let tasklist = document.getElementsByClassName('tasklist');

function addtask(){
    let task = inputbox.value;
    if(task===""){
        alert("Please enter a task");
    }
    else{
        let item = document.createElement('li');
        item.innerHTML = inputbox.value;
        tasks.appendChild(item);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    }
    inputbox.value = "";
    SaveData()
}

addbutton.addEventListener("click" , addtask);

tasks.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        SaveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        SaveData()
    }
});

function SaveData(){
    localStorage.setItem('data', tasks.innerHTML);
}

function ShowTask(){
    tasks.innerHTML = localStorage.getItem('data');
}
ShowTask();



