const btnEl=document.querySelector(".btn");
const videoEl=document.querySelector(".video-container");
const closebtn=document.querySelector(".close-icon");
const video=document.querySelector("video");
btnEl.addEventListener("click",function(){
    videoEl.classList.remove("not-active");
}
)
closebtn.addEventListener("click",function(){
    videoEl.classList.add("not-active");
    video.pause();
    video.currentTime=0;

}
)