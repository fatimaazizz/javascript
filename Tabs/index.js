const tabContainer=document.querySelector(".tabs");
const content=document.querySelector(".content-container").children;
const tabs=tabContainer.children;
for(let i=0;i<tabContainer.childElementCount;i++)
{
 tabs[i].addEventListener('click',(event)=>{
    dataValue=(event.target.getAttribute("data-id"));
    showstep(dataValue);
    event.target.classList.add('active')
 });
}
function showstep(dataValue){
   for(let i=0;i<tabContainer.childElementCount;i++)
   {
    tabs[i].classList.remove("active"); 
    content[i].classList.remove("active");
   }
  let targetContent= document.getElementById(dataValue);
  targetContent.classList.add("active");
}
