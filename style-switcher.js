const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", (e) => {
    e.preventDefault(); 
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

window.addEventListener("click", () => {
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});