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




let dropDown = document.querySelectorAll(".currency select");
for (const select of dropDown) {
    console.log("The Supported Countries Are:");
    for (let country in countries) {
        console.log(`${Number(country)+1}) ${countries[country].name}`);
        let option = document.createElement("option");
        option.value = country;
        option.innerText = countries[country].currency.code;
        select.appendChild(option);
        // if () {
            
        // } else {
            
        // }
    }
}