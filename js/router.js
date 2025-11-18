// router.js
// هذا الملف مسؤول عن التوجيه بين الصفحات

async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    try {
        // استدعاء ملف الصفحة المطلوب
        const module = await import(`./pages/${page}.js`);
        module.render();
    } catch (e) {
        console.error("الصفحة غير موجودة:", e);
        document.getElementById("app").innerHTML = "<h2>❌ الصفحة غير موجودة</h2>";
    }
}

// تحميل الصفحة عند فتح الموقع
window.onload = loadPage;
// تحميل الصفحة عند استخدام زر العودة في المتصفح
window.onpopstate = loadPage;
