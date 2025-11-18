// router.js: مسؤول عن تحديد الصفحة المراد عرضها
function getPage() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
}

function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
            loadTexts(page); // تحميل النصوص من JSON
            renderButtons(); // رسم الأزرار
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<p>الصفحة غير موجودة</p>";
        });
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    loadPage(getPage());
});
