const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    }
});