// loader.js
// هذا الملف مسؤول عن تحميل ملفات JSON الخاصة بكل صفحة

async function loadJSON(page) {
    try {
        const response = await fetch(`data/${page}.json`);
        if (!response.ok) {
            throw new Error('فشل تحميل البيانات');
        }
        return await response.json();
    } catch (error) {
        console.error("خطأ في تحميل JSON:", error);
        return { title: "خطأ", description: "تعذر تحميل المحتوى." };
    }
}
