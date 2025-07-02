const searchengine = () => {
    const toggleButton = document.getElementById('search-toggle');
    const menu = document.getElementById('search-menu');

    document.getElementById('search-toggle').addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent;
            toggleButton.dataset.engine = item.dataset.value;
            toggleButton.textContent = `${name}`;
            menu.classList.remove('active');
        });
    });
}