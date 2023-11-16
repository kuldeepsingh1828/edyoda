let isUpdateTodo = false;
let todoId = -1;
let todos = [
    {
        id: 1,
        text: 'Take out trash',
        completed: false
    },
    {
        id: 2,
        text: 'Meeting with boss',
        completed: true
    }];

let ul = document.querySelector('ul');

function showTodos() {
    ul.innerHTML = '';
    todos.forEach(function (todo) {
        let li = document.createElement('li');
        li.id = todo.id;
        let span = document.createElement('span');
        span.innerText = todo.text;
        li.appendChild(span);
        if (!todo.completed) {
            let deleteButton = document.createElement('button');
            let completeButton = document.createElement('button');
            let editButton = document.createElement('button');

            editButton.innerText = 'Edit';
            deleteButton.innerText = 'Delete';
            completeButton.innerText = 'Complete';

            completeButton.addEventListener('click', completeTodo);
            deleteButton.addEventListener('click', deleteTodo);
            editButton.addEventListener('click', editTodo);

            li.appendChild(deleteButton);
            li.appendChild(completeButton);
            li.appendChild(editButton);
        }
        ul.appendChild(li);
    });
}

function addNewTodo() {
    //read content from input field having id todotext
    let todoText = document.getElementById('todotext').value;

    if (isUpdateTodo) {
        todos[todoId - 1].text = todoText;
        isUpdateTodo = false;
    } else {
        //create a new todo object
        let newTodo = {
            id: todos.length + 1,
            text: todoText,
            completed: false
        };

        //add the new todo object to todos array
        todos.push(newTodo);
    }
    document.getElementById('todotext').value = '';
    showTodos();
}

function deleteTodo() {
    let id = this.parentElement.id;
    console.log(id);
    todos.splice(id - 1, 1);
    showTodos();
}

function completeTodo() {
    let id = this.parentElement.id;
    todos[id - 1].completed = true;
    showTodos();
}

function editTodo() {
    isUpdateTodo = true;
    todoId = this.parentElement.id;
    let id = this.parentElement.id;
    let text = todos[id - 1].text;
    console.log(text);
    document.getElementById('todotext').value = text;
}
showTodos();