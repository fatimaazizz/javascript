const ratingEls=document.querySelectorAll(".rating");
const btnEl=document.querySelector(".btn");
const containerEl=document.querySelector(".container");
let feedBack="";
ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive()
    if(!event.target.classList.contains("rating"))
    event.target.parentNode.classList.add("active");
    if(event.target.classList.contains("rating"))
    {
        event.target.classList.add("active")
    }
    feedBack= event.target.innerText|| event.target.parentNode.innerText;
});
    
})
function removeActive()
{
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}
btnEl.addEventListener("click",()=>{
    if(feedBack!=="")
    {
        containerEl.innerHTML=`
        <strong>Thank You!</strong>
        </br>
        </br>
        <strong>Your Feedback: ${feedBack}</strong>
        <p>We'll  use your Feedback to improve our customer support</p>`
    }
})