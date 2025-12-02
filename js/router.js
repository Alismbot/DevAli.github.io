// الصفحات المحمية
const protectedPages = ["_dev_panel", "dev_settings", "dev_logs"];

// التحقق من كلمة السر
function isDevAuthorized() {
    return localStorage.getItem("devKey") === "SUPER-DEV-KEY-123";
}

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    // حماية الصفحات المغلقة
    if (protectedPages.includes(page) && !isDevAuthorized()) {
        window.location.href = "pages/dev_login.html";
        return;
    }

    const app = document.getElementById("app");

    try {
        const html = await fetch(`pages/${page}.html`).then(r => r.text());
        app.innerHTML = html;

        // تحميل JSON إذا موجود
        try {
            const texts = await fetch(`texts/${page}.json`).then(r => r.json());
            if (typeof applyTexts === "function") applyTexts(texts);
        } catch(e) {}

    } catch (e) {
        app.innerHTML = "<h2>⚠️ الصفحة غير موجودة</h2>";
    }
}

loadPage();
