document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("apps-container");

    window.APPS.forEach(app => {
        const box = document.createElement("div");
        box.className = "app-box";

        box.innerHTML = `
            <a href="../data/${app.page}">
                <img 
                    src="../${app.image}" 
                    class="big-app-image"
                    onerror="this.replaceWith(document.createTextNode('WAGB'));"
                >
            </a>

            <p class="app-desc">${app.desc}</p>
        `;

        container.appendChild(box);
    });
});
