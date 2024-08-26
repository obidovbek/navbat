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

})