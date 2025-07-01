const search = () => {
    const searchBar = document.getElementById('search-bar');
    const engineSelect = document.getElementById('search-engine');

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && searchBar.value.trim()) {
            const query = encodeURIComponent(searchBar.value.trim());
            const engine = engineSelect.value;

            let url = null;

            switch (engine) {
                case 'google':
                    url = `https://www.google.com/search?q=${query}`;
                    break;
                case 'bing':
                    url = `https://www.bing.com/search?q=${query}`;
                    break;
                case 'naver':
                    url = `https://search.naver.com/search.naver?query=${query}`;
                    break;
                case 'daum':
                    url = `https://search.daum.net/search?q=${query}`;
                    break;
                default:
                    url = `https://www.google.com/search?q=${query}`;
            }

            window.location.href = url;
        }
    });
}