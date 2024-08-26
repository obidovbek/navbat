document.addEventListener("DOMContentLoaded", () => {
    var a = document.getElementById("preloader");
    if (a) {
        var c = document.getElementById("siteContent");
        a.className += "loading", setTimeout(function() { a.className += " loaded", setTimeout(function() { document.getElementById("main").className += " insight" }, 100), setTimeout(function() { c.className -= "fixed", a.className -= "loading", a.style.display = "none" }, 1e3) }, 850)
    }
    let b = document.querySelector(".hamburger"),
        d = document.querySelector("#navbar"),
        e = !1;
    b.addEventListener("click", () => { e ? (b.classList.remove("open"), e = !1, d.style.opacity = 0, d.style.pointerEvents = "none") : (b.classList.add("open"), d.style.opacity = 1, d.style.pointerEvents = "unset", e = !0) })
})