const time = document.getElementById("time");

time.innerHTML=`${new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" })}`


const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList');
const button = document.getElementById("button")




button.addEventListener('click',addTask);
function addTask(){

const text = taskInput.value;

// added alert function
if(text ===''){
    alert("You must write Something")
}
else{
taskInput.value=''

let li = document.createElement('li')
li.innerHTML = text;
taskList.appendChild(li)

li.className = ["list-group-item mb-3 "]

let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        saveData();
}
}

// Added Enter for adding task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        // Call the addTask function on Enter key press
        addTask();
    }
});

taskList.addEventListener("click", (e)=>{

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        saveData();
    }
});


// Saving the data for list retention from refresh

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}


function showTask(){
    const savedData = localStorage.getItem("data")

    if(savedData){
        taskList.innerHTML = savedData
    }
}



window.addEventListener("load",showTask());


