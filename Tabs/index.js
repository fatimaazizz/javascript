const tabContainer=document.querySelector(".tabs");
console.log(tabContainer.childElementCount,'tabs');
const tabs=tabContainer.children;
for(let i=0;i<tabContainer.childElementCount;i++)
{
 tabs[i].addEventListener('click',(event)=>{
    console.log(event.target);
 });
}