const listElement = document.getElementsByTagName('ul')[0]
const tasks = [{text:'araer'}]

function onLoad() {  
    fetch('http://localhost:3002/todos')  //PARA CONSUMIR OS DADOS DO BACK END
    .then(res => res.json())
    .then(data => data.forEach((item) => addTask(item.text)))
}

function removeTask (index) {
    tasks.splice(index, 1)
    const taskElement = document.querySelector(`#tasks li#item-${index}`)
    listElement.removeChild(taskElement)
}

function addTask (text) {
    
    const total = tasks.push(text)
    const index = total -1
    const taskElement = document.createElement("li")
    const textElement = document.createElement("span")
    const btnElement = document.createElement("button")
    
    taskElement.setAttribute("id", `item-${index}`)

    btnElement.onclick = () => removeTask(index)

    taskElement.appendChild(textElement)
    taskElement.appendChild(btnElement)
    textElement.innerHTML = text
    btnElement.innerHTML = "Remove"

    listElement.appendChild(taskElement)
}



const btnElement = document.querySelector("#form button")
const inputElement = document.querySelector("#form input")

btnElement.onclick = () => {
    if (inputElement.value) {
        addTask(inputElement.value)
        inputElement.value= ""
        console.log(tasks)
    }
}

window.onload = onLoad