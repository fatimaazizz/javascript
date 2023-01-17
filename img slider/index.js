const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const imgContainer=document.querySelector('.image-container');
let CurImage=1;
const images=document.querySelectorAll("img");
nextBtn.addEventListener("click",()=>{
    CurImage++;
    clearTimeout(timeOut);
    updateImages();
});
prevBtn.addEventListener("click",()=>{
    CurImage--;
    clearTimeout(timeOut);
    updateImages();
});
updateImages();
function updateImages(){
    if(CurImage>images.length){
        CurImage=1;
    }
    else if(CurImage===0)
    {
        CurImage=images.length;
    }
    imgContainer.style.transform=`translateX(-${500*(CurImage-1)}px)`;
    timeOut=setTimeout(()=>{
        CurImage++;
        updateImages();
    },3000);
}