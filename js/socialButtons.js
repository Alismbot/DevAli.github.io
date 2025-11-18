// socialButtons.js: الأزرار مع الأيقونات
function renderButtons() {
    const container = document.getElementById("social-buttons");
    if (!container) return;

    container.innerHTML = `
        <a class="btn" href="https://t.me/WAMOD17">
            <img src="telegram.png" alt="Telegram"> قناة التلجرام الرسمية
        </a>
        <a class="btn" href="https://whatsapp.com/channel/0029Vb71THB0bIdswhCzVJ0f">
            <img src="whatsapp.png" alt="WhatsApp"> قناة واتساب الرسمية
        </a>
        <a class="btn" href="https://youtube.com/@newsportintern2831?si=ITLiTxA0wY-C1PkB">
            <img src="youtube.png" alt="YouTube"> قناة يوتيوب الرسمية
        </a>
    `;

    // تنسيق الأزرار
    document.querySelectorAll(".btn").forEach(btn => {
        btn.style.display = "inline-flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.gap = "10px";
        btn.style.background = "#00e676";
        btn.style.color = "#000";
        btn.style.fontWeight = "bold";
        btn.style.fontSize = "16px";
        btn.style.padding = "10px 15px";
        btn.style.margin = "10px";
        btn.style.borderRadius = "8px";
        btn.style.textDecoration = "none";
    });

    document.querySelectorAll(".btn img").forEach(img => {
        img.style.width = "24px";
        img.style.verticalAlign = "middle";
    });
}
