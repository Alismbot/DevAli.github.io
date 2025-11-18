// downloads.js
// صفحة التحميلات

import { loadJSON } from '../loader.js';

export async function render() {
    const data = await loadJSON("downloads");

    document.getElementById("app").innerHTML = `
        <h1>${data.title}</h1>
        <p>${data.description}</p>
    `;
}
