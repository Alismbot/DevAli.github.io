async function loadJSON(page) {
    const response = await fetch(`data/${page}.json`);
    return await response.json();
}
