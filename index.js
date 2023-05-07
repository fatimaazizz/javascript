let containerEl= document.querySelector(".container");
window.addEventListener("load",()=>{
    createProject();
})
function createProject(){
 fetch("./projects.json")
.then(res => res.json())
.then(data => {data.map(project=>{createproject(project)});
for(let i=0;i<3;i++){
    placeholderDiv();
}
});

}
function createproject(project){
   const projectEl= document.createElement("a",target="_blank");
   projectEl.classList.add("project");
   projectEl.href=project.url;
   projectEl.target="_blank";
   const imgEl=document.createElement("img");
   imgEl.src=project.imgSrc;
   imgEl.alt="project img";
   const contentEl=document.createElement("div");
   contentEl.classList.add("content");
   const h2El=document.createElement("h2");
   h2El.classList.add("title");
   h2El.innerHTML=project.title;
   const pEl=document.createElement("p");
   pEl.classList.add("disc");
   pEl.innerHTML=project.disc;
   contentEl.appendChild(h2El);
   contentEl.appendChild(pEl);
   projectEl.appendChild(imgEl);
   projectEl.appendChild(contentEl);
   containerEl.appendChild(projectEl)
   console.log(projectEl);
}

function placeholderDiv(){
    const placeholderEl=document.createElement("div");
    placeholderEl.classList.add("placeholder_project");
    containerEl.appendChild(placeholderEl);
}