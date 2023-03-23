const curDate=new Date().getSeconds();
const toggle=document.getElementById("toggle");
const themeEl=document.getElementById("theme");
const sidebar=document.getElementById("Main-aside");
const mainContent=document.getElementById("Main-content");
const bodyEl=document.querySelector("body");
const mainNavEl=document.querySelectorAll(".main_nav_btn");
const mainContnentEl=document.querySelectorAll(".main_content_tab");

console.log(mainNavEl.length);
for (item of mainNavEl) {
item.addEventListener("click",(event)=>{
    const classname=event.target.innerText.toLowerCase().replace(" ","_");
    console.log(classname)
    
    for(content of mainContnentEl){
        if(content.classList.contains(classname))
        {content.classList.add("active");
        }
        else{
            content.classList.remove("active");
        }
    }
    for(content of mainNavEl){
            content.classList.remove("active");
        }
    
    event.target.classList.add("active");

})
  }
toggle.addEventListener("click",()=>{
    let collapsed=toggle.getAttribute("collapsed"); 
    if(collapsed==="true"){
        collapsed="false"
    }else{
        collapsed="true"
    }
    toggle.setAttribute("collapsed",collapsed);
    if(collapsed==="true"){
        sidebar.classList.add("collapsed");
        mainContent.classList.add("fullscreen");
        toggle.innerText=">>"
    }
    else{
        sidebar.classList.remove("collapsed");
        mainContent.classList.remove("fullscreen");
        toggle.innerText="<<"
    }
})
themeEl.addEventListener("click",()=>{
    let theme=themeEl.getAttribute("theme"); 
    if(theme==="Dark"){
        theme="Light"
    }else{
        theme="Dark"
    }
    themeEl.setAttribute("theme",theme);
    if(theme==="Dark"){
        bodyEl.classList.add("dark");
        themeEl.innerText="To Light"
    }
    else{
        bodyEl.classList.remove("dark");
        themeEl.innerText="To Dark"
    }
})
console.log(curDate);
const sideMenu_ul=document.getElementById("sidebar_ul");

console.log(sideMenu_ul);
function randomColorGenerator(){
    let color='#';
    for(let i =0;i<6;i++)
    {
        let number=Math.floor(Math.random()*(15 - 0 + 1) + 0);
        if(number==10)
        {
            number='a';
        }
        else if(number==11)
        {
            number='b';
        }
        if(number==12)
        {
            number='c';
        }
        if(number==13)
        {
            number='d';
        }
        if(number==14)
        {
            number='e';
        }
        if(number==15)
        {
            number='f';
        }
        color+=number;
    }
    return color;
}
function createSidebarItem(i)
{   const color=randomColorGenerator();
    const menuItem=document.createElement("li");
    menuItem.innerHTML=`<span class="image_placeholder" style=background:${color}></span>Menu no. ${i}`;
    menuItem.classList.add("sidebar-item");
    sideMenu_ul.append(menuItem);
}
if(curDate>=0 && curDate<=5)
{
    for(let i=0;i<5;i++)
    {
        createSidebarItem(i+1);
    }
}
else{
    for(let i=0;i<curDate;i++)
    {
        createSidebarItem(i+1);
    }
}
const sidebarMenuItem=document.querySelectorAll(".sidebar-item");
 

for (item of sidebarMenuItem) {
    item.addEventListener("click",(event)=>{   
        
        for(content of sidebarMenuItem){
                content.classList.remove("active");
            }
        event.target.classList.add("active");
    
    })
      }