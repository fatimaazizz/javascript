const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const sec=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");
function setTime()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="Am"
    console.log("here"+h);
    if(h>13)
    {
        h=h-12;
        ampm="Pm";
    }
    h=(h==0)?12:h;
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    hour.innerText=h;
    minute.innerHTML=m;
    sec.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{setTime()},1000);
}
setTime();