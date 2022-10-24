let input = document.getElementById("in");

let button = document.querySelector(".submit")

let url = "https://jsonplaceholder.typicode.com/todos"
// let Task
let complete;
let incomplete;
let Taskall;
let newTask;
let Task;

const fetchdata = fetch(url)

fetchdata.then((Response) => {
    let data = Response.json();
    // console.log('formated responce',data);
    return data;
}).then((data) => {
     Task = data.slice(0, 10)
    // console.log('my Array',Task);
    printTodos(Task)
    return Task;
}).then((Task) => {

    printTodos(Task)
    Taskall = Task
})
// console.log('unformatted',fetchdata);

let todoPage = document.querySelector(".todo-page")
let statusComplete = document.querySelector(".status-complete")
let all = document.querySelector(".all")
let statusIncomplete = document.querySelector(".status-incomplete")

// let result=''

// console.log(button);

function printTodos(Task) {
    let result = ''
    Task.map(el => {
        result += `
            <div class="todo-div">
            <span>${el.title}</span>
            <span>${el.completed}</span>
            </div>
           
            
            `
    })

    todoPage.innerHTML = result
}


statusComplete.addEventListener('click', (event) => {
    event.preventDefault();
    complete = Task.filter(el => el.completed === true)
    printTodos(complete)

})


all.addEventListener('click', (Event) => {
    Event.preventDefault();
    printTodos(Taskall)
})


statusIncomplete.addEventListener('click', (event) => {
    event.preventDefault();
    incomplete = Task.filter(el => el.completed === false)
    printTodos(incomplete)

})


function addData(newTask) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((response) => response.json())
        .then((json) => console.log(json));
}



button.addEventListener('click', (e) => {
    e.preventDefault();

    newTask = {
        title: input.value,
        completed: false,
        userId: 1
    }

    Task.unshift(newTask)
    printTodos(Task)
    input.value = ''
})