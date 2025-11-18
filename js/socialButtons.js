// =============  إضافة ستايل الأزرار تلقائيًا  =============
const style = document.createElement("style");
style.textContent = `
    .social-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: #00e676;
        padding: 12px 20px;
        margin: 10px 5px;
        border-radius: 12px;
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-size: 17px;
        transition: 0.2s;
    }

    .social-btn:hover {
        opacity: 0.85;
        transform: scale(1.03);
    }

    .social-btn img {
        width: 26px;
        height: 26px;
    }
`;
document.head.appendChild(style);

// =============  روابط التطبيقات  =============
const socialLinks = {
    telegram: "https://t.me/WAMOD17",
    whatsapp: "https://whatsapp.com/channel/0029Vb71THB0bIdswhCzVJ0f",
    youtube: "https://youtube.com/@newsportintern2831?si=ITLiTxA0wY-C1PkB"
};

// =============  دالة لإنشاء زر أي منصة  =============
function createSocialButton(type, label) {
    const btn = document.createElement("a");
    btn.className = "social-btn";
    btn.href = socialLinks[type];
    btn.target = "_blank";

    const icon = document.createElement("img");
    icon.src = `icons/${type}.png`; // تأكد أن الصور داخل مجلد icons/
    
    btn.appendChild(icon);
    btn.appendChild(document.createTextNode(label));

    return btn;
}

// =============  دالة لإضافة جميع الأزرار دفعة واحدة  =============
function injectSocialButtons(containerId) {
    const box = document.getElementById(containerId);
    if (!box) return;

    box.appendChild(createSocialButton("telegram", "قناة التلجرام"));
    box.appendChild(createSocialButton("whatsapp", "قناة واتساب"));
    box.appendChild(createSocialButton("youtube", "قناة اليوتيوب"));
}
