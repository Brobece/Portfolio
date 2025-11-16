window.addEventListener("scroll", function(){{
    let header = document.querySelector(".navBar");
    header.classList.toggle("sticky", window.scrollY > 60);
}})