const loadingPage = document.querySelector(".loading-page");

window.addEventListener("load", () => {
    loadingPage.style.opacity = 0;

    setTimeout(() => {
        loadingPage.style.display = "none"
    }, 200);
});