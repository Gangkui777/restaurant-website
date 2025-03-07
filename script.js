document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let index = 0;
    const visibleImages = 3; // 一次展示 3 张
    const totalImages = images.length;

    // 克隆前 3 张图片并添加到最后
    for (let i = 0; i < visibleImages; i++) {
        let clone = images[i].cloneNode(true);
        slider.appendChild(clone);
    }

    function showSlide() {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-index * 300}px)`;

        // 如果滑动到克隆图片（真实最后），瞬间跳回第一张
        if (index >= totalImages) {
            setTimeout(() => {
                slider.style.transition = "none";
                index = 0;
                slider.style.transform = `translateX(0px)`;
            }, 500);
        }
    }

    next.addEventListener("click", function () {
        index++;
        showSlide();
    });

    prev.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = totalImages - visibleImages; // 直接跳回最后一组
            slider.style.transition = "none";
            slider.style.transform = `translateX(${-index * 300}px)`;
        } else {
            showSlide();
        }
    });

    // 自动滑动（可选）
    setInterval(() => {
        index++;
        showSlide();
    }, 3000);
});
