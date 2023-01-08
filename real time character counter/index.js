const textAreaEl=document.getElementById("textarea");
const totalEl=document.getElementById("total-counter");
const remainingEl=document.getElementById("remaining-counter");
textAreaEl.addEventListener("keydown",()=>{
    updateCounter();
})
updateCounter();
function updateCounter()
{
    totalEl.innerHTML =textAreaEl.value.length;
    remainingEl.innerHTML=textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;
}