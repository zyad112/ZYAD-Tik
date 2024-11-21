// خلفيات متغيرة ديناميكيًا
let backgrounds = ["bg1", "bg2", "bg3"];
let currentBackground = 0;

function changeBackground() {
    backgrounds.forEach((bg, index) => {
        document.getElementById(bg).style.opacity = index === currentBackground ? 1 : 0;
    });
    currentBackground = (currentBackground + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000);

// تحسين أداء الصور
document.getElementById('image-upload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const preview = document.createElement('img');
            preview.src = event.target.result;
            preview.style.maxWidth = '100%';
            document.querySelector('.card').appendChild(preview);
        };
        reader.readAsDataURL(file);
    }
});
