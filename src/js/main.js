const main = () => {
    const todoList = document.getElementById('todo-list');

    document.getElementById('todo-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('todo-input').value.trim()) {
            addTodoElement(document.getElementById('todo-input').value.trim(), todoList);
            document.getElementById('todo-input').value = '';
            saveTodos(todoList);
        }
    });
}

window.onload = () => {
    main();
    language();
    updateClock();
    quote();
    loadTodos();
    search();
}