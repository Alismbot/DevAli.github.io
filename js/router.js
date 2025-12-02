const protectedPages = ["_dev_panel"]; // ← اسم الصفحة المحمية

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    // حماية صفحات المطور
    if (protectedPages.includes(page)) {
        let key = localStorage.getItem("devKey");

        if (!key) {
            key = prompt("ادخل مفتاح المطور:");
            if (key !== "SUPER-DEV-KEY-123") { // ← غيّر المفتاح كما تريد
                document.getElementById("app").innerHTML =
                    "<h2>🚫 وصول مرفوض — مفتاح غير صحيح</h2>";
                return;
            }
            localStorage.setItem("devKey", key);
        }
    }

    const app = document.getElementById("app");

    try {
        const html = await fetch(`pages/${page}.html`).then(r => r.text());
        app.innerHTML = html;

        const texts = await fetch(`texts/${page}.json`).then(r => r.json());
        applyTexts(texts);

    } catch (e) {
        app.innerHTML = "<h2>⚠️ الصفحة غير موجودة</h2>";
    }
}

loadPage();
