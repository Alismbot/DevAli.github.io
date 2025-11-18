// socialButtons.js
// هذا الملف يحتوي على جميع أزرار السوشيال مع أيقوناتها
// يمكن استدعاؤه في أي صفحة بسهولة

function getSocialButtonsHTML() {
    return `
        <div class="social-buttons">

            <a class="social-btn" href="https://t.me/WAMOD17" target="_blank">
                <img src="icons/telegram.png" alt="Telegram">
                قناة التلجرام الرسمية
            </a>

            <a class="social-btn" href="https://whatsapp.com/channel/0029Vb71THB0bIdswhCzVJ0f" target="_blank">
                <img src="icons/whatsapp.png" alt="WhatsApp">
                قناة واتساب الرسمية
            </a>

            <a class="social-btn" href="https://youtube.com/@newsportintern2831" target="_blank">
                <img src="icons/youtube.png" alt="YouTube">
                قناة اليوتيوب
            </a>

        </div>
    `;
}
