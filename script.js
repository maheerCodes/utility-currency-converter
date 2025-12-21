//theme changer

let Mode = document.getElementsByClassName("theme-toggle")[0];
let body = document.body;
Mode.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
});








// let URL = "https://api.github.com/users/";



console.log("The Supported Countries Are:");
let dropDown = document.querySelectorAll(".currency select");
for (const select of dropDown) {
    for (let country in countries) {
        console.log(`${Number(country)+1}) ${countries[country].name}`);
        let option = document.createElement("option");
        option.value = country;
        option.innerText = countries[country].currency.code;
        select.appendChild(option);
        if (select.name == "selectFrom" && option.innerText == "USD") {
            option.selected = "selected";
        } else if (select.name == "selectTo" && option.innerText == "BDT") {
            option.selected = "selected";
        }
    }
}