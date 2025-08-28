const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");
const pongenc=document.getElementById("pogenc");
const extranav=document.querySelector(".extra-nav");


extranav.addEventListener("mouseover", ()=>{
    pongenc.style.color="black";
});
extranav.addEventListener("mouseleave", ()=>{
    pongenc.style.color="white";
});
menu.addEventListener("click", () => {
    nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
    nav.classList.remove("show");
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
    nav.classList.remove("show");
    });
});