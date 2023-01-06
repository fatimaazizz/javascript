const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionEl=document.getElementById('qes');
questionEl.innerText=`What is ${num1} multiplied by ${num2}? `;
const correctAns=num1*num2;
const formEl=document.getElementById('form');
const scoreEl=document.getElementById('score');
let score=localStorage.getItem("score");

if(!score)
{
    score=0;
}
scoreEl.innerText=`score: ${score}`;
const ansInput=document.getElementById('input');
formEl.addEventListener('submit',()=>{
    const ans=parseInt(ansInput.value);
    if(ans===correctAns)
    {
        score++;
        updateLocal();
        
        scoreEl.innerText=`score: ${score}`;
    }
    else{
        score--;
        updateLocal();
        scoreEl.innerText=`score: ${score}`;
    }
});
function updateLocal(){
localStorage.setItem("score",score);
}