// router.js
function getPage() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
}

function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
            loadTexts(page);
            renderButtons();
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<p>الصفحة غير موجودة</p>";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadPage(getPage());
});
