const inputEl=document.getElementById("input");
const meaningContainerEl=document.querySelector(".meaning-container");
const infoText=document.querySelector(".info-text");
const titleEl=document.querySelector(".title");
const meaningEl=document.querySelector(".meaning");
const audioEl=document.querySelector(".audio");
const fetchApi= async function(word){
    try{
        
        infoText.style.display="block";
        meaningContainerEl.style.display="none";
        infoText.innerHTML=`Sreaching the meaning of "${word}"`
    const URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result= await fetch(URL).then(res=>res.json());
   
    if(result.title)
    {
        infoText.style.display="none";
        meaningContainerEl.style.display="block";
        titleEl.innerHTML=word;
    meaningEl.innerHTML=result.title;
    audioEl.style.display="none";
    }
    else
    {
    infoText.style.display="none";
    meaningContainerEl.style.display="block";
    titleEl.innerHTML=result[0].word;
    meaningEl.innerHTML=result[0].meanings[0].definitions[0].definition;
    audioEl.src=result[0].phonetics[0].audio;
    }
    }
    catch(error){
        infoText.style.display="block";
        meaningContainerEl.style.display="none";
        infoText.innerHTML=`Error happened in finding the meaning try it laters`
    }
}
inputEl.addEventListener("keydown",(event)=>{
    if(event.key==="Enter" && event.target.value)
    {fetchApi(event.target.value);}
   
});
