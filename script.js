// PRELOADER
window.addEventListener("load", () => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 400);
});

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
