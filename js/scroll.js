window.onload = () => {
    setTimeout(() => {
        document.querySelector(".scrollDown").classList.add("animate");
    }, 4000)
}

document.querySelector(".scrollDown").addEventListener("click", () => {
    let height = window.innerHeight - 5 * 18 /*5em Header height*/;
    window.scrollTo({
        top: height,
        behavior: "smooth"
    });
});

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top
    };
}

window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(element => {

        //console.log(element.classList, getOffset(element).top, rgba2hex(window.getComputedStyle(element, null).getPropertyValue('background-color')));

        if (getOffset(element).top < 18 * 5 && rgba2hex(window.getComputedStyle(element, null).getPropertyValue('background-color')) == "#111111") {
            document.querySelector(".header").classList.add("dark");
            //console.log("nyy", element.classList, rgba2hex(window.getComputedStyle(element, null).getPropertyValue('background-color')))
        } else if (getOffset(element).top < 18 * 5 && rgba2hex(window.getComputedStyle(element, null).getPropertyValue('background-color')) == "#fffdff") {
            document.querySelector(".header").classList.remove("dark");
        }
    })
});




//Scrollbar

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollbar").style.height = scrolled + "%";
}