// about.js
// صفحة من نحن

import { loadJSON } from '../loader.js';

export async function render() {
    const data = await loadJSON("about");

    document.getElementById("app").innerHTML = `
        <h1>${data.title}</h1>
        <p>${data.description}</p>
    `;
}
