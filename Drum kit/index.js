const kitInstrument=['crash','kick','snare','tom'];
const kitContainer=document.querySelector('.kit-container');
kitInstrument.forEach((kit)=>{
const btnEl=document.createElement('button');
btnEl.classList.add('btn');
btnEl.innerText=kit;
btnEl.style.backgroundImage='url(images/'+kit+'.png)';
kitContainer.append(btnEl);
const audioEl=document.createElement('audio');
audioEl.src='sounds/'+kit+'.mp3';
kitContainer.append(audioEl);
btnEl.addEventListener('click',()=>{
    audioEl.currentTime=0;
    btnEl.style.backgroundSize='110%';
    audioEl.play();
    setTimeout(()=>{
        btnEl.style.backgroundSize='cover';
    },800)
}
)
window.addEventListener('keydown',(event)=>{
if(event.key===kit.slice(0,1))
{   audioEl.currentTime=0;
    audioEl.play();
    btnEl.style.transform='scale(0.9)';
    setTimeout(()=>{
        btnEl.style.transform='scale(1)';
    },800)
}
})

})