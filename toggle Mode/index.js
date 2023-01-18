const inputEl=document.getElementById("input");
const bodyEl=document.querySelector("body");
inputEl.checked=JSON.parse(localStorage.getItem("Mode"));
console.log(localStorage.getItem("Mode"));
console.log(Boolean(localStorage.getItem("Mode")));
updateMode();
inputEl.addEventListener("input",()=>{
    updateMode();
    updateLocalStorage();
    
})
function updateMode(){
if(inputEl.checked){
 bodyEl.style.background="black";
}
else{
    bodyEl.style.background="white";
}
}
function updateLocalStorage(){
    localStorage.setItem("Mode",JSON.stringify(inputEl.checked));
}