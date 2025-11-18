async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    try {
        const module = await import(`./pages/${page}.js`);
        module.render();
    } catch (e) {
        document.getElementById("app").innerHTML = "<h2>❌ الصفحة غير موجودة</h2>";
    }
}

window.onload = loadPage;
window.onpopstate = loadPage;
