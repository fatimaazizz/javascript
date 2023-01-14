const imageContainer=document.querySelector(".image-container");
const image=document.querySelector(".image-main");
window.addEventListener("scroll",()=>
{
    updateImage();
})
function updateImage(){
    image.style.opacity=1 - window.pageYOffset/900;

}