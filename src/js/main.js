const main = () => {
    const todoList = document.getElementById('todo-list');

    document.getElementById('todo-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('todo-input').value.trim()) {
            addTodoElement(document.getElementById('todo-input').value.trim(), todoList);
            document.getElementById('todo-input').value = null;
            saveTodos(todoList);
        }
    });

    document.addEventListener('click', (e) => {
        if (!document.getElementById('search-engine').contains(e.target)) {
            document.getElementById('search-menu').classList.remove('active');
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
    searchengine();
}