// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900
    }).add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
    }).add({
        targets: '.ml14',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });

var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 2,
        depth: 120,
        midifier: 1,
        slidesShadow: true,
    },
    loop: true,
    pagination: {
        // el: '.swiper-pagination'
    },
    autoplay: {
        delay: 800,
        disableOnInteraction: true
    },
});

// jquery 
$('.pro-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 800,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        },
    ],
});

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    var preloader = document.getElementById("preloader");
    if (preloader) {
        var siteContent = document.getElementById("siteContent");
        preloader.className += "loading";
        setTimeout(function() {
            preloader.className += " loaded";
            setTimeout(function() {
                if (document.getElementById("main")) {
                    document.getElementById("main").className += " insight";
                }
            }, 100);
            setTimeout(function() {
                if (siteContent) {
                    siteContent.className -= "fixed";
                }
                preloader.className -= "loading";
                preloader.style.display = "none";
            }, 1000);
        }, 850);
    }

    // Hamburger
    const menuBtn = document.querySelector('.hamburger');
    const navbar = document.querySelector('#navbar');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navbar.style.opacity = 1;
            navbar.style.pointerEvents = 'unset';
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            navbar.style.opacity = 0;
            navbar.style.pointerEvents = 'none';
        }
    });

    // Scrolling
    window.addEventListener('scroll', function() {
        let headerr = document.querySelector('#header');
        let windoPosition = window.scrollY > 500;
        headerr.classList.toggle('scrolling-active', windoPosition);
    })

})