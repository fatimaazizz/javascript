const containerEl=document.querySelector(".container");
const careers=["Artist","Freelancer","Web developer","Youtuber","Instructor"]
containerEl.innerHTML=`<h1>I am a ${careers[0]}</h1> `;
console.log(containerEl);
let career=0;
let careerAlphCount=0;
let showText='';
updateCareer();

function updateCareer()
{
    showText=showText+careers[career][careerAlphCount];
    containerEl.innerHTML=`<h1>I am ${careers[career][0]==="I"||careers[career][0]==="A"?'an':'a'} ${showText}</h1> `;
    console.log(careerAlphCount);
    careerAlphCount++;
    if(careerAlphCount===careers[career].length)
    {
        career++;
        careerAlphCount=0;
        showText='';
    }
    if(career===careers.length){
        career=0;
        
    }
    setTimeout(updateCareer,500);
}

