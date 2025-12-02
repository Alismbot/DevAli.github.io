const protectedPages = ["dev_settings", "dev_dashboard", "dev_panel"]; 
const DEV_KEY = "SUPER-DEV-KEY-123"; // غيّر المفتاح كما تريد

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    const app = document.getElementById("app");

    // إذا كانت الصفحة محمية
    if (protectedPages.includes(page)) {

        const key = localStorage.getItem("devKey");

        // إذا المفتاح غير موجود → إعادة التوجيه لصفحة تسجيل الدخول
        if (key !== DEV_KEY) {
            window.location.href = "?page=dev_login";
            return;
        }
    }

    try {
        const html = await fetch(`pages/${page}.html`).then(r => r.text());
        app.innerHTML = html;

        // تحميل النصوص إن وجدت
        try {
            const texts = await fetch(`texts/${page}.json`).then(r => r.json());
            applyTexts(texts);
        } catch (_) {}

    } catch (e) {
        app.innerHTML = "<h2>⚠️ الصفحة غير موجودة</h2>";
    }
}

window.onload = loadPage;
