async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    const app = document.getElementById("app");

    try {
        const html = await fetch(`pages/${page}.html`).then(r => r.text());
        app.innerHTML = html;

        const texts = await fetch(`texts/${page}.json`).then(r => r.json());
        applyTexts(texts);

    } catch (e) {
        app.innerHTML = "<h2>âš ï¸ Ø§Ù„ØµÙØ­Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©</h2>";
    }
}

loadPage();
