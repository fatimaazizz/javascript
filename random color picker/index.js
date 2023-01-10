const containerEl=document.querySelector(".container");
for(let i=0;i<30;i++)
{
    const containerColorEl=document.createElement("div");
    containerColorEl.classList.add("container-color");
    containerEl.append(containerColorEl);
}
randomboxs();
function randomboxs()
{
    const containerColorEls=containerEl.querySelectorAll(".container-color");
    containerColorEls.forEach(
        (containerColorEl)=>
        {const color=getrandomcolor();
            containerColorEl.style.backgroundColor='#'+color;
            containerColorEl.innerText='#'+color;
        }
    )
}
function getrandomcolor()
{
    const colorChar="0123456789abcdef";
    const colorLength=6;
    let radomcolor=''
    for(let i=0;i<colorLength;i++)
    {
        const randomNumber=Math.floor(Math.random()*16);
        radomcolor+=colorChar.substring(randomNumber,randomNumber+1);
    }
    return radomcolor;
}