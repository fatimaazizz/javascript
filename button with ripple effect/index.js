const btnEl=document.getElementById("btn");
btnEl.addEventListener("mouseover",(event)=>{
    const  x= event.offsetX;
    const  y= event.offsetY;
    btnEl.style.setProperty("--xPos",x+'px');
    btnEl.style.setProperty("--yPos",y+'px');
})