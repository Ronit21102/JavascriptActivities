

const taskList = document.getElementById('taskList');
// The input we are writing
const taskInput = document.getElementById('taskInput')

function addTask(){
    

const text = taskInput.value;

// added alert function
if(text ===''){
    alert("You must write Something")
}
else{
taskInput.value=''

const newElement = document.createElement('div')
newElement.innerHTML =`<li class="list-group-item mb-3">${text}</li>`
taskList.appendChild(newElement)
}
 
}

// Added Enter for adding task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        // Call the addTask function on Enter key press
        addTask();
    }
});
const time = document.getElementById("time");

time.innerHTML=`${new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" })}`




