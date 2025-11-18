// loader.js
function loadTexts(page) {
    fetch(`js/texts-${page}.json`)
        .then(res => res.json())
        .then(data => {
            for (const key in data) {
                const el = document.getElementById(key);
                if (el) el.innerHTML = data[key];
            }
        });
}
