const protectedPages = ["dev_settings", "dev_panel", "stats"];
const DEV_KEY = "SUPER-DEV-KEY-123";

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    const app = document.getElementById("app");

    // صفحة المطور محمية؟
    if (protectedPages.includes(page)) {

        const key = localStorage.getItem("devKey");

        // لا يوجد مفتاح → صفحة تسجيل الدخول
        if (key !== DEV_KEY) {
            window.location.href = "?page=dev_login";
            return;
        }

        // تحميل الصفحات من مجلد private وليس pages
        try {
            const html = await fetch(`private/${page}.html`).then(r => r.text());
            app.innerHTML = html;
            return;

        } catch (e) {
            app.innerHTML = "<h2>⚠️ صفحة المطور غير موجودة</h2>";
            return;
        }
    }

    // الصفحات العادية
    try {
        const html = await fetch(`pages/${page}.html`).then(r => r.text());
        app.innerHTML = html;

    } catch (e) {
        app.innerHTML = "<h2>⚠️ الصفحة غير موجودة</h2>";
    }
}

window.onload = loadPage;
