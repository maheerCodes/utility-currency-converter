let Mode = document.getElementsByClassName("theme-toggle")[0];
let body = document.body;
Mode.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
});