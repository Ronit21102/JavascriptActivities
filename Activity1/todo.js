

const taskList = document.getElementById('taskList');

function addTask(){
    
// The input we are writing
const taskInput = document.getElementById('taskInput')
const text = taskInput.value;
 
taskInput.value=''

const newElement = document.createElement('div')
newElement.innerHTML =`<li class="list-group-item mb-3">${text}</li>`
taskList.appendChild(newElement)

 
}

const time = document.getElementById("time");

time.innerHTML=`${new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" })}`




