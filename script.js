document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let index = 0;
    const visibleImages = 3;
    const totalImages = images.length;

    for (let i = 0; i < visibleImages; i++) {
        let clone = images[i].cloneNode(true);
        slider.appendChild(clone);
    }

    function showSlide() {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-index * 300}px)`;

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
            index = totalImages - visibleImages;
            slider.style.transition = "none";
            slider.style.transform = `translateX(${-index * 300}px)`;
        } else {
            showSlide();
        }
    });

    setInterval(() => {
        index++;
        showSlide();
    }, 3000);
});
