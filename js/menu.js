const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu")
burger.addEventListener("click", () => {
    console.log("open");
    openCloseNav();
});

const openCloseNav = () => {
    menu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
    burger.classList.toggle("open");

    Array.from(document.querySelectorAll(".menu-item")).forEach(element => {

        console.log(element);

        element.addEventListener("click", () => {
            openCloseNav();
        });
    })
}

