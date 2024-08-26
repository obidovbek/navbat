document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    var preloader = document.getElementById("preloader");
    if (preloader) {
        var siteContent = document.getElementById("siteContent");
        preloader.className += "loading";
        setTimeout(function() {
            preloader.className += " loaded";
            setTimeout(function() {
                document.getElementById("main").className += " insight";
            }, 100);
            setTimeout(function() {
                siteContent.className -= "fixed";
                preloader.className -= "loading";
                preloader.style.display = "none";
            }, 1000);
        }, 850);
    }
})

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    autoplay: true,
    autoplaySpeed: 4000,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});