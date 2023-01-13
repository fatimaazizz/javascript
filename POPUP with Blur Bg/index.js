const btnEl=document.querySelector(".btn");
const containerEl=document.querySelector(".container");
const closeEl=document.querySelector(".close-btn");
const popUpEl=document.querySelector(".popup-container ");
btnEl.addEventListener("click",()=>
{
    containerEl.classList.add("blur");
    popUpEl.classList.add("active");
}

)
closeEl.addEventListener("click",()=>
{
    containerEl.classList.remove("blur");
    popUpEl.classList.remove("active");
}

)