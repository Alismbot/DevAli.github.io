function applyTexts(dictionary) {
    for (const key in dictionary) {
        const element = document.querySelector(`[data-text='${key}']`);
        if (element) element.innerHTML = dictionary[key];
    }
}
