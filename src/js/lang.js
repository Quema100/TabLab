const language = () => {
    const searchBar = document.getElementById('search-bar');
    const todoInput = document.getElementById('todo-input');

    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith('ko')) {
        searchBar.placeholder = '검색어 입력 후 Enter...';
        todoInput.placeholder = '할 일 입력...';
    } else if (userLang.startsWith('en')) {
        searchBar.placeholder = 'Type your search and press Enter...';
        todoInput.placeholder = 'Enter a todo item...';
    } else {
        searchBar.placeholder = 'Type your search and press Enter...';
        todoInput.placeholder = 'Enter a todo item...';
    }
}