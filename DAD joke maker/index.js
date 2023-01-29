const btnEl=document.getElementById("btn");
const jokeEl=document.querySelector(".joke");
const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options={
    headers: {
        'X-Api-Key': 'vn0+tict9EijY0e9frg/6A==DJPnSA3SylvTLSy2'
      }
}
async function getJoke()
{   jokeEl.innerText="Loading...";
    btnEl.disabled=true;
    btnEl.innerText="Loading...";
    const response=await fetch(apiURL,options);
    const data= await response.json();
    jokeEl.innerText=data[0].joke;
    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke";
}
btnEl.addEventListener("click",getJoke);