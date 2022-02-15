const elements = document.querySelectorAll(".slide");

const options = {
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry);
        entry.target.classList.toggle("slideAnimation");
    });
}, options);

elements.forEach(element =>{
    observer.observe(element);
});
