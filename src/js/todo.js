const loadTodos = () => {
    const todoList = document.getElementById('todo-list');

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.forEach(todo => addTodoElement(todo,todoList));
}

const addTodoElement = (text, todoList) => {
    const li = document.createElement('li');
    li.textContent = text;
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
        li.remove();
        saveTodos(todoList);
    });
    todoList.appendChild(li);
}

const saveTodos = (todoList) => {
    const todos = Array.from(todoList.children).map(li => li.textContent);
    localStorage.setItem('todos', JSON.stringify(todos));
}