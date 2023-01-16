const imageContainer=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
    addImages();
});
function addImages()
{
    for(let i=0;i<6;i++)
    {
    const image=document.createElement("img");
    image.src=`https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`
    imageContainer.append(image);
    }
}
