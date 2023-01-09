const navbarEl=document.querySelector(".navbar");
const bottomContainrEl=document.querySelector(".bottom-container");
window.addEventListener("scroll",()=>{
 if(window.scrollY>bottomContainrEl.offsetTop-50-navbarEl.offsetHeight){
    navbarEl.classList.add("active");
 }
 else{
    navbarEl.classList.remove("active");
 }
})