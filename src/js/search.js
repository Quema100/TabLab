const search = () => {
    const searchBar = document.getElementById('search-bar');
    const toggleButton = document.getElementById('search-toggle');
    const engine = document.getElementById('engine');

    const userLang = navigator.language || navigator.userLanguage;

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchBar.value.trim()) {
            const selectedEngine = toggleButton.dataset.engine;
            const query = encodeURIComponent(searchBar.value.trim());

            const urls = {
                google: `https://www.google.com/search?q=${query}`,
                bing: `https://www.bing.com/search?q=${query}`,
                naver: `https://search.naver.com/search.naver?query=${query}`,
                daum: `https://search.daum.net/search?q=${query}`,
            };

            if (!urls[selectedEngine]) {
                engine.style.opacity = 1;
                engine.textContent = userLang.startsWith('ko') ? '유효한 검색 엔진을 선택하세요.' : 'Please select a valid search engine.';
                return setTimeout(() => {
                    engine.style.opacity = 0;
                    setTimeout(() => {
                        engine.textContent = null;
                        engine.style.opacity = null;
                    }, 2000);
                }, 3000);
            }

            window.location.href = urls[selectedEngine];
        }
    });
}