let input = document.getElementById("in");

let button = document.querySelector(".submit")

let url = "https://jsonplaceholder.typicode.com/todos"
// let Task
let complete;
let incomplete;
let Taskall;
let newTask;

const fetchdata = fetch(url)

fetchdata.then((Response) => {
    let data = Response.json();
    // console.log('formated responce',data);
    return data;
}).then((data) => {
    let Task = data.slice(0, 10)
    // console.log('my Array',Task);
    printTodos(Task)
    return Task;
}).then((Task) => {
    button.addEventListener('click',(e) => {
        e.preventDefault();

        newTask = {
            title: input.value,
            completed: false,
            userId: 1
        }

        console.log(newTask);
        Task.unshift(newTask)
        printTodos(Task)
        input.value = ''
    })

    return Task;


}).then((Task) => {
    complete = Task.filter(el => el.completed === true)
    // console.log("completed Task",complete);
    return Task
}).then((Task) => {
    incomplete = Task.filter(el => el.completed === false)
    // console.log("incompleted Task",incomplete);
    return Task
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

    printTodos(complete)

})


all.addEventListener('click', (Event) => {
    Event.preventDefault();
    printTodos(Taskall)
})


statusIncomplete.addEventListener('click', (event) => {
    event.preventDefault();

    printTodos(incomplete)

})
