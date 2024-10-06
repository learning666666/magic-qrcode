document.getElementById("qrCode").addEventListener("click", function() {
    // 模拟二维码扫描后出现心形图案
    document.getElementById("heart").style.display = "block";
    document.getElementById("heart").style.top = "150px";
    document.getElementById("heart").style.left = "150px";
});

document.getElementById("heart").addEventListener("click", function() {
    // 点击心形后显示照片并隐藏心形
let photo = document.getElementById("photo");
    photo.style.display = "block";
    photo.style.width = "50px";
    photo.style.height = "50px";

    // 照片放大动画效果
    let enlargeInterval = setInterval(function() {
        let width = parseInt(photo.style.width);
        let height = parseInt(photo.style.height);
        if (width < 300) {
            photo.style.width = width + 10 + "px";
            photo.style.height = height + 10 + "px";
        } else {
            clearInterval(enlargeInterval);
        }
    }, 50);
});

document.getElementById("photo").addEventListener("mousedown", function(event) {
    let photo = this;
    let shiftX = event.clientX - photo.getBoundingClientRect().left;
    let shiftY = event.clientY - photo.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        photo.style.left = pageX - shiftX + 'px';
        photo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        // 检查是否超出边界，超出则隐藏
        let photoRect = photo.getBoundingClientRect();
        if (photoRect.right < 0 || photoRect.left > window.innerWidth || photoRect.bottom < 0 || photoRect.top > window.innerHeight) {
            photo.style.display = 'none';
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});

document.getElementById("photo").ondragstart = function() {
    return false;
};
